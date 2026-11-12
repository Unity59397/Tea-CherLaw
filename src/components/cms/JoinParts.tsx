/* Parts used by both "My classes" and the invite page: what a teacher can see, and the 6-digit code form. */
import { useState, type FormEvent } from 'react';

export const SeesNote = () => (
  <ul className="disc"><li>Your teacher can see which homework cases you mark <em>Got it</em> or <em>Revise again</em>, how many cases you have marked in total, and when you last revised.</li><li>They can also keep private notes about you, which you can’t see.</li><li>They can’t see anything else you do on Tea-cher.</li><li>You can leave a classroom at any time from My classes.</li></ul>
);
export function CodeForm({ onSubmit, btn }: { onSubmit: (code: string) => void; btn: string }) {
  const [v, setV] = useState('');
  return (
    <form className="inline-form" onSubmit={(e: FormEvent) => { e.preventDefault(); onSubmit(v); }}>
      <label className="sr" htmlFor="jc-code">Class code, 6 digits</label>
      <input className="txt code-in" id="jc-code" name="code" inputMode="numeric" pattern="[0-9]{6}" maxLength={7} placeholder="6-digit code" autoComplete="off" value={v} onChange={e => setV(e.target.value)} />
      <button type="submit" className="btn btn-primary">{btn}</button>
    </form>
  );
}
