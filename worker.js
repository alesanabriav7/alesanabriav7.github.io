export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/privacy" || url.pathname === "/privacy/") {
      return Response.redirect(new URL("/cifro/privacy/", url), 301);
    }

    const accept = request.headers.get("Accept") || "";

    if (accept.includes("text/markdown")) {
      const llmsUrl = new URL("/llms.txt", url.origin);
      const res = await env.ASSETS.fetch(new Request(llmsUrl));
      const text = await res.text();
      const tokens = String(Math.ceil(text.split(/\s+/).length * 1.3));

      return new Response(text, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": tokens,
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
