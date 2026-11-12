/* A playlist someone shared by link (/shared#v=1&n=...&c=...). It shows the cases and lets you keep them as your own playlist. */
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CaseCard from '../components/CaseCard';
import { SharedShell } from '../components/Shell';
import { useUI } from '../components/UI';
import { Icon } from '../lib/icons';
import { useData, type Data } from '../lib/data';
import { parseShared } from '../lib/sharecode';
import { useStartFeed } from '../state/run';
import { createList, inList, lastStore, listsStore, saveCase, sameName, tidyName, useSaved } from '../state/saved';

const plural = (n: number, w: string) => n + ' ' + w + (n === 1 ? '' : 's');

function SharedView({ data }: { data: Data }) {
  const { hash } = useLocation(), sh = useMemo(() => parseShared(hash, data), [hash, data]);
  const { lists } = useSaved(), { toast } = useUI(), startFeed = useStartFeed();
  const [name, setName] = useState(sh.name), [err, setErr] = useState(''), [done, setDone] = useState<{ id: string; name: string; added: number } | null>(null);
  const okRef = useRef<HTMLParagraphElement>(null), nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => { setName(sh.name); setErr(''); setDone(null); }, [sh]);   // a different link was opened
  useEffect(() => { if (done) okRef.current?.focus(); }, [done]);
  const n = sh.ids.length;
  if (!n) return (
    <div className="wrap saved"><h1 className="page-title">This link doesn’t work</h1><p className="lede">The playlist link looks incomplete or damaged. Ask for a fresh link, or browse the cases yourself.</p><p><Link className="btn btn-primary" to="/library">Browse the case library</Link></p></div>
  );
  const existing = lists.find(l => l.name.toLowerCase() === tidyName(name).toLowerCase());
  const btn = existing ? 'Add to “' + existing.name + '”' : 'Create playlist';
  const hint = existing ? 'You already have a playlist called “' + existing.name + '”, so these cases will be added to it. Change the name to make a separate playlist instead.' : '';
  const keep = (e: FormEvent) => {
    e.preventDefault();
    const nm = tidyName(name); if (!nm) { setErr('Type a name for the playlist.'); nameRef.current?.focus(); return; }
    let l = sameName(nm);
    if (!l) { const r = createList(nm); if ('err' in r) { setErr(r.err); nameRef.current?.focus(); return; } l = r.list; }
    setErr('');
    let added = 0; const mine = l, ids = mine.ids.slice();
    sh.ids.forEach(id => { saveCase(id); if (!inList(mine, id) && ids.indexOf(id) < 0) { ids.push(id); added++; } });
    listsStore.set(listsStore.get().map(x => (x.id === mine.id ? { ...x, ids } : x)));
    lastStore.set(mine.id);
    setDone({ id: mine.id, name: mine.name, added }); toast('Added ' + plural(added, 'case') + ' to “' + mine.name + '”');
  };
  return (
    <div className="wrap saved">
      <p className="eyebrow">Shared with you</p><h1 className="page-title" id="sh-title" tabIndex={-1}>{sh.name}</h1>
      <p className="lede">{plural(n, 'case')} in a playlist someone shared from Tea-cher.</p>
      {sh.missing > 0 && <p className="meta">{plural(sh.missing, 'case')} in this link {sh.missing === 1 ? 'isn’t' : 'aren’t'} on this version of the site, so {sh.missing === 1 ? 'it is' : 'they are'} left out.</p>}
      <div className="list-actions shared-actions"><button type="button" className="btn btn-primary" onClick={() => startFeed(sh.ids)}><Icon.book />Revise {n}</button></div>
      {done ? (
        <section className="import" aria-label="Keep this playlist"><p className="import-ok" role="status" tabIndex={-1} ref={okRef}><Icon.check /> Added {plural(done.added, 'case')} to “{done.name}”.</p><Link className="btn btn-primary" to={'/saved#l=' + done.id}>Open it on your Saved page</Link></section>
      ) : (
        <section className="import" aria-labelledby="imp-t"><h2 id="imp-t">Keep this playlist</h2><p>Add these cases to your own playlists. They are copied to this device, so you can rename or change them freely.</p>
          <form className="inline-form" onSubmit={keep}><label className="imp-l" htmlFor="imp-name">Playlist name</label><input className="txt" id="imp-name" name="name" maxLength={40} value={name} onChange={e => setName(e.target.value)} autoComplete="off" ref={nameRef} /><button type="submit" className="btn btn-primary" id="imp-btn">{btn}</button></form>
          <p className="hint" id="imp-hint" role="status">{hint}</p>{err && <p className="form-err" role="alert">{err}</p>}
        </section>
      )}
      <div className="grid">{sh.ids.map(id => <CaseCard key={id} c={data.by[id]} />)}</div>
    </div>
  );
}
export default function Shared() {
  const data = useData();
  return data ? <SharedView data={data} /> : <SharedShell />;
}
