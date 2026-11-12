/* Small date and number helpers for the classroom screens. */
import { todayStr } from './api';

export const fmtDay = (s: string) => new Date(s + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
export const dayDiff = (s: string) => Math.round((Date.parse(s + 'T12:00:00') - Date.parse(todayStr() + 'T12:00:00')) / 864e5);
export function dueInfo(due: string | null, finished: boolean): { text: string; cls: string } {
  if (!due) return { text: 'No due date', cls: '' };
  const d = dayDiff(due);
  if (d < 0) return finished ? { text: 'Was due ' + fmtDay(due), cls: '' } : { text: 'Overdue: due ' + fmtDay(due), cls: 'late' };
  if (d === 0) return { text: 'Due today', cls: finished ? '' : 'soon' };
  if (d === 1) return { text: 'Due tomorrow', cls: finished ? '' : 'soon' };
  return { text: 'Due ' + fmtDay(due), cls: '' };
}
export function agoText(ts: number | null): string {
  if (!ts) return 'Not yet';
  const a = new Date(ts), b = new Date(); a.setHours(12, 0, 0, 0); b.setHours(12, 0, 0, 0);
  const d = Math.round((b.getTime() - a.getTime()) / 864e5);
  return d <= 0 ? 'Today' : d === 1 ? 'Yesterday' : d < 30 ? d + ' days ago' : new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}
export const pct = (n: number, of: number) => (of ? Math.round(n * 100 / of) : 0);
export const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');
export const codeOnly = (s: unknown) => String(s || '').replace(/\D/g, '');
