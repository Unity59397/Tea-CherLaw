/* Start a flashcard run on the Revise page with a list of cases (from the Library filter, a playlist, homework or the whole deck).
   The list is kept for this browser tab (tc.run in session storage), so reloading Revise keeps your place in the run. */
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { runStore } from './app';

export function useStartFeed() {
  const navigate = useNavigate();
  return useCallback((ids: string[]) => { if (!ids.length) return; runStore.set(ids.slice()); navigate('/revise'); }, [navigate]);
}
