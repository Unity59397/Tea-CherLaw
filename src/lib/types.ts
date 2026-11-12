export type Mark = 'got' | 'again';
export interface Case {
  id: string; name: string; cite: string; year: number; court: string;
  area: string; topic: string; sub: string; key?: boolean; tags: string[];
  gist: string; principle: string; facts: string; held: string; significance: string; links?: string[];
}
export interface SubDef { id: string; label: string }
export interface TopicDef { id: string; label: string; subs: SubDef[] }
export interface AreaDef { id: string; label: string; blurb?: string; papers?: string[]; topics: TopicDef[] }
export interface Summary { count: number; areas: { id: string; label: string; blurb: string; papers: string[]; count: number }[] }
export interface Playlist { id: string; name: string; ids: string[] }
export type Consent = { v: number; ts: number; prefs: boolean; ads: boolean };
