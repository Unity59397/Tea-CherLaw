import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* The site lives at the root of a custom domain (tea-cher.co.uk), or under /<repository>/ on github.io until the domain is attached.
   BASE_PATH (set by the GitHub workflow) says which; locally it is "/". */
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');

export default defineConfig({
  base,
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true, sourcemap: false, target: 'es2020' },
  ssr: { noExternal: ['react-router-dom'] }
});
