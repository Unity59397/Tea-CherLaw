/* The Saved page: every bookmarked case, plus your own playlists (named groups inside Saved). Everything is kept on this device only. */
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CaseCard from '../components/CaseCard';
import { SavedShell } from '../components/Shell';
import { useUI } from '../components/UI';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { shareUrl } from '../lib/share';
import { playlistLink } from '../lib/sharecode';
import { createList, deleteList, lastStore, renameList, setInList, useSaved } from '../state/saved';
import { useStartFeed } from '../state/run';

const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');
type Mode = '' | 'new' | 'rename' | 'delete';

function SavedView({ data }: { data: Data }) {
  const { saved, lists } = useSaved(), { toast } = useUI(), startFeed = useStartFeed(), { hash } = useLocation();
  const [listId, setListId] = useState('all'), [mode, setMode] = useState<Mode>(''), [err, setErr] = useState(''), [name, setName] = useState('');
  const focusNext = useRef('');
  /* the link from the Shared page opens a particular playlist: Saved#l=<id> */
  useEffect(() => { const m = /(?:^|[#&])l=([^&]+)/.exec(hash); if (m) setListId(decodeURIComponent(m[1])); }, [hash]);
  useEffect(() => { if (focusNext.current) { const el = document.querySelector<HTMLElement>(focusNext.current); focusNext.current = ''; el?.focus(); } });

  const l = listId === 'all' ? null : lists.find(x => x.id === listId) || null;
  /* a playlist's cases always count as saved, and cases this version of the site no longer has are left out */
  const allSaved = [...saved, ...lists.flatMap(x => x.ids).filter(id => saved.indexOf(id) < 0)].filter((id, i, a) => data.by[id] && a.indexOf(id) === i);
  const ids = (l ? l.ids.filter(id => data.by[id]) : allSaved).slice().reverse(), n = ids.length;   // newest first
  const go = (patch: { list?: string; mode?: Mode; err?: string; focus?: string; name?: string }) => {
    if (patch.list !== undefined) setListId(patch.list);
    setMode(patch.mode ?? ''); setErr(patch.err ?? ''); setName(patch.name ?? ''); focusNext.current = patch.focus || '';
  };
  const submitNew = (e: FormEvent) => {
    e.preventDefault(); const r = createList(name);
    if ('err' in r) return go({ mode: 'new', err: r.err, name, focus: '#nl-name' });
    lastStore.set(r.list.id);   // a playlist you just made becomes the one new saves go into
    go({ list: r.list.id, focus: '#sv-title' });
  };
  const submitRename = (e: FormEvent) => {
    e.preventDefault(); if (!l) return;
    const r = renameList(l.id, name);
    if ('err' in r) return go({ mode: 'rename', err: r.err, name, focus: '#rn-name' });
    go({ focus: '#sv-title' });
  };
  const remove = (id: string) => { if (!l) return; setInList(l.id, id, false); toast('Removed from “' + l.name + '”', 'Undo', () => setInList(l.id, id, true)); };
  const doDelete = () => { if (!l) return; deleteList(l.id); go({ list: 'all' }); toast('Deleted “' + l.name + '”'); };
  const share = () => {   // oldest first, the way they were added
    if (!n) return; const nm = l ? l.name : 'My saved cases', list = ids.slice().reverse();
    shareUrl({ title: nm, text: '“' + nm + '”: ' + plural(n, 'OCR A Level Law case') + ' on Tea-cher', url: playlistLink(nm, list) }, toast, 'Playlist link copied');
  };
  const form = (id: string, onSubmit: (e: FormEvent) => void, btn: string) => (
    <>
      <form className="inline-form" onSubmit={onSubmit}>
        <label className="sr" htmlFor={id}>Playlist name</label>
        <input className="txt" id={id} name="name" maxLength={40} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Cases to memorise" autoComplete="off" autoFocus />
        <button type="submit" className="btn btn-primary">{btn}</button><button type="button" className="btn" onClick={() => go({ focus: '#sv-title' })}>Cancel</button>
      </form>
      {err && <p className="form-err" role="alert">{err}</p>}
    </>
  );
  return (
    <div className="wrap saved">
      <p className="eyebrow">Your collection</p><h1 className="page-title">Saved cases</h1>
      <p className="lede">Bookmarked cases and your own playlists. They are kept on this device only.</p>
      <div className="tabs" role="group" aria-label="Saved cases and playlists">
        <button type="button" className="chip" aria-pressed={!l} onClick={() => go({ list: 'all' })}>All saved <span className="n">{allSaved.length}</span></button>
        {lists.map(x => <button key={x.id} type="button" className="chip" aria-pressed={l === x} onClick={() => go({ list: x.id })}>{x.name} <span className="n">{x.ids.filter(id => data.by[id]).length}</span></button>)}
        <button type="button" className="chip chip-new" onClick={() => go({ list: listId, mode: 'new', focus: '#nl-name' })}><Icon.plus />New playlist</button>
      </div>
      {mode === 'new' && form('nl-name', submitNew, 'Create playlist')}
      <div className="list-head">
        <div className="list-id">{mode === 'rename' && l ? form('rn-name', submitRename, 'Save name') : <><h2 className="list-title" id="sv-title" tabIndex={-1}>{l ? l.name : 'All saved cases'}</h2><p className="n">{plural(n, 'case')}</p></>}</div>
        <div className="list-actions">
          <button type="button" className="btn btn-primary" disabled={!n} onClick={() => startFeed(ids)}><Icon.book />Revise {n}</button>
          <button type="button" className="btn" disabled={!n} onClick={share}><Icon.share />Share</button>
          {l && <><button type="button" className="btn" onClick={() => go({ list: listId, mode: 'rename', name: l.name, focus: '#rn-name' })}><Icon.pencil />Rename</button>
            <button type="button" className="btn btn-danger" onClick={() => go({ list: listId, mode: 'delete' })}><Icon.trash />Delete</button></>}
        </div>
      </div>
      {mode === 'delete' && l && (
        <div className="confirm" role="alertdialog" aria-label="Delete playlist"><p>Delete the playlist <strong>{l.name}</strong>? Its cases stay in All saved.</p>
          <div className="list-actions"><button type="button" className="btn btn-danger" onClick={doDelete}><Icon.trash />Delete playlist</button><button type="button" className="btn" onClick={() => go({ list: listId })}>Cancel</button></div></div>
      )}
      {n ? <div className="grid">{ids.map(id => <CaseCard key={id} c={data.by[id]} saved inList={!!l} onRemove={remove} />)}</div>
        : l ? <div className="empty"><p>This playlist is empty.</p><p>Open <button type="button" className="linklike" onClick={() => go({ list: 'all' })}><u>All saved</u></button>, press <strong>Playlists</strong> on a case and tick “{l.name}”.</p></div>
        : <div className="empty"><p><strong>Nothing saved yet.</strong></p><p>Tap the bookmark <Icon.bookmark /> on any case to keep it here. You can then group saved cases into your own playlists.</p><p><Link className="btn btn-primary" to="/library">Browse the case library</Link></p></div>}
    </div>
  );
}
export default function Saved() {
  const data = useData();
  return data ? <SavedView data={data} /> : <SavedShell />;
}
