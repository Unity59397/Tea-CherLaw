import './cms/api';   // (registers the hook that records marks for signed-in students)
import { StrictMode } from 'react';
import { initAuth } from './auth/auth';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App, { type PageData } from './App';
import { UIProvider } from './components/UI';
import './styles/index.css';

const root = document.getElementById('root')!;
let page: PageData = null;
try { const el = document.getElementById('page-data'); if (el && el.textContent) page = JSON.parse(el.textContent); } catch { /* no first-page data */ }
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const app = (
  <StrictMode>
    <BrowserRouter basename={base || undefined}><UIProvider><App page={page} /></UIProvider></BrowserRouter>
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app); else createRoot(root).render(app);
initAuth();   // after the page is up: look for a saved sign-in (and read a confirmation link in the address)
