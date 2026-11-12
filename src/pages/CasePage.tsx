/* One case, as plain readable HTML (this is what search engines index). The Save, Playlists and Share buttons are added once the page runs. */
import { Link } from 'react-router-dom';
import { BookmarkButton, PlaylistButton, ShareButton } from '../components/CaseActions';
import { useMounted } from '../lib/store';
import { AREA, SUB, TOPIC, courtName } from '../lib/taxonomy';
import type { Case } from '../lib/types';
import type { Data } from '../lib/data';

export interface Ref { id: string; name: string; year: number }
export interface CasePageData { c: Case; related: Ref[]; more: Ref[] }
const ref = (c: Case): Ref => ({ id: c.id, name: c.name, year: c.year });

/** everything a case page shows, worked out from all the cases (on the server, or in the browser after moving between pages) */
export function casePageData(d: Data, id: string): CasePageData | null {
  const c = d.by[id]; if (!c) return null;
  const related = (c.links || []).filter(x => d.by[x] && x !== c.id);
  const more = (d.node['sub:' + c.sub] || []).filter(x => x !== c.id && related.indexOf(x) < 0).slice(0, 5);
  return { c, related: related.map(x => ref(d.by[x])), more: more.map(x => ref(d.by[x])) };
}
const List = ({ items }: { items: Ref[] }) => (
  <ul>{items.map(r => <li key={r.id}><Link to={'/cases/' + r.id}><i>{r.name}</i></Link> <span className="meta">({r.year})</span></li>)}</ul>
);
export default function CasePage({ data }: { data: CasePageData }) {
  const { c, related, more } = data, mounted = useMounted();
  const S = SUB[c.sub], T = TOPIC[c.topic], A = AREA[c.area];
  const meta = [c.year, courtName(c), c.cite].filter(Boolean).join(' · ');
  return (
    <article className="wrap prose case-page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> <span aria-hidden="true">/</span> <Link to="/cases/">All cases</Link> <span aria-hidden="true">/</span> <Link to={'/cases/#area-' + A.id}>{A.label}</Link> <span aria-hidden="true">/</span> <Link to={'/cases/#sub-' + S.s.id}>{S.s.label}</Link>
      </nav>
      <p className="eyebrow">{A.label} &middot; {T.t.label}</p>
      <h1 className="page-title"><i>{c.name}</i></h1>
      <p className="meta">{meta}{A.papers && A.papers.length ? ' · OCR ' + A.papers.join(', ') : ''}</p>
      {mounted && <div className="case-tools"><BookmarkButton id={c.id} name={c.name} label /><PlaylistButton id={c.id} /><ShareButton c={c} label /></div>}
      <p className="lede">{c.gist}</p>
      <h2>The rule</h2><p>{c.principle}</p>
      <h2>Facts</h2><p>{c.facts}</p>
      <h2>What the court held</h2><p>{c.held}</p>
      <h2>Why it matters</h2><p>{c.significance}</p>
      {c.tags && c.tags.length > 0 && (
        <p className="tagrow"><span className="meta">Common threads:</span> {c.tags.map(t => <span key={t}><Link className="pill" to={'/library?tag=' + encodeURIComponent(t)}>{t}</Link>{' '}</span>)}</p>
      )}
      {related.length > 0 && <><h2>Related cases</h2><List items={related} /></>}
      {more.length > 0 && <><h2>More on {S.s.label.toLowerCase()}</h2><List items={more} /></>}
      <div className="case-cta"><Link className="btn btn-primary" to="/revise">Revise with flashcards</Link> <Link className="btn" to={'/library?node=sub:' + encodeURIComponent(S.s.id)}>See this topic in the library</Link></div>
      <p className="meta">Summaries are written for revision and are not a substitute for the judgment. Check them against your textbook and the OCR specification.</p>
    </article>
  );
}
