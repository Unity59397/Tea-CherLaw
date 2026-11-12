/* Pieces shared by the classroom pages (Teach, My classes, Join): headings, error box, two-step confirm,
   progress bar, and two hooks: useCms (read from the Api and refresh when anything changes) and useCmsPage (run an action, show its error). */
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, type To } from 'react-router-dom';
import { ApiError } from '../../cms/api';
import { ROLES, bump, useCmsUser, useCmsVersion } from '../../cms/session';
import type { Role } from '../../cms/types';
import { useUI } from '../UI';

export const focusSoon = (sel?: string) => { if (sel) setTimeout(() => document.querySelector<HTMLElement>(sel)?.focus(), 40); };
export const hashParams = (hash: string) => new URLSearchParams(hash.replace(/^#/, ''));

/** read something from the Api; it runs again whenever something changes (after any change made here, when the signed-in person changes, every 20 seconds while the tab is open, and when you come back
    to the tab, so what another person or device did shows up). `undefined` until the first answer. */
export function useCms<T>(fn: () => Promise<T>, deps: unknown[] = []): T | undefined {
  const ver = useCmsVersion(), me = useCmsUser(), [v, setV] = useState<T>();
  useEffect(() => {          // pick up what other people and devices did: when the tab is shown again, and every 20 seconds while it is open
    const f = () => { if (document.visibilityState === 'visible') bump(); }, t = setInterval(f, 20_000);
    document.addEventListener('visibilitychange', f);
    return () => { document.removeEventListener('visibilitychange', f); clearInterval(t); };
  }, []);
  useEffect(() => {
    let live = true;
    fn().then(x => { if (live) setV(x); }, e => { if (!(e instanceof ApiError)) console.error(e); });
    return () => { live = false; };
  }, [ver, me?.id, ...deps]);   // eslint-disable-line react-hooks/exhaustive-deps
  return v;
}

export interface CmsPage {
  err: string; confirm: string; setConfirm: (k: string) => void; hash: string;
  /** run an Api action: show a toast on success, show its error on failure, then move focus somewhere sensible. A string result is a #hash to go to. */
  run: (fn: () => Promise<unknown>, o?: { ok?: string; focus?: string }) => Promise<void>;
}
export function useCmsPage(): CmsPage {
  const { toast } = useUI(), navigate = useNavigate(), { hash } = useLocation();
  const [err, setErr] = useState(''), [confirm, setConfirmS] = useState(''), first = useRef(true);
  const setConfirm = useCallback((k: string) => { setConfirmS(k); if (k) { setErr(''); focusSoon('.confirm .btn-danger'); } }, []);
  /* moving to another part of the page (the address hash changed): clear messages and start at the heading */
  useEffect(() => { if (first.current) { first.current = false; return; } setErr(''); setConfirmS(''); focusSoon('#cm-title'); window.scrollTo(0, 0); }, [hash]);
  const run = useCallback(async (fn: () => Promise<unknown>, o: { ok?: string; focus?: string } = {}) => {
    let failed = false;
    try {
      const r = await fn(); setErr('');
      if (o.ok) toast(o.ok);
      if (typeof r === 'string') { setConfirmS(''); navigate({ hash: r ? '#' + r : '' }); return; }
    } catch (e) {
      failed = true; setErr(e instanceof ApiError ? e.message : 'Something went wrong. Try again.');
      if (!(e instanceof ApiError)) console.error(e);
    }
    setConfirmS(''); focusSoon(failed ? '#cm-err' : o.focus);
  }, [toast, navigate]);
  return { err, confirm, setConfirm, hash, run };
}

export const CmsHead = ({ eyebrow, title, lede }: { eyebrow: string; title: string; lede?: ReactNode }) => (
  <><p className="eyebrow">{eyebrow}</p><h1 className="page-title" id="cm-title" tabIndex={-1}>{title}</h1>{lede && <p className="lede">{lede}</p>}</>
);
export const ErrBox = ({ err }: { err: string }) => (err ? <p className="form-err" role="alert" id="cm-err" tabIndex={-1}>{err}</p> : null);
export const RoleBadge = ({ role }: { role: Role }) => <span className={'role role-' + role}>{ROLES[role] || role}</span>;
export const Bar = ({ p, label }: { p: number; label: string }) => <div className="bar" role="img" aria-label={label}><span style={{ width: p + '%' }} /></div>;
export const LinkBtn = ({ to, children, primary }: { to: To; children: ReactNode; primary?: boolean }) => <Link className={'btn' + (primary ? ' btn-primary' : '')} to={to}>{children}</Link>;

/** a page only teachers (or only signed-in people) may see: say so kindly and point to the right place */
export const Gate = ({ title, msg, children }: { title: string; msg: string; children: ReactNode }) => (
  <div className="wrap cms"><CmsHead eyebrow="Tea-cher classrooms" title={title} lede={msg} /><p className="cms-actions">{children}</p></div>
);

/** the button that asks "are you sure?" … */
export const AskButton = ({ page, k, className = 'btn btn-sm', children }: { page: CmsPage; k: string; className?: string; children: ReactNode }) => (
  <button type="button" className={className} data-key={k} onClick={() => page.setConfirm(k)}>{children}</button>
);
/** … and the two-step confirm that appears on the page (same pattern as deleting a playlist) */
export function ConfirmRow({ page, k, text, yes, onYes }: { page: CmsPage; k: string; text: string; yes: string; onYes: () => void }) {
  if (page.confirm !== k) return null;
  const cancel = () => { page.setConfirm(''); focusSoon('[data-key="' + k + '"]'); };
  return <div className="confirm" role="alert"><span>{text}</span><span className="list-actions"><button type="button" className="btn btn-sm btn-danger" onClick={onYes}>{yes}</button><button type="button" className="btn btn-sm" onClick={cancel}>Keep it</button></span></div>;
}
