/* Page titles, descriptions and the little bits of the page <head> that change from page to page.
   The server writes them into each HTML file (scripts/prerender.mjs); the browser keeps them right when you move between pages. */
import { useEffect } from 'react';
import type { Case } from './types';
import { SUMMARY } from './taxonomy';

export interface PageMeta { title: string; description: string; path: string; noindex?: boolean; ogType?: 'website' | 'article'; jsonld?: object }
const N = SUMMARY.count;
const P = (path: string, title: string, description: string, noindex = false): PageMeta => ({ path, title, description, noindex });

/** every page that is not a single case; the path has no base folder, and ends in "/" only for the cases index */
export const STATIC_META: Record<string, PageMeta> = {
  '/': P('/', 'Tea-cher | OCR A Level Law case revision and flashcards', `Revise ${N} OCR A Level Law (H418) cases with short plain-English summaries, sorted by topic, and scroll through them as flashcards.`),
  '/library': P('/library', 'Case library | OCR A Level Law cases by topic | Tea-cher', `Search and filter ${N} OCR A Level Law cases by paper, topic, sub-topic, court and common threads such as children, medical or police.`),
  '/revise': P('/revise', 'Revise OCR A Level Law cases with flashcards | Tea-cher', 'Choose the OCR A Level Law cases you want to revise and scroll through them as flashcards. Flip a card for the rule, then open more details for the facts and decision.'),
  '/privacy': P('/privacy', 'Privacy and cookie policy | Tea-cher', 'How Tea-cher uses your browser storage, cookies and third-party services, and your rights under UK GDPR.'),
  '/cases/': P('/cases/', `All ${N} OCR A Level Law cases by topic | Tea-cher`, 'Every case in Tea-cher\'s OCR A Level Law (H418) revision set, grouped by area, topic and sub-topic, each with a short summary of the facts, decision and rule.'),
  '/saved': P('/saved', 'Saved cases and playlists | Tea-cher', 'Your saved OCR A Level Law cases and playlists, kept on this device.', true),
  '/shared': P('/shared', 'Shared playlist | Tea-cher', 'A playlist of OCR A Level Law cases that someone shared from Tea-cher.', true),
  '/login': P('/login', 'Sign in | Tea-cher', 'Sign in to your Tea-cher account to see your profile, classrooms and homework for OCR A Level Law.', true),
  '/signup': P('/signup', 'Create an account | Tea-cher', 'Create a free Tea-cher account with your email to join classrooms and get homework for OCR A Level Law.', true),
  '/forgot': P('/forgot', 'Reset your password | Tea-cher', 'Reset your Tea-cher password: type your email and we will send you a link to choose a new one.', true),
  '/profile': P('/profile', 'Your profile | Tea-cher', 'Your Tea-cher account and profile: your name, year group, email and password for OCR A Level Law revision.', true),
  '/auth/callback': P('/auth/callback', 'Confirming your email | Tea-cher', 'Confirming your email address for your Tea-cher account, or choosing a new password from an emailed link.', true),
  '/account': P('/account', 'Account | Tea-cher', 'Sign in or create a Tea-cher account. Currently only verified schools can register accounts, for classrooms and homework.', true),
  '/teach': P('/teach', 'Teacher area | Tea-cher', 'Classrooms, playlists, homework and student progress for teachers.', true),
  '/class': P('/class', 'My classes | Tea-cher', 'Homework and progress for students in a Tea-cher classroom.', true),
  '/join': P('/join', 'Join a classroom | Tea-cher', 'Join a Tea-cher classroom with an invite link or a 6-digit code.', true)
};
export const NOT_FOUND_META = P('/404', 'Page not found | Tea-cher', 'This page doesn’t exist. Browse the OCR A Level Law case library instead.', true);

const trim = (s: string, n: number) => { if (s.length <= n) return s; const cut = s.slice(0, n - 1); return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s]+$/, '') + '…'; };
export function caseMeta(c: Case): PageMeta {
  const titles = [c.name + ' (' + c.year + ') | OCR A Level Law case summary | Tea-cher', c.name + ' (' + c.year + ') | OCR A Level Law | Tea-cher', c.name + ' | Tea-cher', c.name.replace(/\s*\([^)]*\)\s*$/, '') + ' | Tea-cher'];
  return { path: '/cases/' + c.id, ogType: 'article', title: titles.find(t => t.length <= 70) || c.name, description: trim(c.name + (c.cite ? ' ' + c.cite : '') + '. ' + c.gist, 158) };
}
export const metaForPath = (p: string): PageMeta | null => STATIC_META[p === '/cases' ? '/cases/' : p] || null;

/** keep <title>, the description, canonical link and robots tag right after moving between pages in the browser */
export function useDocumentMeta(m: PageMeta | null, siteUrl: string) {
  useEffect(() => {
    if (!m) return;
    document.title = m.title;
    const set = (sel: string, make: () => HTMLElement, attr: string, v: string | null) => {
      let el = document.head.querySelector<HTMLElement>(sel);
      if (v === null) { el?.remove(); return; }
      if (!el) { el = make(); document.head.appendChild(el); }
      el.setAttribute(attr, v);
    };
    const meta = (name: string, prop = false) => () => { const e = document.createElement('meta'); e.setAttribute(prop ? 'property' : 'name', name); return e; };
    set('meta[name="description"]', meta('description'), 'content', m.description);
    set('meta[property="og:title"]', meta('og:title', true), 'content', m.title);
    set('meta[property="og:description"]', meta('og:description', true), 'content', m.description);
    set('meta[property="og:url"]', meta('og:url', true), 'content', siteUrl + m.path);
    set('meta[name="twitter:title"]', meta('twitter:title'), 'content', m.title);
    set('meta[name="twitter:description"]', meta('twitter:description'), 'content', m.description);
    set('link[rel="canonical"]', () => { const e = document.createElement('link'); e.rel = 'canonical'; return e; }, 'href', siteUrl + m.path);
    set('meta[name="robots"]', meta('robots'), 'content', m.noindex ? 'noindex' : null);
  }, [m, siteUrl]);
}
