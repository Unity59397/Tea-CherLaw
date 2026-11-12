/* Share a case (the phone's share sheet where there is one, otherwise copy the link). */
import type { Case } from './types';

export const siteUrl = (path: string) => new URL(import.meta.env.BASE_URL + path.replace(/^\//, ''), location.href).href;
export const caseUrl = (id: string) => siteUrl('cases/' + id);
export function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
  return Promise.resolve(legacyCopy(text));
}
function legacyCopy(text: string): boolean {
  try {
    const t = document.createElement('textarea'); t.value = text; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
    document.body.appendChild(t); t.select(); t.setSelectionRange(0, text.length);
    const ok = document.execCommand('copy'); t.remove(); return ok;
  } catch { return false; }
}
type Toast = (msg: string) => void;
/** open the share sheet for a link, or copy it. `done` is the message after copying. */
export async function shareUrl(o: { title: string; text: string; url: string }, toast: Toast, done = 'Link copied') {
  if (navigator.share) {
    try { await navigator.share(o); return; } catch (e) { if (e && (e as Error).name === 'AbortError') return; }
  }
  if (await copyText(o.url)) toast(done); else toast('Copy this link: ' + o.url);
}
export const shareCase = (c: Pick<Case, 'id' | 'name' | 'year' | 'gist'>, toast: Toast) => shareUrl({ title: c.name + ' (' + c.year + ')', text: c.name + ': ' + c.gist, url: caseUrl(c.id) }, toast);
