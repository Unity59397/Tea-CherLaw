/* The plain content every JavaScript-driven page shows first: on the server (so search engines and people without JavaScript get real text),
   and in the browser until the page's own screen is ready. Both must draw exactly the same thing, so these never read the browser's storage. */
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SUMMARY } from '../lib/taxonomy';

export function AreaList() {
  return (
    <ul className="plain-list">
      {SUMMARY.areas.map(a => (
        <li key={a.id}><Link to={'/cases/#area-' + a.id}><strong>{a.label}</strong></Link> ({a.count} cases){a.blurb ? ': ' + a.blurb : ''}</li>
      ))}
    </ul>
  );
}
export function PlainShell({ eyebrow, title, lede, extra, cls = 'static-intro' }: { eyebrow: string; title: string; lede: ReactNode; extra?: ReactNode; cls?: string }) {
  return (
    <div className={'wrap ' + cls}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="lede">{lede}</p>
      {extra}
    </div>
  );
}
const NeedJs = () => <p className="meta">This page needs JavaScript. You can still read every case from <Link to="/cases/">the list of all cases</Link>.</p>;
const N = SUMMARY.count;

export const HomeShell = () => (
  <div className="wrap prose static-intro">
    <p className="eyebrow">OCR A Level Law &middot; H418</p>
    <h1 className="page-title">OCR A Level Law case revision</h1>
    <p className="lede">Tea-cher gives you short, plain-English summaries of {N} cases from the OCR A Level Law specification: the facts, what the court held, the rule, and why the case matters.</p>
    <p>Browse the cases by topic in the case library, or choose your own cases and scroll through them as flashcards, one at a time.</p>
    <h2>Topics</h2>
    <AreaList />
    <p><Link className="btn btn-primary" to="/cases/">Browse all {N} cases</Link> <Link className="btn" to="/revise">Start revising</Link></p>
  </div>
);
export const LibraryShell = () => (
  <div className="wrap prose static-intro">
    <p className="eyebrow">OCR A Level Law &middot; H418</p>
    <h1 className="page-title">Case library</h1>
    <p className="lede">Search and filter {N} cases by paper, topic, sub-topic and court, or follow a common thread across areas of law.</p>
    <h2>Topics</h2>
    <AreaList />
    <p><Link className="btn btn-primary" to="/cases/">See every case on one page</Link></p>
  </div>
);
export const ReviseShell = () => (
  <div className="wrap prose static-intro">
    <p className="eyebrow">OCR A Level Law &middot; H418</p>
    <h1 className="page-title">Revise with flashcards</h1>
    <p className="lede">Pick the cases you want to revise, then scroll through them one at a time. Flip a card to see the rule, mark it as known or to repeat, and open more details for the facts and the decision.</p>
    <h2>What you can revise</h2>
    <p>Choose individual cases, whole topics or the key cases only, and shuffle the order if you like. Your deck and your marks are saved in your browser.</p>
    <AreaList />
    <p><Link className="btn btn-primary" to="/cases/">Browse all {N} cases</Link></p>
  </div>
);
export const SavedShell = () => <PlainShell cls="saved static-intro" eyebrow="Your collection" title="Saved cases" lede="Bookmark a case to keep it here, then group saved cases into your own playlists. Everything is stored on this device only." extra={<NeedJs />} />;
export const SharedShell = () => <PlainShell cls="saved static-intro" eyebrow="Shared with you" title="Shared playlist" lede="Someone shared a playlist of OCR A Level Law cases with you. This page needs JavaScript to show it." extra={<NeedJs />} />;
export const TeachShell = () => <PlainShell cls="cms static-intro" eyebrow="Tea-cher classrooms" title="Teacher area" lede="Create classrooms, build playlists of cases, set homework and see how each student is getting on." extra={<NeedJs />} />;
export const ClassShell = () => <PlainShell cls="cms static-intro" eyebrow="Tea-cher classrooms" title="My classes" lede="Homework from your teachers, and how you are getting on." extra={<NeedJs />} />;
export const JoinShell = () => <PlainShell cls="cms static-intro" eyebrow="Tea-cher classrooms" title="Join a classroom" lede="Open the invite link your teacher sent, or type the 6-digit code." extra={<NeedJs />} />;
export const NotFound = () => (
  <div className="wrap prose static-intro">
    <p className="eyebrow">404</p>
    <h1 className="page-title">Page not found</h1>
    <p className="lede">That page doesn’t exist. It may have moved.</p>
    <p><Link className="btn btn-primary" to="/library">Browse the case library</Link> <Link className="btn" to="/">Go home</Link></p>
  </div>
);
