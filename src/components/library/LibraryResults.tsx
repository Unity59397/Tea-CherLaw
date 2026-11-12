/* Case library: the list of matching cases, with the "Revise these N" button, the empty message, and (when sorted by topic) one group per sub-topic. */
import { Fragment } from 'react';
import { SUB } from '../../lib/taxonomy';
import type { Case } from '../../lib/types';
import CaseCard from '../CaseCard';

const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');

export default function LibraryResults({ list, byTopic, onRevise, onClear }: { list: Case[]; byTopic: boolean; onRevise: () => void; onClear: () => void }) {
  const head = (
    <div className="res-head"><p>{plural(list.length, 'case')}</p>{list.length > 0 && <button type="button" className="btn btn-sm btn-primary" onClick={onRevise}>Revise these {list.length}</button>}</div>
  );
  if (!list.length) return <>{head}<div className="empty">No cases match those filters. Try removing one, or <button type="button" className="linklike" onClick={onClear}><u>clear all filters</u></button>.</div></>;
  if (!byTopic) return <>{head}<div className="grid">{list.map(c => <CaseCard key={c.id} c={c} />)}</div></>;
  const groups: { sub: string; items: Case[] }[] = [];
  list.forEach(c => { const last = groups[groups.length - 1]; if (!last || last.sub !== c.sub) groups.push({ sub: c.sub, items: [c] }); else last.items.push(c); });
  return (
    <>
      {head}
      {groups.map(g => {
        const s = SUB[g.sub];
        return (
          <Fragment key={g.sub}>
            <section className="grp"><h2 className="grp-h"><span className="grp-path">{s.a.label} › {s.t.label}</span><span className="grp-t">{s.s.label}</span><span className="n">{g.items.length}</span></h2><div className="grid">{g.items.map(c => <CaseCard key={c.id} c={c} />)}</div></section>
          </Fragment>
        );
      })}
    </>
  );
}
