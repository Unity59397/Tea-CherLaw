/* Everything the site remembers about a visitor, in this browser only. Keys and shapes match the first version of the site. */
import { persisted } from '../lib/store';
import type { Consent, Mark } from '../lib/types';

export const CONSENT_V = 1, CONSENT_MS = 365 * 864e5;
export const deckStore = persisted<string[]>('deck', []);                         // cases chosen on the Revise page
export const statusStore = persisted<Record<string, Mark>>('status', {});         // Got it / Revise again marks
export const modeStore = persisted<'name' | 'scenario'>('mode', 'name', { clean: v => (v === 'scenario' ? 'scenario' : 'name') });
export const shuffleStore = persisted<boolean>('shuffle', false);
export const tipSeenStore = persisted<boolean>('tipSeen', false);
export const themeStore = persisted<'dark' | 'light' | null>('theme', null, { clean: v => (v === 'dark' || v === 'light' ? v : null) });
export const recentStore = persisted<string[]>('recent', []);                     // only kept when the visitor allows "Preferences"
export const consentStore = persisted<Consent | null>('consent', null, {
  clean: v => { const c = v as Consent | null; return c && c.v === CONSENT_V && c.ts && Date.now() - c.ts < CONSENT_MS ? c : null; }
});
/** the cases in the flashcard run that is open now (kept for the tab, so a reload keeps your place) */
export const runStore = persisted<string[] | null>('run', null, { session: true });

export const hasPrefs = (c: Consent | null) => !!(c && c.prefs);
export function saveConsent(prefs: boolean) {
  consentStore.set({ v: CONSENT_V, ts: Date.now(), prefs, ads: false });
  if (!prefs) recentStore.set([]);
}

/* marking a card: other parts of the site (classroom progress) listen for it */
export const markListeners: Array<(id: string, mark: Mark | null) => void> = [];
export function setMark(id: string, s: Mark) {
  const st = { ...statusStore.get() };
  if (st[id] === s) delete st[id]; else st[id] = s;
  statusStore.set(st);
  markListeners.forEach(f => f(id, st[id] || null));
}
export function addRecent(id: string) {
  if (!hasPrefs(consentStore.get())) return;
  recentStore.set([id, ...recentStore.get().filter(x => x !== id)].slice(0, 8));
}

/* the deck: cases chosen on the Library or Revise pages to revise together */
export function toggleDeck(id: string) {
  const d = deckStore.get();
  deckStore.set(d.indexOf(id) >= 0 ? d.filter(x => x !== id) : [...d, id]);
}
