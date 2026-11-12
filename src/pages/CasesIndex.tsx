/* "All cases": every case on one page, grouped by area, topic and sub-topic. Plain HTML for search engines. */
import { Link } from 'react-router-dom';
import { SUMMARY, TAX } from '../lib/taxonomy';
import type { Case } from '../lib/types';

export interface IndexRow { id: string; name: string; year: number; sub: string }
export const indexRows = (cases: Case[]): IndexRow[] => cases.map(c => ({ id: c.id, name: c.name, year: c.year, sub: c.sub }));

export default function CasesIndex({ rows }: { rows: IndexRow[] }) {
  const bySub: Record<string, IndexRow[]> = {};
  rows.forEach(r => { (bySub[r.sub] = bySub[r.sub] || []).push(r); });
  return (
    <div className="wrap prose cases-index">
      <p className="eyebrow">OCR A Level Law &middot; H418</p>
      <h1 className="page-title">All {SUMMARY.count} cases</h1>
      <p className="lede">Choose a case for a short summary of its facts, what the court held, the rule and why it matters. To revise them as flashcards, use <Link to="/revise">Revise</Link>.</p>
      <p className="idx-jump">{SUMMARY.areas.map(a => <span key={a.id}><Link className="pill" to={'/cases/#area-' + a.id}>{a.label}</Link>{' '}</span>)}</p>
      {SUMMARY.areas.map(s => {
        const a = TAX.find(x => x.id === s.id)!;
        return (
          <section className="idx-area" id={'area-' + a.id} key={a.id}>
            <h2>{a.label} <span className="meta">({s.count} cases{a.papers && a.papers.length ? ', ' + a.papers.join(', ') : ''})</span></h2>
            {a.blurb && <p>{a.blurb}</p>}
            {a.topics.map(t => {
              const subs = t.subs.filter(x => (bySub[x.id] || []).length);
              if (!subs.length) return null;
              return (
                <div key={t.id}>
                  <h3 id={'topic-' + t.id}>{t.label}</h3>
                  {subs.map(x => (
                    <div key={x.id}>
                      <h4 id={'sub-' + x.id}>{x.label}</h4>
                      <ul className="idx-list">{bySub[x.id].slice().sort((p, q) => p.name.localeCompare(q.name)).map(c => <li key={c.id}><Link to={'/cases/' + c.id}><i>{c.name}</i></Link> <span className="meta">{c.year}</span></li>)}</ul>
                    </div>
                  ))}
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
