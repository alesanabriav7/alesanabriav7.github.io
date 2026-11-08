import { personSameAs } from "./site";

const [linkedin, github] = personSameAs;

export const personalNavLinks = [
  { href: "/work/", label: "Work" },
  { href: "/projects/", label: "Projects" },
  { href: "/cifro/", label: "Cifro" },
];

export const personalContact = { href: linkedin, label: "Connect", external: true, hideOnMobile: true };

export const personalFooterLinks = [
  ...personalNavLinks,
  { href: linkedin, label: "LinkedIn", external: true, rel: "me noopener noreferrer" },
  { href: github, label: "GitHub", external: true, rel: "me noopener noreferrer" },
];
