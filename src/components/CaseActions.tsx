/* Bookmark, Playlists and Share buttons, used on cards, in the details sheet and on case pages. */
import { Icon } from '../lib/icons';
import { shareCase } from '../lib/share';
import type { Case } from '../lib/types';
import { useIsSaved, useToggleSaved } from '../state/useSaving';
import { useUI } from './UI';

export function BookmarkButton({ id, name, label }: { id: string; name: string; label?: boolean }) {
  const on = useIsSaved(id), toggle = useToggleSaved();
  return label ? (
    <button type="button" className={'btn btn-sm bm' + (on ? ' is-on' : '')} aria-pressed={on} onClick={() => toggle(id)}><Icon.bookmark /><span className="bm-lbl">{on ? 'Saved' : 'Save'}</span></button>
  ) : (
    <button type="button" className={'icon-btn bm' + (on ? ' is-on' : '')} aria-pressed={on} aria-label={'Save ' + name} title="Save" onClick={() => toggle(id)}><Icon.bookmark /></button>
  );
}
export function PlaylistButton({ id }: { id: string }) {
  const { openPicker } = useUI();
  return <button type="button" className="btn btn-sm" onClick={() => openPicker(id)}><Icon.listplus />Playlists</button>;
}
export function ShareButton({ c, label }: { c: Pick<Case, 'id' | 'name' | 'year' | 'gist'>; label?: boolean }) {
  const { toast } = useUI();
  return label ? (
    <button type="button" className="btn btn-sm" onClick={() => shareCase(c, toast)}><Icon.share />Share</button>
  ) : (
    <button type="button" className="icon-btn" aria-label="Share this case" title="Share" onClick={() => shareCase(c, toast)}><Icon.share /></button>
  );
}
