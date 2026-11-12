/* The teacher's screens: the dashboard, one classroom (progress, homework, students, invite, settings) and the playlist editor.
   The address says what is open:  /teach (dashboard),  /teach#c=<classroom>&t=<tab>,  /teach#p=<playlist id or "new">. */
import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Api, ApiError, LIMITS, dayPlus, todayStr, type InviteState, type TeacherClass, type TeacherClassRow } from '../../cms/api';
import { downloadCsv, fileSafe } from '../../cms/csv';
import type { Assignment } from '../../cms/types';
import { agoText, dayDiff, dueInfo, fmtDay, pct, plural } from '../../cms/format';
import { Icon } from '../../lib/icons';
import { useData, type Data } from '../../lib/data';
import { copyText, shareUrl, siteUrl } from '../../lib/share';
import { useSaved } from '../../state/saved';
import { useUI } from '../UI';
import { AskButton, Bar, CmsHead, ConfirmRow, ErrBox, Gate, LinkBtn, focusSoon, useCms, type CmsPage } from './common';

const inviteText = (st: InviteState, code?: string, on?: string | null) =>
  st === 'active' ? 'Invite open · code ' + code + (on ? ' · until ' + fmtDay(on) : ' · no expiry') : st === 'expired' ? 'Invite expired' : st === 'off' ? 'Invite turned off' : 'No invite yet';
const BackLink = () => <p className="crumb"><Link to={{ hash: '' }}><Icon.back />All classrooms</Link></p>;
const NotFound = ({ title }: { title: string }) => <Gate title={title} msg="It may have been deleted."><LinkBtn to={{ hash: '' }} primary>Back to your classrooms</LinkBtn></Gate>;

/* ---------- dashboard ---------- */
export function Dashboard({ page }: { page: CmsPage }) {
  const info = useCms(async () => ({ cls: (await Api.classes.list()) as TeacherClassRow[], pls: await Api.playlists.list() }));
  const [name, setName] = useState('');
  if (!info) return null;
  const create = (e: FormEvent) => { e.preventDefault(); void page.run(async () => { const c = await Api.classes.create({ name }); setName(''); return 'c=' + c.id + '&t=invite'; }, { focus: '#nc-name' }); };
  return (
    <div className="wrap cms">
      <CmsHead eyebrow="Teacher" title="Your classrooms" lede="Create classrooms, build playlists of cases, set homework and see how each student is getting on." />
      <ErrBox err={page.err} />
      <section aria-labelledby="h-cl" className="cms-sec"><div className="sec-head"><h2 id="h-cl">Classrooms</h2></div>
        <form className="inline-form" onSubmit={create}><label className="sr" htmlFor="nc-name">Classroom name</label><input className="txt" id="nc-name" name="name" maxLength={40} placeholder="New classroom, e.g. Year 13 Law" autoComplete="off" value={name} onChange={e => setName(e.target.value)} /><button type="submit" className="btn btn-primary"><Icon.plus />Create classroom</button></form>
        {info.cls.length ? <div className="grid">{info.cls.map(c => (
          <article className="card" key={c.id}><h3 className="card-t"><Link to={{ hash: '#c=' + c.id }}>{c.name}</Link></h3><p className="n">{plural(c.students, 'student')} · {plural(c.homework, 'homework set')}</p>
            <p className={'inv inv-' + c.invite}>{inviteText(c.invite, c.code, c.expiresOn)}</p><p className="card-go"><Link className="btn btn-sm" to={{ hash: '#c=' + c.id }}>Open classroom</Link></p></article>
        ))}</div> : <div className="empty"><p><strong>No classrooms yet.</strong></p><p>Create one below. It comes with an invite link and a 6-digit code to give your students.</p></div>}
      </section>
      <section aria-labelledby="h-pl" className="cms-sec"><div className="sec-head"><h2 id="h-pl">Playlists</h2><Link className="btn btn-sm" to={{ hash: '#p=new' }}><Icon.plus />New playlist</Link></div>
        {info.pls.length ? <div className="grid">{info.pls.map(p => (
          <article className="card" key={p.id}><h3 className="card-t"><Link to={{ hash: '#p=' + p.id }}>{p.name}</Link></h3><p className="n">{plural(p.ids.length, 'case')}</p><p className="card-go"><Link className="btn btn-sm" to={{ hash: '#p=' + p.id }}>Edit playlist</Link></p></article>
        ))}</div> : <div className="empty"><p><strong>No playlists yet.</strong></p><p>A playlist is a set of cases you choose. Set one as homework for a classroom.</p></div>}
      </section>
    </div>
  );
}

/* ---------- one classroom ---------- */
const TABS: Array<[string, string]> = [['progress', 'Progress'], ['homework', 'Homework'], ['students', 'Students'], ['invite', 'Invite'], ['settings', 'Settings']];
export function Classroom({ id, tab: want, page, data }: { id: string; tab: string; page: CmsPage; data: Data }) {
  const c = useCms(async () => { try { return (await Api.classes.get(id)) as TeacherClass; } catch { return null; } }, [id]);
  if (c === undefined) return null;
  if (c === null) return <NotFound title="Classroom not found" />;
  const tab = TABS.some(t => t[0] === want) ? want : 'progress';
  return (
    <div className="wrap cms"><BackLink /><CmsHead eyebrow="Classroom" title={c.name} lede={plural(c.members.length, 'student')} /><ErrBox err={page.err} />
      <nav className="tabs" aria-label="Classroom sections">{TABS.map(t => <Link key={t[0]} className="chip tab" to={{ hash: '#c=' + c.id + '&t=' + t[0] }} aria-current={t[0] === tab ? 'page' : undefined}>{t[1]}</Link>)}</nav>
      {tab === 'progress' ? <TabProgress c={c} data={data} page={page} /> : tab === 'homework' ? <TabHomework c={c} page={page} /> : tab === 'students' ? <TabStudents c={c} page={page} /> : tab === 'invite' ? <TabInvite c={c} page={page} /> : <TabSettings c={c} page={page} />}
    </div>
  );
}

/** homework that applies to a student: the whole classroom's, or set for chosen students only */
const forStudent = (a: Assignment, sid: string) => !a.studentIds || a.studentIds.includes(sid);

/** a teacher's private note on one student (students never see it) */
function NoteBox({ c, sid, name, saved, page }: { c: TeacherClass; sid: string; name: string; saved: string; page: CmsPage }) {
  const [v, setV] = useState(saved), id = 'note-' + sid;
  return (
    <form className="note-box" onSubmit={e => { e.preventDefault(); void page.run(() => Api.notes.set(c.id, sid, v), { ok: v.trim() ? 'Note saved' : 'Note removed' }); }}>
      <label htmlFor={id}>Your private note on {name} <span className="n">(only you can see this)</span></label>
      <textarea className="txt" id={id} rows={3} maxLength={1000} value={v} onChange={e => setV(e.target.value)} />
      <div className="note-foot"><button type="submit" className="btn btn-sm" disabled={v === saved}>Save note</button><span className="n">{v.length}/1000</span></div>
    </form>
  );
}

/** progress: every student against the homework that has been set for them */
function TabProgress({ c, data, page }: { c: TeacherClass; data: Data; page: CmsPage }) {
  const info = useCms(async () => ({ asg: await Api.assignments.list(c.id), stu: await Api.progress.forClass(c.id), notes: await Api.notes.list(c.id) }), [c.id]);
  if (!info) return null;
  const { asg, stu, notes } = info, caseName = (id: string) => (data.by[id] ? data.by[id].name : id);
  if (!stu.length) return <div className="empty"><p><strong>No students yet.</strong></p><p>Give them the invite link or code and they will appear here. <Link to={{ hash: '#c=' + c.id + '&t=invite' }}>Open the invite</Link></p></div>;
  const mineOf = (sid: string) => asg.filter(a => forStudent(a, sid));
  const rows = stu.map(s => { const mine = mineOf(s.id); let got = 0; const slots = mine.reduce((n, a) => n + a.caseIds.length, 0); mine.forEach(a => a.caseIds.forEach(id => { if (s.marks[id] === 'got') got++; })); return { s, mine, got, slots }; });
  const allSlots = rows.reduce((n, r) => n + r.slots, 0), avg = allSlots ? pct(rows.reduce((n, r) => n + r.got, 0), allSlots) : null;
  const behind = rows.filter(r => r.mine.some(a => a.due && dayDiff(a.due) < 0 && a.caseIds.some(id => r.s.marks[id] !== 'got'))).length;
  const tally: Record<string, { again: number; got: number; of: number }> = {};
  rows.forEach(r => { const seen: Record<string, boolean> = {}; r.mine.forEach(a => a.caseIds.forEach(id => { if (seen[id]) return; seen[id] = true; const t = tally[id] || (tally[id] = { again: 0, got: 0, of: 0 }); t.of++; if (r.s.marks[id] === 'again') t.again++; else if (r.s.marks[id] === 'got') t.got++; })); });
  const hard = Object.keys(tally).filter(id => tally[id].again > 0).sort((a, b) => tally[b].again - tally[a].again || tally[a].got - tally[b].got).slice(0, 5);
  const mark = (m?: string) => (m === 'got' ? <Icon.check /> : m === 'again' ? <Icon.again /> : <span className="cs-dot" aria-hidden="true">·</span>);
  const stamp = (t: number | null) => (t ? new Date(t).toISOString().slice(0, 10) : '');
  const word = (m?: string) => (m === 'got' ? 'Got it' : m === 'again' ? 'Revise again' : 'Not yet');
  const exportSummary = () => downloadCsv(fileSafe(c.name) + '-progress.csv', [['Student', 'Homework cases set', 'Got it', 'Revise again', 'Not yet', 'Overdue and unfinished homework', 'All revision: got it', 'All revision: revise again', 'Last revised'],
    ...rows.map(r => { const ag = r.mine.reduce((n, a) => n + a.caseIds.filter(id => r.s.marks[id] === 'again').length, 0); const od = r.mine.filter(a => a.due && dayDiff(a.due) < 0 && a.caseIds.some(id => r.s.marks[id] !== 'got')).length; return [r.s.name, r.slots, r.got, ag, r.slots - r.got - ag, od, r.s.got, r.s.again, stamp(r.s.lastActive)]; })]);
  const exportMarks = () => downloadCsv(fileSafe(c.name) + '-marks.csv', [['Student', 'Homework', 'Due', 'Case', 'Mark'],
    ...rows.flatMap(r => r.mine.flatMap(a => a.caseIds.map(id => [r.s.name, a.title, a.due || '', caseName(id), word(r.s.marks[id])])))]);
  return (
    <>
      <ul className="tiles"><li><span className="tile-n">{stu.length}</span><span>Students</span></li><li><span className="tile-n">{asg.length}</span><span>Homework set</span></li>
        <li><span className="tile-n">{avg == null ? '–' : avg + '%'}</span><span>Homework got it</span></li><li><span className="tile-n">{asg.length ? behind : '–'}</span><span>Behind on overdue work</span></li></ul>
      {hard.length > 0 && <section className="panel" aria-labelledby="h-hard"><h2 id="h-hard">Cases the class finds hardest</h2><ol className="hard">{hard.map(id => <li key={id}><Link to={'/cases/' + id}>{caseName(id)}</Link> <span className="n">{tally[id].again} of {tally[id].of} marked Revise again</span></li>)}</ol></section>}
      <section aria-labelledby="h-stu" className="cms-sec"><div className="sec-head"><h2 id="h-stu">Students</h2>
        <div className="head-actions"><button type="button" className="btn btn-sm" onClick={exportSummary}>Download summary (CSV)</button><button type="button" className="btn btn-sm" onClick={exportMarks} disabled={!allSlots}>Download every mark (CSV)</button></div></div>
        <p className="n sec-note">Students are told that you can see their marks on homework cases, and that you can keep private notes about them. Open a student to see each case.</p>
        <div className="stu-list">{rows.map(({ s, mine, got, slots }) => (
          <details className="stu" key={s.id}>
            <summary><span className="stu-n">{s.name}</span><span className="stu-bar">{slots > 0 && <Bar p={pct(got, slots)} label={s.name + ': ' + got + ' of ' + slots + ' homework cases got it'} />}</span><span className="n stu-c">{slots ? got + '/' + slots : ''}</span><span className="n stu-last">Last revised: {agoText(s.lastActive)}</span></summary>
            <div className="stu-body"><p className="n">All revision: {plural(s.got, 'case')} marked Got it, {plural(s.again, 'case')} marked Revise again.</p>
              {mine.length ? mine.map(a => {
                const g = a.caseIds.filter(id => s.marks[id] === 'got').length, ag = a.caseIds.filter(id => s.marks[id] === 'again').length, n = a.caseIds.length, di = dueInfo(a.due, g === n);
                return (
                  <div className="hw-row" key={a.id}><div className="hw-h"><strong>{a.title}</strong>{a.studentIds && <span className="n"> (set for chosen students)</span>}<span className={'due ' + di.cls}>{di.text}</span></div><Bar p={pct(g, n)} label={g + ' of ' + n + ' cases got it'} />
                    <p className="n">{g} of {n} got it · {ag} revise again · {n - g - ag} not yet</p>
                    <ul className="cs-list">{a.caseIds.map(id => { const m = s.marks[id]; return <li className={'cs cs-' + (m || 'none')} key={id}>{mark(m)}<span className="sr">{word(m)}: </span>{caseName(id)}</li>; })}</ul></div>
                );
              }) : <p className="n">No homework has been set for this student yet.</p>}
              <NoteBox key={s.id + ':' + (notes[s.id] || '')} c={c} sid={s.id} name={s.name} saved={notes[s.id] || ''} page={page} />
            </div>
          </details>
        ))}</div>
      </section>
    </>
  );
}

/** homework */
function TabHomework({ c, page }: { c: TeacherClass; page: CmsPage }) {
  const info = useCms(async () => ({ asg: await Api.assignments.list(c.id), pls: await Api.playlists.list(), stu: await Api.progress.forClass(c.id) }), [c.id]);
  const [list, setList] = useState(''), [title, setTitle] = useState(''), [due, setDue] = useState(''), [note, setNote] = useState(''), [who, setWho] = useState<'all' | 'some'>('all'), [pick, setPick] = useState<string[]>([]);
  if (!info) return null;
  const { asg, pls, stu } = info;
  const submit = (e: FormEvent) => {
    e.preventDefault();
    void page.run(async () => {
      if (who === 'some' && !pick.length) throw new ApiError('invalid', 'Choose at least one student, or set it for the whole classroom.');
      const p = await Api.playlists.get(list || pls[0].id);
      await Api.assignments.create(c.id, { title: title.trim() || p.name, note, due: due || null, caseIds: p.ids, studentIds: who === 'some' ? pick : null });
      setTitle(''); setDue(''); setNote(''); setWho('all'); setPick([]);
    }, { ok: 'Homework set' });
  };
  return (
    <div className="cols">
      {pls.length ? (
        <form className="panel stack" onSubmit={submit}><h2>Set homework</h2>
          <label htmlFor="hw-list">Playlist</label><select className="txt" id="hw-list" name="list" value={list || pls[0].id} onChange={e => setList(e.target.value)}>{pls.map(p => <option key={p.id} value={p.id}>{p.name} ({plural(p.ids.length, 'case')})</option>)}</select>
          <label htmlFor="hw-title">Title <span className="n">(optional, defaults to the playlist name)</span></label><input className="txt" id="hw-title" name="title" maxLength={60} autoComplete="off" value={title} onChange={e => setTitle(e.target.value)} />
          <label htmlFor="hw-due">Due date <span className="n">(optional)</span></label><input className="txt" type="date" id="hw-due" name="due" min={todayStr()} value={due} onChange={e => setDue(e.target.value)} />
          <label htmlFor="hw-note">Note for students <span className="n">(optional)</span></label><textarea className="txt" id="hw-note" name="note" rows={2} maxLength={300} value={note} onChange={e => setNote(e.target.value)} />
          <fieldset className="who"><legend>Who is it for?</legend>
            <label className="opt"><input type="radio" name="who" checked={who === 'all'} onChange={() => setWho('all')} />Everyone in this classroom</label>
            <label className="opt"><input type="radio" name="who" checked={who === 'some'} onChange={() => setWho('some')} disabled={!c.members.length} />Chosen students only</label>
            {who === 'some' && <ul className="plain who-list">{c.members.map(m => <li key={m.id}><label className="opt"><input type="checkbox" checked={pick.includes(m.id)} onChange={e => setPick(e.target.checked ? [...pick, m.id] : pick.filter(x => x !== m.id))} />{m.name}</label></li>)}</ul>}
          </fieldset>
          <p className="n">Students get a copy of the playlist as it is now. Changing the playlist later won’t change this homework.</p>
          <div><button type="submit" className="btn btn-primary">Set homework</button></div>
        </form>
      ) : <div className="empty"><p><strong>Make a playlist first.</strong></p><p>Homework is a playlist of cases. <Link to={{ hash: '#p=new' }}>Create a playlist</Link>, then come back.</p></div>}
      <section aria-labelledby="h-hwl"><h2 id="h-hwl" className="sub-h">Set homework</h2>
        {asg.length ? <div className="hw-list">{asg.map(a => {
          const aud = stu.filter(s => forStudent(a, s.id)), slots = a.caseIds.length * aud.length, got = aud.reduce((n, s) => n + a.caseIds.filter(id => s.marks[id] === 'got').length, 0), di = dueInfo(a.due, false);
          const forWho = a.studentIds ? 'For ' + a.studentIds.map(id => (c.members.find(m => m.id === id) || { name: 'a student who has left' }).name).join(', ') : 'For everyone';
          return (
            <article className="card hw" key={a.id}><div className="hw-h"><h3 className="card-t">{a.title}</h3><span className={'due ' + di.cls}>{di.text}</span></div>
              <p className="n">{plural(a.caseIds.length, 'case')} · {forWho}{aud.length ? ' · ' + pct(got, slots) + '% got it across ' + plural(aud.length, 'student') : ''}</p>{a.note && <p className="hw-note">{a.note}</p>}
              <details className="mini"><summary>Show the cases</summary><ul className="plain">{a.caseIds.map(id => <li key={id}><CaseName id={id} /></li>)}</ul></details>
              <div className="list-actions"><AskButton page={page} k={'hw:' + a.id} className="btn btn-sm btn-danger"><Icon.trash />Remove</AskButton></div>
              <ConfirmRow page={page} k={'hw:' + a.id} text={'Remove “' + a.title + '” for everyone in this classroom?'} yes="Yes, remove it" onYes={() => void page.run(() => Api.assignments.remove(a.id), { ok: 'Homework removed', focus: '#cm-title' })} />
            </article>
          );
        })}</div> : <div className="empty"><p><strong>No homework set.</strong></p></div>}
      </section>
    </div>
  );
}
function CaseName({ id }: { id: string }) { const d = useData(); return <>{d?.by[id]?.name || id}</>; }

/** students */
function TabStudents({ c, page }: { c: TeacherClass; page: CmsPage }) {
  if (!c.members.length) return <div className="empty"><p><strong>No students yet.</strong></p><p><Link to={{ hash: '#c=' + c.id + '&t=invite' }}>Open the invite</Link> to share the link or code.</p></div>;
  return (
    <ul className="panel rows" aria-label="Students">{c.members.map(m => (
      <li key={m.id}><span className="row-n">{m.name}</span><AskButton page={page} k={'st:' + m.id} className="btn btn-sm btn-danger">Remove</AskButton>
        <ConfirmRow page={page} k={'st:' + m.id} text={'Remove ' + m.name + ' from this classroom? Their own account and marks are not deleted.'} yes="Yes, remove" onYes={() => void page.run(() => Api.classes.removeMember(c.id, m.id), { ok: 'Student removed', focus: '#cm-title' })} /></li>
    ))}</ul>
  );
}

/** invite: a link and a 6-digit code, with an optional expiry date */
function TabInvite({ c, page }: { c: TeacherClass; page: CmsPage }) {
  const { toast } = useUI(), inv = c.invite, st: InviteState = inv ? inv.state : 'none';
  const [date, setDate] = useState(inv?.expiresOn || '');
  useEffect(() => { setDate(inv?.expiresOn || ''); }, [inv?.expiresOn, inv?.token]);
  const label = { active: 'Open', expired: 'Expired', off: 'Turned off', none: 'None yet' }[st];
  const status = <p className="inv-status">Invite status: <span className={'pill pill-' + st}>{label}</span>{st === 'active' ? (inv!.expiresOn ? ' Expires at the end of ' + fmtDay(inv!.expiresOn) + '.' : ' It does not expire.') : st === 'expired' ? ' It stopped working at the end of ' + fmtDay(inv!.expiresOn!) + '.' : ''}</p>;
  if (!inv || st === 'none' || st === 'off') {
    return (
      <>{status}
        <form className="panel stack" onSubmit={e => { e.preventDefault(); void page.run(() => Api.invites.create(c.id, { expiresOn: date || null }), { ok: 'Invite created' }); }}><h2>Create an invite</h2><p>This makes a new link and a new 6-digit code. Students can use either one.</p>
          <label htmlFor="iv-date">Expiry date <span className="n">(optional, leave blank for no expiry)</span></label><input className="txt" type="date" id="iv-date" name="date" min={todayStr()} value={date} onChange={e => setDate(e.target.value)} /><div><button type="submit" className="btn btn-primary">Create invite</button></div></form>
      </>
    );
  }
  const u = new URL(siteUrl('join')); u.hash = 't=' + inv.token; const link = u.href, dead = st === 'expired';
  const copy = (text: string, done: string) => void copyText(text).then(ok => toast(ok ? done : 'Copy this: ' + text));
  const setDays = (d: number) => void page.run(() => Api.invites.setExpiry(c.id, d ? dayPlus(d) : null), { ok: d ? 'Expiry set' : 'The invite no longer expires' });
  return (
    <>{status}
      <div className={'share-grid' + (dead ? ' is-dead' : '')}>
        <section className="panel stack" aria-labelledby="h-lk"><h2 id="h-lk">Invite link</h2><p className="n">Send this in a message or post it where your class will see it.</p>
          <input className="txt mono" readOnly value={link} aria-labelledby="h-lk" onFocus={e => e.currentTarget.select()} />
          <div className="list-actions"><button type="button" className="btn btn-primary btn-sm" onClick={() => copy(link, 'Link copied')}><Icon.copy />Copy link</button>
            <button type="button" className="btn btn-sm" onClick={() => void shareUrl({ title: 'Join ' + c.name + ' on Tea-cher', text: 'Join ' + c.name + ' on Tea-cher', url: link }, toast)}><Icon.share />Share</button></div></section>
        <section className="panel stack" aria-labelledby="h-cd"><h2 id="h-cd">6-digit code</h2><p className="n">Students type this on the “My classes” page.</p>
          <p className="code" role="img" aria-label={'Code ' + inv.code.split('').join(' ')}>{inv.code.slice(0, 3) + ' ' + inv.code.slice(3)}</p>
          <div className="list-actions"><button type="button" className="btn btn-primary btn-sm" onClick={() => copy(inv.code, 'Code copied')}><Icon.copy />Copy code</button></div></section>
      </div>
      <div className="cols">
        <section className="panel stack" aria-labelledby="h-ex"><h2 id="h-ex">Expiry</h2><p>{inv.expiresOn ? <>Works until the end of <strong>{fmtDay(inv.expiresOn)}</strong>.</> : 'Never expires.'} Students already in the classroom stay in it.</p>
          <div className="list-actions"><button type="button" className="btn btn-sm" onClick={() => setDays(7)}>Expire in 1 week</button><button type="button" className="btn btn-sm" onClick={() => setDays(30)}>Expire in 1 month</button><button type="button" className="btn btn-sm" disabled={!inv.expiresOn} onClick={() => setDays(0)}>No expiry</button></div>
          <form className="inline-form" onSubmit={e => { e.preventDefault(); void page.run(() => Api.invites.setExpiry(c.id, date), { ok: 'Expiry date set' }); }}><label htmlFor="iv-date" className="n">Or pick a date</label><input className="txt" type="date" id="iv-date" name="date" min={todayStr()} value={date} onChange={e => setDate(e.target.value)} required /><button type="submit" className="btn btn-sm">Set date</button></form></section>
        <section className="panel stack"><h2>Change or stop the invite</h2>
          <div className="list-actions"><AskButton page={page} k="invnew">New link and code</AskButton><AskButton page={page} k="invoff" className="btn btn-sm btn-danger">Turn invite off</AskButton></div>
          <ConfirmRow page={page} k="invnew" text="Make a new link and code? The current ones stop working straight away." yes="Yes, make new ones" onYes={() => void page.run(() => Api.invites.create(c.id, { expiresOn: inv.expiresOn && inv.expiresOn >= todayStr() ? inv.expiresOn : null }), { ok: 'New link and code made' })} />
          <ConfirmRow page={page} k="invoff" text="Turn the invite off? Nobody new can join until you create another." yes="Yes, turn it off" onYes={() => void page.run(() => Api.invites.revoke(c.id), { ok: 'Invite turned off' })} /></section>
      </div>
    </>
  );
}

/** settings */
function TabSettings({ c, page }: { c: TeacherClass; page: CmsPage }) {
  const [name, setName] = useState(c.name);
  useEffect(() => { setName(c.name); }, [c.id, c.name]);
  return (
    <div className="cols">
      <form className="panel stack" onSubmit={e => { e.preventDefault(); void page.run(() => Api.classes.rename(c.id, name), { ok: 'Name saved' }); }}><h2>Rename classroom</h2><label htmlFor="rc-name">Name</label><input className="txt" id="rc-name" name="name" maxLength={40} value={name} onChange={e => setName(e.target.value)} autoComplete="off" /><div><button type="submit" className="btn btn-primary">Save name</button></div></form>
      <section className="panel stack"><h2>Delete classroom</h2><p>This removes the classroom, its homework and its students’ place in it. Their own accounts and marks are not deleted.</p><div><AskButton page={page} k="cdel" className="btn btn-danger"><Icon.trash />Delete classroom</AskButton></div>
        <ConfirmRow page={page} k="cdel" text={'Delete “' + c.name + '” for good?'} yes="Yes, delete it" onYes={() => void page.run(async () => { await Api.classes.remove(c.id); return ''; }, { ok: 'Classroom deleted' })} /></section>
    </div>
  );
}

/* ---------- playlist editor ---------- */
interface Draft { key: string; id: string | null; name: string; ids: string[] }
export function PlaylistEditor({ pid, page, data }: { pid: string; page: CmsPage; data: Data }) {
  const { toast } = useUI(), { saved, lists } = useSaved();
  const loaded = useCms(async () => (pid === 'new' ? { id: null as string | null, name: '', ids: [] as string[] } : Api.playlists.get(pid).catch(() => null)), [pid]);
  const [draft, setDraft] = useState<Draft | null>(null), [q, setQ] = useState(''), [src, setSrc] = useState('');
  useEffect(() => { if (loaded && (!draft || draft.key !== pid)) { setDraft({ key: pid, id: loaded.id, name: loaded.name, ids: loaded.ids.slice() }); setQ(''); } }, [loaded, pid, draft]);
  if (loaded === undefined) return null;
  if (loaded === null) return <NotFound title="Playlist not found" />;
  if (!draft || draft.key !== pid) return null;
  const d = draft, set = (patch: Partial<Draft>) => setDraft({ ...d, ...patch });
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = terms.length ? data.cases.filter(c => { const h = (c.name + ' ' + c.year + ' ' + c.cite + ' ' + (c.tags || []).join(' ')).toLowerCase(); return terms.every(w => h.indexOf(w) >= 0); }).slice(0, 12) : [];
  const toggle = (id: string) => set({ ids: d.ids.indexOf(id) >= 0 ? d.ids.filter(x => x !== id) : [...d.ids, id] });
  const drop = (id: string) => { const i = d.ids.indexOf(id); set({ ids: d.ids.filter(x => x !== id) }); focusSoon(d.ids.length > 1 ? '#pl-list li:nth-child(' + Math.min(i + 1, d.ids.length - 1) + ') [data-drop]' : '#pl-q'); };
  const move = (id: string, dir: number) => { const i = d.ids.indexOf(id), j = i + dir; if (i < 0 || j < 0 || j >= d.ids.length) return; const a = d.ids.slice(); a.splice(j, 0, a.splice(i, 1)[0]); set({ ids: a }); focusSoon('#pl-list [data-id="' + id + '"][data-d="' + dir + '"]'); };
  const importCases = () => {
    const from = src ? (lists.find(l => l.id === src)?.ids || []) : saved; let n = 0; const ids = d.ids.slice();
    from.forEach(id => { if (data.by[id] && ids.indexOf(id) < 0 && ids.length < LIMITS.listCases) { ids.push(id); n++; } });
    set({ ids }); toast(n ? 'Added ' + plural(n, 'case') : 'Those cases are already in the playlist');
  };
  const save = (e: FormEvent) => { e.preventDefault(); void page.run(async () => { await Api.playlists.save({ id: d.id, name: d.name, ids: d.ids }); return ''; }, { ok: 'Playlist saved' }); };
  const nm = (id: string) => data.by[id]?.name || id;
  return (
    <div className="wrap cms"><BackLink /><CmsHead eyebrow="Playlist" title={d.id ? 'Edit playlist' : 'New playlist'} /><ErrBox err={page.err} />
      <form className="panel stack ed" onSubmit={save}>
        <label htmlFor="pl-name">Playlist name</label><input className="txt" id="pl-name" name="name" maxLength={60} value={d.name} onChange={e => set({ name: e.target.value })} autoComplete="off" />
        <h2 className="sub-h">Cases in this playlist <span className="n" id="pl-count">({d.ids.length})</span></h2>
        <div id="pl-list">{d.ids.length ? <ol className="plist">{d.ids.map((id, i) => (
          <li key={id}><span className="pick-n">{nm(id)} <span className="n">{data.by[id]?.year}</span></span><span className="list-actions">
            <button type="button" className="icon-btn" data-id={id} data-d="-1" aria-label={'Move ' + nm(id) + ' up'} disabled={i === 0} onClick={() => move(id, -1)}><Icon.up /></button>
            <button type="button" className="icon-btn" data-id={id} data-d="1" aria-label={'Move ' + nm(id) + ' down'} disabled={i === d.ids.length - 1} onClick={() => move(id, 1)}><Icon.down /></button>
            <button type="button" className="icon-btn" data-drop data-id={id} aria-label={'Remove ' + nm(id)} onClick={() => drop(id)}><Icon.close /></button></span></li>
        ))}</ol> : <p className="n">No cases yet. Search below, or add from your saved cases.</p>}</div>
        <h2 className="sub-h">Add cases</h2><label className="sr" htmlFor="pl-q">Search cases</label><input className="txt" id="pl-q" type="search" placeholder="Search by case name, year or topic" value={q} onChange={e => setQ(e.target.value)} autoComplete="off" />
        <div id="pl-res" aria-live="polite">{!q.trim() ? <p className="n">Type a case name, a year or a topic.</p> : matches.length ? (
          <ul className="pick">{matches.map(c => { const on = d.ids.indexOf(c.id) >= 0; return <li key={c.id}><span className="pick-n">{c.name} <span className="n">{c.year}</span></span><button type="button" className={'btn btn-sm' + (on ? '' : ' btn-primary')} data-id={c.id} aria-label={(on ? 'Remove ' : 'Add ') + c.name} onClick={() => toggle(c.id)}>{on ? 'Remove' : 'Add'}</button></li>; })}</ul>
        ) : <p className="n">No cases match “{q.trim()}”.</p>}</div>
        {saved.length || lists.length ? (
          <div className="inline-form"><label className="sr" htmlFor="pl-imp">Add from my saved cases</label><select className="txt" id="pl-imp" value={src} onChange={e => setSrc(e.target.value)}><option value="">All saved cases ({saved.length})</option>{lists.map(l => <option key={l.id} value={l.id}>Playlist: {l.name} ({l.ids.length})</option>)}</select><button type="button" className="btn btn-sm" onClick={importCases}>Add these cases</button></div>
        ) : <p className="n">Cases you bookmark on this device can be added here in one go.</p>}
        <div className="list-actions ed-go"><button type="submit" className="btn btn-primary">Save playlist</button><Link className="btn" to={{ hash: '' }}>Cancel</Link>{d.id && <AskButton page={page} k="pdel" className="btn btn-danger"><Icon.trash />Delete</AskButton>}</div>
        {d.id && <ConfirmRow page={page} k="pdel" text="Delete this playlist? Homework already set from it is not affected." yes="Yes, delete it" onYes={() => void page.run(async () => { await Api.playlists.remove(d.id!); return ''; }, { ok: 'Playlist deleted' })} />}
      </form>
    </div>
  );
}
