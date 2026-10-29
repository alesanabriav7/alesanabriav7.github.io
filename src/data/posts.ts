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
    title: "Lo que mi equipo de Grok Bot hizo por mí: casos reales",
    description:
      "Alejandro Sanabria, Forward Deployed Engineer en Bogotá, cuenta casos reales de su equipo de bots en Grok Bot: trámites, plata que le debían, millas, citas y lo que todavía no hace.",
    datePublished: "2026-10-29",
    lang: "es",
  },
];

export const postPath = (slug: string) => `/blog/${slug}/`;
