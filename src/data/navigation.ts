import { contactEmail, paths, ui, type Lang } from "./profile";
import { profileLinks } from "./site";

export function personalNavLinks(lang: Lang, alternates: { hreflang: string; href: string }[] = []) {
  const t = ui[lang].nav;
  const p = paths[lang];
  const other = alternates.find((alternate) => alternate.hreflang === (lang === "es" ? "en" : "es"));
  return [
    { href: `${p.home}#work`, label: t.work },
    { href: `${p.home}#projects`, label: t.projects },
    { href: `${p.home}#blog`, label: t.blog },
    { href: `${p.home}#about`, label: t.about },
    ...(other ? [{ href: other.href, label: t.switchLabel, hreflang: other.hreflang }] : []),
  ];
}

export function personalContact(lang: Lang) {
  return { href: `${paths[lang].home}#contact`, label: ui[lang].nav.connect };
}

export function personalFooterLinks(lang: Lang) {
  const t = ui[lang].nav;
  const p = paths[lang];
  const otherLang: Lang = lang === "es" ? "en" : "es";
  return [
    { href: `${p.home}#work`, label: t.work },
    { href: `${p.home}#projects`, label: t.projects },
    { href: `${p.home}#blog`, label: t.blog },
    { href: `${p.home}#about`, label: t.about },
    { href: p.cifro, label: "Cifro" },
    { href: profileLinks.linkedin, label: "LinkedIn", external: true, rel: "me noopener noreferrer" },
    { href: profileLinks.github, label: "GitHub", external: true, rel: "me noopener noreferrer" },
    { href: profileLinks.x, label: "X", external: true, rel: "me noopener noreferrer" },
    { href: profileLinks.appStore, label: "App Store", external: true, rel: "me noopener noreferrer" },
    { href: `mailto:${contactEmail}`, label: ui[lang].footer.email },
    { href: paths[otherLang].home, label: ui[lang].nav.switchLabel },
  ];
}
