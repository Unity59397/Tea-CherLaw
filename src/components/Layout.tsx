import { useEffect, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import site from '../../site.json';
import { Icon } from '../lib/icons';
import { NOT_FOUND_META, metaForPath, useDocumentMeta } from '../lib/seo';
import { useMounted, useStore } from '../lib/store';
import { displayName, useAuth } from '../auth/auth';
import { useCmsUser } from '../cms/session';
import { themeStore } from '../state/app';
import ConsentBanner from './ConsentBanner';
import PickerHost from './PickerHost';
import SheetHost from './SheetHost';
import { useUI } from './UI';

const prefersDark = () => typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches;

/* NavLink adds its own class "active" to the current page's link. The Library already uses a global `.active` class (its row of chosen filters), so the nav links must not carry it. The current page is shown through aria-current instead. */
function Header() {
  const user = useCmsUser(), auth = useAuth(), theme = useStore(themeStore), mounted = useMounted();
  /* with real accounts switched on the account button goes to sign-in or the profile; without them it opens the account page. */
  const acctTo = auth.configured ? (auth.session ? '/profile' : '/login') : '/account', acctName = auth.configured ? (auth.session ? displayName(auth) : '') : user ? user.name : '';
  const dark = theme ? theme === 'dark' : mounted && prefersDark();
  useEffect(() => { if (theme) document.documentElement.dataset.theme = theme; else delete document.documentElement.dataset.theme; }, [theme]);
  const role = user && (user.role === 'teacher' || user.role === 'student') ? user.role : null;
  return (
    <header className="site-header">
      <div className="wrap hdr">
        <Link className="logo" to="/" aria-label="Tea-cher home">
          <span className="logo-badge"><svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 12h15v5a7.5 7.5 0 0 1-15 0z" /><path d="M22 14h1.5a3 3 0 0 1 0 6H21.5" /><path d="M5 27h19" /><path d="M11 4.5c0 1.6 1.6 1.6 1.6 3.2M16.5 4.5c0 1.6 1.6 1.6 1.6 3.2" /></svg></span>
          <span className="logo-word">Tea-cher</span>
          <span className="logo-sub">OCR A Level Law</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <NavLink className={() => ''} to="/" end>Home</NavLink>
          <NavLink className={() => ''} to="/library">Case library</NavLink>
          <NavLink className={() => ''} to="/revise">Revise</NavLink>
          <NavLink className={() => ''} to="/saved">Saved</NavLink>
          {role && <NavLink className={() => ''} to={role === 'teacher' ? '/teach' : '/class'}>{role === 'teacher' ? 'Teach' : 'My classes'}</NavLink>}
        </nav>
        <NavLink className={() => 'icon-btn'} to={acctTo} aria-label={acctName ? 'Account: ' + acctName : 'Account'} title={acctName || 'Account'}><Icon.user /></NavLink>
        <button type="button" className="icon-btn" id="theme" aria-label="Switch colour theme" onClick={() => themeStore.set(dark ? 'light' : 'dark')}>{mounted ? (dark ? <Icon.sun /> : <Icon.moon />) : null}</button>
      </div>
    </header>
  );
}

function Footer() {
  const { openConsent } = useUI();
  return (
    <footer className="site-footer" id="footer">
      <div className="wrap foot">
        <p className="foot-note">Tea-cher is an independent revision aid for OCR A Level Law (H418). It is not affiliated with or endorsed by OCR. Check each case against your textbook and the specification before you rely on it in an exam.</p>
        <div className="foot-base">
          <p className="copy">&copy; <span id="yr">{new Date().getFullYear()}</span> Tea-cher. All rights reserved.</p>
          <nav className="foot-links" aria-label="Site"><Link to="/cases/">All cases</Link><Link to="/privacy">Privacy policy</Link><button type="button" className="linklike" onClick={openConsent}>Cookie settings</button></nav>
          <a className="watermark" href="https://noteastudio.co.uk" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 12h15v5a7.5 7.5 0 0 1-15 0z" /><path d="M22 14h1.5a3 3 0 0 1 0 6H21.5" /><path d="M5 27h19" /><path d="M11 4.5c0 1.6 1.6 1.6 1.6 3.2M16.5 4.5c0 1.6 1.6 1.6 1.6 3.2" /></svg>
            <span>Made by <strong>No-Tea Studio</strong></span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation(), main = useRef<HTMLElement>(null);
  const isCase = /^\/cases\/[^/]+$/.test(pathname);
  useDocumentMeta(metaForPath(pathname) || (isCase ? null : NOT_FOUND_META), site.url);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);     // a new page starts at the top
  return (
    <>
      <a className="skip" href="#view" onClick={e => { e.preventDefault(); main.current?.focus(); }}>Skip to content</a>
      <Header />
      <main id="view" tabIndex={-1} ref={main}><Outlet /></main>
      <Footer />
      <SheetHost />
      <PickerHost />
      <ConsentBanner />
    </>
  );
}
