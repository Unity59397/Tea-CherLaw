/* The teacher area: the dashboard, a classroom, or the playlist editor, depending on the address (see components/cms/TeachViews.tsx). */
import { useCmsSettled, useCmsUser } from '../cms/session';
import { TeachShell } from '../components/Shell';
import { Gate, LinkBtn, hashParams, useCmsPage } from '../components/cms/common';
import { Classroom, Dashboard, PlaylistEditor } from '../components/cms/TeachViews';
import { ROLES } from '../cms/session';
import { useData, type Data } from '../lib/data';
import { useMounted } from '../lib/store';

function TeachView({ data }: { data: Data }) {
  const page = useCmsPage(), u = useCmsUser(), q = hashParams(page.hash);
  if (!u) return <Gate title="Teacher area" msg="Sign in with a teacher account to run classrooms and set homework."><LinkBtn to="/login" primary>Sign in</LinkBtn></Gate>;
  if (u.role !== 'teacher') return <Gate title="Teacher area" msg={'This area is for teacher accounts. You’re signed in as a ' + ROLES[u.role].toLowerCase() + '.'}><LinkBtn to="/profile" primary>Your account</LinkBtn>{u.role === 'student' ? <LinkBtn to="/class">My classes</LinkBtn> : <LinkBtn to="/join">Join a class</LinkBtn>}</Gate>;
  const c = q.get('c'), p = q.get('p');
  if (c) return <Classroom id={c} tab={q.get('t') || 'progress'} page={page} data={data} />;
  if (p) return <PlaylistEditor pid={p} page={page} data={data} />;
  return <Dashboard page={page} />;
}
export default function Teach() {
  const mounted = useMounted(), data = useData(), settled = useCmsSettled();
  return mounted && data && settled ? <TeachView data={data} /> : <TeachShell />;
}
