export interface Post {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  lang: "es" | "en";
}

export const posts: Post[] = [
  {
    slug: "grok-bot-casos-reales",
    title: "Casos reales de mi equipo de Grok Bot",
    description:
      "Casos de un equipo de bots en Grok Bot: trámites, reembolsos, millas, citas de Global Entry y lo que no automatiza.",
    datePublished: "2026-10-29",
    lang: "es",
  },
];

export const postPath = (slug: string) => `/blog/${slug}/`;
