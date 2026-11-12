/* The "More details" panel for one case. It slides over the page, keeps keyboard focus inside while open, closes with Esc, and gives focus back
   to whatever opened it. It needs the cases, so it shows nothing until they have downloaded. */
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../lib/icons';
import { useData } from '../lib/data';
import { useStore } from '../lib/store';
import { SUB, crumb, metaLine } from '../lib/taxonomy';
import { addRecent, deckStore, toggleDeck } from '../state/app';
import { BookmarkButton, PlaylistButton, ShareButton } from './CaseActions';
import { useUI } from './UI';

const FOCUSABLE = 'button, a[href], [tabindex]:not([tabindex="-1"])';

export default function SheetHost() {
  const { sheet, openSheet, closeSheet, openPicker, lastFocus, pop } = useUI(), data = useData(), deck = useStore(deckStore), navigate = useNavigate();
  const root = useRef<HTMLElement>(null), closeBtn = useRef<HTMLButtonElement>(null);
  const c = sheet && data ? data.by[sheet] : null;
  const close = (silent = false) => { closeSheet(); if (!silent) { const f = lastFocus.current; if (f && document.contains(f)) f.focus(); } };

  /* opening: remember the case as "recently viewed", stop the page behind scrolling, and move focus into the sheet */
  useEffect(() => {
    if (!c) return;
    addRecent(c.id);
    document.documentElement.classList.add('lock');
    closeBtn.current?.focus();
    return () => { document.documentElement.classList.remove('lock'); };
  }, [c?.id]);   // eslint-disable-line react-hooks/exhaustive-deps
  /* leaving the page behind the sheet (a link inside it, or the browser back button) closes it without grabbing focus */
  useEffect(() => { if (c) { const h = () => close(true); window.addEventListener('popstate', h); return () => window.removeEventListener('popstate', h); } }, [c?.id]);   // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!c) return;
    const onKey = (e: KeyboardEvent) => {
      if (pop) return;                                  // the save popup sits on top and handles its own keys
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab' || !root.current) return;
      const f = Array.from(root.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(x => !(x as HTMLButtonElement).disabled && x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });   // runs after every render so it always sees the latest state
  if (!c) return <div id="sheet-root" />;
  const rel = (c.links || []).map(id => data!.by[id]).filter(Boolean), inDeck = deck.indexOf(c.id) >= 0;
  return (
    <div id="sheet-root">
      <div className="scrim" onClick={() => close()} />
      <aside className="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" tabIndex={-1} ref={root}>
        <header className="sheet-head">
          <div><p className="crumb">{crumb(c)}</p><h2 className="sheet-title" id="sheet-title"><i>{c.name}</i></h2><p className="sheet-meta">{metaLine(c)}{c.key && <> · <span className="key"><Icon.star />Key case</span></>}</p></div>
          <div className="sheet-tools"><BookmarkButton id={c.id} name={c.name} /><ShareButton c={c} /><button type="button" className="icon-btn" aria-label="Close details" ref={closeBtn} onClick={() => close()}><Icon.close /></button></div>
        </header>
        <div className="sheet-body">
          <section className="ruleblock"><h3>The rule</h3><p>{c.principle}</p></section>
          <section><h3>In brief</h3><p>{c.gist}</p></section>
          <section><h3>Facts</h3><p>{c.facts}</p></section>
          <section><h3>What the court decided</h3><p>{c.held}</p></section>
          <section><h3>Why it matters</h3><p>{c.significance}</p></section>
          {(c.tags || []).length > 0 && <section><h3>Common threads</h3><ul className="tags">{c.tags.map(t => <li key={t}><button type="button" className="chip" onClick={() => { close(true); navigate('/library?tag=' + encodeURIComponent(t)); }}>{t}</button></li>)}</ul></section>}
          {rel.length > 0 && <section><h3>Related cases</h3><div className="related">{rel.map(r => <button key={r.id} type="button" className="btn btn-sm" onClick={() => openSheet(r.id)}><span><i>{r.name}</i> ({r.year})</span><Icon.chev /></button>)}</div></section>}
        </div>
        <footer className="sheet-foot">
          <button type="button" className="btn" aria-pressed={inDeck} onClick={() => toggleDeck(c.id)}>{inDeck ? <Icon.check /> : <Icon.plus />}<span className="lbl2">{inDeck ? 'In my deck' : 'Add to my deck'}</span></button>
          <button type="button" className="btn" onClick={() => { close(true); navigate('/library?node=sub:' + encodeURIComponent(c.sub)); window.scrollTo(0, 0); }}>More on {SUB[c.sub].s.label}</button>
          <PlaylistButton id={c.id} />
          <Link className="btn" to={'/cases/' + c.id} onClick={() => close(true)}>Open full page</Link>
        </footer>
      </aside>
    </div>
  );
}
