/* Who is signed in. `useAuth()` gives the screens the session and profile; the functions below are the only places that talk to Supabase Auth.
   Errors are turned into plain sentences here so the screens just show them. */
import type { Session, SupabaseClient } from '@supabase/supabase-js';
import { useSyncExternalStore } from 'react';
import { siteUrl } from '../lib/share';
import { AuthError } from './auth-error';
import { accountsConfigured, hasStoredSession, loadClient } from './client';
import { SCHOOL_SHORT, roleForEmail } from './schools';
import { endSync, startSync, stopSync } from './sync';
import { limit, lockout } from './throttle';
import { mirrorAccount } from '../cms/session';

export interface Profile { id: string; display_name: string; year_group: string | null; role: 'user' | 'student' | 'teacher'; created_at: string }
export interface AuthState { configured: boolean; ready: boolean; session: Session | null; profile: Profile | null }

const INITIAL: AuthState = { configured: accountsConfigured, ready: false, session: null, profile: null };
let state = INITIAL, booting: Promise<SupabaseClient | null> | null = null;
const subs = new Set<() => void>();
const set = (p: Partial<AuthState>) => { state = { ...state, ...p }; subs.forEach(f => f()); };

async function loadProfile(sb: SupabaseClient, session: Session | null) {
  if (!session) { set({ profile: null }); mirrorAccount(null); stopSync(); return; }
  const { data } = await sb.from('profiles').select('id, display_name, year_group, role, created_at').eq('id', session.user.id).maybeSingle();
  const profile = (data as Profile | null) || null;
  set({ profile });
  mirrorAccount(profile && { id: profile.id, name: profile.display_name || session.user.email?.split('@')[0] || 'Student', role: profile.role });   // the classroom screens use the role the SERVER gave
  if (profile) void startSync(profile.id);       // deck, saved cases, playlists and marks follow the account
}
/** load the Supabase library (once) and start listening for sign-in changes */
function boot(): Promise<SupabaseClient | null> {
  return (booting ||= (async () => {
    const sb = await loadClient();
    if (!sb) { set({ ready: true }); mirrorAccount(null); return null; }
    sb.auth.onAuthStateChange((_e, session) => {   // (kept light: no awaiting Supabase calls in here)
      if (session && state.profile?.id !== session.user.id) mirrorAccount(null, false);   // a sign-in just happened: wait for the profile before deciding what to show
      set({ ready: true, session });
      setTimeout(() => { void loadProfile(sb, session); }, 0);
    });
    const { data } = await sb.auth.getSession();
    set({ ready: true, session: data.session });
    await loadProfile(sb, data.session);
    return sb;
  })());
}
/** call once, in the browser, after the page has hydrated. The library itself is only fetched when someone is already signed in, or a sign-in link is in the address,
    or later when they use a sign-in screen. */
export function initAuth() {
  if (!accountsConfigured) { set({ ready: true }); mirrorAccount(null); return; }
  const link = /[?&#](code|access_token|token_hash|error_description|next)=/.test(location.search + location.hash);
  if (hasStoredSession() || link) { mirrorAccount(null, false); void boot(); }
  else { set({ ready: true }); mirrorAccount(null); }     // nobody is signed in, so there is nothing to load yet
}
export const useAuth = (): AuthState => useSyncExternalStore(f => { subs.add(f); return () => { subs.delete(f); }; }, () => state, () => INITIAL);
export const displayName = (a: AuthState) => (a.profile?.display_name || a.session?.user.email?.split('@')[0] || '');

/* ----- friendly errors ----- */
export { AuthError };
function friendly(e: { message?: string; code?: string; status?: number } | null): AuthError {
  const m = (e?.message || '').toLowerCase(), c = e?.code || '';
  if (c === 'email_not_confirmed' || m.includes('email not confirmed')) return new AuthError('unconfirmed', 'You haven’t confirmed this email yet. Check your inbox for the link, or send it again below.');
  if (c === 'invalid_credentials' || m.includes('invalid login')) return new AuthError('credentials', 'That email and password don’t match. Check them and try again, or reset your password.');
  if (m.includes('database error saving new user') || m.includes('database error updating user') || m.includes('verified school')) return new AuthError('school', SCHOOL_SHORT);
  if (m.includes('slow down')) return new AuthError('rate', 'Slow down: try again in a moment.');
  if (c === 'weak_password' || m.includes('password should') || m.includes('password is known')) return new AuthError('weak', 'Choose a stronger password: at least ' + MIN_PW + ' characters, and not one that is easy to guess.');
  if (c === 'captcha_failed' || m.includes('captcha')) return new AuthError('other', 'The security check failed. Reload the page and try again.');
  if (c === 'over_email_send_rate_limit' || c === 'over_request_rate_limit' || e?.status === 429 || m.includes('rate limit')) return new AuthError('rate', 'Too many attempts. Wait a few minutes, then try again.');
  if (c === 'same_password' || m.includes('different from the old')) return new AuthError('same', 'Choose a password you haven’t used before for this account.');
  if (c === 'otp_expired' || m.includes('expired') || m.includes('invalid')) return new AuthError('expired', 'That link has expired or has already been used. Ask for a new one.');
  if (m.includes('fetch') || m.includes('network')) return new AuthError('network', 'Couldn’t reach the server. Check your connection and try again.');
  return new AuthError('other', 'Something went wrong. Try again in a moment.');
}
export const MIN_PW = 10;
const COMMON = /^(password|passw0rd|qwerty|letmein|welcome|iloveyou|admin|123456|abc123|monkey|dragon|football|tea-?cher)/i;
/** the rules a password must meet before we even ask the server (the server enforces its own minimum too) */
export function checkPassword(pw: string, email = ''): void {
  const local = email.split('@')[0].toLowerCase();
  if (pw.length < MIN_PW) throw new AuthError('weak', 'Choose a longer password: at least ' + MIN_PW + ' characters.');
  if (pw.length > 72) throw new AuthError('weak', 'That password is too long. Use 72 characters or fewer.');
  if (/^(.)\1+$/.test(pw) || COMMON.test(pw) || (local.length >= 4 && pw.toLowerCase().includes(local))) throw new AuthError('weak', 'Choose a password that is harder to guess: not a common word, and not your email name.');
}
const need = async (): Promise<SupabaseClient> => { const sb = await boot(); if (!sb) throw new AuthError('off', 'Accounts aren’t switched on for this site yet.'); return sb; };
const redirect = () => siteUrl('auth/callback');
const clean = (s: string) => s.trim().replace(/\s+/g, ' ');

/* ----- actions ----- */
export async function signUp(o: { email: string; password: string; name: string }): Promise<void> {
  const sb = await need(), name = clean(o.name).slice(0, 40), email = o.email.trim();
  if (!name) throw new AuthError('invalid', 'Type your name.');
  if (/[<>\u0000-\u001f]/.test(name)) throw new AuthError('invalid', 'Use letters, numbers and ordinary punctuation in your name.');
  if (!roleForEmail(email)) throw new AuthError('school', SCHOOL_SHORT);
  checkPassword(o.password, email);
  limit('signup', email, 3, 3_600_000, 'sign-up attempts for this email');
  const { error } = await sb.auth.signUp({ email, password: o.password, options: { emailRedirectTo: redirect(), data: { display_name: name } } });
  if (error) throw friendly(error);   // (an address that already has an account gets no error: Supabase answers the same, so nobody can use this form to find out who is registered)
}
export async function signIn(o: { email: string; password: string }): Promise<void> {
  const email = o.email.trim(), lock = lockout('signin', email, 5, 900_000); lock.check();
  const { error } = await (await need()).auth.signInWithPassword({ email, password: o.password });
  if (error) { const f = friendly(error); if (f.code === 'credentials') lock.failed(); throw f; }
  lock.clear();
}
export async function signOut(): Promise<void> {
  const sb = await need(); await endSync();     // send anything waiting, and clear this device's copy of the account's revision data
  const { error } = await sb.auth.signOut(); if (error) throw friendly(error);
}
export async function resendConfirmation(email: string): Promise<void> {
  limit('resend', email, 1, 60_000, 'emails');
  const { error } = await (await need()).auth.resend({ type: 'signup', email: email.trim(), options: { emailRedirectTo: redirect() } });
  if (error) throw friendly(error);
}
export async function sendPasswordReset(email: string): Promise<void> {
  limit('reset', email, 2, 300_000, 'reset emails');
  const { error } = await (await need()).auth.resetPasswordForEmail(email.trim(), { redirectTo: siteUrl('auth/callback?next=reset') });
  if (error) throw friendly(error);
}
export async function setPassword(password: string): Promise<void> {
  checkPassword(password, state.session?.user.email || '');
  limit('setpw', state.session?.user.id || 'x', 5, 600_000, 'password changes');
  const { error } = await (await need()).auth.updateUser({ password }); if (error) throw friendly(error);
}
export async function changeEmail(email: string): Promise<void> {
  if (!roleForEmail(email)) throw new AuthError('school', SCHOOL_SHORT);
  limit('chmail', state.session?.user.id || 'x', 2, 3_600_000, 'email changes');
  const { error } = await (await need()).auth.updateUser({ email: email.trim() }, { emailRedirectTo: redirect() }); if (error) throw friendly(error);
}
export async function saveProfile(p: { display_name: string; year_group: string | null }): Promise<void> {
  const sb = await need(), s = state.session; if (!s) throw new AuthError('signed-out', 'Sign in first.');
  const name = clean(p.display_name).slice(0, 40); if (!name) throw new AuthError('invalid', 'Type your name.');
  const { error } = await sb.from('profiles').update({ display_name: name, year_group: p.year_group || null }).eq('id', s.user.id);
  if (error) throw friendly(error);
  await loadProfile(sb, s);
}
/** everything the account holds about the person, as one JSON file (for the "Download my data" button) */
export async function exportMyData(): Promise<string> {
  const sb = await need(); const { data, error } = await sb.rpc('export_my_data'); if (error) throw friendly(error);
  return JSON.stringify(data, null, 2);
}
export async function deleteAccount(): Promise<void> {
  const sb = await need(); const { error } = await sb.rpc('delete_my_account'); if (error) throw friendly(error);
  await sb.auth.signOut();
}
/** the confirmation / reset link: Supabase sends  /auth/callback?token_hash=…&type=signup  (see docs/ACCOUNTS.md for the email templates) */
export async function verifyLink(tokenHash: string, type: 'signup' | 'recovery' | 'email_change' | 'magiclink' | 'invite'): Promise<void> {
  if (!['signup', 'recovery', 'email_change', 'magiclink', 'invite'].includes(type) || !/^[A-Za-z0-9_-]{8,200}$/.test(tokenHash)) throw new AuthError('expired', 'That link has expired or has already been used. Ask for a new one.');
  const { error } = await (await need()).auth.verifyOtp({ token_hash: tokenHash, type: type === 'magiclink' ? 'email' : type });
  if (error) throw friendly(error);
}
export const errMessage = (e: unknown) => (e instanceof AuthError ? e.message : 'Something went wrong. Try again in a moment.');
