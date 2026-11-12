/* One case as a card (Library, Saved, Shared). Same markup and classes as the first version, so the existing styles apply. */
import { useNavigate } from 'react-router-dom';
import { Icon } from '../lib/icons';
import { useStore } from '../lib/store';
import { courtName } from '../lib/taxonomy';
import type { Case } from '../lib/types';
import { deckStore, toggleDeck } from '../state/app';
import { BookmarkButton, PlaylistButton } from './CaseActions';
import { useUI } from './UI';

export interface CaseCardProps {
  c: Case;
  /** on the Saved page: show Playlists instead of "Add to my deck" */
  saved?: boolean;
  /** viewing a playlist: show a Remove button that calls onRemove */
  inList?: boolean;
  onRemove?: (id: string) => void;
}
export default function CaseCard({ c, saved, inList, onRemove }: CaseCardProps) {
  const { openSheet } = useUI(), navigate = useNavigate(), deck = useStore(deckStore), inDeck = deck.indexOf(c.id) >= 0;
  return (
    <article className="case" data-id={c.id}>
      <div className="case-top"><span className="case-yr">{c.year}</span><span className="case-top-r">{c.key && <span className="key"><Icon.star />Key case</span>}<BookmarkButton id={c.id} name={c.name} /></span></div>
      <h3 className="case-title"><button type="button" className="linklike" onClick={() => openSheet(c.id)}><i>{c.name}</i></button></h3>
      <p className="case-cite">{[c.cite, courtName(c)].filter(Boolean).join(' · ')}</p>
      <p className="case-rule">{c.principle}</p>
      <ul className="tags">{(c.tags || []).map(t => <li key={t}><button type="button" className="chip" onClick={() => navigate('/library?tag=' + encodeURIComponent(t))}>{t}</button></li>)}</ul>
      <div className="case-actions">
        <button type="button" className="btn btn-sm" onClick={() => openSheet(c.id)}><Icon.info />Details</button>
        {saved ? (
          <>
            <PlaylistButton id={c.id} />
            {inList && <button type="button" className="btn btn-sm" title="Remove from this playlist" onClick={() => onRemove?.(c.id)}><Icon.close />Remove</button>}
          </>
        ) : (
          <button type="button" className="btn btn-sm" aria-pressed={inDeck} onClick={() => toggleDeck(c.id)}><Icon.plus /><span className="lbl2">{inDeck ? 'In my deck' : 'Add to my deck'}</span></button>
        )}
      </div>
    </article>
  );
}
