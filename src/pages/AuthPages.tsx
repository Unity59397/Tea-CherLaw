/* Sign up, sign in, forgot password, the email-link landing page and the profile. All talk to Supabase through src/auth/auth.ts. */
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { SCHOOL_SHORT } from '../auth/schools';
import { AuthError, MIN_PW, changeEmail, deleteAccount, displayName, exportMyData, errMessage, resendConfirmation, saveProfile, sendPasswordReset, setPassword, signIn, signOut, signUp, useAuth, verifyLink } from '../auth/auth';
import { PlainShell } from '../components/Shell';
import { SchoolNote } from '../components/SchoolNote';
import { useUI } from '../components/UI';
import { useMounted } from '../lib/store';

const Off = () => <div className="wrap cms auth"><p className="eyebrow">Account</p><h1 className="page-title">Accounts aren’t switched on yet</h1><p className="lede">Everything else on Tea-cher works without an account. When accounts are connected you will be able to sign up here.</p></div>;
const Card = ({ eyebrow = 'Account', title, lede, children }: { eyebrow?: string; title: string; lede?: ReactNode; children: ReactNode }) => (
  <div className="wrap cms auth"><p className="eyebrow">{eyebrow}</p><h1 className="page-title" id="cm-title" tabIndex={-1}>{title}</h1>{lede && <p className="lede">{lede}</p>}{children}</div>
);
const Err = ({ msg }: { msg: string }) => (msg ? <p className="form-err" role="alert" id="auth-err" tabIndex={-1}>{msg}</p> : null);
const Ok = ({ children }: { children: ReactNode }) => <div className="ok-box" role="status"><p>{children}</p></div>;
const shell = (eyebrow: string, title: string, lede: string) => <PlainShell cls="cms auth static-intro" eyebrow={eyebrow} title={title} lede={lede} />;

/** run an async action, tracking "working" and the error; focuses the error when there is one */
function useAction() {
  const [err, setErr] = useState(''), [busy, setBusy] = useState(false);
  const run = async (fn: () => Promise<void>) => {
    setBusy(true); setErr('');
    try { await fn(); } catch (e) { setErr(errMessage(e)); if (e instanceof AuthError) return e.code; setTimeout(() => document.getElementById('auth-err')?.focus(), 30); return 'error'; } finally { setBusy(false); }
    return '';
  };
  return { err, setErr, busy, run };
}
const Password = ({ id, label, value, onChange, autoComplete, hint }: { id: string; label: string; value: string; onChange: (v: string) => void; autoComplete: string; hint?: string }) => {
  const [show, setShow] = useState(false);
  return (<><label htmlFor={id}>{label}</label>
    <input className="txt" id={id} name={id} type={show ? 'text' : 'password'} autoComplete={autoComplete} minLength={MIN_PW} required value={value} onChange={e => onChange(e.target.value)} aria-describedby={hint ? id + '-h' : undefined} />
    {hint && <p className="n" id={id + '-h'}>{hint}</p>}
    <label className="check"><input type="checkbox" checked={show} onChange={e => setShow(e.target.checked)} /><span>Show password</span></label></>);
};
/** already signed in: go to the profile */
function useBounce() {
  const a = useAuth(), nav = useNavigate();
  useEffect(() => {
    if (!(a.ready && a.session)) return;
    let p: string | null = null; try { p = sessionStorage.getItem('tc.pendingJoin'); } catch { /* private mode */ }
    if (p && /^#[A-Za-z0-9=&_-]{1,80}$/.test(p)) { try { sessionStorage.removeItem('tc.pendingJoin'); } catch { /* ignore */ } nav('/join' + p, { replace: true }); }   // someone opened a classroom invite while signed out: take them back to it
    else nav('/profile', { replace: true });
  }, [a.ready, a.session, nav]);
  return a;
}

/* ---------- sign up ---------- */
export function Signup() {
  const mounted = useMounted(), a = useBounce(), { err, busy, run } = useAction();
  const [name, setName] = useState(''), [email, setEmail] = useState(''), [pw, setPw] = useState(''), [agree, setAgree] = useState(false), [sent, setSent] = useState(''), [again, setAgain] = useState('');
  const schoolErr = err === SCHOOL_SHORT;
  if (!mounted) return shell('Account', 'Create an account', 'Make a free Tea-cher account.');
  if (!a.configured) return <Off />;
  const submit = (e: FormEvent) => { e.preventDefault(); void run(async () => { await signUp({ email, password: pw, name }); setSent(email.trim()); setPw(''); }); };
  if (sent) return (
    <Card title="Check your email" lede={<>We sent a confirmation link to <strong>{sent}</strong>. Open it to finish creating your account. You can’t sign in until you have.</>}>
      <section className="panel stack"><p>Nothing there after a minute? Check your spam or junk folder, and check the address is right. The link stops working after a while, so use it soon; you can send it again.</p>
        <div className="list-actions"><button type="button" className="btn btn-sm" disabled={busy} onClick={() => void run(async () => { await resendConfirmation(sent); setAgain('Sent again. It can take a minute to arrive.'); })}>Send the email again</button>
          <button type="button" className="btn btn-sm" onClick={() => { setSent(''); setAgain(''); }}>Use a different email</button></div>
        {again && <Ok>{again}</Ok>}<Err msg={err} /></section>
    </Card>
  );
  return (
    <Card title="Create an account" lede="Free. Use your school email: you’ll need to confirm it before you can sign in.">
      <SchoolNote />
      <form className="panel stack" onSubmit={submit}>
        <label htmlFor="su-name">Your name <span className="n">(shown to your teacher)</span></label><input className="txt" id="su-name" name="name" maxLength={40} autoComplete="name" required value={name} onChange={e => setName(e.target.value)} />
        <label htmlFor="su-email">School email</label><input className="txt" id="su-email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} aria-invalid={schoolErr || undefined} aria-describedby={schoolErr ? 'auth-err' : undefined} />
        {schoolErr && <Err msg={err} />}
        <Password id="su-pw" label="Password" value={pw} onChange={setPw} autoComplete="new-password" hint={MIN_PW + ' or more characters. Not a common word, and not your email name.'} />
        <label className="check"><input type="checkbox" required checked={agree} onChange={e => setAgree(e.target.checked)} /><span>I’m 16 or over and I’ve read the <Link to="/privacy">privacy policy</Link>.</span></label>
        {!schoolErr && <Err msg={err} />}
        <div><button type="submit" className="btn btn-primary" disabled={busy}>{busy ? 'Creating…' : 'Create account'}</button></div>
        <p className="n">Already have an account? <Link to="/login">Sign in</Link>.</p>
      </form>
    </Card>
  );
}

/* ---------- sign in ---------- */
export function Login() {
  const mounted = useMounted(), a = useBounce(), { err, busy, run } = useAction(), [email, setEmail] = useState(''), [pw, setPw] = useState(''), [unconfirmed, setUnconfirmed] = useState(false), [note, setNote] = useState('');
  if (!mounted) return shell('Account', 'Sign in', 'Sign in to your Tea-cher account.');
  if (!a.configured) return <Off />;
  const submit = (e: FormEvent) => { e.preventDefault(); setNote(''); void run(() => signIn({ email, password: pw })).then(code => setUnconfirmed(code === 'unconfirmed')); };
  return (
    <Card title="Sign in">
      <SchoolNote />
      <form className="panel stack" onSubmit={submit}>
        <label htmlFor="li-email">Email</label><input className="txt" id="li-email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} />
        <Password id="li-pw" label="Password" value={pw} onChange={setPw} autoComplete="current-password" />
        <Err msg={err} />
        {unconfirmed && <div><button type="button" className="btn btn-sm" disabled={busy} onClick={() => void run(async () => { await resendConfirmation(email); setNote('Confirmation email sent. Open the link in it, then sign in.'); })}>Send the confirmation email again</button></div>}
        {note && <Ok>{note}</Ok>}
        <div><button type="submit" className="btn btn-primary" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button></div>
        <p className="n"><Link to="/forgot">Forgot your password?</Link> · New here? <Link to="/signup">Create an account</Link>.</p>
      </form>
    </Card>
  );
}

/* ---------- forgot password ---------- */
export function Forgot() {
  const mounted = useMounted(), a = useAuth(), { err, busy, run } = useAction(), [email, setEmail] = useState(''), [sent, setSent] = useState(false);
  if (!mounted) return shell('Account', 'Reset your password', 'We’ll email you a link to choose a new password.');
  if (!a.configured) return <Off />;
  return (
    <Card title="Reset your password" lede="Type your email and we’ll send a link to choose a new password.">
      {sent ? <Ok>If there is an account for {email.trim()}, a reset link is on its way. The link stops working after a while.</Ok> : (
        <form className="panel stack" onSubmit={e => { e.preventDefault(); void run(async () => { await sendPasswordReset(email); setSent(true); }); }}>
          <label htmlFor="fg-email">Email</label><input className="txt" id="fg-email" name="email" type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <Err msg={err} /><div><button type="submit" className="btn btn-primary" disabled={busy}>Send reset link</button></div>
          <p className="n"><Link to="/login">Back to sign in</Link></p>
        </form>)}
    </Card>
  );
}

/* ---------- where the email links land: /auth/callback ---------- */
export function AuthCallback() {
  const mounted = useMounted(), a = useAuth(), loc = useLocation(), nav = useNavigate(), { toast } = useUI(), { err, setErr, busy, run } = useAction();
  const [phase, setPhase] = useState<'working' | 'confirmed' | 'reset' | 'failed'>('working'), [pw, setPw] = useState(''), started = useRef(false);
  useEffect(() => {
    if (!mounted || !a.configured || started.current) return; started.current = true;
    const q = new URLSearchParams(loc.search), h = new URLSearchParams(loc.hash.replace(/^#/, '')), th = q.get('token_hash'), type = (q.get('type') || '') as Parameters<typeof verifyLink>[1];
    const problem = q.get('error_description') || h.get('error_description');
    const tidy = () => { try { window.history.replaceState(window.history.state, '', window.location.pathname + (q.get('next') === 'reset' ? '?next=reset' : '')); } catch { /* ignore */ } };   // don't leave the one-time token sitting in the address bar and history
    if (problem) { tidy(); setErr('That link has expired or has already been used. Ask for a new one.'); setPhase('failed'); return; }
    if (th) {
      tidy();
      verifyLink(th, type).then(() => { setPhase(type === 'recovery' ? 'reset' : 'confirmed'); }, e => { setErr(errMessage(e)); setPhase('failed'); });
    } else if (q.get('next') === 'reset' || h.get('type') === 'recovery') {
      setPhase('reset');                                    // the library has already turned the link into a session
    } else {
      setPhase('confirmed');                                // ?code=… / #access_token=… links are exchanged by the library on load
    }
  }, [mounted, a.configured]);   // eslint-disable-line react-hooks/exhaustive-deps
  if (!mounted) return shell('Account', 'One moment', 'Checking your link.');
  if (!a.configured) return <Off />;
  if (phase === 'working') return <Card title="Checking your link…"><p className="n" role="status">One moment.</p></Card>;
  if (phase === 'failed') return <Card title="This link doesn’t work"><Err msg={err} /><p className="cms-actions"><Link className="btn btn-primary" to="/login">Go to sign in</Link><Link className="btn" to="/forgot">Reset password</Link></p></Card>;
  if (phase === 'reset') {
    if (!a.ready) return <Card title="Choose a new password"><p className="n" role="status">One moment.</p></Card>;
    if (!a.session) return <Card title="This link doesn’t work"><p>The reset link has expired. <Link to="/forgot">Ask for a new one</Link>.</p></Card>;
    return (
      <Card title="Choose a new password">
        <form className="panel stack" onSubmit={e => { e.preventDefault(); void run(async () => { await setPassword(pw); toast('Password changed'); nav('/profile', { replace: true }); }); }}>
          <Password id="np-pw" label="New password" value={pw} onChange={setPw} autoComplete="new-password" hint={MIN_PW + ' or more characters. Not a common word, and not your email name.'} /><Err msg={err} />
          <div><button type="submit" className="btn btn-primary" disabled={busy}>Save password</button></div>
        </form>
      </Card>
    );
  }
  if (!a.ready) return <Card title="Confirming your email…"><p className="n" role="status">One moment.</p></Card>;
  return a.session
    ? <Card title="Email confirmed" lede="Your account is ready and you’re signed in."><p className="cms-actions"><Link className="btn btn-primary" to="/profile">Go to your profile</Link><Link className="btn" to="/library">Browse cases</Link></p></Card>
    : <Card title="Email confirmed" lede="Thanks. Now you can sign in."><p className="cms-actions"><Link className="btn btn-primary" to="/login">Sign in</Link></p></Card>;
}

/* ---------- profile ---------- */
export function Profile() {
  const mounted = useMounted(), a = useAuth(), nav = useNavigate(), { toast } = useUI();
  const prof = useAction(), pwd = useAction(), mail = useAction(), del = useAction(), dl = useAction();
  const [name, setName] = useState(''), [year, setYear] = useState(''), [pw, setPw] = useState(''), [email, setEmail] = useState(''), [mailSent, setMailSent] = useState(false), [confirmDel, setConfirmDel] = useState(false), seeded = useRef('');
  useEffect(() => { if (a.ready && !a.session) nav('/login', { replace: true }); }, [a.ready, a.session, nav]);
  useEffect(() => { if (a.profile && seeded.current !== a.profile.id) { seeded.current = a.profile.id; setName(a.profile.display_name); setYear(a.profile.year_group || ''); } }, [a.profile]);
  if (!mounted) return shell('Account', 'Your profile', 'Your Tea-cher account.');
  if (!a.configured) return <Off />;
  if (!a.ready || !a.session) return <Card title="Your profile"><p className="n" role="status">One moment.</p></Card>;
  const u = a.session.user, role = a.profile?.role || 'user', roleText = { user: 'Regular user', student: 'Student', teacher: 'Teacher' }[role];
  return (
    <Card title="Your profile" lede={'Signed in as ' + displayName(a) + '.'}>
      <div className="cols">
        <form className="panel stack" onSubmit={e => { e.preventDefault(); void prof.run(async () => { await saveProfile({ display_name: name, year_group: year || null }); toast('Profile saved'); }); }}>
          <h2>About you</h2>
          <label htmlFor="pf-name">Name <span className="n">(your teacher sees this)</span></label><input className="txt" id="pf-name" name="name" maxLength={40} required value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
          <label htmlFor="pf-year">Year group <span className="n">(optional)</span></label>
          <select className="txt" id="pf-year" name="year" value={year} onChange={e => setYear(e.target.value)}><option value="">Prefer not to say</option><option>Year 12</option><option>Year 13</option><option>Other</option></select>
          <p className="n">Account type: <strong>{roleText}</strong>. It is set automatically from your school email and can’t be changed here.</p>
          <Err msg={prof.err} /><div><button type="submit" className="btn btn-primary" disabled={prof.busy}>Save profile</button></div>
        </form>
        <section className="panel stack"><h2>Sign-in details</h2>
          <p>Email: <strong>{u.email}</strong> {u.email_confirmed_at ? <span className="pill pill-done">Confirmed</span> : <span className="pill pill-new">Not confirmed</span>}</p>
          {mailSent ? <Ok>We sent a confirmation link to the new address. The change happens when you open it.</Ok> : (
            <form className="inline-form" onSubmit={e => { e.preventDefault(); void mail.run(async () => { await changeEmail(email); setMailSent(true); }); }}>
              <label className="sr" htmlFor="pf-email">New email</label><input className="txt" id="pf-email" type="email" autoComplete="email" placeholder="New school email address" required value={email} onChange={e => setEmail(e.target.value)} /><button type="submit" className="btn btn-sm" disabled={mail.busy}>Change email</button></form>)}
          <Err msg={mail.err} />
          <form className="stack" onSubmit={e => { e.preventDefault(); void pwd.run(async () => { await setPassword(pw); setPw(''); toast('Password changed'); }); }}>
            <Password id="pf-pw" label="New password" value={pw} onChange={setPw} autoComplete="new-password" hint={MIN_PW + ' or more characters. Not a common word, and not your email name.'} /><Err msg={pwd.err} />
            <div><button type="submit" className="btn btn-sm" disabled={pwd.busy}>Change password</button></div></form>
        </section>
      </div>
      <section className="panel stack"><h2>Your data</h2>
        <p className="n">Download everything this account holds about you: your details, revision, marks and classrooms (as a JSON file). It doesn’t include notes a teacher keeps about students.</p>
        <div><button type="button" className="btn btn-sm" disabled={dl.busy} onClick={() => void dl.run(async () => {
          const text = await exportMyData(), url = URL.createObjectURL(new Blob([text], { type: 'application/json' })), a = document.createElement('a');
          a.href = url; a.download = 'tea-cher-my-data.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast('Data downloaded');
        })}>Download my data</button></div><Err msg={dl.err} />
      </section>
      <section className="panel stack"><h2>Sign out or delete</h2>
        <p className="n">Your deck, saved cases, playlists and marks are kept with your account, so they follow you to other devices. Signing out clears them from this device; sign in again to get them back.</p>
        <div className="list-actions"><button type="button" className="btn btn-sm" onClick={() => void signOut().then(() => { toast('Signed out'); nav('/'); })}>Sign out</button>
          <button type="button" className="btn btn-sm btn-danger" onClick={() => setConfirmDel(true)}>Delete my account</button></div>
        {confirmDel && <div className="confirm" role="alert"><span>Delete your account for good? Your profile and classroom membership are removed. Saved cases and marks on this device stay.</span><span className="list-actions">
          <button type="button" className="btn btn-sm btn-danger" disabled={del.busy} onClick={() => void del.run(async () => { await deleteAccount(); toast('Account deleted'); nav('/'); })}>Yes, delete it</button><button type="button" className="btn btn-sm" onClick={() => setConfirmDel(false)}>Keep it</button></span></div>}
        <Err msg={del.err} />
      </section>
    </Card>
  );
}

/* ---------- /account: where the nav's person icon goes while sign-in isn't ready, and the old address people may have saved ---------- */
export function AccountHome() {
  const mounted = useMounted(), a = useAuth();
  if (!mounted) return shell('Account', 'Account', 'Accounts let teachers run classrooms and students get homework.');
  if (!a.configured) return <Off />;
  if (a.ready && a.session) return <Navigate to="/profile" replace />;
  return (
    <Card title="Account" lede="Accounts let teachers run classrooms and students get homework. Revising and saving cases works without one.">
      <SchoolNote />
      <p className="cms-actions"><Link className="btn btn-primary" to="/login">Sign in</Link><Link className="btn" to="/signup">Create an account</Link></p>
    </Card>
  );
}
