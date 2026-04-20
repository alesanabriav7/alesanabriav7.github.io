export default {
  async fetch(request) {
    const accept = request.headers.get("Accept") || "";

    if (accept.includes("text/markdown")) {
      const url = new URL(request.url);
      const llmsUrl = new URL("/llms.txt", url.origin);
      const res = await fetch(llmsUrl);
      const text = await res.text();
      const tokens = String(Math.ceil(text.split(/\s+/).length * 1.3));

      return new Response(text, {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "x-markdown-tokens": tokens,
        },
      });
    }

    return fetch(request);
  },
};
