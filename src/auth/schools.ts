/* The verified schools. This list is for the sign-up form (to explain and to catch typos early); the DATABASE is what actually enforces it
   (supabase/schema.sql, table school_domains), so keep the two lists the same. */
export type SchoolRole = 'student' | 'teacher';
export interface School { domain: string; role: SchoolRole }
export const SCHOOLS: School[] = [
  { domain: 'ndonline.ac.uk', role: 'student' },
  { domain: 'notredamecoll.ac.uk', role: 'teacher' }
];
/** the role an address earns, or null when it isn't from a verified school. Compares the whole part after the @, ignoring case (same rule as school_role() in the SQL) */
export function roleForEmail(email: string): SchoolRole | null {
  const e = email.trim();
  if (e.length > 254 || !/^[^@\s]+@[^@\s]+$/.test(e)) return null;
  const dom = e.slice(e.indexOf('@') + 1).toLowerCase();
  return SCHOOLS.find(s => s.domain === dom)?.role || null;
}
export const SCHOOL_NOTE = 'Currently only verified schools can register accounts. Emails ending in @ndonline.ac.uk become student accounts and emails ending in @notredamecoll.ac.uk become teacher accounts, automatically.';
