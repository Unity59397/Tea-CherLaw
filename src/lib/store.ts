/* Small persisted stores, kept in the browser (localStorage keys start "tc."). The values and keys are the same as the first version of
   the site, so people keep their deck, marks, saved cases and playlists. On the server and during hydration every store reads as its
   starting value, so the page matches the HTML that was prerendered; the real value is read straight after. */
import { useSyncExternalStore } from 'react';

export interface Store<T> { key: string; initial: T; get(): T; set(v: T): void; update(f: (v: T) => T): void; subscribe(f: () => void): () => void; reload(): void }
const registry: Store<any>[] = [];

export function persisted<T>(key: string, initial: T, opts: { session?: boolean; clean?: (v: unknown) => T } = {}): Store<T> {
  let value = initial, loaded = false;
  const subs = new Set<() => void>();
  const area = () => (opts.session ? window.sessionStorage : window.localStorage);
  const read = (): T => {
    try { const raw = area().getItem('tc.' + key); if (raw == null) return initial; const v = JSON.parse(raw); return opts.clean ? opts.clean(v) : (v as T); } catch { return initial; }
  };
  const s: Store<T> = {
    key, initial,
    get() { if (!loaded && typeof window !== 'undefined') { value = read(); loaded = true; } return value; },
    set(v) { value = v; loaded = true; try { if (v === null || v === undefined) area().removeItem('tc.' + key); else area().setItem('tc.' + key, JSON.stringify(v)); } catch { /* storage unavailable */ } subs.forEach(f => f()); },
    update(f) { s.set(f(s.get())); },
    subscribe(f) { subs.add(f); return () => { subs.delete(f); }; },
    reload() { loaded = false; subs.forEach(f => f()); }
  };
  if (!opts.session) registry.push(s);
  return s;
}
export function useStore<T>(s: Store<T>): T { return useSyncExternalStore(s.subscribe, s.get, () => s.initial); }
/** after a hydration the stores' real values are read; this is true once the page is running in the browser */
export const useMounted = () => useSyncExternalStore(() => () => {}, () => true, () => false);

/* another tab changed something: read it again */
if (typeof window !== 'undefined') {
  window.addEventListener('storage', e => { registry.forEach(s => { if (e.key === null || e.key === 'tc.' + s.key) s.reload(); }); });
  window.addEventListener('pageshow', e => { if ((e as PageTransitionEvent).persisted) registry.forEach(s => s.reload()); });
}
