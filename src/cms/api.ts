/* The classroom API: classrooms, invites, teacher playlists, homework and student progress.
   Everything is stored in Supabase (supabase/classrooms.sql) and every call below is one database function. The screens only ever call the Api object
   at the bottom of this file. Every call is async, takes plain data and throws ApiError. The DATABASE enforces who may do what (role, ownership, limits,
   what a teacher may see of a student); the checks here are only there to give quick, friendly messages.
   Roles:  teacher = runs classrooms;  student = joins them;  user = a legacy account with neither (no classroom features).
   The role comes from the school email address (schema.sql) and can't be changed from here. */
import { loadClient } from '../auth/client';
import { getData } from '../lib/data';
import type { Mark } from '../lib/types';
import { bump, cmsUser } from './session';
import type { Assignment, Invite, Role, User } from './types';

export class ApiError extends Error { code: string; constructor(code: string, message: string) { super(message); this.code = code; } }
export const fail = (code: string, message: string): never => { throw new ApiError(code, message); };

export const LIMITS = { classes: 30, students: 60, lists: 50, listCases: 200, assignments: 60 };

/* ----- small helpers ----- */
const tidy = (s: unknown, n: number) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, n);
const pad = (n: number) => String(n).padStart(2, '0');
const dayStr = (d: Date) => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
export const todayStr = () => dayStr(new Date());
export const dayPlus = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); };
const validDay = (s: unknown): s is string => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(Date.parse(s + 'T12:00:00'));
const known = (id: string) => { const d = getData(); return !d || !!d.by[id]; };   // (before the cases have loaded there is nothing to check against)
const cleanIds = (ids: unknown): string[] => {
  const seen: Record<string, boolean> = {}, out: string[] = [];
  (Array.isArray(ids) ? ids : []).forEach((id: string) => { if (typeof id === 'string' && known(id) && !seen[id]) { seen[id] = true; out.push(id); } });
  if (out.length > LIMITS.listCases) fail('limit', 'That is too many cases (the limit is ' + LIMITS.listCases + ').');
  return out;
};
const day = (d: unknown): string | null => { if (d == null || d === '') return null; if (!validDay(d)) return fail('invalid', 'Choose a valid date.'); return d; };

/** call one database function. Messages the database wrote for people (error code P0001 with a hint) are passed on; anything else becomes a plain sentence. */
async function rpc<T>(fn: string, args: Record<string, unknown> = {}): Promise<T> {
  if (!cmsUser()) return fail('unauthenticated', 'Sign in first.');
  const sb = await loadClient(); if (!sb) return fail('off', 'Accounts aren’t switched on for this site yet.');
  let res;
  try { res = await sb.rpc(fn, args); } catch { return fail('network', 'Couldn’t reach the server. Check your connection and try again.'); }
  const e = res.error;
  if (e) {
    if (e.code === 'P0001' && e.hint) return fail(e.hint, e.message);
    if (/jwt|not authenticated|permission denied/i.test(e.message) || (res.status === 401)) return fail('unauthenticated', 'Your sign-in has expired. Sign in again.');
    if (/fetch|network/i.test(e.message)) return fail('network', 'Couldn’t reach the server. Check your connection and try again.');
    console.error(fn, e); return fail('error', 'Something went wrong. Try again in a moment.');
  }
  return res.data as T;
}
/** a call that changes something: afterwards the screens read again */
async function change<T>(fn: string, args?: Record<string, unknown>): Promise<T> { try { return await rpc<T>(fn, args); } finally { bump(); } }

/* ----- invites ----- */
export type InviteState = 'none' | 'off' | 'expired' | 'active';

/* ----- shapes the screens receive ----- */
export interface TeacherClassRow { id: string; name: string; students: number; homework: number; invite: InviteState; code?: string; expiresOn?: string | null }
export interface StudentClassRow { id: string; name: string; teacher: string }
export interface TeacherClass { id: string; name: string; teacher: string; invite: (Invite & { state: InviteState }) | null; members: Array<{ id: string; name: string }> }
export interface StudentProgressRow { id: string; name: string; marks: Record<string, Mark>; got: number; again: number; lastActive: number | null }
export interface LookupResult { state: 'invalid' | InviteState; classId?: string; className?: string; teacher?: string; expiresOn?: string | null }
export interface JoinResult { classId: string; className: string; already: boolean }
export interface PlaylistRow { id: string; name: string; ids: string[]; updated: number }
type InviteOut = Invite & { state: InviteState };
const key = (k: string) => tidy(k, 40);

/* ----- the API ----- */
export const Api = {
  session: {
    async get(): Promise<User | null> { return cmsUser(); }
  },

  classes: {
    async list(): Promise<Array<TeacherClassRow | StudentClassRow>> {
      const rows = await rpc<Array<TeacherClassRow & { code: string | null }>>('classes_list');
      return rows.map(r => ('code' in r ? { ...r, code: r.code || undefined } : r));
    },
    async get(id: string): Promise<TeacherClass | StudentClassRow> { return rpc('class_get', { p_id: id }); },   // a teacher gets their own classroom in full; a student gets the public part of one they are in
    async create(o: { name: string }): Promise<{ id: string; name: string }> {
      const name = tidy(o && o.name, 40); if (!name) fail('invalid', 'Type a name for the classroom.');
      return change('class_create', { p_name: name });
    },
    async rename(id: string, name: string) { name = tidy(name, 40); if (!name) fail('invalid', 'Type a name for the classroom.'); await change('class_rename', { p_id: id, p_name: name }); },
    async remove(id: string) { await change('class_remove', { p_id: id }); },
    async removeMember(classId: string, userId: string) { await change('class_remove_member', { p_class: classId, p_user: userId }); }   // a teacher removes a student, or a student leaves
  },

  invites: {
    async create(classId: string, o?: { expiresOn?: string | null }): Promise<InviteOut> { return change('invite_create', { p_class: classId, p_expires: day(o && o.expiresOn) }); },   // a fresh link and code; the old ones stop working
    async setExpiry(classId: string, d: string | null): Promise<InviteOut> { return change('invite_set_expiry', { p_class: classId, p_day: day(d) }); },
    async revoke(classId: string) { await change('invite_revoke', { p_class: classId }); },
    async lookup(k: string): Promise<LookupResult> { return rpc('invite_lookup', { p_key: key(k) }); },          // needs sign-in, and wrong guesses are rationed
    async join(k: string): Promise<JoinResult> {
      const r = await change<JoinResult & { invalid?: boolean }>('invite_join', { p_key: key(k) });
      if (r.invalid) return fail('invalid', 'That code or link doesn’t match a classroom.');
      return r;
    }
  },

  playlists: {                                                       // a teacher's own playlists: named lists of cases that can be set as homework
    async list(): Promise<PlaylistRow[]> { return rpc('playlists_list'); },
    async get(id: string): Promise<{ id: string; name: string; ids: string[] }> { return rpc('playlist_get', { p_id: id }); },
    async save(o: { id?: string | null; name: string; ids: string[] }): Promise<{ id: string; name: string }> {   // create when there is no id, otherwise replace name and cases
      const name = tidy(o && o.name, 60); if (!name) fail('invalid', 'Type a name for the playlist.');
      return change('playlist_save', { p_id: o.id || null, p_name: name, p_ids: cleanIds(o.ids) });
    },
    async remove(id: string) { await change('playlist_remove', { p_id: id }); }   // homework already set from it keeps its own copy of the cases
  },

  assignments: {                                                     // homework: a title, a note, a due date and a copy of the cases at the moment it was set
    async list(classId: string): Promise<Assignment[]> { return rpc('assignments_list', { p_class: classId }); },
    async create(classId: string, o: { title: string; note?: string; due?: string | null; caseIds: string[]; studentIds?: string[] | null }): Promise<Assignment> {   // studentIds: leave out for the whole classroom
      const title = tidy(o && o.title, 60), ids = cleanIds(o && o.caseIds);
      if (!title) fail('invalid', 'Type a title for the homework.');
      if (!ids.length) fail('invalid', 'Choose a playlist that has at least one case.');
      return change('assignment_create', { p_class: classId, p_title: title, p_note: tidy(o && o.note, 300), p_due: day(o && o.due), p_ids: ids, p_students: o.studentIds && o.studentIds.length ? o.studentIds : null });
    },
    async remove(id: string) { await change('assignment_remove', { p_id: id }); }
  },

  notes: {                                                           // a teacher's private notes on a student in one of their classrooms (the student never sees them)
    async list(classId: string): Promise<Record<string, string>> { return rpc('notes_list', { p_class: classId }); },
    async set(classId: string, studentId: string, note: string) { await change('note_set', { p_class: classId, p_student: studentId, p_note: String(note || '').slice(0, 1000) }); }
  },

  progress: {
    async importMarks(marks: Record<string, Mark>) {                 // marks already made on this device become the person's (only fills cases with no mark yet)
      const m: Record<string, Mark> = {}; Object.keys(marks || {}).forEach(id => { if (known(id) && (marks[id] === 'got' || marks[id] === 'again')) m[id] = marks[id]; });
      if (Object.keys(m).length) await rpc('progress_import', { p_marks: m });
    },
    async mine(): Promise<Record<string, { s: Mark; t: number }>> { return rpc('progress_mine'); },
    async forClass(classId: string): Promise<StudentProgressRow[]> { // teacher only. Shares marks on the homework cases and totals, never the student's other revision
      return rpc('progress_for_class', { p_class: classId });
    }
  }
};
export type { Role };
