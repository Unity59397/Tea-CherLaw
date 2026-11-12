/* The case library: search and filters, the topic tree, "common threads" chips and the list of cases.
   The topic and tag you pick live in the web address (/library?node=sub:...&tag=...), so links from other pages and the back button work. */
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LibraryResults from '../components/library/LibraryResults';
import LibraryTree from '../components/library/LibraryTree';
import { NO_FILTERS, filterCases, nodeLabel, nodeParam, openRowsFor, parseNode, type Filters, type Sort, type TreeNode } from '../components/library/filtering';
import { LibraryShell } from '../components/Shell';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { useStore } from '../lib/store';
import { COURT_ORDER, COURTS, PAPERS } from '../lib/taxonomy';
import { deckStore } from '../state/app';
import { useStartFeed } from '../state/run';

const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');

function LibraryView({ data }: { data: Data }) {
  const [params, setParams] = useSearchParams();
  const node = parseNode(params.get('node')), rawTag = params.get('tag') || '', tag = data.tagCount[rawTag] ? rawTag : '';
  const [f, setF] = useState<Filters>(NO_FILTERS);
  const [exp, setExp] = useState<ReadonlySet<string>>(() => new Set(node ? openRowsFor(node) : []));
  const [side, setSide] = useState(false);
  const deck = useStore(deckStore), startFeed = useStartFeed();
  const list = useMemo(() => filterCases(data.cases, f, node, tag), [data, f, node?.k, node?.id, tag]);   // eslint-disable-line react-hooks/exhaustive-deps
  const courts = COURT_ORDER.filter(c => data.cases.some(x => x.court === c));

  /* picking a topic in the tree (or coming here from a link) opens the rows above it */
  useEffect(() => { if (node) setExp(prev => { const next = new Set(prev); openRowsFor(node).forEach(r => next.add(r)); return next; }); }, [node?.k, node?.id]);   // eslint-disable-line react-hooks/exhaustive-deps
  const setUrl = (n: TreeNode | null, t: string) => {
    const p = new URLSearchParams(); if (n) p.set('node', nodeParam(n)); if (t) p.set('tag', t); setParams(p);
  };
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setF(prev => ({ ...prev, [k]: v }));
  const clearAll = () => { setF({ ...NO_FILTERS, sort: f.sort }); setUrl(null, ''); };
  const toggleRow = (id: string) => setExp(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; });

  const active: [string, string][] = [];
  if (f.q) active.push(['q', '“' + f.q + '”']);
  if (node) active.push(['node', nodeLabel(node)]);
  if (f.paper) active.push(['paper', f.paper]);
  if (f.court) active.push(['court', COURTS[f.court] || f.court]);
  if (f.key) active.push(['key', 'Key cases only']);
  if (tag) active.push(['tag', tag]);
  const remove = (k: string) => {
    if (k === 'q') set('q', ''); else if (k === 'paper') set('paper', ''); else if (k === 'court') set('court', ''); else if (k === 'key') set('key', false);
    else if (k === 'node') setUrl(null, tag); else if (k === 'tag') setUrl(node, '');
  };

  return (
    <div className="wrap lib">
      <h1 className="page-title">Case library</h1>
      <p className="lede">{plural(data.cases.length, 'case')} sorted by area, topic and sub-topic. Search, filter by paper or court, or follow a common thread. Add cases to your deck as you browse, then revise them from the bar at the bottom or from the Revise page. Every case also has its own page, and <Link to="/cases/">all cases are listed on one page</Link>.</p>
      <div className="toolbar" role="search">
        <label className="field grow"><span className="lbl">Search</span><Icon.search /><input id="q" type="search" placeholder="Case name, tag or rule" value={f.q} onChange={e => set('q', e.target.value)} autoComplete="off" /></label>
        <label className="field"><span className="lbl">Paper</span><select id="f-paper" value={f.paper} onChange={e => set('paper', e.target.value)}><option value="">All papers</option>{PAPERS.map(p => <option key={p.n} value={p.n}>{p.n}</option>)}</select></label>
        <label className="field"><span className="lbl">Court</span><select id="f-court" value={f.court} onChange={e => set('court', e.target.value)}><option value="">All courts</option>{courts.map(c => <option key={c} value={c}>{COURTS[c]}</option>)}</select></label>
        <label className="field"><span className="lbl">Sort</span><select id="f-sort" value={f.sort} onChange={e => set('sort', e.target.value as Sort)}><option value="topic">By topic</option><option value="az">A to Z</option><option value="new">Newest first</option><option value="old">Oldest first</option></select></label>
        <label className="check"><input type="checkbox" id="f-key" checked={f.key} onChange={e => set('key', e.target.checked)} /> Key cases only</label>
        <button type="button" className="btn side-toggle" aria-controls="side" aria-expanded={side} onClick={() => setSide(s => !s)}><Icon.filter />Topics</button>
      </div>
      <div className="threads" id="threads">
        {data.topTags.length > 0 && <><span className="lbl">Common threads</span>{data.topTags.map(t => <button key={t} type="button" className="chip" aria-pressed={tag === t} onClick={() => setUrl(node, tag === t ? '' : t)}>{t}</button>)}</>}
      </div>
      <div className="active" id="active">
        {active.map(a => <button key={a[0]} type="button" className="chip" onClick={() => remove(a[0])}>{a[1]}<Icon.close /><span className="sr"> remove filter</span></button>)}
        {active.length > 1 && <button type="button" className="linklike" onClick={clearAll}><u>Clear all</u></button>}
      </div>
      <div className="lib-body">
        <aside className={'side' + (side ? ' open' : '')} id="side" aria-label="Browse by topic">
          <LibraryTree data={data} node={node} exp={exp} onToggle={toggleRow} onAll={() => { setUrl(null, tag); setSide(false); }} onPick={n => { setUrl(n, tag); setSide(false); }} />
        </aside>
        <section id="results" aria-live="polite"><LibraryResults list={list} byTopic={f.sort === 'topic'} onRevise={() => startFeed(list.map(c => c.id))} onClear={clearAll} /></section>
      </div>
      <div className="deckbar" id="deckbar" hidden={deck.length === 0}>
        <span><strong>{plural(deck.length, 'case')}</strong> in your deck</span>
        <span><button type="button" className="btn btn-sm btn-primary" onClick={() => startFeed(data.cases.filter(c => deck.indexOf(c.id) >= 0).map(c => c.id))}>Revise my deck</button> <button type="button" className="btn btn-sm" onClick={() => deckStore.set([])}>Clear</button></span>
      </div>
    </div>
  );
}
export default function Library() {
  const data = useData();
  return data ? <LibraryView data={data} /> : <LibraryShell />;
}
