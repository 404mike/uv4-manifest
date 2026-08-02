// Minimal static server with CORS + Range support (for audio seeking).
import { createServer } from 'node:http';
import { statSync, createReadStream, existsSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const ROOT = process.cwd();
const TYPES = { '.json': 'application/json', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.js': 'text/javascript', '.html': 'text/html; charset=utf-8' };

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const path = normalize(join(ROOT, decodeURIComponent(url.pathname)));
  if (!path.startsWith(ROOT) || !existsSync(path) || !statSync(path).isFile()) {
    res.writeHead(404, { 'Access-Control-Allow-Origin': '*' });
    return res.end('not found');
  }
  const size = statSync(path).size;
  const type = TYPES[extname(path)] || 'application/octet-stream';
  const base = {
    'Access-Control-Allow-Origin': '*',
    'Accept-Ranges': 'bytes',
    'Content-Type': type,
  };
  const range = req.headers.range;
  if (range) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    let start = m[1] ? parseInt(m[1]) : 0;
    let end = m[2] ? parseInt(m[2]) : size - 1;
    if (end >= size) end = size - 1;
    res.writeHead(206, { ...base, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
    createReadStream(path, { start, end }).pipe(res);
  } else {
    res.writeHead(200, { ...base, 'Content-Length': size });
    createReadStream(path).pipe(res);
  }
}).listen(8765, '127.0.0.1', () => console.log('serving on 8765'));
