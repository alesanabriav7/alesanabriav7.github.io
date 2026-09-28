import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';

const converter = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
converter.remove(['script', 'style', 'nav', 'svg']);
const pages = {};
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = `${directory}/${entry.name}`;
    if (entry.isDirectory()) { await walk(file); continue; }
    if (!entry.name.endsWith('.html') || entry.name === '404.html') continue;
    const { document } = parseHTML(await readFile(file, 'utf8'));
    if (document.querySelector('meta[http-equiv="refresh"]')) continue;
    const route = file.slice('dist'.length).replace(/index\.html$/, '');
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || new URL(route, 'https://alejandrosanabria.com').href;
    const content = document.querySelector('main') || document.body;
    for (const node of content.querySelectorAll('script, style, nav, svg, [hidden], [aria-hidden="true"]')) node.remove();
    for (const node of content.querySelectorAll('[href], [src]')) {
      for (const attr of ['href', 'src']) {
        const value = node.getAttribute(attr);
        if (value) node.setAttribute(attr, new URL(value, canonical).href);
      }
    }
    pages[route] = {
      body: `Source: ${canonical}\n\n${converter.turndown(content.innerHTML)}\n`,
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content'),
    };
  }
}
await walk('dist');
await mkdir('generated', { recursive: true });
await writeFile('generated/page-markdown.json', JSON.stringify(pages));
console.log(`Generated Markdown for ${Object.keys(pages).length} pages.`);
