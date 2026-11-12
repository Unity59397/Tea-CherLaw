/* "My classes" (student): join with a code, see homework and your progress on it, leave a classroom. */
import { Link } from 'react-router-dom';
import { Api, fail, type StudentClassRow } from '../cms/api';
import { codeOnly, dueInfo, pct } from '../cms/format';
import { useCmsSettled, useCmsUser } from '../cms/session';
import type { Assignment } from '../cms/types';
import { ClassShell } from '../components/Shell';
import { useUI } from '../components/UI';
import { AskButton, Bar, CmsHead, ConfirmRow, ErrBox, Gate, LinkBtn, useCms, useCmsPage, type CmsPage } from '../components/cms/common';
import { CodeForm, SeesNote } from '../components/cms/JoinParts';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { useMounted } from '../lib/store';
import type { Mark } from '../lib/types';
import { statusStore } from '../state/app';
import { useStartFeed } from '../state/run';

function Classroom({ c, asg, mine, data, page }: { c: StudentClassRow; asg: Assignment[]; mine: Record<string, { s: Mark }>; data: Data; page: CmsPage }) {
  const startFeed = useStartFeed(), me = useCmsUser();
  const name = (id: string) => (data.by[id] ? data.by[id].name : id);
  return (
    <section className="panel cls" aria-labelledby={'c-' + c.id}>
      <div className="sec-head"><div><h2 id={'c-' + c.id}>{c.name}</h2><p className="n">Teacher: {c.teacher}</p></div><AskButton page={page} k={'lv:' + c.id}>Leave</AskButton></div>
      <ConfirmRow page={page} k={'lv:' + c.id} text={'Leave “' + c.name + '”? Your teacher will no longer see your marks.'} yes="Yes, leave" onYes={() => void page.run(() => Api.classes.removeMember(c.id, me!.id), { ok: 'You left the classroom', focus: '#cm-title' })} />
      {asg.length ? (
        <div className="hw-list">{asg.map(a => {
          const n = a.caseIds.length, got = a.caseIds.filter(id => mine[id]?.s === 'got').length, again = a.caseIds.filter(id => mine[id]?.s === 'again').length;
          const state = got === n ? 'done' : got + again ? 'going' : 'new', di = dueInfo(a.due, state === 'done');
          return (
            <article className="card hw" key={a.id}>
              <div className="hw-h"><h4 className="card-t">{a.title}</h4><span className={'due ' + di.cls}>{di.text}</span></div>
              {a.note && <p className="hw-note">{a.note}</p>}
              <Bar p={pct(got, n)} label={got + ' of ' + n + ' cases got it'} />
              <p className="n"><span className={'pill pill-' + state}>{{ done: 'Done', going: 'In progress', new: 'Not started' }[state]}</span> {got} of {n} got it{again ? ' · ' + again + ' to revise again' : ''}</p>
              <details className="mini"><summary>Show the cases</summary><ul className="cs-list">{a.caseIds.map(id => {
                const m = mine[id]?.s;
                return <li className={'cs cs-' + (m || 'none')} key={id}>{m === 'got' ? <Icon.check /> : m === 'again' ? <Icon.again /> : <span className="cs-dot" aria-hidden="true">·</span>}<span className="sr">{m === 'got' ? 'Got it: ' : m === 'again' ? 'Revise again: ' : 'Not yet: '}</span><Link to={'/cases/' + id}>{name(id)}</Link></li>;
              })}</ul></details>
              <div className="list-actions"><button type="button" className="btn btn-primary btn-sm" onClick={() => startFeed(a.caseIds)}><Icon.book />Revise these {n}</button></div>
            </article>
          );
        })}</div>
      ) : <p className="n">No homework has been set yet.</p>}
    </section>
  );
}

function ClassView({ data }: { data: Data }) {
  const page = useCmsPage(), u = useCmsUser(), { toast } = useUI();
  const info = useCms(async () => {
    if (!u || u.role === 'teacher') return null;
    const [cls, mine] = await Promise.all([Api.classes.list() as Promise<StudentClassRow[]>, Api.progress.mine()]);
    const asg: Record<string, Assignment[]> = {};
    await Promise.all(cls.map(async c => { asg[c.id] = await Api.assignments.list(c.id); }));
    return { cls, mine, asg };
  }, [u?.id, u?.role]);
  if (!u) return <Gate title="My classes" msg="Sign in, or join with a class code, to see your classes and homework."><LinkBtn to="/login" primary>Sign in</LinkBtn><LinkBtn to="/join">I have a code</LinkBtn></Gate>;
  if (u.role === 'teacher') return <Gate title="My classes" msg="You’re signed in as a teacher. Your classrooms are on the Teach page."><LinkBtn to="/teach" primary>Go to Teach</LinkBtn></Gate>;
  if (!info) return <ClassShell />;
  const join = (raw: string) => void page.run(async () => {
    const code = codeOnly(raw);
    if (code.length !== 6) fail('invalid', 'The code has 6 digits.');
    await Api.progress.importMarks(statusStore.get());
    const r = await Api.invites.join(code);
    toast(r.already ? 'You’re already in “' + r.className + '”' : 'You joined “' + r.className + '”');
  }, { focus: '#cm-title' });
  return (
    <div className="wrap cms">
      <CmsHead eyebrow="Student" title="My classes" lede="Homework from your teachers, and how you’re getting on." />
      <ErrBox err={page.err} />
      {info.cls.length === 0 && <div className="empty"><p><strong>You’re not in a classroom yet.</strong></p><p>Ask your teacher for an invite link or a 6-digit code.</p></div>}
      {info.cls.map(c => <Classroom key={c.id} c={c} asg={info.asg[c.id] || []} mine={info.mine} data={data} page={page} />)}
      <section className="panel stack" aria-labelledby="h-join"><h2 id="h-join">Join a classroom</h2><p>Type the 6-digit code from your teacher, or open the invite link they sent.</p>
        <CodeForm btn="Join" onSubmit={join} /><SeesNote /></section>
    </div>
  );
}
export default function Class() {
  const mounted = useMounted(), data = useData(), settled = useCmsSettled();
  return mounted && data && settled ? <ClassView data={data} /> : <ClassShell />;
}
