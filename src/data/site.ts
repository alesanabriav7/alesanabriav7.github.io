import { cifroAppStoreUrl } from "./cifro";

export const SITE_URL = "https://alejandrosanabria.com";
export const SITE_NAME = "Alejandro Sanabria";
export const FULL_NAME = "Alejandro Sanabria Villescas";
export const SITE_HANDLE = "alesanabriav";
export const DEFAULT_IMAGE = "/alejandro-sanabria.jpg";
export const DEFAULT_IMAGE_ALT = "Alejandro Sanabria Villescas at Apple WWDC";
export const PERSON_PHOTO = "/alejandro-sanabria-villescas.jpg?v=20261104";
export const PERSON_PHOTO_SMALL = "/alejandro-sanabria-villescas-192.jpg?v=20261104";
export const PERSON_PHOTO_ALT = "Alejandro Sanabria Villescas";

export const profileLinks = {
  linkedin: "https://www.linkedin.com/in/alesanabriav/",
  github: "https://github.com/alesanabriav7",
  githubLegacy: "https://github.com/alesanabriav",
  x: "https://x.com/alesanabriav",
  appStore: "https://apps.apple.com/co/developer/alejandro-sanabria/id1801328559",
  platzi: "https://platzi.com/profes/alesanabriav/",
  wikidata: "https://www.wikidata.org/wiki/Q142050521",
};

export const personSameAs = [
  profileLinks.linkedin,
  profileLinks.github,
  profileLinks.githubLegacy,
  profileLinks.x,
  profileLinks.appStore,
  profileLinks.platzi,
  profileLinks.wikidata,
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
export const personImageId = `${SITE_URL}/#person-image`;

export const personImageNode = {
  "@type": "ImageObject",
  "@id": personImageId,
  url: absoluteUrl(PERSON_PHOTO),
  contentUrl: absoluteUrl(PERSON_PHOTO),
  width: 1200,
  height: 1200,
  caption: "Alejandro Sanabria",
  name: "Alejandro Sanabria Villescas",
};

export const WWDC26_PHOTO = "/alejandro-sanabria-wwdc26.jpg";
export const wwdc26ImageNode = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#wwdc26-image`,
  url: absoluteUrl(WWDC26_PHOTO),
  contentUrl: absoluteUrl(WWDC26_PHOTO),
  width: 1200,
  height: 1200,
  caption: "Alejandro Sanabria at WWDC26, Apple Park",
};

export const personNode = {
  "@type": "Person",
  "@id": personId,
  name: SITE_NAME,
  givenName: "Alejandro",
  familyName: "Sanabria",
  additionalName: "Villescas",
  alternateName: ["Alejandro Sanabria Villescas", SITE_HANDLE, "alesanabriav7"],
  url: `${SITE_URL}/`,
  image: [personImageNode, wwdc26ImageNode],
  jobTitle: "Forward Deployed Engineer",
  worksFor: { "@type": "Organization", name: "Wonderful", url: "https://wonderful.ai" },
  alumniOf: [
    { "@type": "Organization", name: "Brand Spa" },
    { "@type": "Organization", name: "Platzi", url: "https://platzi.com" },
  ],
  description:
    "Forward Deployed Engineer at Wonderful in Bogotá. In technology since 2012: co-founded Brand Spa, led mobile at Platzi for 8+ years, and ships the Cifro iPhone app.",
  disambiguatingDescription: "Not the tax lawyer Alejandro Sanabria Díaz at Pérez-Llorca.",
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

export const cifroAppNode = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/cifro/#app`,
  name: "Cifro",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS",
  url: `${SITE_URL}/cifro/`,
  downloadUrl: cifroAppStoreUrl,
  installUrl: cifroAppStoreUrl,
  sameAs: cifroAppStoreUrl,
  author: { "@id": personId },
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: SITE_HANDLE,
  publisher: { "@id": personId },
};
