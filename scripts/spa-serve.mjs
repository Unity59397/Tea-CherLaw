// For testing a plain "vite build --outDir <dir>" output (no prerendering): node scripts/spa-serve.mjs <dir> <port>
// Serves files from <dir>; any path that is not a file gets index.html, so every page boots the React app in the browser.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const dir = path.resolve(process.argv[2]), port = +process.argv[3] || 8090;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };
http.createServer((req, res) => {
  let f = path.join(dir, path.normalize(decodeURIComponent(req.url.split('?')[0])));
  if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(dir, 'index.html');
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(port, () => console.log('SPA server for ' + dir + ' on http://localhost:' + port));
