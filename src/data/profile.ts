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
    nav: { work: "Work", projects: "Projects", blog: "Blog", about: "About", switchLabel: "Español", connect: "Contact", label: "Primary navigation", footer: "Site links", homeLabel: "Alejandro Sanabria home" },
    footer: { email: "Email" },
    sections: { about: "About", experience: "Experience", projects: "Projects", blog: "Blog", contact: "Contact" },
    fullHistory: "Full work history",
    allPosts: "All posts",
    inSpanish: "In Spanish",
    readingTime: (minutes: number) => `${minutes} min read`,
    writtenBy: "Written by",
    authorBio: "Forward Deployed Engineer at Wonderful in Bogotá. Building software products since 2012, with native iOS and Android at the core.",
    aboutMe: "About me",
  },
  es: {
    nav: { work: "Trabajo", projects: "Proyectos", blog: "Blog", about: "Sobre mí", switchLabel: "English", connect: "Contacto", label: "Navegación principal", footer: "Enlaces del sitio", homeLabel: "Alejandro Sanabria, inicio" },
    footer: { email: "Correo" },
    sections: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", blog: "Blog", contact: "Contacto" },
    fullHistory: "Toda mi trayectoria",
    allPosts: "Ver el blog",
    inSpanish: "En español",
    readingTime: (minutes: number) => `${minutes} min de lectura`,
    writtenBy: "Escrito por",
    authorBio: "Forward Deployed Engineer en Wonderful, en Bogotá. Construyo productos de software desde 2012, con iOS y Android nativos como base.",
    aboutMe: "Sobre mí",
  },
};

export const home = {
  en: {
    title: `${FULL_NAME} | Forward Deployed Engineer at Wonderful`,
    description: "Alejandro Sanabria Villescas, Forward Deployed Engineer at Wonderful in Bogotá. Building software products since 2012, with native iOS and Android at the core.",
    eyebrow: "Forward Deployed Engineer at Wonderful · Bogotá",
    lead: "I build <strong>AI agents for real customer workflows</strong>. I've been building software products since 2012, with native iOS and Android at the core.",
    primary: "See my work",
    secondary: "Connect on LinkedIn",
    heroAlt: "Alejandro Sanabria at WWDC26 in Apple Park, holding his WWDC26 attendee badge",
    caption: "WWDC26 at Apple Park",
    about: [
      `My work at <a href="https://wonderful.ai">Wonderful</a> starts before the code. I sit with the customer, learn how their team actually operates, and build AI agents that plug into the systems they already use, tested against real cases.`,
      "Before that I spent more than a decade building software products. I co-founded Brand Spa, where we built B2B platforms for clients, and most of my career went into <strong>native iOS and Android</strong>: shipping apps, leading mobile teams, and moving a large app from React Native to Swift and Kotlin.",
      `On the side I make <a href="/cifro/">Cifro</a>, a budget app for iPhone, and the open source tools I use to release it.`,
    ],
    portraitAlt: "Alejandro Sanabria Villescas at Apple Park",
    portraitCaption: "Apple Park, Cupertino",
    contact: "If you want to talk about AI in production, mobile, or a product you're building, LinkedIn or email work best.",
  },
  es: {
    title: `${FULL_NAME} | Forward Deployed Engineer en Wonderful`,
    description: "Alejandro Sanabria Villescas, Forward Deployed Engineer en Wonderful, en Bogotá. Construyo productos de software desde 2012, con iOS y Android nativos como base.",
    eyebrow: "Forward Deployed Engineer en Wonderful · Bogotá",
    lead: "Construyo <strong>agentes de IA para procesos reales de clientes</strong>. Hago productos de software desde 2012, y el desarrollo nativo para iOS y Android ha sido el centro de mi carrera.",
    primary: "Ver mi trabajo",
    secondary: "Hablemos por LinkedIn",
    heroAlt: "Alejandro Sanabria en la WWDC26, en Apple Park, con su credencial de la WWDC26",
    caption: "En la WWDC26, en Apple Park",
    about: [
      `En <a href="https://wonderful.ai">Wonderful</a> mi trabajo empieza antes del código. Me siento con el cliente, entiendo cómo opera de verdad su equipo y construyo agentes de IA que se conectan a los sistemas que ya usa, probados con casos reales.`,
      "Antes de eso pasé más de una década haciendo productos de software. Cofundé Brand Spa, donde construimos plataformas B2B para clientes, y la mayor parte de mi carrera la dediqué a <strong>iOS y Android nativos</strong>: publicar apps, liderar equipos móviles y migrar una app grande de React Native a Swift y Kotlin.",
      `Por fuera hago <a href="/cifro/es/">Cifro</a>, una app de presupuesto para iPhone, y las herramientas de código abierto con las que la publico.`,
    ],
    portraitAlt: "Alejandro Sanabria Villescas en Apple Park",
    portraitCaption: "Apple Park, Cupertino",
    contact: "Si quieres hablar de IA en producción, de desarrollo móvil o de un producto que estás construyendo, escríbeme por LinkedIn o por correo.",
  },
};

export const experience: Record<Lang, InsetItem[]> = {
  en: [
    { title: "Wonderful", subtitle: "Forward Deployed Engineer", meta: "Jul 2026–now", live: true, body: "I build AI agents for Wonderful's customers and connect them to the tools they already run." },
    { title: "Platzi", subtitle: "Mobile engineer to iOS & Android lead", meta: "Oct 2017–Jun 2026", body: "Joined as one of the first mobile engineers and grew into leading iOS and Android, including the move from React Native to native Swift and Kotlin." },
    { title: "Brand Spa", subtitle: "Co-founder · Full-stack engineering", meta: "Dec 2012–Oct 2017", body: "I co-founded the agency and ran engineering for almost five years: B2B client products like CMS platforms, e-commerce and quoting systems." },
  ],
  es: [
    { title: "Wonderful", subtitle: "Forward Deployed Engineer", meta: "jul 2026–hoy", live: true, body: "Construyo agentes de IA para los clientes de Wonderful y los conecto con las herramientas que ya usan." },
    { title: "Platzi", subtitle: "De ingeniero móvil a líder de iOS y Android", meta: "oct 2017–jun 2026", body: "Entré como uno de los primeros ingenieros móviles y terminé liderando iOS y Android, incluida la migración de React Native a Swift y Kotlin nativos." },
    { title: "Brand Spa", subtitle: "Cofundador · Ingeniería full-stack", meta: "dic 2012–oct 2017", body: "Cofundé la agencia y llevé la ingeniería casi cinco años: productos B2B para clientes, como CMS, e-commerce y cotizadores." },
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
      text: "A free budget app for iPhone. You log an expense by typing \"15 lunch\", by voice, or by scanning a receipt. No account, no bank login, no ads. The AI runs on the phone with Apple Foundation Models.",
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
      text: "Una app de presupuesto gratis para iPhone. Registras un gasto escribiendo \"15 almuerzo\", con la voz o escaneando un recibo. Sin cuenta, sin conectar el banco y sin anuncios. La IA funciona en el teléfono con Apple Foundation Models.",
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
    title: `${FULL_NAME}: Brand Spa, Platzi, Wonderful since 2012`,
    description: "Where I've worked since 2012: Brand Spa engineering (Dec 2012–Oct 2017), Platzi mobile (Oct 2017–Jun 2026), Forward Deployed Engineer at Wonderful since July 2026.",
    eyebrow: "Work",
    heading: "Where I've worked",
    lead: `I'm a Forward Deployed Engineer at <a href="https://wonderful.ai">Wonderful</a>. I've been building software products since 2012: I co-founded Brand Spa, spent most of my career on native mobile, and now build AI agents.`,
    experience: "Experience",
    ownApp: "My own app",
    tools: "Tools I use to ship",
    crumb: "Work",
  },
  es: {
    title: `${FULL_NAME}: Brand Spa, Platzi, Wonderful desde 2012`,
    description: "Dónde he trabajado desde 2012: ingeniería en Brand Spa (dic 2012–oct 2017), móvil en Platzi (oct 2017–jun 2026) y Forward Deployed Engineer en Wonderful desde julio de 2026.",
    eyebrow: "Trabajo",
    heading: "Dónde he trabajado",
    lead: `Soy Forward Deployed Engineer en <a href="https://wonderful.ai">Wonderful</a>. Construyo productos de software desde 2012: cofundé Brand Spa, pasé la mayor parte de mi carrera en móvil nativo y hoy construyo agentes de IA.`,
    experience: "Experiencia",
    ownApp: "Mi propia app",
    tools: "Herramientas con las que publico",
    crumb: "Trabajo",
  },
};

export const projectsPage = {
  en: {
    title: "Projects by Alejandro Sanabria: Cifro, appstore-tools, screenshots-ios",
    description: "Apps and open-source tools I build and use: Cifro for iPhone, an App Store Connect CLI, an iOS simulator screenshot CLI and iOS skills for AI coding agents.",
    eyebrow: "Projects",
    heading: "Things I've built",
    lead: `One iPhone app and three open-source tools. I use the tools to build and release the app. For jobs and the timeline, see <a href="/about/">About</a> and <a href="/work/">where I've worked</a>.`,
    app: "App",
    tools: "Open source tools",
    crumb: "Projects",
  },
  es: {
    title: "Proyectos de Alejandro Sanabria: Cifro, appstore-tools, screenshots-ios",
    description: "Las apps y herramientas de código abierto que hago y uso: Cifro para iPhone, una CLI de App Store Connect, una CLI de capturas del simulador de iOS y skills de iOS para agentes de código.",
    eyebrow: "Proyectos",
    heading: "Lo que he construido",
    lead: `Una app para iPhone y tres herramientas de código abierto. Las herramientas las uso para construir y publicar la app. Mi trayectoria está en <a href="/es/sobre-mi/">Sobre mí</a> y en <a href="/es/trabajo/">dónde he trabajado</a>.`,
    app: "App",
    tools: "Herramientas de código abierto",
    crumb: "Proyectos",
  },
};

export const about = {
  en: {
    title: "Alejandro Sanabria Villescas (alesanabriav) | since 2012",
    description: "Alejandro Sanabria Villescas (alesanabriav), Forward Deployed Engineer at Wonderful in Bogotá. Building software products since 2012, with native iOS and Android at the core.",
    eyebrow: "About · alesanabriav",
    lead: `I go by Alejandro Sanabria, and alesanabriav online. I'm a Forward Deployed Engineer at <a href="https://wonderful.ai">Wonderful</a> in Bogotá, Colombia.`,
    background: "Background",
    backgroundIntro: "I've worked in technology since 2012. I started in frontend, then built and led product engineering across web and mobile, with native iOS and Android as the core of my work.",
    photoAlt: "Alejandro Sanabria at WWDC26, Apple Park",
    photoCaption: "At WWDC26, Apple Park.",
    built: "Things I've built",
    builtText: `<a href="/cifro/">Cifro</a> is my budget app for iPhone, made with SwiftUI and Apple Foundation Models. I also publish open-source tools: <a href="/projects/appstore-tools/">appstore-tools</a> (App Store Connect CLI), <a href="/projects/screenshots-ios/">screenshots-ios</a> (iOS simulator screenshots) and <a href="/projects/ios-architect/">ios-architect-skill</a> (iOS architecture skills for Claude Code). All of them are on the <a href="/projects/">projects page</a>.`,
    stack: "What I work with",
    stackText: "Swift, SwiftUI, Kotlin, React Native, TypeScript, and AI agents wired into existing customer systems. App Store release automation when I ship my own apps.",
    profilesTitle: "Profiles",
    profiles: [
      { label: "LinkedIn", href: profileLinks.linkedin },
      { label: "GitHub (alesanabriav7)", href: profileLinks.github },
      { label: "X (@alesanabriav)", href: profileLinks.x },
      { label: "App Store developer page", href: profileLinks.appStore },
      { label: "Platzi teacher profile", href: profileLinks.platzi },
    ],
    crumb: "About",
  },
  es: {
    title: "Alejandro Sanabria Villescas (alesanabriav) | desde 2012",
    description: "Alejandro Sanabria Villescas (alesanabriav), Forward Deployed Engineer en Wonderful, en Bogotá. Construyo productos de software desde 2012, con iOS y Android nativos como base.",
    eyebrow: "Sobre mí · alesanabriav",
    lead: `Me conocen como Alejandro Sanabria, y en internet como alesanabriav. Soy Forward Deployed Engineer en <a href="https://wonderful.ai">Wonderful</a> y vivo en Bogotá, Colombia.`,
    background: "Trayectoria",
    backgroundIntro: "Trabajo en tecnología desde 2012. Empecé en frontend y de ahí pasé a construir y liderar ingeniería de producto en web y móvil, con iOS y Android nativos como el centro de mi trabajo.",
    photoAlt: "Alejandro Sanabria en la WWDC26, en Apple Park",
    photoCaption: "En la WWDC26, en Apple Park.",
    built: "Lo que he construido",
    builtText: `<a href="/cifro/es/">Cifro</a> es mi app de presupuesto para iPhone, hecha con SwiftUI y Apple Foundation Models. También publico herramientas de código abierto: <a href="/projects/appstore-tools/">appstore-tools</a> (una CLI para App Store Connect), <a href="/projects/screenshots-ios/">screenshots-ios</a> (capturas del simulador de iOS) y <a href="/projects/ios-architect/">ios-architect-skill</a> (skills de arquitectura iOS para Claude Code). Están todas en la <a href="/es/proyectos/">página de proyectos</a>.`,
    stack: "Con qué trabajo",
    stackText: "Swift, SwiftUI, Kotlin, React Native, TypeScript y agentes de IA conectados a los sistemas que el cliente ya tiene. Automatización de releases en la App Store cuando publico mis propias apps.",
    profilesTitle: "Dónde encontrarme",
    profiles: [
      { label: "LinkedIn", href: profileLinks.linkedin },
      { label: "GitHub (alesanabriav7)", href: profileLinks.github },
      { label: "X (@alesanabriav)", href: profileLinks.x },
      { label: "Mis apps en la App Store", href: profileLinks.appStore },
      { label: "Mi perfil de profe en Platzi", href: profileLinks.platzi },
    ],
    crumb: "Sobre mí",
  },
};
