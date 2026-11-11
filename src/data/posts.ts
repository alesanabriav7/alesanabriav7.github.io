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
    title: "Casos reales de mi equipo de Grok Bot",
    description:
      "Cómo uso un equipo de bots para resolver trámites, organizar viajes y seguir pendientes, con ejemplos de lo que ya hizo y lo que todavía tengo que revisar.",
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
