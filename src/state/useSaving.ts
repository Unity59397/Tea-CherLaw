/* The bookmark: tap to save, tap again to remove (with Undo). New saves go into the playlist used last, and a message says so. */
import { useCallback } from 'react';
import { useUI } from '../components/UI';
import { getList, inList, isSaved, lastStore, listsStore, saveCase, savedStore, unsaveCase, useSaved } from './saved';

export function useToggleSaved() {
  const { toast, openPicker } = useUI();
  return useCallback((id: string) => {
    if (isSaved(id)) {
      const was = listsStore.get().filter(l => inList(l, id)).map(l => l.id), pos = savedStore.get().indexOf(id);
      unsaveCase(id);
      toast('Removed from saved', 'Undo', () => {
        const s = savedStore.get().slice(); s.splice(Math.min(pos, s.length), 0, id); savedStore.set(s);
        listsStore.set(listsStore.get().map(l => (was.indexOf(l.id) >= 0 && !inList(l, id) ? { ...l, ids: [...l.ids, id] } : l)));
      });
    } else {
      const last = lastStore.get(), l = last ? getList(last) : undefined;
      saveCase(id);
      if (l && !inList(l, id)) listsStore.set(listsStore.get().map(x => (x.id === l.id ? { ...x, ids: [...x.ids, id] } : x)));
      toast(l ? 'Saved to “' + l.name + '”' : 'Saved', l ? 'Change' : 'Add to playlist', () => openPicker(id));
    }
  }, [toast, openPicker]);
}
export const useIsSaved = (id: string) => useSaved().saved.indexOf(id) >= 0;
