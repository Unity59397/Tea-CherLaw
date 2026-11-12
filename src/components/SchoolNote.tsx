/* The note shown wherever someone is about to sign up or sign in. The wording lives in src/auth/schools.ts. */
import { SCHOOL_NOTE } from '../auth/schools';

export const SchoolNote = () => <p className="proto" role="note"><strong>Note.</strong> {SCHOOL_NOTE}</p>;
