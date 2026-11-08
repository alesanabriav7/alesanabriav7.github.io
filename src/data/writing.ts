import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"writing">;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("writing", ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatPostDate = (date: Date) =>
  new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(date);

export function readingMinutes(body = ""): number {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));
}
