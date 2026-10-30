export const SITE_URL = "https://alejandrosanabria.com";
export const SITE_NAME = "Alejandro Sanabria";
export const SITE_HANDLE = "alesanabriav";
export const DEFAULT_IMAGE = "/alejandro-sanabria.jpg";
export const DEFAULT_IMAGE_ALT = "Alejandro Sanabria";

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/alesanabriav/",
  github: "https://github.com/alesanabriav7",
  githubLegacy: "https://github.com/alesanabriav",
  x: "https://x.com/alesanabriav",
  appStore: "https://apps.apple.com/co/developer/alejandro-sanabria/id1801328559",
  platzi: "https://platzi.com/profes/alesanabriav/",
};

export const personSameAs = [
  profileLinks.linkedin,
  profileLinks.github,
  profileLinks.githubLegacy,
  profileLinks.x,
  profileLinks.appStore,
  profileLinks.platzi,
];

export const homeAlternates = [
  { hreflang: "en", href: "/" },
  { hreflang: "es", href: "/es/" },
  { hreflang: "x-default", href: "/" },
];

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}

export const personId = `${SITE_URL}/#person`;
export const websiteId = `${SITE_URL}/#website`;

export const personNode = {
  "@type": "Person",
  "@id": personId,
  name: SITE_NAME,
  givenName: "Alejandro",
  familyName: "Sanabria",
  additionalName: "Villescas",
  alternateName: ["Alejandro Sanabria Villescas", SITE_HANDLE, "alesanabriav7"],
  url: `${SITE_URL}/`,
  image: absoluteUrl(DEFAULT_IMAGE),
  jobTitle: "Forward Deployed Engineer",
  worksFor: { "@type": "Organization", name: "Wonderful", url: "https://wonderful.ai" },
  description:
    "Forward Deployed Engineer at Wonderful in Bogotá. Builds AI agents for customer workflows, the Cifro iPhone app, and App Store developer tools. iOS & Android engineer.",
  homeLocation: {
    "@type": "Place",
    name: "Bogotá, Colombia",
    address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
  },
  knowsAbout: [
    "Forward Deployed Engineering",
    "AI agents",
    "AI workflows",
    "iOS development",
    "Swift",
    "SwiftUI",
    "Apple Foundation Models",
    "Android",
    "Kotlin",
    "React Native",
    "TypeScript",
    "Mobile architecture",
    "App Store Connect automation",
  ],
  sameAs: personSameAs,
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: SITE_HANDLE,
  publisher: { "@id": personId },
};
