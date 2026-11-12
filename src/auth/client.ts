/* The Supabase connection. It exists only in the browser, and only when the two VITE_SUPABASE_* values are set (see .env.example);
   without them the site still works and the account pages say accounts are not switched on.
   The library (about 200 KB) is loaded on demand: a visitor who has never signed in, and doesn't open a sign-in page, never downloads it. */
import type { SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined, key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
export const accountsConfigured = !!(url && key);
/** where the library keeps the sign-in in this browser (also how we know, without loading it, whether anyone is signed in) */
export const AUTH_KEY = 'tc.auth';
let client: SupabaseClient | null = null, loading: Promise<SupabaseClient | null> | null = null;

export const hasStoredSession = (): boolean => { try { return typeof window !== 'undefined' && !!window.localStorage.getItem(AUTH_KEY); } catch { return false; } };
/** the client if it has already been loaded, otherwise null */
export const loadedClient = () => client;
export function loadClient(): Promise<SupabaseClient | null> {
  if (!accountsConfigured || typeof window === 'undefined') return Promise.resolve(null);
  if (client) return Promise.resolve(client);
  return (loading ||= import('@supabase/supabase-js').then(m => {
    client = m.createClient(url!, key!, { auth: { storageKey: AUTH_KEY, persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' } });
    return client;
  }));
}
