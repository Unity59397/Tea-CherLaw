import type { ReactNode } from 'react';
const Svg = ({ children }: { children: ReactNode }) => (
  <svg className="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const mk = (d: ReactNode) => () => <Svg>{d}</Svg>;
export const Icon = {
  flip: mk(<><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" /><path d="M20 4v4h-4" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" /><path d="M4 20v-4h4" /></>),
  info: mk(<><circle cx="12" cy="12" r="9" /><path d="M12 11v5.5" /><path d="M12 7.6h.01" /></>),
  check: mk(<path d="M5 12.5l4.5 4.5L19 7.5" />),
  again: mk(<><path d="M4 12a8 8 0 1 0 2.3-5.7L4 8" /><path d="M4 4v4h4" /></>),
  up: mk(<path d="M6 15l6-6 6 6" />),
  down: mk(<path d="M6 9l6 6 6-6" />),
  close: mk(<path d="M6 6l12 12M18 6L6 18" />),
  search: mk(<><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>),
  plus: mk(<path d="M12 5v14M5 12h14" />),
  star: mk(<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9 6.8 19.7l1-5.9L3.5 9.7l5.9-.8z" />),
  chev: mk(<path d="M9 6l6 6-6 6" />),
  back: mk(<path d="M15 6l-6 6 6 6" />),
  filter: mk(<path d="M4 6h16M7 12h10M10 18h4" />),
  sun: mk(<><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" /></>),
  play: mk(<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />),
  pause: mk(<path d="M8.5 5.5v13M15.5 5.5v13" />),
  book: mk(<><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5V5.5" /></>),
  bookmark: mk(<path d="M6.5 3.5h11v17L12 16.5l-5.5 4z" />),
  share: mk(<><circle cx="18" cy="5.5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="18.5" r="2.5" /><path d="M8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1" /></>),
  listplus: mk(<path d="M4 6h11M4 12h11M4 18h6M18 13v7M14.5 16.5h7" />),
  pencil: mk(<><path d="M4 20l1-4.5L16.5 4a2 2 0 0 1 3 3L8 18.5z" /><path d="M14.5 6l3 3" /></>),
  trash: mk(<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13M10 11v6M14 11v6" />),
  moon: mk(<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />),
  user: mk(<><circle cx="12" cy="8" r="3.8" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>),
  copy: mk(<><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></>)
};
