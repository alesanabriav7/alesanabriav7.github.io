import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site?: URL }) {
  const posts = await getCollection("writing");
  return rss({
    title: "Alejandro Sanabria — Writing",
    description: "Writing on FDE work, agent systems, mobile platforms, and engineering judgment.",
    site: context.site ?? "https://alesanabriav.com",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/writing/${post.id}`,
    })),
  });
}
