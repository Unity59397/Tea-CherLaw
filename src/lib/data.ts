/* The cases. They are about 480 KB, so the browser only downloads them on pages that need them (library, revise, saved, classrooms).
   Case pages and shell pages work without them: the server writes what they show into the HTML.
   useData() is null on the server and while the file is loading, so every page draws the same thing on the server and on first load. */
import { useEffect, useSyncExternalStore } from 'react';
import type { Case } from './types';
import { SUB, SUBORD } from './taxonomy';

export interface Data {
  cases: Case[]; by: Record<string, Case>;
  node: Record<string, string[]>;                 // 'area:x' | 'topic:x' | 'sub:x' -> case ids, in order
  count: (kind: 'area' | 'topic' | 'sub', id: string) => number;
  tagCount: Record<string, number>; topTags: string[];
}

export function buildData(raw: Case[]): Data {
  const cases = raw.filter(c => SUB[c.sub]).slice().sort((x, y) => (SUBORD[x.sub] - SUBORD[y.sub]) || ((y.key ? 1 : 0) - (x.key ? 1 : 0)) || (x.year - y.year));
  const by: Record<string, Case> = {}, node: Record<string, string[]> = {}, tagCount: Record<string, number> = {};
  const add = (k: string, id: string) => { (node[k] = node[k] || []).push(id); };
  cases.forEach(c => { by[c.id] = c; add('area:' + c.area, c.id); add('topic:' + c.topic, c.id); add('sub:' + c.sub, c.id); (c.tags || []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }); });
  const topTags = Object.keys(tagCount).filter(t => tagCount[t] >= 3).sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b)).slice(0, 14);
  return { cases, by, node, count: (k, id) => (node[k + ':' + id] || []).length, tagCount, topTags };
}

let current: Data | null = null;
let loading: Promise<Data> | null = null;
const subs = new Set<() => void>();
export const getData = () => current;
export function setData(d: Data) { current = d; subs.forEach(f => f()); }
export function loadData(): Promise<Data> {
  if (current) return Promise.resolve(current);
  return loading || (loading = import('../generated/cases.json').then(m => { setData(buildData(m.default as unknown as Case[])); return current as Data; }));
}
/** The cases once they are loaded, otherwise null. Asking for them starts the download. */
export function useData(): Data | null {
  const d = useSyncExternalStore(f => { subs.add(f); return () => { subs.delete(f); }; }, () => current, () => null);
  useEffect(() => { if (!current) void loadData(); }, []);
  return d;
}
