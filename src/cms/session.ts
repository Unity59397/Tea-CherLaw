/* Who is using the classroom screens, and a "something changed" counter so they re-read from the server.
   WHO is signed in, and their role, come from the real account (src/auth; the role is decided by the database from the school email) and are copied
   in by mirrorAccount(). Nothing about classrooms is stored in the browser: it all lives in Supabase (supabase/classrooms.sql). */
import { useSyncExternalStore } from 'react';
import type { Role, User } from './types';

export const ROLES: Record<Role, string> = { teacher: 'Teacher', student: 'Student', user: 'Regular user' };

interface Mem<T> { initial: T; get(): T; set(v: T): void; subscribe(f: () => void): () => void }
function mem<T>(initial: T): Mem<T> {
  let v = initial; const subs = new Set<() => void>();
  return { initial, get: () => v, set(n) { if (Object.is(n, v)) return; v = n; subs.forEach(f => f()); }, subscribe(f) { subs.add(f); return () => { subs.delete(f); }; } };
}
const use = <T,>(s: Mem<T>): T => useSyncExternalStore(s.subscribe, s.get, () => s.initial);

const meStore = mem<User | null>(null), settledStore = mem(false), versionStore = mem(0);
export const cmsUser = (): User | null => meStore.get();
export const useCmsUser = (): User | null => use(meStore);
/** true once we know who is signed in (or that nobody is); until then the screens show their loading state instead of a "sign in" prompt */
export const useCmsSettled = (): boolean => use(settledStore);
export const useCmsVersion = (): number => use(versionStore);
/** tell the screens something changed (after any change made here, and when coming back to the tab) */
export const bump = () => versionStore.set(versionStore.get() + 1);

/** called by src/auth whenever the real account (or its role) becomes known; null when signed out. `settled` is false while it is still being worked out. */
export function mirrorAccount(a: { id: string; name: string; role: Role } | null, settled = true): void {
  const cur = meStore.get();
  if (!a) meStore.set(null);
  else if (!cur || cur.id !== a.id || cur.name !== a.name || cur.role !== a.role) meStore.set({ id: a.id, name: a.name, role: a.role });
  settledStore.set(settled);
}

/* the first version of the classrooms kept everything in this browser; remove what it left behind */
if (typeof window !== 'undefined') { try { localStorage.removeItem('tc.cms'); localStorage.removeItem('tc.session'); } catch { /* storage unavailable */ } }
