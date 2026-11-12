#!/usr/bin/env node
// Usage: node tools/validate.js [files...]   (no args = taxonomy + every data/*.js case file)
// Exit code 1 if any ERROR. Unknown links are WARNINGs unless --strict-links is passed.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const args = process.argv.slice(2);
const strictLinks = args.includes('--strict-links');
let files = args.filter(a => !a.startsWith('--'));
const dataDir = path.join(root, 'data');
const allDataFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'taxonomy.js').map(f => path.join(dataDir, f));
const checkAll = files.length === 0;
if (checkAll) files = allDataFiles;

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(dataDir, 'taxonomy.js'), 'utf8'), ctx, { filename: 'taxonomy.js' });
const tax = ctx.window.TC_TAXONOMY;

const areaMap = {}, topicMap = {}, subMap = {};
for (const a of tax) {
  areaMap[a.id] = a;
  for (const t of a.topics) {
    topicMap[t.id] = { area: a.id, t };
    for (const s of t.subs) {
      if (subMap[s.id]) console.log('ERROR taxonomy: duplicate sub id ' + s.id);
      subMap[s.id] = { area: a.id, topic: t.id };
    }
  }
}

const COURTS = ['UKSC','HL','PC','CA','HC','DC','CCt','EAT','ECtHR','CJEU','Hist'];
const LIMITS = { gist: 35, principle: 40, facts: 85, held: 85, significance: 75 };
const MINS = { gist: 6, principle: 8, facts: 12, held: 12, significance: 8 };
const wc = s => (s.trim().match(/\S+/g) || []).length;

// Load ids from all files (for link checks and duplicate checks)
function loadFile(f) {
  const c = { window: {} };
  vm.createContext(c);
  try { vm.runInContext(fs.readFileSync(f, 'utf8'), c, { filename: f }); }
  catch (e) { console.log('ERROR ' + path.basename(f) + ': does not parse/run: ' + e.message); return null; }
  return c.window.TC_CASES || [];
}
const everything = {};
for (const f of allDataFiles) {
  const list = loadFile(f);
  if (!list) continue;
  for (const c of list) { (everything[c.id] = everything[c.id] || []).push(path.basename(f)); }
}

let errors = 0, warns = 0, total = 0;
const err = (id, m) => { errors++; console.log('ERROR ' + id + ': ' + m); };
const warn = (id, m) => { warns++; console.log('WARN  ' + id + ': ' + m); };
const perSub = {};

for (const f of files) {
  const list = loadFile(f);
  if (!list) { errors++; continue; }
  total += list.length;
  for (const c of list) {
    const id = c.id || '(no id)';
    for (const k of ['id','name','year','court','area','topic','sub','gist','principle','facts','held','significance']) {
      if (c[k] === undefined || c[k] === null || c[k] === '') err(id, 'missing ' + k);
    }
    if (typeof c.key !== 'boolean') err(id, 'key must be true/false');
    if (!Array.isArray(c.tags) || c.tags.length < 1 || c.tags.length > 5) err(id, 'tags must be an array of 1 to 5');
    if (c.cite === undefined) err(id, 'cite must be present (may be empty string)');
    if (c.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(c.id)) err(id, 'id must be kebab-case');
    if (c.id && everything[c.id] && everything[c.id].length > 1) err(id, 'duplicate id in ' + everything[c.id].join(', '));
    if (typeof c.year !== 'number' || c.year < 1500 || c.year > 2026) err(id, 'bad year ' + c.year);
    if (c.court && !COURTS.includes(c.court)) err(id, 'court "' + c.court + '" not in ' + COURTS.join(','));
    if (!areaMap[c.area]) err(id, 'unknown area ' + c.area);
    else if (!topicMap[c.topic] || topicMap[c.topic].area !== c.area) err(id, 'topic ' + c.topic + ' not in area ' + c.area);
    else if (!subMap[c.sub] || subMap[c.sub].topic !== c.topic) err(id, 'sub ' + c.sub + ' not in topic ' + c.topic);
    for (const k of Object.keys(LIMITS)) {
      if (typeof c[k] !== 'string') continue;
      const n = wc(c[k]);
      if (n > LIMITS[k] * 1.25) err(id, k + ' is ' + n + ' words (limit ' + LIMITS[k] + ')');
      else if (n > LIMITS[k]) warn(id, k + ' is ' + n + ' words (limit ' + LIMITS[k] + ')');
      if (n < MINS[k]) warn(id, k + ' is very short (' + n + ' words)');
    }
    if (typeof c.gist === 'string' && c.name && c.gist.toLowerCase().includes(c.name.toLowerCase())) warn(id, 'gist contains the case name');
    if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(JSON.stringify(c))) err(id, 'contains emoji');
    if (c.links) {
      if (!Array.isArray(c.links)) err(id, 'links must be an array');
      else for (const l of c.links) {
        if (!everything[l]) (strictLinks ? err : warn)(id, 'unknown link ' + l);
        if (l === c.id) err(id, 'links to itself');
      }
    }
    perSub[c.sub] = (perSub[c.sub] || 0) + 1;
  }
}

// share links use a 5-character code per case (copied from src/lib/sharecode.ts: keep the two in step); two cases must never share one
{
  const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', codes = {};
  const codeOf = id => { let h = 0x811c9dc5; for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } h &= 0x3fffffff; let s = ''; for (let i = 0; i < 5; i++) { s = B64[h & 63] + s; h >>>= 6; } return s; };
  for (const id of Object.keys(everything)) { const k = codeOf(id); if (codes[k]) err(id, 'share-link code ' + k + ' is the same as for ' + codes[k] + ' (change one of the ids)'); else codes[k] = id; }
}
console.log('\nChecked ' + total + ' cases in ' + files.length + ' file(s): ' + errors + ' error(s), ' + warns + ' warning(s).');
if (process.argv.includes('--summary') || checkAll) {
  const out = [];
  for (const a of tax) {
    let n = 0, k = 0;
    for (const t of a.topics) for (const s of t.subs) n += perSub[s.id] || 0;
    out.push(a.label + ': ' + n);
  }
  console.log(out.join('  |  '));
}
process.exit(errors ? 1 : 0);
