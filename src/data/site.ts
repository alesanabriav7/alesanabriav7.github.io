export const SITE_URL = "https://alejandrosanabria.com";
export const SITE_NAME = "Alejandro Sanabria";
export const SITE_HANDLE = "alesanabriav";
export const DEFAULT_IMAGE = "/alejandro-sanabria.jpg";
export const DEFAULT_IMAGE_ALT = "Alejandro Sanabria at WWDC 2026 in Apple Park with his WWDC26 badge";

export const personSameAs = [
  "https://www.linkedin.com/in/alesanabriav/",
  "https://github.com/alesanabriav7",
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
  alternateName: [SITE_HANDLE, "alesanabriav7"],
  url: `${SITE_URL}/`,
  image: absoluteUrl(DEFAULT_IMAGE),
  jobTitle: "Forward Deployed Engineer",
  worksFor: { "@type": "Organization", name: "Wonderful.ai", url: "https://wonderful.ai" },
  description:
    "Forward Deployed Engineer at Wonderful.ai, building AI agents, integrations, and tools for real customer workflows.",
  knowsAbout: [
    "Forward Deployed Engineering",
    "AI agents",
    "iOS development",
    "Swift",
    "SwiftUI",
    "Android development",
    "Kotlin",
    "React Native",
    "TypeScript",
    "Mobile platform leadership",
  ],
  sameAs: personSameAs,
};

export interface Crumb {
  name: string;
  href: string;
}

export function webPageNodes(canonical: string, name: string, description: string, crumbs: Crumb[]) {
  const breadcrumbId = `${canonical}#breadcrumb`;
  return [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name,
      description,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      author: { "@id": personId },
      breadcrumb: { "@id": breadcrumbId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [{ name: "Home", href: "/" }, ...crumbs].map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: index === 0 ? SITE_NAME : crumb.name,
        item: absoluteUrl(crumb.href),
      })),
    },
  ];
}

export const websiteNode = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: SITE_HANDLE,
  publisher: { "@id": personId },
};
