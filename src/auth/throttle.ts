/* A polite brake in the browser: it stops a stuck button or a careless user firing request after request, and it tells people how long to wait.
   It is NOT the security: anyone can skip the website and talk to the server directly. The real limits are Supabase's own (Authentication > Rate Limits,
   Attack Protection) and the database rules in supabase/schema.sql; see docs/ACCOUNTS.md. */
import { AuthError } from './auth-error';

type Hit = number[];
const mem = new Map<string, Hit>();
const KEY = 'tc.rl';
const load = (): Record<string, Hit> => { try { return JSON.parse(sessionStorage.getItem(KEY) || '{}') as Record<string, Hit>; } catch { return {}; } };
const save = (o: Record<string, Hit>) => { try { sessionStorage.setItem(KEY, JSON.stringify(o)); } catch { /* private mode: the in-memory copy still works */ } };
const read = (k: string): Hit => { const m = mem.get(k); if (m) return m; const s = load()[k] || []; mem.set(k, s); return s; };
const write = (k: string, h: Hit) => { mem.set(k, h); const o = load(); o[k] = h; save(o); };

const wait = (ms: number) => { const s = Math.ceil(ms / 1000); return s >= 90 ? Math.ceil(s / 60) + ' minutes' : s + (s === 1 ? ' second' : ' seconds'); };

/** allow at most `max` tries per `windowMs`; when used up, refuse (and say for how long) until the oldest try ages out */
export function limit(name: string, who: string, max: number, windowMs: number, what: string) {
  const k = name + ':' + who.trim().toLowerCase(), now = Date.now(), hits = read(k).filter(t => now - t < windowMs);
  if (hits.length >= max) { write(k, hits); throw new AuthError('rate', 'Too many ' + what + '. Wait ' + wait(hits[0] + windowMs - now) + ' and try again.'); }
  hits.push(now); write(k, hits);
}
/** failed tries only: call `failed()` after a bad attempt and `clear()` after a good one */
export function lockout(name: string, who: string, max: number, windowMs: number) {
  const k = name + ':' + who.trim().toLowerCase();
  return {
    check() { const now = Date.now(), hits = read(k).filter(t => now - t < windowMs); if (hits.length >= max) throw new AuthError('rate', 'Too many wrong attempts. Wait ' + wait(hits[0] + windowMs - now) + ', or reset your password.'); },
    failed() { const now = Date.now(); write(k, read(k).filter(t => now - t < windowMs).concat(now)); },
    clear() { write(k, []); }
  };
}
