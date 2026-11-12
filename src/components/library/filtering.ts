/* Case library: the filter settings and the rules for which cases match them (port of the old 06-filtering.js).
   Pure functions only, no screen code, so they are easy to test and reuse. */
import { AREA, COURTS, SUB, TOPIC } from '../../lib/taxonomy';
import type { Case } from '../../lib/types';

export type NodeKind = 'area' | 'topic' | 'sub';
/** one place in the topic tree (a whole area, a topic, or a sub-topic) */
export interface TreeNode { k: NodeKind; id: string }
export type Sort = 'topic' | 'az' | 'new' | 'old';
/** the filters that live only in the page (the topic node and the tag live in the web address instead) */
export interface Filters { q: string; paper: string; court: string; key: boolean; sort: Sort }
export const NO_FILTERS: Filters = { q: '', paper: '', court: '', key: false, sort: 'topic' };

/** ?node=area:tort  becomes  { k: 'area', id: 'tort' }; anything that is not a real tree node gives null */
export function parseNode(raw: string | null): TreeNode | null {
  if (!raw) return null;
  const parts = raw.split(':'), k = parts[0], id = parts.slice(1).join(':');
  if ((k === 'area' && AREA[id]) || (k === 'topic' && TOPIC[id]) || (k === 'sub' && SUB[id])) return { k: k as NodeKind, id };
  return null;
}
export const nodeParam = (n: TreeNode) => n.k + ':' + n.id;
/** the tree rows that must be open for this node to be visible */
export function openRowsFor(n: TreeNode): string[] {
  if (n.k === 'area') return [n.id];
  if (n.k === 'topic') return [TOPIC[n.id].a.id, n.id];
  return [SUB[n.id].a.id, SUB[n.id].t.id];
}
export const nodeLabel = (n: TreeNode) => n.k === 'area' ? AREA[n.id].label : n.k === 'topic' ? TOPIC[n.id].a.label + ' › ' + TOPIC[n.id].t.label : SUB[n.id].s.label;
export const courtLabel = (court: string) => COURTS[court] || court;

function match(c: Case, f: Filters, node: TreeNode | null, tag: string, terms: string[]): boolean {
  if (node) {
    if (node.k === 'area' && c.area !== node.id) return false;
    if (node.k === 'topic' && c.topic !== node.id) return false;
    if (node.k === 'sub' && c.sub !== node.id) return false;
  }
  if (f.paper && (AREA[c.area].papers || []).indexOf(f.paper) < 0) return false;
  if (f.court && c.court !== f.court) return false;
  if (f.key && !c.key) return false;
  if (tag && (c.tags || []).indexOf(tag) < 0) return false;
  if (terms.length) {
    const hay = (c.name + ' ' + (c.cite || '') + ' ' + c.year + ' ' + (c.tags || []).join(' ') + ' ' + c.gist + ' ' + c.principle).toLowerCase();
    for (const t of terms) if (hay.indexOf(t) < 0) return false;
  }
  return true;
}
/** "R v Brown" sorts under B, "R (Miller) v ..." under Miller, "Re X" under X */
const sortKey = (n: string) => n.replace(/^R v /, '').replace(/^R \(([^)]+)\) v /, '$1 v ').replace(/^Re /, '');

/** the cases that pass every filter, in the chosen order (all cases arrive already sorted by topic) */
export function filterCases(all: Case[], f: Filters, node: TreeNode | null, tag: string): Case[] {
  const terms = f.q.toLowerCase().split(/\s+/).filter(Boolean);
  const list = all.filter(c => match(c, f, node, tag, terms));
  if (f.sort === 'az') list.sort((a, b) => sortKey(a.name).localeCompare(sortKey(b.name)));
  else if (f.sort === 'new') list.sort((a, b) => b.year - a.year);
  else if (f.sort === 'old') list.sort((a, b) => a.year - b.year);
  return list;
}
