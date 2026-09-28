import pages from "./generated/page-markdown.json" with { type: "json" };

const CANONICAL_HOST = "alejandrosanabria.com";
const ALIASES = new Set(["alesanabriav.com", "www.alesanabriav.com", "www.alejandrosanabria.com"]);

// Require an explicit Markdown preference; ordinary browser Accept headers stay HTML.
function wantsMarkdown(accept) {
  const ranges = accept.toLowerCase().split(',').map(part => {
    const [type, ...params] = part.trim().split(';');
    const q = params.find(param => param.trim().startsWith('q='));
    return { type: type.trim(), quality: q ? Number(q.trim().slice(2)) : 1 };
  });
  const quality = type => ranges.find(range => range.type === type)?.quality;
  const markdown = quality('text/markdown') ?? 0;
  const html = quality('text/html') ?? quality('text/*') ?? quality('*/*') ?? 0;
  return markdown > 0 && markdown >= html;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const legacyPrivacy = url.pathname === "/privacy" || url.pathname === "/privacy/";
    if (ALIASES.has(url.hostname) || (url.hostname === CANONICAL_HOST && url.protocol !== "https:") || legacyPrivacy) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      if (legacyPrivacy) url.pathname = "/cifro/privacy/";
      return Response.redirect(url, 301);
    }
    // Serve the requested asset, preserving redirects and 404s for every Accept header.
    const markdownRequested = wantsMarkdown(request.headers.get('Accept') || '');
    const assetRequest = new Request(request);
    if (markdownRequested) {
      // HTML validators and byte ranges do not describe the Markdown representation.
      for (const name of ['If-None-Match', 'If-Modified-Since', 'Range', 'If-Range']) assetRequest.headers.delete(name);
    }
    const response = await env.ASSETS.fetch(assetRequest);
    if (!['GET', 'HEAD'].includes(request.method) || response.status !== 200 ||
        !response.headers.get('Content-Type')?.includes('text/html')) return response;
    const headers = new Headers(response.headers);
    const vary = headers.get('Vary');
    if (!vary?.split(',').some(value => ['accept', '*'].includes(value.trim().toLowerCase()))) {
      headers.set('Vary', vary ? `${vary}, Accept` : 'Accept');
    }
    const page = Object.hasOwn(pages, url.pathname) ? pages[url.pathname] : null;
    if (page && markdownRequested) {
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      if (page.robots) headers.set('X-Robots-Tag', page.robots);
      for (const name of ['Content-Length', 'Content-Encoding', 'ETag', 'Last-Modified', 'Accept-Ranges']) headers.delete(name);
      return new Response(request.method === 'HEAD' ? null : page.body, { headers });
    }
    return new Response(response.body, { status: response.status, headers });
  },
};
