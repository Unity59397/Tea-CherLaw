/* The Revise page. First you choose cases (the picker), then you scroll through them one at a time as flashcards (the feed). */
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useUI } from '../components/UI';
import { ReviseShell } from '../components/Shell';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { useStore } from '../lib/store';
import { AREA, PAPERS, SUB, TAX, courtName, crumb, metaLine } from '../lib/taxonomy';
import type { Case } from '../lib/types';
import { deckStore, modeStore, runStore, setMark, shuffleStore, statusStore, tipSeenStore } from '../state/app';

const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');
const reduced = () => typeof window !== 'undefined' && !!window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
function shuffled<T>(a: T[]): T[] { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }

/* ------------------------------------------------------------------ picker ------------------------------------------------------------------ */
function quickIds(data: Data, q: string): string[] {
  if (q === 'all') return data.cases.map(c => c.id);
  if (q === 'key') return data.cases.filter(c => c.key).map(c => c.id);
  if (q.indexOf('p:') === 0) { const p = q.slice(2); return data.cases.filter(c => (AREA[c.area].papers || []).indexOf(p) >= 0).map(c => c.id); }
  return [];
}
function PickRow({ kind, id, label, ids, kids, open, lvl, deck, onToggle, onExpand }: { kind: string; id: string; label: string; ids: string[]; kids: boolean; open: boolean; lvl: number; deck: Set<string>; onToggle: (ids: string[], on: boolean) => void; onExpand: (id: string) => void }) {
  const sel = ids.filter(i => deck.has(i)).length, st = sel === 0 ? 0 : sel === ids.length ? 2 : 1;
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { if (ref.current) ref.current.indeterminate = st === 1; });
  return (
    <div className={'pk-row l' + lvl}>
      <label className="pk-lab"><input ref={ref} type="checkbox" data-k={kind} data-id={id} checked={st === 2} onChange={() => onToggle(ids, st !== 2)} /><span>{label}</span><span className="n">{sel}/{ids.length}</span></label>
      {kids && <button type="button" className={'tcaret' + (open ? ' open' : '')} aria-expanded={open} aria-label={(open ? 'Collapse ' : 'Expand ') + label} onClick={() => onExpand(id)}><Icon.chev /></button>}
    </div>
  );
}
function Picker({ data, onStart }: { data: Data; onStart: (ids: string[]) => void }) {
  const deckArr = useStore(deckStore), mode = useStore(modeStore), shuffle = useStore(shuffleStore);
  const deck = useMemo(() => new Set(deckArr), [deckArr]);
  const [open, setOpen] = useState<Set<string>>(() => new Set()), [q, setQ] = useState('');
  const setIds = (ids: string[], on: boolean) => { const s = new Set(deckArr); ids.forEach(i => (on ? s.add(i) : s.delete(i))); deckStore.set(Array.from(s)); };
  const expand = (id: string) => setOpen(o => { const n = new Set(o); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const quick: Array<[string, string]> = [['all', 'All cases'], ['key', 'Key cases only'], ...PAPERS.map(p => ['p:' + p.n, p.n] as [string, string])];
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const found = terms.length ? data.cases.filter(c => { const hay = (c.name + ' ' + c.year + ' ' + (c.tags || []).join(' ')).toLowerCase(); return terms.every(t => hay.indexOf(t) >= 0); }).slice(0, 40) : [];
  const n = deckArr.length;
  const row = (kind: string, id: string, label: string, kids: boolean, lvl: number) => <PickRow key={kind + id} kind={kind} id={id} label={label} ids={data.node[kind + ':' + id]} kids={kids} open={open.has(id)} lvl={lvl} deck={deck} onToggle={setIds} onExpand={expand} />;
  return (
    <div className="wrap picker">
      <h1 className="page-title">Revise</h1>
      <p className="lede">Choose the cases you want to revise, then scroll through them one at a time. Cases you added to your deck in the Case library are already ticked, so there is only one deck.</p>
      <div className="pk-grid"><div className="pk-main">
        <section className="panel"><h2>Start from</h2><div className="quick" id="quick">{quick.map(([k, label]) => {
          const ids = quickIds(data, k); if (!ids.length) return null;
          const same = ids.length === deck.size && ids.every(i => deck.has(i));
          return <button key={k} type="button" className="btn btn-sm" aria-pressed={same} onClick={() => deckStore.set(ids)}>{label} <span className="n">{ids.length}</span></button>;
        })}</div></section>
        <section className="panel"><h2>Pick by topic</h2><div id="pk-tree">
          {TAX.map(a => data.node['area:' + a.id] && (
            <div className="pk-area" key={a.id}>
              {row('area', a.id, a.label, true, 0)}
              {open.has(a.id) && a.topics.map(t => data.node['topic:' + t.id] && (
                <div key={t.id}>{row('topic', t.id, t.label, true, 1)}
                  {open.has(t.id) && t.subs.map(s => data.node['sub:' + s.id] && row('sub', s.id, s.label, false, 2))}</div>
              ))}
            </div>
          ))}
        </div></section>
        <section className="panel"><h2>Add single cases</h2>
          <input className="pk-search" id="pk-q" type="search" placeholder="Search for a case to add" autoComplete="off" aria-label="Search for a case to add" value={q} onChange={e => setQ(e.target.value)} />
          <div className="pk-res" id="pk-res">{terms.length > 0 && (found.length ? found.map(c => (
            <label className="pk-case" key={c.id}><input type="checkbox" checked={deck.has(c.id)} onChange={e => setIds([c.id], e.target.checked)} /><span><i>{c.name}</i> ({c.year})<small>{SUB[c.sub].s.label}</small></span></label>
          )) : <p className="note">No case matches that search.</p>)}</div>
        </section>
      </div>
      <aside className="panel deck-panel" aria-label="Your deck">
        <div><p className="deck-count" id="pk-count">{n ? <>{plural(n, 'case')}<span>selected for this session</span></> : <>No cases yet<span>Use a quick pick or tick topics</span></>}</p></div>
        <div className="opts">
          <fieldset><legend className="lbl">Card front shows</legend>
            <label><input type="radio" name="mode" value="name" checked={mode === 'name'} onChange={() => modeStore.set('name')} /> Case name</label>
            <label><input type="radio" name="mode" value="scenario" checked={mode === 'scenario'} onChange={() => modeStore.set('scenario')} /> Scenario</label></fieldset>
          <label><input type="checkbox" id="shuffle" checked={shuffle} onChange={e => shuffleStore.set(e.target.checked)} /> Shuffle order</label>
        </div>
        <div className="deck-actions">
          <button type="button" className="btn btn-primary" id="start" disabled={n === 0} onClick={() => onStart(data.cases.filter(c => deck.has(c.id)).map(c => c.id))}>Start revising</button>
          <button type="button" className="btn" onClick={() => deckStore.set([])}>Clear</button>
        </div>
      </aside></div>
    </div>
  );
}

/* ------------------------------------------------------------------ feed ------------------------------------------------------------------ */
function FlashCard({ c, i, N, flipped, mode, onFlip, onMark }: { c: Case; i: number; N: number; flipped: boolean; mode: 'name' | 'scenario'; onFlip: () => void; onMark: (s: 'got' | 'again') => void }) {
  const { openSheet } = useUI(), st = useStore(statusStore)[c.id] || '', nameMode = mode === 'name';
  const tags = (c.tags || []).map(t => <li key={t}><span className="chip">{t}</span></li>);
  return (
    <section className="fc" data-i={i} data-id={c.id} aria-label={'Flashcard ' + (i + 1) + ' of ' + N}><div className="fc-inner">
      <div className="fc-card" data-flipped={flipped} role="button" tabIndex={0} aria-label="Flip card" onClick={onFlip}><div className="fc-flip">
        <div className="fc-face fc-front" aria-hidden={flipped}>
          <p className="fc-crumb">{crumb(c)}</p>
          {nameMode
            ? <><p className="fc-kicker">Recall the rule</p><h2 className="fc-name"><i>{c.name}</i></h2><p className="fc-meta">{c.year} · {courtName(c)}</p><p className="fc-prompt">What happened, and what rule did the court set?</p></>
            : <><p className="fc-kicker">Name the case</p><p className="fc-scenario">{c.gist}</p><p className="fc-prompt">Which case is this, and what rule does it stand for?</p></>}
          <p className="fc-hint"><Icon.flip />Tap to reveal the answer</p>
        </div>
        <div className="fc-face fc-back" aria-hidden={!flipped}>
          <p className="fc-crumb">{crumb(c)}</p>
          <span className="fc-status" data-s={st}>{st === 'got' ? 'Got it' : st === 'again' ? 'Revise again' : ''}</span>
          <h2 className="fc-name sm"><i>{c.name}</i></h2><p className="fc-meta">{metaLine(c)}</p>
          {nameMode && <div><h3 className="fc-h">What happened</h3><p className="fc-story">{c.gist}</p></div>}
          <div><h3 className="fc-h">The rule</h3><p className={'fc-rule' + (nameMode ? '' : ' solo')}>{c.principle}</p></div>
          <ul className="tags">{tags}</ul>
        </div>
      </div></div>
      <div className="fc-actions">
        <button type="button" className="btn btn-primary fc-more" onClick={() => openSheet(c.id)}><Icon.info />More details</button>
        <button type="button" className="btn" onClick={onFlip}><Icon.flip />Flip</button>
        <button type="button" className={'btn ok' + (st === 'got' ? ' on-ok' : '')} onClick={() => onMark('got')}><Icon.check />Got it</button>
        <button type="button" className={'btn again' + (st === 'again' ? ' on-again' : '')} onClick={() => onMark('again')}><Icon.again />Again</button>
      </div>
    </div></section>
  );
}

function Feed({ data, ids, onBack, onRestart }: { data: Data; ids: string[]; onBack: () => void; onRestart: (ids: string[]) => void }) {
  const { sheet, pop } = useUI(), mode = useStore(modeStore), status = useStore(statusStore), tipSeen = useStore(tipSeenStore);
  const N = ids.length, feedRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0), [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const curRef = useRef(0); curRef.current = cur;
  const blocked = useRef(false); blocked.current = !!(sheet || pop);

  /* while flashcards are showing, the page itself does not scroll and the footer shrinks */
  useEffect(() => {
    document.body.classList.add('is-feed'); document.getElementById('footer')?.classList.add('compact');
    return () => { document.body.classList.remove('is-feed'); document.getElementById('footer')?.classList.remove('compact'); };
  }, []);
  /* which card is on screen: the one that is more than 60% visible in the scrolling area */
  useEffect(() => {
    const feed = feedRef.current; if (!feed || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) setCur(+((e.target as HTMLElement).dataset.i || 0)); }); }, { root: feed, threshold: 0.6 });
    feed.querySelectorAll('.fc').forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
  const jump = useCallback((i: number, instant?: boolean) => {
    const feed = feedRef.current; if (!feed) return;
    i = Math.max(0, Math.min(N, i));
    feed.scrollTo({ top: i * feed.clientHeight, behavior: instant || reduced() ? 'auto' : 'smooth' });
  }, [N]);
  const flip = useCallback((id: string) => setFlipped(f => ({ ...f, [id]: !f[id] })), []);
  const mark = useCallback((i: number, s: 'got' | 'again') => {
    const id = ids[i]; if (!id) return;
    setMark(id, s);
    if (statusStore.get()[id]) setTimeout(() => { if (curRef.current === i) jump(i + 1); }, 260);   // a mark moves on to the next card
  }, [ids, jump]);

  /* keyboard: arrows / j k move, Space or Enter flips, G got it, A again, D details */
  const { openSheet } = useUI();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (blocked.current || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement, tn = (t.tagName || '').toLowerCase();
      if (tn === 'input' || tn === 'select' || tn === 'textarea') return;
      const i = curRef.current, onCard = t.classList && t.classList.contains('fc-card'), id = ids[i];
      if (e.key === 'ArrowDown' || e.key === 'j') { e.preventDefault(); jump(i + 1); }
      else if (e.key === 'ArrowUp' || e.key === 'k') { e.preventDefault(); jump(i - 1); }
      else if ((e.key === ' ' || e.key === 'Enter') && (onCard || tn === 'body') && id) { e.preventDefault(); flip(id); }
      else if (e.key === 'd' && id) openSheet(id);
      else if (e.key === 'g' && id) mark(i, 'got');
      else if (e.key === 'a' && id) mark(i, 'again');
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ids, jump, flip, mark, openSheet]);

  const got = ids.filter(i => status[i] === 'got').length, again = ids.filter(i => status[i] === 'again').length;
  return (
    <>
      <div className="feedbar wrap">
        <button type="button" className="btn btn-sm" onClick={onBack}><Icon.back /><span id="back-lbl">Change cases</span></button>
        <div className="prog"><span id="pos">{cur >= N ? 'Done' : (cur + 1) + ' / ' + N}</span><div className="bar"><span id="barfill" style={{ width: (Math.min(cur + 1, N) / N * 100) + '%' }} /></div></div>
        <div className="seg" role="group" aria-label="Card front shows">
          <button type="button" aria-pressed={mode === 'name'} onClick={() => modeStore.set('name')}>Name</button>
          <button type="button" aria-pressed={mode === 'scenario'} onClick={() => modeStore.set('scenario')}>Scenario</button>
        </div>
      </div>
      {!tipSeen && (
        <div className="feed-tip" role="note"><p><strong>Tip:</strong> tap a card to flip it. Swipe up, or press <kbd>&darr;</kbd>, for the next one. <kbd>G</kbd> Got it, <kbd>A</kbd> Again, <kbd>D</kbd> details.</p><button type="button" className="btn btn-sm" onClick={() => tipSeenStore.set(true)}>Dismiss</button></div>
      )}
      <div className="feedwrap">
        <div className="feed" id="feed" tabIndex={-1} ref={feedRef}>
          {ids.map((id, i) => data.by[id] && <FlashCard key={id} c={data.by[id]} i={i} N={N} flipped={!!flipped[id]} mode={mode} onFlip={() => flip(id)} onMark={s => mark(i, s)} />)}
          <section className="fc fc-end" data-i={N} aria-label="End of deck"><div className="fc-inner"><div className="fc-card"><div className="end-box">
            <p className="eyebrow">Deck complete</p><h2>{again ? 'Nearly there' : 'Well done'}</h2>
            <dl className="end-stats"><div><dd>{got}</dd><dt>Got it</dt></div><div><dd>{again}</dd><dt>Revise again</dt></div><div><dd>{N - got - again}</dd><dt>Unmarked</dt></div></dl>
            <div className="end-actions">
              {again > 0 && <button type="button" className="btn btn-primary" onClick={() => onRestart(ids.filter(i => status[i] === 'again'))}>Revise the {again} marked Again</button>}
              <button type="button" className={'btn' + (again ? '' : ' btn-primary')} onClick={() => onRestart(ids)}>Start this deck again</button>
              <button type="button" className="btn" onClick={onBack}>Change cases</button>
            </div>
          </div></div></div></section>
        </div>
        <div className="feed-nav"><button type="button" className="icon-btn" aria-label="Previous card" onClick={() => jump(cur - 1)}><Icon.up /></button><button type="button" className="icon-btn" aria-label="Next card" onClick={() => jump(cur + 1)}><Icon.down /></button></div>
      </div>
    </>
  );
}

function ReviseView({ data }: { data: Data }) {
  const run = useStore(runStore), shuffle = useStore(shuffleStore);
  const [ids, setIds] = useState<string[] | null>(null);
  const begin = useCallback((list: string[]) => {
    const ok = list.filter(id => data.by[id]); if (!ok.length) return;
    const order = shuffle ? shuffled(ok) : ok.slice();
    runStore.set(order); setIds(order);
  }, [data, shuffle]);
  /* a list handed over by another page (the Library, a playlist, homework): start it straight away, before the picker is ever painted */
  useLayoutEffect(() => { if (!ids && run) { const ok = run.filter(id => data.by[id]); if (ok.length) setIds(ok); else runStore.set(null); } }, [ids, run, data]);
  const back = () => { runStore.set(null); setIds(null); };
  /* "Start this deck again" and "Revise the ones marked Again": go to the top of a fresh run */
  const restart = (list: string[]) => { setIds(null); setTimeout(() => begin(list), 0); };
  if (ids) return <Feed key={ids.join(',')} data={data} ids={ids} onBack={back} onRestart={restart} />;
  return <Picker data={data} onStart={begin} />;
}
export default function Revise() {
  const data = useData();
  return data ? <ReviseView data={data} /> : <ReviseShell />;
}
