import type { InsetItem } from "../components/ui/types";
import { cifroAppStoreUrl } from "./cifro";
import { FULL_NAME, profileLinks } from "./site";

export type Lang = "en" | "es";

export const paths = {
  en: { home: "/", work: "/work/", projects: "/projects/", about: "/about/", blog: "/blog/", cifro: "/cifro/" },
  es: { home: "/es/", work: "/es/trabajo/", projects: "/es/proyectos/", about: "/es/sobre-mi/", blog: "/blog/", cifro: "/cifro/es/" },
} as const;

export function alternatesFor(page: keyof (typeof paths)["en"]) {
  return [
    { hreflang: "en", href: paths.en[page] },
    { hreflang: "es", href: paths.es[page] },
    { hreflang: "x-default", href: paths.en[page] },
  ];
}

export const contactEmail = "me@alesanabriav.com";

export const ui = {
  en: {
    nav: { work: "Work", projects: "Projects", blog: "Blog", about: "About", switchLabel: "ES · Español", connect: "Contact", label: "Primary navigation", footer: "Site links", homeLabel: "Alejandro Sanabria home" },
    footer: { email: "Email" },
    sections: { about: "About", experience: "Experience", projects: "Projects", blog: "Blog", contact: "Contact" },
    fullHistory: "Full work history",
    allPosts: "All posts",
    inSpanish: "In Spanish",
    readingTime: (minutes: number) => `${minutes} min read`,
    writtenBy: "Written by",
    authorBio: "I’m a Forward Deployed Engineer at Wonderful, based in Bogotá. I’ve built software since 2012, with a background in native iOS and Android.",
    aboutMe: "About me",
  },
  es: {
    nav: { work: "Trabajo", projects: "Proyectos", blog: "Blog", about: "Sobre mí", switchLabel: "EN · English", connect: "Contacto", label: "Navegación principal", footer: "Enlaces del sitio", homeLabel: "Alejandro Sanabria, inicio" },
    footer: { email: "Correo" },
    sections: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", blog: "Blog", contact: "Contacto" },
    fullHistory: "Toda mi trayectoria",
    allPosts: "Ver el blog",
    inSpanish: "En español",
    readingTime: (minutes: number) => `${minutes} min de lectura`,
    writtenBy: "Escrito por",
    authorBio: "Soy Forward Deployed Engineer en Wonderful y vivo en Bogotá. Construyo software desde 2012, con experiencia en iOS y Android nativos.",
    aboutMe: "Sobre mí",
  },
};

export const home = {
  en: {
    title: `${FULL_NAME} | Forward Deployed Engineer`,
    description: "Forward Deployed Engineer at Wonderful. Previously led iOS and Android at Platzi and co-founded Brand Spa. Building software since 2012.",
    eyebrow: "Forward Deployed Engineer at Wonderful · Bogotá",
    lead: "I’m a <strong>Forward Deployed Engineer at Wonderful</strong>. Previously, I led the iOS and Android teams at Platzi.",
    primary: "Explore my work",
    secondary: "Connect on LinkedIn",
    heroAlt: "Alejandro Sanabria at WWDC26 in Apple Park, holding his WWDC26 attendee badge",
    caption: "WWDC26 at Apple Park",
    about: [
      `At <a href="https://wonderful.ai">Wonderful</a> I work directly with customers to understand their workflows and design AI solutions. I build agents, integrations, and applications, and handle testing, deployment, and improvements in production.`,
      `Before Wonderful, I co-founded Brand Spa in 2012 and built full-stack B2B platforms. At Platzi I went from mobile engineer to leading <strong>iOS and Android</strong>, including the migration from React Native to Swift and Kotlin.`,
      `I also maintain <a href="/cifro/">Cifro</a>, an iPhone finance app with AI that runs on your iPhone using Apple Foundation Models, and the open source tools I use to ship it.`,
    ],
    portraitAlt: "Alejandro Sanabria Villescas at Apple Park",
    portraitCaption: "Apple Park, Cupertino",
    contact: "To talk about AI in production, mobile development, or a product you’re building, reach me on LinkedIn or by email.",
  },
  es: {
    title: `${FULL_NAME} | Forward Deployed Engineer`,
    description: "Forward Deployed Engineer en Wonderful. Antes lideré iOS y Android en Platzi y cofundé Brand Spa. Desarrollo de software desde 2012.",
    eyebrow: "Forward Deployed Engineer en Wonderful · Bogotá",
    lead: "Soy <strong>Forward Deployed Engineer en Wonderful</strong>. Antes lideré los equipos de iOS y Android en Platzi.",
    primary: "Explorar mi trabajo",
    secondary: "Hablemos por LinkedIn",
    heroAlt: "Alejandro Sanabria en la WWDC26, en Apple Park, con su credencial de la WWDC26",
    caption: "En la WWDC26, en Apple Park",
    about: [
      `En <a href="https://wonderful.ai">Wonderful</a> trabajo directamente con clientes para entender sus procesos y diseñar soluciones de IA. Desarrollo agentes, integraciones y aplicaciones, y me encargo de las pruebas, el despliegue y las mejoras en producción.`,
      `Antes de Wonderful cofundé Brand Spa en 2012 y construí plataformas B2B full-stack. En Platzi pasé de ingeniero móvil a liderar <strong>iOS y Android</strong>, incluida la migración de React Native a Swift y Kotlin.`,
      `También mantengo <a href="/cifro/es/">Cifro</a>, una app de finanzas con IA que funciona en tu iPhone, sobre Apple Foundation Models, y las herramientas open source con las que la publico.`,
    ],
    portraitAlt: "Alejandro Sanabria Villescas en Apple Park",
    portraitCaption: "Apple Park, Cupertino",
    contact: "Si quieres hablar de IA en producción, de desarrollo móvil o de un producto que estás construyendo, escríbeme por LinkedIn o por correo.",
  },
};

export const experience: Record<Lang, InsetItem[]> = {
  en: [
    { title: "Wonderful", subtitle: "Forward Deployed Engineer", meta: "Jul 2026–now", live: true, body: "I work directly with enterprise customers, from understanding their workflows and defining the technical approach to building AI agents, integrations, and applications. I evaluate the agents’ behavior, debug failures, and handle deployment, monitoring, and improvements in production." },
    { title: "Platzi", subtitle: "Mobile engineer to iOS & Android lead", meta: "Oct 2017–Jun 2026", body: "I joined as one of the first mobile engineers and later led the iOS and Android teams, including the migration from React Native to Swift and Kotlin." },
    { title: "Brand Spa", subtitle: "Co-founder · Full-stack engineering", meta: "Dec 2012–Oct 2017", body: "I co-founded the agency and ran engineering for almost five years: B2B client products like CMS platforms, e-commerce and quoting systems." },
  ],
  es: [
    { title: "Wonderful", subtitle: "Forward Deployed Engineer", meta: "jul 2026–hoy", live: true, body: "Trabajo directamente con clientes empresariales: entiendo sus procesos, defino la solución técnica y construyo agentes de IA, integraciones y aplicaciones. Evalúo el comportamiento de los agentes, investigo fallos y me encargo del despliegue, el monitoreo y las mejoras en producción." },
    { title: "Platzi", subtitle: "De ingeniero móvil a líder de iOS y Android", meta: "oct 2017–jun 2026", body: "Entré como uno de los primeros ingenieros móviles y terminé liderando iOS y Android, incluida la migración de React Native a Swift y Kotlin nativos." },
    { title: "Brand Spa", subtitle: "Cofundador · Ingeniería full-stack", meta: "dic 2012–oct 2017", body: "Cofundé la agencia y dirigí el desarrollo de productos B2B, como CMS, e-commerce y cotizadores." },
  ],
};

export interface Project {
  id: string;
  title: string;
  meta: string;
  text: string;
  icon?: { src: string; alt: string };
  links: { href: string; label: string; external?: boolean }[];
}

const cifroIcon = { src: "/cifro/icon.jpg", alt: "Cifro app icon" };

export const projects: Record<Lang, Project[]> = {
  en: [
    {
      id: "cifro",
      title: "Cifro",
      meta: "iPhone app · App Store",
      icon: cifroIcon,
      text: "A free budget app for iPhone. You log an expense by typing \"15 lunch\", by voice, or by scanning a receipt. No Cifro account, no bank login, no ads. AI runs on your iPhone with Apple Foundation Models; sync uses your private iCloud account.",
      links: [{ href: "/cifro/", label: "Cifro page" }, { href: cifroAppStoreUrl, label: "App Store", external: true }],
    },
    {
      id: "appstore-tools",
      title: "appstore-tools",
      meta: "TypeScript CLI",
      text: "TypeScript CLI and library for App Store Connect. It lists your apps, builds an IPA, reads and updates App Store metadata, and uploads builds.",
      links: [{ href: "/projects/appstore-tools/", label: "How it works" }, { href: "https://github.com/alesanabriav7/appstore-tools", label: "GitHub", external: true }],
    },
    {
      id: "screenshots-ios",
      title: "screenshots-ios",
      meta: "Simulator CLI",
      text: "CLI for iOS simulator screenshots. It builds the app, sets the status bar, launches it on the screen you choose with preview data, and saves the image.",
      links: [{ href: "/projects/screenshots-ios/", label: "How it works" }, { href: "https://github.com/alesanabriav7/screenshots-ios", label: "GitHub", external: true }],
    },
    {
      id: "ios-architect-skill",
      title: "ios-architect-skill",
      meta: "Skills for coding agents",
      text: "Skills for Claude Code and OpenClaw covering SwiftUI feature architecture, GRDB persistence, Swift concurrency tests and visual checks.",
      links: [{ href: "/projects/ios-architect/", label: "How it works" }, { href: "https://github.com/alesanabriav7/ios-architect-skill", label: "GitHub", external: true }],
    },
  ],
  es: [
    {
      id: "cifro",
      title: "Cifro",
      meta: "App para iPhone · App Store",
      icon: { src: "/cifro/icon.jpg", alt: "Ícono de la app Cifro" },
      text: "Una app de presupuesto gratis para iPhone. Registras un gasto escribiendo \"15 almuerzo\", con la voz o escaneando un recibo. Sin cuenta de Cifro, sin conectar el banco y sin anuncios. La IA funciona en tu iPhone con Apple Foundation Models; la sincronización usa tu iCloud privado.",
      links: [{ href: "/cifro/es/", label: "Página de Cifro" }, { href: cifroAppStoreUrl, label: "App Store", external: true }],
    },
    {
      id: "appstore-tools",
      title: "appstore-tools",
      meta: "CLI en TypeScript",
      text: "CLI y librería en TypeScript para App Store Connect. Lista tus apps, genera el IPA, lee y actualiza la metadata de la App Store y sube builds.",
      links: [{ href: "/projects/appstore-tools/", label: "Cómo funciona" }, { href: "https://github.com/alesanabriav7/appstore-tools", label: "GitHub", external: true }],
    },
    {
      id: "screenshots-ios",
      title: "screenshots-ios",
      meta: "CLI del simulador",
      text: "CLI para capturas del simulador de iOS. Compila la app, ajusta la barra de estado, la abre en la pantalla que elijas con datos de prueba y guarda la imagen.",
      links: [{ href: "/projects/screenshots-ios/", label: "Cómo funciona" }, { href: "https://github.com/alesanabriav7/screenshots-ios", label: "GitHub", external: true }],
    },
    {
      id: "ios-architect-skill",
      title: "ios-architect-skill",
      meta: "Skills para agentes de código",
      text: "Skills para Claude Code y OpenClaw sobre arquitectura de features en SwiftUI, persistencia con GRDB, tests de concurrencia en Swift y revisiones visuales.",
      links: [{ href: "/projects/ios-architect/", label: "Cómo funciona" }, { href: "https://github.com/alesanabriav7/ios-architect-skill", label: "GitHub", external: true }],
    },
  ],
};

export const work = {
  en: {
    title: "Work: Brand Spa, Platzi and Wonderful",
    description: "Where I've worked since 2012: Brand Spa engineering (Dec 2012–Oct 2017), Platzi mobile (Oct 2017–Jun 2026), Forward Deployed Engineer at Wonderful since July 2026.",
    eyebrow: "Work",
    heading: "Selected work and experience",
    lead: `I'm a Forward Deployed Engineer at <a href="https://wonderful.ai">Wonderful</a>. I work directly with customers to understand their operations, design technical solutions, and build and deploy AI agents, integrations, and applications. Before Wonderful, I co-founded Brand Spa and later led iOS and Android at Platzi.`,
    experience: "Experience",
    ownApp: "My own app",
    tools: "Tools I use to ship",
    crumb: "Work",
  },
  es: {
    title: "Trayectoria: Brand Spa, Platzi y Wonderful",
    description: "Dónde he trabajado desde 2012: ingeniería en Brand Spa (dic 2012–oct 2017), móvil en Platzi (oct 2017–jun 2026) y Forward Deployed Engineer en Wonderful desde julio de 2026.",
    eyebrow: "Trabajo",
    heading: "Trabajo y trayectoria",
    lead: `Soy Forward Deployed Engineer en <a href="https://wonderful.ai">Wonderful</a>. Trabajo directamente con clientes para entender su operación, diseñar la solución técnica y construir y desplegar agentes de IA, integraciones y aplicaciones. Antes de Wonderful cofundé Brand Spa y después lideré iOS y Android en Platzi.`,
    experience: "Experiencia",
    ownApp: "Mi propia app",
    tools: "Herramientas con las que publico",
    crumb: "Trabajo",
  },
};

export const projectsPage = {
  en: {
    title: "Projects: Cifro and open-source developer tools",
    description: "Apps and open-source tools I build and use: Cifro for iPhone, an App Store Connect CLI, an iOS simulator screenshot CLI and iOS skills for AI coding agents.",
    eyebrow: "Projects",
    heading: "Things I've built",
    lead: `I maintain Cifro, my iPhone app. I also publish the open-source tools I use to develop and release it.`,
    app: "App",
    tools: "Open source tools",
    crumb: "Projects",
  },
  es: {
    title: "Proyectos: Cifro y herramientas de código abierto",
    description: "Las apps y herramientas de código abierto que hago y uso: Cifro para iPhone, una CLI de App Store Connect, una CLI de capturas del simulador de iOS y skills de iOS para agentes de código.",
    eyebrow: "Proyectos",
    heading: "Lo que he construido",
    lead: `Mantengo Cifro, mi app para iPhone. También publico las herramientas de código abierto que uso en su desarrollo y publicación.`,
    app: "App",
    tools: "Herramientas de código abierto",
    crumb: "Proyectos",
  },
};

export const about = {
  en: {
    title: "About: software engineer since 2012",
    heading: "Software engineer since 2012",
    description: "Forward Deployed Engineer at Wonderful. Previously led iOS and Android at Platzi and co-founded Brand Spa. Building software since 2012.",
    eyebrow: "About · alesanabriav",
    lead: `I'm a Forward Deployed Engineer at <a href="https://wonderful.ai">Wonderful</a> in Bogotá, Colombia. I work with customers to understand their workflows, build AI solutions, and improve them in production.`,
    background: "Background",
    backgroundIntro: "I've worked in technology since 2012. I started in frontend, then built and led product engineering across web and mobile, with native iOS and Android as the core of my work.",
    photoAlt: "Alejandro Sanabria at WWDC26, Apple Park",
    photoCaption: "At WWDC26, Apple Park.",
    built: "Things I've built",
    builtText: `<a href="/cifro/">Cifro</a> is my budget app for iPhone, made with SwiftUI and Apple Foundation Models. I also publish open-source tools: <a href="/projects/appstore-tools/">appstore-tools</a> (App Store Connect CLI), <a href="/projects/screenshots-ios/">screenshots-ios</a> (iOS simulator screenshots) and <a href="/projects/ios-architect/">ios-architect-skill</a> (iOS architecture skills for Claude Code). All of them are on the <a href="/projects/">projects page</a>.`,
    stack: "What I work with",
    stackText: "I work with Swift, SwiftUI, Kotlin, React Native, and TypeScript. I build AI agents, integrate them with customer systems, and evaluate and monitor their behavior. I also automate App Store releases for my own apps.",
    profilesTitle: "Profiles",
    profiles: [
      { label: "LinkedIn", href: profileLinks.linkedin },
      { label: "GitHub (alesanabriav7)", href: profileLinks.github },
      { label: "X (@alesanabriav)", href: profileLinks.x },
      { label: "App Store developer page", href: profileLinks.appStore },
    ],
    crumb: "About",
  },
  es: {
    title: "Sobre mí: ingeniero de software desde 2012",
    heading: "Ingeniero de software desde 2012",
    description: "Forward Deployed Engineer en Wonderful. Antes lideré iOS y Android en Platzi y cofundé Brand Spa. Desarrollo de software desde 2012.",
    eyebrow: "Sobre mí · alesanabriav",
    lead: `Soy Forward Deployed Engineer en <a href="https://wonderful.ai">Wonderful</a> y vivo en Bogotá, Colombia. Trabajo con clientes para entender sus procesos, construir soluciones de IA y mejorarlas en producción.`,
    background: "Trayectoria",
    backgroundIntro: "Trabajo en tecnología desde 2012. Empecé en frontend y de ahí pasé a construir y liderar ingeniería de producto en web y móvil, con iOS y Android nativos como el centro de mi trabajo.",
    photoAlt: "Alejandro Sanabria en la WWDC26, en Apple Park",
    photoCaption: "En la WWDC26, en Apple Park.",
    built: "Lo que he construido",
    builtText: `<a href="/cifro/es/">Cifro</a> es mi app de presupuesto para iPhone, hecha con SwiftUI y Apple Foundation Models. También publico herramientas de código abierto: <a href="/projects/appstore-tools/">appstore-tools</a> (una CLI para App Store Connect), <a href="/projects/screenshots-ios/">screenshots-ios</a> (capturas del simulador de iOS) y <a href="/projects/ios-architect/">ios-architect-skill</a> (skills de arquitectura iOS para Claude Code). Están todas en la <a href="/es/proyectos/">página de proyectos</a>.`,
    stack: "Con qué trabajo",
    stackText: "Trabajo con Swift, SwiftUI, Kotlin, React Native y TypeScript. Construyo agentes de IA, los integro con los sistemas del cliente y evalúo y monitoreo su comportamiento. También automatizo la publicación de mis apps en la App Store.",
    profilesTitle: "Dónde encontrarme",
    profiles: [
      { label: "LinkedIn", href: profileLinks.linkedin },
      { label: "GitHub (alesanabriav7)", href: profileLinks.github },
      { label: "X (@alesanabriav)", href: profileLinks.x },
      { label: "Mis apps en la App Store", href: profileLinks.appStore },
    ],
    crumb: "Sobre mí",
  },
};
