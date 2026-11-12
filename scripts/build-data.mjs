import { fileURLToPath } from 'node:url';
// Turns data/*.js (the case files, unchanged) into JSON the app imports:
//   src/generated/cases.json      every case
//   src/generated/taxonomy.json   areas > topics > sub-topics
//   src/generated/summary.json    small: counts and the area list (shown on every shell page, so kept out of the big file)
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'data');
const files = ['taxonomy.js', ...fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'taxonomy.js' && !f.startsWith('dev-')).sort()];
globalThis.window = globalThis;
for (const f of files) await import(pathToFileURL(path.join(dir, f)).href);
const CASES = globalThis.TC_CASES, TAX = globalThis.TC_TAXONOMY;
if (!Array.isArray(CASES) || !Array.isArray(TAX)) throw new Error('data/ did not define TC_CASES and TC_TAXONOMY');

const out = path.join(root, 'src', 'generated');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'cases.json'), JSON.stringify(CASES));
fs.writeFileSync(path.join(out, 'taxonomy.json'), JSON.stringify(TAX));
const areas = TAX.filter(a => CASES.some(c => c.area === a.id)).map(a => ({ id: a.id, label: a.label, blurb: a.blurb || '', papers: a.papers || [], count: CASES.filter(c => c.area === a.id).length }));
fs.writeFileSync(path.join(out, 'summary.json'), JSON.stringify({ count: CASES.length, areas }));
console.log('Data: ' + CASES.length + ' cases, ' + TAX.length + ' areas from ' + files.length + ' files');
