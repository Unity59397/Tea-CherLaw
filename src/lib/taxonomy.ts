/* The areas > topics > sub-topics tree (small, so it is always loaded), plus courts and papers. The cases themselves are in data.ts. */
import taxonomy from '../generated/taxonomy.json';
import summaryJson from '../generated/summary.json';
import type { AreaDef, TopicDef, SubDef, Summary, Case } from './types';

export const TAX = taxonomy as AreaDef[];
export const SUMMARY = summaryJson as Summary;
export const COURTS: Record<string, string> = { UKSC: 'Supreme Court', HL: 'House of Lords', PC: 'Privy Council', CA: 'Court of Appeal', HC: 'High Court', DC: 'Divisional Court', CCt: 'Crown Court', EAT: 'Employment Appeal Tribunal', ECtHR: 'European Court of Human Rights', CJEU: 'Court of Justice of the EU', Hist: 'Historic court' };
export const COURT_ORDER = ['UKSC', 'HL', 'PC', 'CA', 'HC', 'DC', 'CCt', 'EAT', 'ECtHR', 'CJEU', 'Hist'];
export const PAPERS = [
  { n: 'Paper 1', code: 'H418/01', title: 'The legal system and criminal law', areas: ['legal-system', 'criminal'] },
  { n: 'Paper 2', code: 'H418/02', title: 'Law making and the law of tort', areas: ['law-making', 'tort'] },
  { n: 'Paper 3', code: 'H418/03', title: 'The nature of law and human rights', areas: ['nature-of-law', 'human-rights'] },
  { n: 'Paper 4', code: 'H418/04', title: 'The nature of law and the law of contract', areas: ['nature-of-law', 'contract'] }
];
export const AREA: Record<string, AreaDef> = {};
export const TOPIC: Record<string, { t: TopicDef; a: AreaDef }> = {};
export const SUB: Record<string, { s: SubDef; t: TopicDef; a: AreaDef }> = {};
export const SUBORD: Record<string, number> = {};
let ord = 0;
TAX.forEach(a => { AREA[a.id] = a; a.topics.forEach(t => { TOPIC[t.id] = { t, a }; t.subs.forEach(s => { SUB[s.id] = { s, t, a }; SUBORD[s.id] = ord++; }); }); });

export const courtName = (c: Pick<Case, 'court'>) => COURTS[c.court] || c.court;
export const crumb = (c: Pick<Case, 'sub'>) => { const s = SUB[c.sub]; return s.a.label + ' › ' + s.t.label + ' › ' + s.s.label; };
export const metaLine = (c: Pick<Case, 'year' | 'court' | 'cite'>) => [c.year, courtName(c), c.cite].filter(Boolean).join(' · ');
