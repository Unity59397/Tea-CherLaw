import { fileURLToPath } from 'node:url';
// Usage: node scripts/serve.mjs [port]   then open http://localhost:8080
// A tiny static server for dist/ that behaves like GitHub Pages: /library serves library.html, /cases/ serves cases/index.html, unknown paths show 404.html.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), dir = path.join(root, 'dist'), port = +process.argv[2] || 8080;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer((req, res) => {
  const [rawPath, query] = req.url.split('?');
  let p = decodeURIComponent(rawPath); if (p.endsWith('/')) p += 'index.html';
  let f = path.join(dir, path.normalize(p));
  if (f.startsWith(dir) && fs.existsSync(f) && fs.statSync(f).isDirectory()) { res.writeHead(301, { location: rawPath + '/' + (query ? '?' + query : '') }); return res.end(); }
  if (f.startsWith(dir) && !fs.existsSync(f) && fs.existsSync(f + '.html')) f += '.html';
  if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' }); return res.end(fs.existsSync(path.join(dir, '404.html')) ? fs.readFileSync(path.join(dir, '404.html')) : 'Not found'); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(port, () => console.log('Serving dist/ at http://localhost:' + port));
