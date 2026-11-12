import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { consentStore, hasPrefs, saveConsent } from '../state/app';
import { useMounted, useStore } from '../lib/store';
import { useUI } from './UI';

export default function ConsentBanner() {
  const mounted = useMounted(), consent = useStore(consentStore), { consentOpen, closeConsent } = useUI();
  const [manage, setManage] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const head = useRef<HTMLHeadingElement>(null);
  const reopened = consentOpen;
  const visible = mounted && (!consent || consentOpen);
  useEffect(() => { if (consentOpen) { setManage(true); setPrefs(hasPrefs(consentStore.get())); } }, [consentOpen]);
  useEffect(() => { if (visible && (manage || reopened)) head.current?.focus(); }, [visible, manage, reopened]);
  if (!visible) return <div id="consent-root" />;
  const done = (p: boolean) => { saveConsent(p); closeConsent(); setManage(false); };
  return (
    <div id="consent-root">
      <section className="cb" role="dialog" aria-modal="false" aria-labelledby="cb-t" aria-describedby="cb-d">
        <h2 id="cb-t" tabIndex={-1} ref={head}>Your privacy choices</h2>
        <p id="cb-d">Tea-cher doesn’t track you. Your browser stores your deck, saved cases, marks and settings so the site works. That is essential. With your permission it can also remember which cases you viewed recently. <Link to="/privacy">Read our privacy policy</Link>.</p>
        {manage ? (
          <>
            <div className="cb-opts">
              <label className="cb-opt"><input type="checkbox" checked disabled readOnly /><span><strong>Essential</strong> Always on. Saves your deck, Got it and Again marks, theme, card settings and this choice.</span></label>
              <label className="cb-opt"><input type="checkbox" checked={prefs} onChange={e => setPrefs(e.target.checked)} /><span><strong>Preferences</strong> Remembers the cases you viewed recently, so we can show them on the home page.</span></label>
              <label className="cb-opt"><input type="checkbox" disabled readOnly /><span><strong>Advertising and analytics</strong> Not used yet. If we add them, we will update the policy and ask you first.</span></label>
            </div>
            <div className="cb-actions">
              <button type="button" className="btn btn-primary" onClick={() => done(prefs)}>Save choices</button>
              {reopened ? <button type="button" className="btn" onClick={closeConsent}>Close</button> : <button type="button" className="btn" onClick={() => done(false)}>Reject all</button>}
            </div>
          </>
        ) : (
          <div className="cb-actions">
            <button type="button" className="btn btn-primary" onClick={() => done(true)}>Accept all</button>
            <button type="button" className="btn btn-primary" onClick={() => done(false)}>Reject all</button>
            <button type="button" className="btn" onClick={() => setManage(true)}>Manage choices</button>
          </div>
        )}
      </section>
    </div>
  );
}
