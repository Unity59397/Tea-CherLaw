import { fileURLToPath } from 'node:url';
// Run after the build ("npm run check" does both). Checks dist/ the way a search engine and a visitor would: every page has a unique title, a
// description of a sensible length, a canonical link and one h1; every internal link, image and script exists; sitemap.xml lists every page.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), dist = path.join(root, 'dist');
const site = JSON.parse(fs.readFileSync(path.join(root, 'site.json'), 'utf8'));
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const files = walk(dist), pages = files.filter(f => f.endsWith('.html'));
const problems = [], titles = {}, descs = {}, idsIn = {};
const rel = f => path.relative(dist, f).split(path.sep).join('/');
const ids = f => idsIn[f] || (idsIn[f] = new Set([...fs.readFileSync(f, 'utf8').matchAll(/\sid="([^"]+)"/g)].map(m => m[1])));
const dec = s => s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&amp;/g, '&');

for (const f of pages) {
  const html = fs.readFileSync(f, 'utf8'), name = rel(f), bad = m => problems.push(name + ': ' + m);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1], desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  if (!title) bad('no <title>'); else { if (title.length > 120) bad('title is ' + title.length + ' characters'); if (titles[title]) bad('same title as ' + titles[title]); titles[title] = name; }
  if (!desc) bad('no meta description'); else { if (desc.length < 50 || desc.length > 170) bad('description is ' + desc.length + ' characters'); if (descs[desc]) bad('same description as ' + descs[desc]); descs[desc] = name; }
  if (!canon || !canon.startsWith(site.url)) bad('canonical link missing or on the wrong domain: ' + canon);
  const h1 = (html.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) bad('needs exactly one <h1> in the HTML (found ' + h1 + ')');
  if (/\{\{[A-Z_]+\}\}|<!--(head|app|data)-->/.test(html)) bad('leftover template marker');
  if (!/<div id="root">[\s\S]{200,}/.test(html)) bad('the page body is empty before JavaScript runs');
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { bad('invalid JSON-LD'); } }
  for (const m of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const u = dec(m[1]); if (!u || /^(https?:|mailto:|tel:|data:|javascript:|#)/.test(u)) continue;
    const [p, hash] = u.split('#'), clean = p.split('?')[0];
    if (clean + '/' === base) continue;   // the site's own home, written without the trailing slash
    if (!clean.startsWith(base)) { bad('link ' + u + ' is outside the site base ' + base); continue; }
    if (/\.html$/.test(clean)) bad('link ' + u + ' ends in .html (use the clean URL)');
    let t = path.join(dist, clean.slice(base.length));
    if (fs.existsSync(t) && fs.statSync(t).isDirectory()) t = path.join(t, 'index.html');
    if (!fs.existsSync(t) && fs.existsSync(t + '.html')) t += '.html';   // /library is served from library.html
    if (!fs.existsSync(t)) { bad('broken link ' + u); continue; }
    if (hash && t.endsWith('.html') && !ids(t).has(hash)) bad('link ' + u + ' points to an id that does not exist');
  }
}
const sm = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8'), locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const noindex = pages.filter(f => /<meta name="robots" content="noindex">/.test(fs.readFileSync(f, 'utf8'))).length;
if (locs.length !== pages.length - noindex) problems.push('sitemap.xml lists ' + locs.length + ' urls but there are ' + (pages.length - noindex) + ' indexable pages');
if (!fs.existsSync(path.join(dist, 'robots.txt'))) problems.push('robots.txt is missing');
for (const a of ['favicon.svg', 'og-image.jpg', 'apple-touch-icon.png']) if (!fs.existsSync(path.join(dist, a))) problems.push(a + ' is missing from dist');
console.log('Checked ' + pages.length + ' pages: ' + problems.length + ' problem(s).');
problems.slice(0, 40).forEach(p => console.log('  - ' + p));
if (problems.length > 40) console.log('  ... and ' + (problems.length - 40) + ' more');
process.exit(problems.length ? 1 : 0);
