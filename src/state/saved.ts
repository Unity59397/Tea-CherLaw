/* Saved cases and playlists. "Saved" holds every bookmarked case. A playlist is a named group inside Saved, so a case in a playlist is always
   saved too, and un-saving a case takes it out of every playlist. New saves go into the playlist used last (like YouTube Music).
   Keys: tc.saved, tc.lists, tc.lastList. */
import { persisted, useStore } from '../lib/store';
import type { Playlist } from '../lib/types';

const cleanLists = (v: unknown): Playlist[] => (Array.isArray(v) ? v : []).filter(l => l && typeof l.id === 'string' && typeof l.name === 'string').map(l => ({ id: l.id, name: String(l.name).slice(0, 40), ids: Array.isArray(l.ids) ? l.ids.filter((x: unknown) => typeof x === 'string') : [] }));
export const savedStore = persisted<string[]>('saved', [], { clean: v => (Array.isArray(v) ? v.filter(x => typeof x === 'string') : []) });
export const listsStore = persisted<Playlist[]>('lists', [], { clean: cleanLists });
export const lastStore = persisted<string | null>('lastList', null);

export function useSaved() {
  const saved = useStore(savedStore), lists = useStore(listsStore), last = useStore(lastStore);
  return { saved, lists, last, lastList: (last && lists.find(l => l.id === last)) || null };
}
export const isSaved = (id: string) => savedStore.get().indexOf(id) >= 0;
export const getList = (id: string) => listsStore.get().find(l => l.id === id);
export const inList = (l: Playlist, id: string) => l.ids.indexOf(id) >= 0;
export const tidyName = (s: string) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, 40);
export const RESERVED = ['saved', 'all saved'];
export const sameName = (name: string, except?: string) => listsStore.get().find(l => l.id !== except && l.name.toLowerCase() === tidyName(name).toLowerCase());

export function saveCase(id: string) { if (!isSaved(id)) savedStore.set([...savedStore.get(), id]); }
export function unsaveCase(id: string) { savedStore.set(savedStore.get().filter(x => x !== id)); listsStore.set(listsStore.get().map(l => ({ ...l, ids: l.ids.filter(x => x !== id) }))); }
export function setInList(lid: string, id: string, on: boolean) {
  if (on) {
    saveCase(id);
    listsStore.set(listsStore.get().map(l => (l.id === lid && !inList(l, id) ? { ...l, ids: [...l.ids, id] } : l)));
    lastStore.set(lid);
  } else {
    listsStore.set(listsStore.get().map(l => (l.id === lid ? { ...l, ids: l.ids.filter(x => x !== id) } : l)));
    if (lastStore.get() === lid) lastStore.set(null);   // un-ticking a playlist stops it being "the last used one"
  }
}
export function createList(name: string): { err: string } | { list: Playlist } {
  name = tidyName(name);
  if (!name) return { err: 'Type a name for the playlist.' };
  if (RESERVED.indexOf(name.toLowerCase()) >= 0 || sameName(name)) return { err: 'You already have a playlist with that name.' };
  if (listsStore.get().length >= 50) return { err: 'You can have up to 50 playlists.' };
  const list: Playlist = { id: 'l' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), name, ids: [] };
  listsStore.set([...listsStore.get(), list]);
  return { list };
}
export function renameList(id: string, name: string): { err: string } | { ok: true } {
  name = tidyName(name);
  if (!name) return { err: 'Type a name for the playlist.' };
  if (RESERVED.indexOf(name.toLowerCase()) >= 0 || sameName(name, id)) return { err: 'You already have a playlist with that name.' };
  listsStore.set(listsStore.get().map(l => (l.id === id ? { ...l, name } : l)));
  return { ok: true };
}
export function deleteList(id: string) { listsStore.set(listsStore.get().filter(l => l.id !== id)); if (lastStore.get() === id) lastStore.set(null); }
