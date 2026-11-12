/* Used at build time only (scripts/prerender.mjs): draws a page to HTML text, and lists every page the site has. */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import site from '../site.json';
import App, { type PageData } from './App';
import { UIProvider } from './components/UI';
import rawCases from './generated/cases.json';
import { buildData, setData } from './lib/data';
import { NOT_FOUND_META, STATIC_META, caseMeta, type PageMeta } from './lib/seo';
import { SUB, AREA, TOPIC } from './lib/taxonomy';
import type { Case } from './lib/types';
import { casePageData } from './pages/CasePage';
import { indexRows } from './pages/CasesIndex';

const data = buildData(rawCases as unknown as Case[]);
setData(data);

export interface BuiltPage { path: string; file: string; meta: PageMeta; page: PageData; jsonld?: object[] }
const abs = (p: string) => site.url + p;
const crumbs = (items: [string, string][]) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })) });

export function allPages(): BuiltPage[] {
  const out: BuiltPage[] = [];
  const fileOf = (p: string) => (p === '/' ? 'index.html' : p.endsWith('/') ? p.slice(1) + 'index.html' : p.slice(1) + '.html');
  for (const p of Object.keys(STATIC_META)) {
    const meta = STATIC_META[p];
    let page: PageData = null, jsonld: object[] | undefined;
    if (p === '/cases/') { page = { kind: 'index', rows: indexRows(data.cases) }; jsonld = [crumbs([['Home', abs('/')], ['All cases', abs('/cases/')]])]; }
    if (p === '/') jsonld = [{ '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': site.url + '/#website', name: site.name, url: site.url + '/', description: site.tagline + ' for OCR A Level Law (H418).', inLanguage: 'en-GB', publisher: { '@id': site.publisherUrl + '/#org' } },
      { '@type': 'Organization', '@id': site.publisherUrl + '/#org', name: site.publisher, url: site.publisherUrl }] }];
    out.push({ path: p, file: fileOf(p), meta, page, jsonld });
  }
  for (const c of data.cases) {
    const A = AREA[c.area], m = caseMeta(c);
    if (!SUB[c.sub] || !TOPIC[c.topic] || !A) throw new Error('case ' + c.id + ' has an unknown area, topic or sub-topic');
    out.push({ path: m.path, file: 'cases/' + c.id + '.html', meta: m, page: { kind: 'case', data: casePageData(data, c.id)! },
      jsonld: [crumbs([['Home', abs('/')], ['All cases', abs('/cases/')], [A.label, abs('/cases/#area-' + A.id)], [c.name, abs('/cases/' + c.id)]])] });
  }
  out.push({ path: '/404', file: '404.html', meta: NOT_FOUND_META, page: null });
  return out;
}

export function render(path: string, page: PageData, basename: string) {
  const b = basename.replace(/\/$/, '');
  const html = renderToString(
    <StaticRouter basename={b || undefined} location={b + (path === '/404' ? '/not-found-page' : path)}><UIProvider><App page={page} /></UIProvider></StaticRouter>
  );
  return html;
}
