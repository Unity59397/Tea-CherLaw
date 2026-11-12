/* The home page: hero, a rotating featured case, your progress, topic cards, recently viewed cases and the four papers. */
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUI } from '../components/UI';
import { HomeShell } from '../components/Shell';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { useStore } from '../lib/store';
import { AREA, PAPERS, SUB, TAX, metaLine } from '../lib/taxonomy';
import { consentStore, hasPrefs, recentStore, statusStore } from '../state/app';

const FEATURE_SECS = 8;   // seconds each featured case stays on screen before it moves on
const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');
const Ic = ({ children }: { children: ReactNode }) => <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
const AICON: Record<string, ReactNode> = {
  'legal-system': <Ic><path d="M3 10l9-6 9 6" /><path d="M5.5 10v8M10 10v8M14 10v8M18.5 10v8" /><path d="M3 20.5h18" /></Ic>,
  criminal: <Ic><path d="M14 4.5l5.5 5.5" /><path d="M11 7.5l5.5 5.5" /><path d="M13.5 11.5L5 20" /><path d="M3.5 21.5h7" /></Ic>,
  'law-making': <Ic><path d="M7 3h8l4 4v14H7z" /><path d="M15 3v4h4" /><path d="M10 12h6M10 16h6" /></Ic>,
  tort: <Ic><path d="M12 4v16M7 20h10" /><path d="M5 8h14" /><path d="M5 8l-3 6.5a3.5 3.5 0 0 0 6 0zM19 8l-3 6.5a3.5 3.5 0 0 0 6 0z" /></Ic>,
  'nature-of-law': <Ic><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5V5.5" /><path d="M8.5 7.5H15" /></Ic>,
  'human-rights': <Ic><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2.2 2.2L15.5 10" /></Ic>,
  contract: <Ic><path d="M6 3h9l4 4v14H6z" /><path d="M9 15c1.5-2.5 2.5 1.5 4 0s2-1 3 0" /><path d="M9 9h4" /></Ic>
};

/** the rotating "featured case": key cases in a random order, moving on by itself (the countdown bar is a CSS animation that tells us when it ends) */
function Featured({ data }: { data: Data }) {
  const { sheet, openSheet } = useUI();
  const ids = useMemo(() => {
    const a = data.cases.filter(c => c.key).map(c => c.id);
    if (!a.length) data.cases.forEach(c => a.push(c.id));
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }, [data]);
  const [i, setI] = useState(0), [paused, setPaused] = useState(false), [auto, setAuto] = useState(true), [due, setDue] = useState(false);
  const step = (d: number, byTimer = false) => { setAuto(byTimer); setI(x => (x + d + ids.length) % ids.length); };
  /* the timer ran out while a case sheet was open: move on once it closes */
  useEffect(() => { if (due && !sheet) { setDue(false); step(1, true); } });   // eslint-disable-line react-hooks/exhaustive-deps
  const c = data.by[ids[i]]; if (!c) return null;
  return (
    <article className={'paper-card feat' + (paused ? ' paused' : '')} id="feat" style={{ ['--feat-secs' as string]: FEATURE_SECS + 's' }} aria-roledescription="carousel" aria-label="Featured case">
      <div className="feat-top"><p className="eyebrow"><Icon.star />Featured case</p><span className="pill" id="feat-area">{AREA[c.area].label}</span></div>
      <div className="feat-body swap" id="feat-body" key={c.id} aria-live={auto ? 'off' : 'polite'}>
        <h2><i>{c.name}</i></h2>
        <p className="fc-meta">{metaLine(c)}</p>
        <div className="rule"><h3>What happened</h3><p className="fc-story">{c.gist}</p></div>
        <div className="rule"><h3>The rule</h3><p className="fc-rule">{c.principle}</p></div>
      </div>
      <div className="feat-foot">
        <button type="button" className="btn btn-sm btn-primary" onClick={() => openSheet(c.id)}><Icon.info />View full case</button>
        <div className="feat-ctl" role="group" aria-label="Featured case controls">
          <button type="button" className="icon-btn" aria-label="Previous featured case" onClick={() => step(-1)}><Icon.back /></button>
          <button type="button" className="icon-btn feat-pause" aria-pressed={paused} aria-label={paused ? 'Resume rotation' : 'Pause rotation'} onClick={() => setPaused(p => !p)}>{paused ? <Icon.play /> : <Icon.pause />}</button>
          <button type="button" className="icon-btn" aria-label="Next featured case" onClick={() => step(1)}><Icon.chev /></button>
        </div>
      </div>
      <div className="feat-bar" aria-hidden="true"><span className="feat-fill" key={c.id} onAnimationEnd={() => { if (sheet) setDue(true); else step(1, true); }} /></div>
    </article>
  );
}

function HomeView({ data }: { data: Data }) {
  const navigate = useNavigate(), { openSheet } = useUI(), status = useStore(statusStore), consent = useStore(consentStore), recentIds = useStore(recentStore);
  const total = data.cases.length, keyN = data.cases.filter(c => c.key).length, subN = Object.keys(SUB).filter(s => data.count('sub', s) > 0).length;
  const got = data.cases.filter(c => status[c.id] === 'got').length, pct = total ? Math.round(got * 100 / total) : 0;
  const recent = hasPrefs(consent) ? recentIds.filter(id => data.by[id]).slice(0, 3) : [];
  const toArea = (id: string) => navigate('/library?node=area:' + encodeURIComponent(id));
  return (
    <>
      <section className="hero-band"><div className="wrap">
        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow">OCR A Level Law &middot; H418</p>
            <h1>Know the case.<br />Know the <em>rule.</em></h1>
            <p className="lede">Revise the cases behind OCR A Level Law with short summaries and clear rules. Browse them by paper and topic, or pick your cases and scroll through them as flashcards.</p>
            <div className="cta"><Link className="btn btn-gold" to="/revise"><Icon.play />Start revising</Link><Link className="btn btn-ghost" to="/library"><Icon.book />Browse cases</Link></div>
          </div>
          <Featured data={data} />
        </div>
        <dl className="statbar">
          <div className="st"><dd>{total}</dd><dt>Cases</dt></div><div className="st"><dd>{keyN}</dd><dt>Key cases</dt></div><div className="st"><dd>{subN}</dd><dt>Sub-topics</dt></div>
          <div className="st prog"><div className="ring" style={{ ['--p' as string]: pct }} role="img" aria-label={pct + ' per cent of cases marked Got it'}><span>{pct}%</span></div>
            <div><dt>Your revision progress</dt><dd className="prog-t">{got ? got + ' of ' + total + ' marked Got it' : 'Mark cards as Got it to track this'}</dd></div></div>
        </dl>
      </div></section>
      <div className="wrap">
        <section className="section"><h2 className="sec-h">Browse by topic</h2>
          <div className="areas">{TAX.filter(a => data.count('area', a.id)).map(a => (
            <button type="button" className="area-card" key={a.id} onClick={() => toArea(a.id)}>{AICON[a.id]}<span className="area-name">{a.label}</span><span className="area-n">{plural(data.count('area', a.id), 'case')}</span><span className="area-go"><Icon.chev /></span></button>
          ))}</div>
          <p className="sec-note">Prefer a plain list? <Link to="/cases/">See all {total} cases on one page</Link>, each with its own page.</p>
        </section>
        {recent.length > 0 && (
          <section className="section"><h2 className="sec-h">Recently viewed</h2>
            <div className="recent">{recent.map(id => { const c = data.by[id]; return (
              <article className="case" key={id}>
                <div className="case-top"><span className="case-yr">{c.year}</span>{c.key && <span className="key"><Icon.star />Key case</span>}</div>
                <h3 className="case-title"><i>{c.name}</i></h3><p className="case-rule">{c.gist}</p>
                <div className="case-actions"><button type="button" className="btn btn-sm" onClick={() => openSheet(c.id)}><Icon.info />View again</button></div>
              </article>); })}</div>
          </section>
        )}
        <section className="section"><h2 className="sec-h">Find your paper</h2>
          <p className="lede">Every candidate sits Papers 1 and 2, then either Paper 3 (human rights) or Paper 4 (contract). The nature of law is examined in both.</p>
          <div className="papers">{PAPERS.map(p => (
            <article className="paper" key={p.code}><p className="eyebrow">{p.n} &middot; {p.code}</p><h3>{p.title}</h3>
              <ul className="paper-areas">{p.areas.filter(id => AREA[id]).map(id => <li key={id}><button type="button" className="arealink" onClick={() => toArea(id)}><span>{AREA[id].label}</span><span className="n">{data.count('area', id)}</span></button></li>)}</ul>
            </article>))}</div>
        </section>
      </div>
    </>
  );
}
export default function Home() {
  const data = useData();
  return data ? <HomeView data={data} /> : <HomeShell />;
}
