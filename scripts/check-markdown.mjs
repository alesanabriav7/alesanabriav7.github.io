import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import worker from '../worker.js';

const pages = JSON.parse(await readFile(new URL('../generated/page-markdown.json', import.meta.url)));
const origin = 'https://alejandrosanabria.com';
const asset = (status = 200, type = 'text/html') => ({ ASSETS: { fetch: async () => new Response(status === 304 ? null : '<h1>HTML</h1>', { status, headers: { 'Content-Type': type, ETag: '"html"' } }) } });
const get = (path, accept, env = asset(), method = 'GET') => worker.fetch(new Request(origin + path, { method, headers: { Accept: accept } }), env);
for (const [path, page] of Object.entries(pages)) {
  const response = await get(path, 'text/markdown');
  assert.equal(response.headers.get('Content-Type'), 'text/markdown; charset=utf-8', path);
  assert.equal(await response.text(), page.body, path);
  assert.match(page.body, /^Source: https:\/\/alejandrosanabria.com\//);
  assert.ok(page.body.includes('# '), path);
  assert.equal(response.headers.get('ETag'), null);
}
assert.notEqual(pages['/'].body, pages['/projects/ios-architect/'].body);
for (const accept of ['*/*', 'text/html', 'text/markdown;q=0', 'text/html, text/markdown;q=0.5']) {
  const response = await get('/', accept);
  assert.equal(response.headers.get('Content-Type'), 'text/html');
  assert.equal(response.headers.get('Vary'), 'Accept');
}
assert.equal((await get('/', 'text/markdown', asset(), 'HEAD')).body, null);
for (const status of [301, 404, 304]) assert.equal((await get('/missing/', 'text/markdown', asset(status))).status, status);
assert.equal((await get('/llms.txt', 'text/markdown', asset(200, 'text/plain'))).headers.get('Content-Type'), 'text/plain');
assert.equal((await get('/privacy/', 'text/markdown')).headers.get('Location'), origin + '/cifro/privacy/');
assert.match((await get('/cifro/privacy/', 'text/markdown')).headers.get('X-Robots-Tag'), /noindex/);
for (const path of ['/404', '/404/', '/404.html']) {
  const response = await get(path, 'text/html', asset(200));
  assert.equal(response.status, 404, path);
  assert.equal(response.headers.get('Content-Type'), 'text/html', path);
  assert.equal(await response.text(), '<h1>HTML</h1>', path);
}
assert.equal((await get('/404', 'text/html', asset(200), 'HEAD')).body, null);
const sitemap = await get('/sitemap.xml', '*/*');
assert.equal(sitemap.status, 301);
assert.equal(sitemap.headers.get('Location'), origin + '/sitemap-index.xml');
const aliasSitemap = await worker.fetch(new Request('http://www.alesanabriav.com/sitemap.xml'));
assert.equal(aliasSitemap.status, 301);
assert.equal(aliasSitemap.headers.get('Location'), origin + '/sitemap-index.xml');
console.log(`Markdown checks passed for ${Object.keys(pages).length} pages, negotiation, redirects, 404s, HEAD and privacy.`);
