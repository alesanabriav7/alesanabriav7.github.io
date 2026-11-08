import rss from "@astrojs/rss";
import { postPath, sortedPosts } from "../data/posts";

export function GET(context: { site?: URL }) {
  return rss({
    title: "Blog de Alejandro Sanabria",
    description: "Notas sobre agentes de IA, asistentes y cómo los uso en la vida real.",
    site: context.site ?? "https://alejandrosanabria.com",
    customData: "<language>es</language>",
    items: sortedPosts().map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(`${post.datePublished}T12:00:00Z`),
      link: postPath(post.slug),
    })),
  });
}
