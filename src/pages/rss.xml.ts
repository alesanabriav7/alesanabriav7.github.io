import rss from "@astrojs/rss";
import { getPosts } from "../data/writing";

export async function GET(context: { site?: URL }) {
  const posts = await getPosts();
  return rss({
    title: "Alejandro Sanabria — Writing",
    description: "Writing on forward deployed engineering, AI agents in production, mobile platforms, and building software products.",
    site: context.site ?? "https://alejandrosanabria.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}/`,
    })),
  });
}
