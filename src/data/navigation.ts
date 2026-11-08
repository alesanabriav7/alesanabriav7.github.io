import { personSameAs } from "./site";

const [linkedin, github] = personSameAs;

export const contactEmail = "me@alesanabriav.com";

export function personalNavLinks(hasWriting: boolean) {
  return [
    { href: "/work/", label: "Work" },
    { href: "/projects/", label: "Projects" },
    ...(hasWriting ? [{ href: "/writing/", label: "Writing" }] : []),
  ];
}

export const personalContact = { href: linkedin, label: "Connect", external: true, hideOnMobile: true };

export function personalFooterLinks(hasWriting: boolean) {
  return [
    ...personalNavLinks(hasWriting),
    { href: "/cifro/", label: "Cifro" },
    { href: linkedin, label: "LinkedIn", external: true, rel: "me noopener noreferrer" },
    { href: github, label: "GitHub", external: true, rel: "me noopener noreferrer" },
    { href: `mailto:${contactEmail}`, label: "Email" },
  ];
}
