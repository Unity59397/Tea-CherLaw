/* The invite page: opened from a teacher's link (/join#t=<token>) or by typing a 6-digit code (/join#c=<code>). */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api, fail } from '../cms/api';
import { codeOnly } from '../cms/format';
import { useCmsSettled, useCmsUser } from '../cms/session';
import { JoinShell } from '../components/Shell';
import { CmsHead, ErrBox, LinkBtn, hashParams, useCms, useCmsPage } from '../components/cms/common';
import { CodeForm, SeesNote } from '../components/cms/JoinParts';
import { useMounted } from '../lib/store';
import { statusStore } from '../state/app';

function JoinView() {
  const page = useCmsPage(), u = useCmsUser(), settled = useCmsSettled(), { hash } = useLocation();
  const q = hashParams(hash), key = q.get('t') || codeOnly(q.get('c'));
  const [joined, setJoined] = useState<{ name: string; already: boolean } | null>(null);
  useEffect(() => { setJoined(null); }, [hash]);
  const look = useCms(() => (key && u ? Api.invites.lookup(key) : Promise.resolve(null)), [key, u?.id]);
  const head = (t: string, l: string) => <CmsHead eyebrow="Join a classroom" title={t} lede={l} />;
  const askCode = (
    <section className="panel stack" aria-labelledby="h-code"><h2 id="h-code">Have a 6-digit code?</h2>
      <CodeForm btn="Continue" onSubmit={raw => void page.run(async () => { const c = codeOnly(raw); if (c.length !== 6) fail('invalid', 'The code has 6 digits.'); return 'c=' + c; })} /></section>
  );
  const doJoin = async () => { await Api.progress.importMarks(statusStore.get()); const r = await Api.invites.join(key); setJoined({ name: r.className, already: r.already }); };
  if (joined) return <div className="wrap cms">{head(joined.already ? 'You’re already in “' + joined.name + '”' : 'You’re in “' + joined.name + '”', 'Homework your teacher sets will appear under My classes.')}<p className="cms-actions"><LinkBtn to="/class" primary>Go to My classes</LinkBtn></p></div>;
  if (!settled) return <JoinShell />;
  if (!u) {                                                          // signed out: keep the invite for after sign-in, then send them back here
    if (key) { try { sessionStorage.setItem('tc.pendingJoin', hash); } catch { /* private mode */ } }
    return <div className="wrap cms">{head('Join your teacher’s classroom', 'Sign in with your school account to join. We’ll bring you back to this invite.')}<section className="panel stack"><p>Student accounts are made from <strong>@ndonline.ac.uk</strong> emails.</p><p className="cms-actions"><LinkBtn to="/login" primary>Sign in</LinkBtn><LinkBtn to="/signup">Create an account</LinkBtn></p></section></div>;
  }
  if (!key) return <div className="wrap cms">{head('Join your teacher’s classroom', 'Open the invite link your teacher sent, or type the 6-digit code.')}<ErrBox err={page.err} />{askCode}</div>;
  if (!look) return <JoinShell />;
  if (look.state === 'invalid') return <div className="wrap cms">{head('This invite doesn’t work', 'The link or code isn’t right. Check it with your teacher, or try the code below.')}<ErrBox err={page.err} />{askCode}</div>;
  if (look.state !== 'active') return <div className="wrap cms">{head('This invite has ' + (look.state === 'expired' ? 'expired' : 'been turned off'), 'Ask ' + look.teacher + ' for a new link or code for “' + look.className + '”.')}<ErrBox err={page.err} />{askCode}</div>;
  let action;
  if (u && u.role === 'teacher') action = <><p className="proto">You’re signed in as a teacher, and teacher accounts can’t join classrooms. Use a student account to join.</p><p className="cms-actions"><LinkBtn to="/teach" primary>Open the teacher dashboard</LinkBtn></p></>;
  else action = <div><button type="button" className="btn btn-primary" onClick={() => void page.run(doJoin, { focus: '#cm-title' })}>Join as {u.name}</button></div>;
  return <div className="wrap cms">{head('Join “' + look.className + '”', 'Taught by ' + look.teacher + '.')}<ErrBox err={page.err} /><section className="panel stack"><SeesNote />{action}</section></div>;
}
export default function Join() {
  const mounted = useMounted();
  return mounted ? <JoinView /> : <JoinShell />;
}
