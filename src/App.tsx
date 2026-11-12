import { Route, Routes, useParams } from 'react-router-dom';
import site from '../site.json';
import Layout from './components/Layout';
import { NotFound } from './components/Shell';
import { useData } from './lib/data';
import { caseMeta, useDocumentMeta } from './lib/seo';
import { AccountHome, AuthCallback, Forgot, Login, Profile, Signup } from './pages/AuthPages';
import CasePage, { casePageData, type CasePageData } from './pages/CasePage';
import CasesIndex, { indexRows, type IndexRow } from './pages/CasesIndex';
import Class from './pages/Class';
import Home from './pages/Home';
import Join from './pages/Join';
import Library from './pages/Library';
import Privacy from './pages/Privacy';
import Revise from './pages/Revise';
import Saved from './pages/Saved';
import Shared from './pages/Shared';
import Teach from './pages/Teach';

/** what the server worked out for the first page (a case, or the list of all cases), so that page needs no download of the cases */
export type PageData = { kind: 'case'; data: CasePageData } | { kind: 'index'; rows: IndexRow[] } | null;

function CaseRoute({ first }: { first: PageData }) {
  const { id = '' } = useParams(), all = useData();
  const page = first && first.kind === 'case' && first.data.c.id === id ? first.data : all ? casePageData(all, id) : null;
  useDocumentMeta(page ? caseMeta(page.c) : null, site.url);
  if (page) return <CasePage data={page} />;
  return all ? <NotFound /> : <div className="wrap" aria-busy="true" />;
}
function IndexRoute({ first }: { first: PageData }) {
  const all = useData();
  const rows = first && first.kind === 'index' ? first.rows : all ? indexRows(all.cases) : null;
  return rows ? <CasesIndex rows={rows} /> : <div className="wrap" aria-busy="true" />;
}

export default function App({ page }: { page: PageData }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="revise" element={<Revise />} />
        <Route path="saved" element={<Saved />} />
        <Route path="shared" element={<Shared />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="account" element={<AccountHome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="profile" element={<Profile />} />
        <Route path="auth/callback" element={<AuthCallback />} />
        <Route path="teach" element={<Teach />} />
        <Route path="class" element={<Class />} />
        <Route path="join" element={<Join />} />
        <Route path="cases" element={<IndexRoute first={page} />} />
        <Route path="cases/:id" element={<CaseRoute first={page} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
