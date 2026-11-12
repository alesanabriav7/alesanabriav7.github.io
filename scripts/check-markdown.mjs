import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import worker from '../worker.js';
import legacyProfileRedirects from '../src/data/legacy-profile-redirects.js';

const pages = JSON.parse(await readFile(new URL('../generated/page-markdown.json', import.meta.url)));
const origin = 'https://alejandrosanabria.com';
const asset = (status = 200, type = 'text/html') => ({ ASSETS: { fetch: async () => new Response(status === 304 ? null : '<h1>HTML</h1>', { status, headers: { 'Content-Type': type, ETag: '"html"' } }) } });
const getUrl = (url, accept, env = asset(), method = 'GET') => worker.fetch(new Request(url, { method, headers: { Accept: accept } }), env);
const get = (path, accept, env = asset(), method = 'GET') => getUrl(origin + path, accept, env, method);
for (const [path, page] of Object.entries(pages)) {
  const html = await get(path, 'text/html');
  assert.equal(html.status, 200, path);
  assert.equal(html.headers.get('Content-Type'), 'text/html', path);
  assert.equal(html.headers.get('Vary'), 'Accept', path);

  const response = await get(path, 'text/markdown');
  assert.equal(response.status, 200, path);
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
const noAsset = { ASSETS: { fetch: async () => { throw new Error('Redirects must finish before asset lookup.'); } } };
for (const [path, target] of legacyProfileRedirects) {
  for (const requestPath of [path, path.slice(0, -1)]) {
    const response = await get(requestPath, 'text/html', noAsset);
    assert.equal(response.status, 301, requestPath);
    assert.equal(response.headers.get('Location'), origin + target, requestPath);
  }
}
const queryRedirect = await get('/es/sobre-mi?ref=seo%2Fa', 'text/html', noAsset);
assert.equal(queryRedirect.status, 301);
assert.equal(queryRedirect.headers.get('Location'), `${origin}/es/?ref=seo%2Fa#about`);
for (const [host, path, target] of [
  ['https://www.alesanabriav.com', '/es/trabajo/?ref=alias', `${origin}/es/?ref=alias#work`],
  ['http://www.alejandrosanabria.com', '/work', `${origin}/#work`],
]) {
  const response = await getUrl(`${host}${path}`, 'text/html', noAsset);
  assert.equal(response.status, 301, `${host}${path}`);
  assert.equal(response.headers.get('Location'), target, `${host}${path}`);
}
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
console.log(`Markdown checks passed for ${Object.keys(pages).length} retained pages, HTML and Markdown negotiation, redirects, 404s, HEAD and privacy.`);
