export interface Post {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  lang: "es" | "en";
  minutes: number;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: "grok-bot-casos-reales",
    title: "Lo que mi equipo de Grok Bot hizo por mí: casos reales",
    description:
      "Alejandro Sanabria, Forward Deployed Engineer en Bogotá, cuenta casos reales de su equipo de bots en Grok Bot: trámites, plata que le debían, millas, citas y lo que todavía no hace.",
    datePublished: "2026-10-29",
    lang: "es",
    minutes: 8,
    tags: ["Grok Bot", "Asistentes de IA", "Agentes de IA"],
  },
];

export const postPath = (slug: string) => `/blog/${slug}/`;

export const sortedPosts = () => [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function formatPostDate(iso: string, lang: "es" | "en") {
  return new Intl.DateTimeFormat(lang === "es" ? "es-CO" : "en", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}
