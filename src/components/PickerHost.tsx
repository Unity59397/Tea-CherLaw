/* The "Save and organise" popup: tick Saved and any of your playlists for one case, or make a new playlist and put the case in it. */
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Icon } from '../lib/icons';
import { useData } from '../lib/data';
import { createList, inList, saveCase, setInList, unsaveCase, useSaved } from '../state/saved';
import { useUI } from './UI';

const FOCUSABLE = 'button, a[href], input, [tabindex]:not([tabindex="-1"])';

function Popup({ id, name }: { id: string; name: string }) {
  const { closePicker, popFocus, sheet } = useUI(), { saved, lists } = useSaved();
  const root = useRef<HTMLDivElement>(null), input = useRef<HTMLInputElement>(null), sheetOpen = useRef(false);
  const [val, setVal] = useState(''), [msg, setMsg] = useState('');
  sheetOpen.current = !!sheet;
  const close = () => closePicker();
  useEffect(() => {
    document.documentElement.classList.add('lock');
    root.current?.focus();
    const back = popFocus.current;
    return () => {
      if (!sheetOpen.current) document.documentElement.classList.remove('lock');
      if (back && document.contains(back)) back.focus();
    };
  }, [popFocus]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
      if (e.key !== 'Tab' || !root.current) return;
      const f = Array.from(root.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(x => !(x as HTMLButtonElement).disabled && x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    };
    document.addEventListener('keydown', onKey, true);
    return () => document.removeEventListener('keydown', onKey, true);
  });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const r = createList(val);
    if ('err' in r) { setMsg(r.err); input.current?.focus(); return; }
    setVal(''); setInList(r.list.id, id, true); setMsg('Added to “' + r.list.name + '”.');
  };
  const isSaved = saved.indexOf(id) >= 0;
  return (
    <>
      <div className="pop-scrim" onClick={close} />
      <div className="pop" role="dialog" aria-modal="true" aria-labelledby="pop-t" tabIndex={-1} ref={root}>
        <div className="pop-head"><div><h2 id="pop-t">Save and organise</h2><p className="pop-case"><i>{name}</i></p></div><button type="button" className="icon-btn" aria-label="Close" onClick={close}><Icon.close /></button></div>
        <ul className="pop-lists" id="pop-lists">
          <li><label className="pop-row saved-row"><input type="checkbox" id="pl-saved" checked={isSaved} onChange={e => (e.target.checked ? saveCase(id) : unsaveCase(id))} /><span className="pl-name">Saved</span><span className="n">{saved.length}</span></label></li>
          {lists.length ? lists.map(l => (
            <li key={l.id}><label className="pop-row"><input type="checkbox" id={'pl-' + l.id} checked={inList(l, id)} onChange={e => setInList(l.id, id, e.target.checked)} /><span className="pl-name">{l.name}</span><span className="n">{l.ids.length}</span></label></li>
          )) : <li className="pop-empty">No playlists yet. Make your first one below.</li>}
        </ul>
        <form className="pop-new" onSubmit={submit}>
          <label className="sr" htmlFor="pn">New playlist name</label>
          <input className="txt" id="pn" name="name" maxLength={40} placeholder="New playlist name" autoComplete="off" value={val} onChange={e => setVal(e.target.value)} ref={input} />
          <button type="submit" className="btn btn-sm btn-primary"><Icon.plus />Create</button>
        </form>
        <p className="pop-msg" id="pop-msg" role="status">{msg}</p>
        <button type="button" className="btn btn-primary" onClick={close}>Done</button>
      </div>
    </>
  );
}
export default function PickerHost() {
  const { pop } = useUI(), data = useData(), c = pop && data ? data.by[pop] : null;
  return <div id="pop-root">{c && <Popup key={c.id} id={c.id} name={c.name} />}</div>;
}
