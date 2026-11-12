/* Case library: the topic tree on the left (areas > topics > sub-topics) with expand/collapse arrows. */
import { Icon } from '../../lib/icons';
import type { Data } from '../../lib/data';
import { TAX } from '../../lib/taxonomy';
import type { NodeKind, TreeNode } from './filtering';

interface RowProps { k: NodeKind; id: string; label: string; count: number; hasKids: boolean; open: boolean; node: TreeNode | null; onPick: (n: TreeNode) => void; onToggle: (id: string) => void }
function Row({ k, id, label, count, hasKids, open, node, onPick, onToggle }: RowProps) {
  const on = !!node && node.k === k && node.id === id;
  return (
    <div className={'trow l-' + k + (on ? ' on' : '')}>
      <button type="button" className="tnode" aria-current={on ? 'true' : undefined} onClick={() => onPick({ k, id })}><span>{label}</span><span className="n">{count}</span></button>
      {hasKids && <button type="button" className={'tcaret' + (open ? ' open' : '')} aria-expanded={open} aria-label={(open ? 'Collapse ' : 'Expand ') + label} onClick={() => onToggle(id)}><Icon.chev /></button>}
    </div>
  );
}

export default function LibraryTree({ data, node, exp, onPick, onAll, onToggle }: { data: Data; node: TreeNode | null; exp: ReadonlySet<string>; onPick: (n: TreeNode) => void; onAll: () => void; onToggle: (id: string) => void }) {
  const cnt = data.count;
  return (
    <div id="tree">
      <button type="button" className={'tnode all' + (!node ? ' on' : '')} onClick={onAll}><span>All cases</span><span className="n">{data.cases.length}</span></button>
      {TAX.map(a => {
        const ca = cnt('area', a.id); if (!ca) return null;
        const oa = exp.has(a.id);
        return (
          <div className="tg" key={a.id}>
            <Row k="area" id={a.id} label={a.label} count={ca} hasKids open={oa} node={node} onPick={onPick} onToggle={onToggle} />
            {oa && a.topics.map(t => {
              const ct = cnt('topic', t.id); if (!ct) return null;
              const ot = exp.has(t.id);
              return (
                <div key={t.id} style={{ display: 'contents' }}>
                  <Row k="topic" id={t.id} label={t.label} count={ct} hasKids open={ot} node={node} onPick={onPick} onToggle={onToggle} />
                  {ot && t.subs.map(s => { const cs = cnt('sub', s.id); return cs ? <Row key={s.id} k="sub" id={s.id} label={s.label} count={cs} hasKids={false} open={false} node={node} onPick={onPick} onToggle={onToggle} /> : null; })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
