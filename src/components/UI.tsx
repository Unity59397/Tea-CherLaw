/* Things that float above the page: the toast, the case details sheet, the "save to playlist" popup and the privacy banner. */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

interface UIValue {
  toast: (msg: string, action?: string, fn?: () => void) => void; hideToast: () => void;
  sheet: string | null; openSheet: (id: string) => void; closeSheet: () => void;
  pop: string | null; openPicker: (id: string) => void; closePicker: () => void;
  consentOpen: boolean; openConsent: () => void; closeConsent: () => void;
  /** the element that had focus before a sheet or popup opened, so it can be given back on close */
  lastFocus: React.MutableRefObject<HTMLElement | null>;
  /** the same for the save popup, which can open on top of the details sheet */
  popFocus: React.MutableRefObject<HTMLElement | null>;
}
const Ctx = createContext<UIValue | null>(null);
export const useUI = () => { const v = useContext(Ctx); if (!v) throw new Error('useUI outside UIProvider'); return v; };

interface ToastState { msg: string; action?: string; fn?: () => void }
export function UIProvider({ children }: { children: ReactNode }) {
  const [toastS, setToast] = useState<ToastState | null>(null);
  const [sheet, setSheet] = useState<string | null>(null);
  const [pop, setPop] = useState<string | null>(null);
  const [consentOpen, setConsentOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastFocus = useRef<HTMLElement | null>(null), popFocus = useRef<HTMLElement | null>(null);
  const hideToast = useCallback(() => { clearTimeout(timer.current); setToast(null); }, []);
  const toast = useCallback((msg: string, action?: string, fn?: () => void) => {
    clearTimeout(timer.current); setToast({ msg, action, fn }); timer.current = setTimeout(() => setToast(null), action ? 7000 : 3500);
  }, []);
  const active = () => { const a = document.activeElement; return a instanceof HTMLElement ? a : null; };
  const value = useMemo<UIValue>(() => ({
    toast, hideToast, lastFocus, popFocus,
    sheet, openSheet: id => { lastFocus.current = active(); setSheet(id); }, closeSheet: () => setSheet(null),
    pop, openPicker: id => { popFocus.current = active(); setPop(id); }, closePicker: () => setPop(null),
    consentOpen, openConsent: () => setConsentOpen(true), closeConsent: () => setConsentOpen(false)
  }), [toast, hideToast, sheet, pop, consentOpen]);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <Ctx.Provider value={value}>
      {children}
      <div id="toast-root" role="status" aria-live="polite" aria-atomic="true">
        {toastS && (
          <div className="toast">
            <span>{toastS.msg}</span>
            {toastS.action && <button type="button" className="toast-act" onClick={() => { const f = toastS.fn; hideToast(); if (f) f(); }}>{toastS.action}</button>}
          </div>
        )}
      </div>
    </Ctx.Provider>
  );
}
