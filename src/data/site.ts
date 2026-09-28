export const SITE_URL = "https://alejandrosanabria.com";
export const SITE_NAME = "Alejandro Sanabria";
export const SITE_HANDLE = "alesanabriav";
export const DEFAULT_IMAGE = "/alejandro-sanabria.jpg";
export const DEFAULT_IMAGE_ALT = "Alejandro Sanabria";

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
  worksFor: { "@type": "Organization", name: "Wonderful.ai" },
  description:
    "Forward Deployed Engineer at Wonderful.ai, building AI agents, integrations, and tools for real customer workflows.",
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
