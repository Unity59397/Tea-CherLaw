import { fileURLToPath } from 'node:url';
// Runs after "vite build" and the server build. Writes one finished HTML file per page into dist/ (the React app is drawn to text, so the page
// has real content before any JavaScript runs), plus sitemap.xml and robots.txt. Pages the app draws itself stay as an HTML shell and hydrate.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import crypto from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist'), ssrDir = path.join(root, 'dist-ssr');
const site = JSON.parse(fs.readFileSync(path.join(root, 'site.json'), 'utf8'));
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const ssr = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
for (const m of ['<!--head-->', '<!--app-->', '<!--data-->']) if (!template.includes(m)) throw new Error('dist/index.html template lost ' + m);

// Content-Security-Policy (a <meta> tag, because GitHub Pages can't send headers): only our own scripts and the exact inline snippets in index.html may run,
// and the page may only talk to itself and to Supabase. That is the main defence against injected script (XSS). Hashes are computed here so they can't go stale.
const sha = t => "'sha256-" + crypto.createHash('sha256').update(t).digest('base64') + "'";
const inlineScripts = [...template.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => sha(m[1]));
const handlers = [...template.matchAll(/\son(?:load|error|click)="([^"]*)"/g)].map(m => sha(m[1]));
let supa = ''; try { if (process.env.VITE_SUPABASE_URL) supa = ' ' + new URL(process.env.VITE_SUPABASE_URL).origin; } catch { /* not set */ }
const csp = ["default-src 'self'", "script-src 'self' " + inlineScripts.join(' ') + (handlers.length ? " 'unsafe-hashes' " + handlers.join(' ') : ''),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", "font-src 'self' https://fonts.gstatic.com", "img-src 'self' data:", 'connect-src \'self\'' + supa,
  "object-src 'none'", "base-uri 'self'", "form-action 'self'"].join('; ');
template = template.replace('<head>', '<head>\n<meta http-equiv="Content-Security-Policy" content="' + csp + '">\n<meta name="referrer" content="strict-origin-when-cross-origin">');
if (!template.includes('Content-Security-Policy')) throw new Error('could not add the Content-Security-Policy');
const attr = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ld = o => '<script type="application/ld+json">' + JSON.stringify(o).replace(/</g, '\\u003c') + '</script>';
function head(p) {
  const m = p.meta, url = site.url + m.path, img = site.url + '/og-image.jpg';
  return [
    '<title>' + attr(m.title).replace(/&quot;/g, '"') + '</title>',
    '<meta name="description" content="' + attr(m.description) + '">',
    '<link rel="canonical" href="' + url + '">' + (m.noindex ? '\n<meta name="robots" content="noindex">' : ''),
    '<meta property="og:site_name" content="Tea-cher">', '<meta property="og:locale" content="en_GB">',
    '<meta property="og:type" content="' + (m.ogType || 'website') + '">',
    '<meta property="og:title" content="' + attr(m.title) + '">', '<meta property="og:description" content="' + attr(m.description) + '">', '<meta property="og:url" content="' + url + '">',
    '<meta property="og:image" content="' + img + '">', '<meta property="og:image:width" content="1200">', '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="Tea-cher: Know the case. Know the rule. OCR A Level Law case revision.">',
    '<meta name="twitter:card" content="summary_large_image">', '<meta name="twitter:title" content="' + attr(m.title) + '">', '<meta name="twitter:description" content="' + attr(m.description) + '">', '<meta name="twitter:image" content="' + img + '">',
    ...(p.jsonld || []).map(ld)
  ].join('\n');
}

const pages = ssr.allPages();
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.file)) throw new Error('two pages write ' + p.file);
  seen.add(p.file);
  const app = ssr.render(p.path, p.page, base);
  const data = p.page ? '<script id="page-data" type="application/json">' + JSON.stringify(p.page).replace(/</g, '\\u003c') + '</script>' : '';
  const html = template.replace('<!--head-->', () => head(p)).replace('<!--app-->', () => app).replace('<!--data-->', () => data);
  const dest = path.join(dist, p.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
}
const today = new Date().toISOString().slice(0, 10), indexable = pages.filter(p => !p.meta.noindex);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + indexable.map(p => '  <url><loc>' + site.url + p.meta.path + '</loc><lastmod>' + today + '</lastmod></url>').join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: ' + site.url + '/sitemap.xml\n');
fs.rmSync(ssrDir, { recursive: true, force: true });
const kb = f => Math.round(fs.statSync(f).size / 1024) + ' KB';
const assets = fs.readdirSync(path.join(dist, 'assets'));
console.log('Prerendered ' + pages.length + ' pages (' + indexable.length + ' in the sitemap) for base "' + base + '"');
console.log('  ' + assets.map(f => f + ' ' + kb(path.join(dist, 'assets', f))).join(', '));
