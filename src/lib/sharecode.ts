/* Sharing a whole playlist by link. There is no server, so the link carries the playlist itself, after the # (which browsers never send anywhere):
     <site>/shared#v=1&n=<playlist name>&c=<5 characters per case>
   Each case is a 5-character code worked out from its id. The same function is in tools/validate.js, which stops the build if two cases ever
   get the same code. Keep the two identical, or links already sent out would stop working. */
import type { Data } from './data';
import { siteUrl } from './share';

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
export const MAX_SHARED = 400;
export function codeOf(id: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  h &= 0x3fffffff;
  let s = ''; for (let i = 0; i < 5; i++) { s = B64[h & 63] + s; h >>>= 6; }
  return s;
}
export function playlistLink(name: string, ids: string[]): string {
  const u = new URL(siteUrl('shared'));
  u.hash = 'v=1&n=' + encodeURIComponent(name) + '&c=' + ids.slice(0, MAX_SHARED).map(codeOf).join('');
  return u.href;
}
export interface SharedList { name: string; ids: string[]; missing: number }
/** read a shared link's #hash: the playlist name, the cases we know, and how many codes did not match any case */
export function parseShared(hash: string, data: Data): SharedList {
  const q = new URLSearchParams(hash.replace(/^#/, '')), c = q.get('c') || '', map: Record<string, string> = {}, ids: string[] = [], seen: Record<string, boolean> = {};
  data.cases.forEach(x => { map[codeOf(x.id)] = x.id; });
  let missing = 0;
  for (let i = 0; i + 5 <= c.length && i / 5 < MAX_SHARED; i += 5) {
    const id = map[c.slice(i, i + 5)];
    if (!id) missing++; else if (!seen[id]) { seen[id] = true; ids.push(id); }
  }
  return { name: (q.get('n') || '').replace(/\s+/g, ' ').trim().slice(0, 40) || 'Shared playlist', ids, missing };
}
