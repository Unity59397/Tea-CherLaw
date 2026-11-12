export type Role = 'teacher' | 'student' | 'user';
export interface User { id: string; name: string; role: Role }
export interface Invite { code: string; token: string; expiresOn: string | null; created: number; revoked: boolean }
export interface Assignment { id: string; classId: string; title: string; note: string; caseIds: string[]; studentIds: string[] | null; due: string | null; created: number }
