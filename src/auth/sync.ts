/* Keeps a signed-in person's revision with their account, so it follows them between devices: the deck, saved cases, playlists (and which one was used last),
   and the Got it / Revise again marks. Signed out, none of this runs and everything stays only in the browser as before.
   - The first time an account is used on a device, what is already here is MERGED with what the account holds (nothing is lost on either side).
   - After that, the latest change wins per item: your changes are sent a couple of seconds after you make them; changes made on another device are picked up
     when you sign in and when you come back to the tab. A change that couldn't be sent (offline) is remembered and sent later.
   - Signing out sends anything waiting, then clears this device's copy (so the next person on a shared computer doesn't see it). It stays in the account.
   Where it goes: public.user_data and public.progress (supabase/classrooms.sql), only reachable through userdata_* and progress_* functions. */
import { persisted } from '../lib/store';
import type { Mark, Playlist } from '../lib/types';
import { deckStore, markListeners, statusStore } from '../state/app';
import { lastStore, listsStore, savedStore } from '../state/saved';
import { loadedClient } from './client';

type Key = 'deck' | 'saved' | 'lists' | 'lastList';
const KEYS: Key[] = ['deck', 'saved', 'lists', 'lastList'];
interface SyncState { uid: string | null; at: Partial<Record<Key, number>>; dirty: Key[]; marks: Record<string, Mark | null> }
const EMPTY: SyncState = { uid: null, at: {}, dirty: [], marks: {} };
const syncStore = persisted<SyncState>('sync', EMPTY, { clean: v => { const s = v as SyncState; return s && typeof s === 'object' && Array.isArray(s.dirty) ? { uid: s.uid || null, at: s.at || {}, dirty: s.dirty.filter(k => KEYS.includes(k)), marks: s.marks || {} } : EMPTY; } });

let active: string | null = null, applying = false, timer: ReturnType<typeof setTimeout> | null = null, lastPull = 0, wired = false, flushing: Promise<boolean> | null = null;

/* ----- cleaning anything that comes from the server (it is only ever shown through React, but the stores should still hold well-formed data) ----- */
const ID = /^[A-Za-z0-9_.-]{1,100}$/;
const strs = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && ID.test(x)).slice(0, 1000) : []);
const lists = (v: unknown): Playlist[] => (Array.isArray(v) ? v : []).filter(l => l && typeof l.id === 'string' && ID.test(l.id) && typeof l.name === 'string').slice(0, 50)
  .map(l => ({ id: l.id as string, name: String(l.name).replace(/[<>\u0000-\u001f]/g, '').slice(0, 40), ids: strs(l.ids) })).filter(l => l.name);

const read = (k: Key): unknown => (k === 'deck' ? deckStore.get() : k === 'saved' ? savedStore.get() : k === 'lists' ? listsStore.get() : lastStore.get());
function write(k: Key, v: unknown) {
  applying = true;
  try { if (k === 'deck') deckStore.set(strs(v)); else if (k === 'saved') savedStore.set(strs(v)); else if (k === 'lists') listsStore.set(lists(v)); else lastStore.set(typeof v === 'string' && ID.test(v) ? v : null); }
  finally { applying = false; }
}
const same = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

/* ----- merging two copies (used the first time, and when both sides changed) ----- */
const union = (a: string[], b: string[]) => a.concat(b.filter(x => a.indexOf(x) < 0));
function merge(k: Key, local: unknown, remote: unknown): unknown {
  if (k === 'deck' || k === 'saved') return union(strs(remote), strs(local));
  if (k === 'lists') {
    const out = lists(remote), loc = lists(local);
    loc.forEach(l => {
      const hit = out.find(r => r.id === l.id) || out.find(r => r.name.toLowerCase() === l.name.toLowerCase());
      if (hit) hit.ids = union(hit.ids, l.ids); else if (out.length < 50) out.push(l);
    });
    return out;
  }
  return local || remote || null;
}

/* ----- talking to the server ----- */
async function call<T>(fn: string, args?: Record<string, unknown>): Promise<T> {
  const sb = loadedClient(); if (!sb) throw new Error('not loaded');
  const { data, error } = await sb.rpc(fn, args); if (error) throw new Error(error.hint || error.message); return data as T;
}
const save = (s: Partial<SyncState>) => syncStore.set({ ...syncStore.get(), ...s });
const markDirty = (k: Key) => { const s = syncStore.get(); if (s.dirty.indexOf(k) < 0) save({ dirty: [...s.dirty, k] }); };
const schedule = (ms = 2000) => { if (timer) clearTimeout(timer); timer = setTimeout(() => { timer = null; void flush(); }, ms); };

/** send everything waiting; resolves true when nothing is left to send */
export function flush(): Promise<boolean> {
  if (flushing) return flushing;
  return (flushing = (async () => {
    if (!active) return true;
    let ok = true;
    for (const k of syncStore.get().dirty.slice()) {
      try { const at = await call<number>('userdata_put', { p_key: k, p_value: read(k) ?? null }); const s = syncStore.get(); save({ at: { ...s.at, [k]: at }, dirty: s.dirty.filter(x => x !== k) }); }
      catch (e) { ok = false; if (/rate|slow down/i.test(String((e as Error).message))) schedule(3000); }
    }
    for (const id of Object.keys(syncStore.get().marks)) {
      const m = syncStore.get().marks[id];
      try { await call('progress_set', { p_case: id, p_s: m }); const s = syncStore.get(), rest = { ...s.marks }; if (rest[id] === m) delete rest[id]; save({ marks: rest }); } catch { ok = false; }
    }
    return ok;
  })().finally(() => { flushing = null; }));
}

async function pull(first: boolean) {
  lastPull = Date.now();
  const [remote, marks] = await Promise.all([call<Record<string, { value: unknown; updatedAt: number }>>('userdata_get'), call<Record<string, { s: Mark; t: number }>>('progress_mine')]);
  let ss = syncStore.get(); const at = { ...ss.at }, dirty = ss.dirty.slice();
  for (const k of KEYS) {
    const r = remote[k], local = read(k), isDirty = dirty.indexOf(k) >= 0;
    if (first) {
      const next = r ? merge(k, local, r.value) : local;
      if (r) at[k] = r.updatedAt;
      if (!same(next, read(k))) write(k, next);
      const empty = next == null || (Array.isArray(next) && next.length === 0);
      if (((!r && !empty) || (r && !same(next, r.value))) && dirty.indexOf(k) < 0) dirty.push(k);
    } else if (r && r.updatedAt > (at[k] || 0)) {
      at[k] = r.updatedAt;
      if (!isDirty) write(k, r.value); else { write(k, merge(k, local, r.value)); }
    }
  }
  save({ uid: active, at, dirty });
  // marks: the account is the source of truth, plus anything not yet sent
  ss = syncStore.get();
  const have: Record<string, Mark> = {}; Object.keys(marks).forEach(id => { have[id] = marks[id].s; });
  if (first) {
    const mine = statusStore.get(), upload: Record<string, Mark> = {};
    Object.keys(mine).forEach(id => { if (!have[id]) { have[id] = mine[id]; upload[id] = mine[id]; } });
    if (Object.keys(upload).length) await call('progress_import', { p_marks: upload }).catch(() => { /* retried next time through the pending list */ });
  }
  Object.keys(ss.marks).forEach(id => { const m = ss.marks[id]; if (m) have[id] = m; else delete have[id]; });
  if (!same(have, statusStore.get())) { applying = true; try { statusStore.set(have); } finally { applying = false; } }
  if (syncStore.get().dirty.length || Object.keys(syncStore.get().marks).length) schedule(500);
}

function wire() {
  if (wired || typeof window === 'undefined') return; wired = true;
  const watch = (k: Key, s: { subscribe(f: () => void): () => void }) => s.subscribe(() => { if (active && !applying) { markDirty(k); schedule(); } });
  watch('deck', deckStore); watch('saved', savedStore); watch('lists', listsStore); watch('lastList', lastStore);
  markListeners.push((id, mark) => { if (!active) return; save({ marks: { ...syncStore.get().marks, [id]: mark } }); schedule(300); });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && active && Date.now() - lastPull > 30_000) void pull(false).catch(() => { /* try again next time */ }); });
}

/** a person is signed in (their profile has loaded) */
export async function startSync(uid: string): Promise<void> {
  if (active === uid) return;
  wire();
  if (syncStore.get().uid && syncStore.get().uid !== uid) clearDevice();   // never carry one person's unsent data into another person's account
  active = uid;
  try { await pull(syncStore.get().uid !== uid); } catch { /* offline: local data keeps working; tries again when the tab is next shown */ }
}
export function stopSync() { active = null; if (timer) { clearTimeout(timer); timer = null; } }

/** forget this device's copy of the account's data (not the account's own copy) */
function clearDevice() {
  applying = true;
  try { deckStore.set([]); savedStore.set([]); listsStore.set([]); lastStore.set(null); statusStore.set({}); } finally { applying = false; }
  syncStore.set(EMPTY);
}
/** signing out: send what's waiting, then clear this device. If something couldn't be sent it stays (and is sent next time that person signs in). */
export async function endSync(): Promise<void> {
  if (timer) { clearTimeout(timer); timer = null; }
  const ok = await flush().catch(() => false);
  active = null;
  if (ok) clearDevice();
}
