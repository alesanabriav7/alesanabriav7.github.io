export type CifroLang = "en" | "es";

export const cifroAppStoreId = "6759523370";
export const cifroAppStoreUrl = `https://apps.apple.com/app/id${cifroAppStoreId}`;

export function cifroPath(lang: CifroLang): string {
  return lang === "es" ? "/cifro/es/" : "/cifro/";
}

export const cifroAlternates = [
  { hreflang: "en", href: "/cifro/" },
  { hreflang: "es", href: "/cifro/es/" },
  { hreflang: "x-default", href: "/cifro/" },
];

interface Feature {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface CifroCopy {
  meta: { title: string; description: string; ogAlt: string };
  nav: { homeLabel: string; navLabel: string; features: string; privacy: string; faq: string; switchLabel: string; download: string };
  footer: { tagline: string; navLabel: string; privacy: string; support: string };
  hero: { eyebrow: string; title: string; body: string; primary: string; secondary: string; note: string; imageAlt: string; secondImageAlt: string };
  highlights: string[];
  featuresHeading: { eyebrow: string; title: string; body: string };
  features: Feature[];
  capture: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  privacy: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  faqHeading: { eyebrow: string; title: string };
  faqs: Faq[];
  cta: { title: string; body: string; primary: string; secondary: string };
  featureList: string[];
}

export const cifroCopy: Record<CifroLang, CifroCopy> = {
  en: {
    meta: {
      title: "Cifro App: Budget Planner & Expense Tracker for iPhone, No Bank Login",
      description:
        "Cifro is a budget planner and expense tracker for iPhone. Know if you're on track this month, see your daily spending limit, and ask private on-device AI about your money. No bank login, ads, or tracking.",
      ogAlt: "Cifro budget planner on iPhone showing whether the month is on track",
    },
    nav: {
      homeLabel: "Cifro home",
      navLabel: "Cifro navigation",
      features: "Features",
      privacy: "Privacy",
      faq: "FAQ",
      switchLabel: "Español",
      download: "Download",
    },
    footer: {
      tagline: "© 2026 Cifro · Budget planner & expense tracker for iPhone",
      navLabel: "Cifro links",
      privacy: "Privacy",
      support: "Support",
    },
    hero: {
      eyebrow: "Budget planner & expense tracker for iPhone",
      title: "Know if your budget is on track.",
      body:
        "Cifro turns your spending into a clear answer: are you on pace this month, how much can you spend per day, and where is your money going. No bank login, no ads, no tracking.",
      primary: "Download on the App Store",
      secondary: "See how it works",
      note: "Free · iPhone with iOS 26 or later · English and Spanish",
      imageAlt: "Cifro Home: “You're spending a bit fast” with a daily limit, pace chart and expected savings",
      secondImageAlt: "Cifro breakdown of the month by category with one stacked bar",
    },
    highlights: ["Daily spending limit", "Budgets by category", "Private on-device AI", "Receipt scanning", "Voice and Siri", "iCloud sync"],
    featuresHeading: {
      eyebrow: "Features",
      title: "What Cifro does",
      body: "Cifro tells you three things: if the month is on track, how much you can spend per day, and where the money went.",
    },
    features: [
      {
        id: "on-track",
        eyebrow: "Budget pace",
        title: "A budget planner that tells you if you're on track",
        body:
          "Open Cifro and read the verdict first (“You're on pace” or “You're spending a bit fast”) with the exact daily limit to finish the month within budget.",
        points: ["Daily spending limit for the rest of the month", "Projection for month-end spending", "Expected savings against your monthly income"],
        image: "home",
        alt: "Cifro Home with the month verdict, daily limit, pace chart and metrics",
      },
      {
        id: "where-it-goes",
        eyebrow: "Spending tracker",
        title: "See where your money goes",
        body:
          "One stacked bar splits the month by category, by group, or by intention: well spent, necessary, or unnecessary. Tap any row to open those exact expenses.",
        points: ["Categories, groups and intention views", "Share of spending for every category", "Budget next to what you spent"],
        image: "where",
        alt: "Cifro “Where it goes” with a stacked bar and a category list",
      },
      {
        id: "budgets",
        eyebrow: "Budgets",
        title: "A budget for every category",
        body:
          "Set up to eight categories with their own budget and organize them in groups like Home, Routine or Goals. Each one shows what you spent and what's left.",
        points: ["Monthly budget per category", "Groups for fixed costs, routine and goals", "Progress rings with what's still available"],
        image: "budgets",
        alt: "Cifro Organize with budgets by category grouped into Home, Routine and Goals",
      },
      {
        id: "ai",
        eyebrow: "Private AI",
        title: "Ask Cifro about your money",
        body:
          "Ask “Am I on track?”, “What can I cut this month?” or “How am I doing vs. last month?”. Cifro AI answers with your real numbers using Apple Intelligence on your iPhone. The conversation never leaves the device.",
        points: ["Answers based on your own spending", "Runs on device with Apple Intelligence", "Month context available on every iPhone"],
        image: "assistant",
        alt: "Cifro AI with the month in context and suggested questions",
      },
      {
        id: "search",
        eyebrow: "Expense search",
        title: "Find any expense in seconds",
        body:
          "Native search with filters that stack right in the search bar: combine categories, review status, dates and amounts to find exactly what you're looking for.",
        points: ["Search by merchant, concept or amount", "Stack category and status filters", "Custom date and amount ranges"],
        image: "search",
        alt: "Cifro transactions search with an “Unnecessary” filter token",
      },
    ],
    capture: {
      eyebrow: "Expense tracker",
      title: "Log an expense in seconds.",
      items: [
        { title: "Type it", body: "Write “15 lunch at the sushi place” and Cifro fills in the amount, place and category." },
        { title: "Say it", body: "Log expenses with your voice, or with Siri and Shortcuts." },
        { title: "Scan it", body: "Scan a receipt from the camera or your photos and confirm the expenses it finds." },
        { title: "Any currency", body: "Spending abroad? Cifro converts other currencies to your own automatically." },
      ],
    },
    privacy: {
      eyebrow: "Private by design",
      title: "Your financial data stays yours.",
      items: [
        { title: "No account or bank login", body: "Start without an email, password or bank connection. Cifro is useful from the first expense." },
        { title: "No ads, no tracking", body: "No advertising and no third-party analytics. Your spending is not someone else's dataset." },
        { title: "Your iPhone, your iCloud", body: "Data lives on your iPhone and syncs through your own private iCloud. Face ID or Touch ID can lock the app." },
        { title: "AI on device", body: "Suggestions and Cifro AI run on your iPhone. Only exchange rates are fetched from the internet, never your data." },
      ],
    },
    faqHeading: { eyebrow: "FAQ", title: "Questions about Cifro." },
    faqs: [
      { question: "Is Cifro free?", answer: "Yes. Cifro is free to download on the App Store, with no ads and no subscription required to track expenses and budgets." },
      { question: "Does Cifro connect to my bank?", answer: "No. Cifro never asks for your bank login. You log expenses by typing, by voice or Siri, or by scanning a receipt." },
      { question: "Is my financial data private?", answer: "Your data is stored on your iPhone and synced only through your own private iCloud account. Cifro has no ads, no third-party analytics and no account to create." },
      { question: "How does Cifro AI work?", answer: "Cifro AI uses Apple Intelligence on your iPhone to answer questions about your own spending. It needs an iPhone that supports Apple Intelligence; on other iPhones you still get the month's context and insights." },
      { question: "Which iPhones and languages are supported?", answer: "Cifro runs on iPhone with iOS 26 or later and is available in English and Spanish." },
      { question: "Can I use Cifro with other currencies?", answer: "Yes. Choose your main currency and log expenses in others; Cifro converts them using current exchange rates." },
    ],
    cta: {
      title: "Start with one expense.",
      body: "In a few days you'll know your daily limit, your top categories and whether the month is on track.",
      primary: "Download Cifro",
      secondary: "Get support",
    },
    featureList: [
      "Budget pace verdict with daily spending limit",
      "Month-end spending projection and expected savings",
      "Budgets by category and groups",
      "Spending breakdown by category, group and intention",
      "Private on-device AI assistant with Apple Intelligence",
      "Expense logging by text, voice, Siri and receipt scanning",
      "Multi-currency conversion",
      "Search with stackable filters",
      "Widgets, Live Activity and private iCloud sync",
    ],
  },
  es: {
    meta: {
      title: "Cifro: app de presupuesto para iPhone sin conectar tu banco",
      description:
        "Cifro es una app de presupuesto y control de gastos para iPhone. Sabe si vas bien este mes, conoce tu límite de gasto diario y pregúntale a una IA privada por tu dinero. Sin conectar tu banco, sin anuncios ni rastreo.",
      ogAlt: "Cifro, app de presupuesto en iPhone, mostrando si el mes va bien",
    },
    nav: {
      homeLabel: "Inicio de Cifro",
      navLabel: "Navegación de Cifro",
      features: "Funciones",
      privacy: "Privacidad",
      faq: "Preguntas",
      switchLabel: "English",
      download: "Descargar",
    },
    footer: {
      tagline: "© 2026 Cifro · App de presupuesto y control de gastos para iPhone",
      navLabel: "Enlaces de Cifro",
      privacy: "Privacidad",
      support: "Soporte",
    },
    hero: {
      eyebrow: "App de presupuesto y control de gastos para iPhone",
      title: "Sabe si tu presupuesto va bien.",
      body:
        "Cifro convierte tus gastos en una respuesta clara: si vas en ritmo este mes, cuánto puedes gastar al día y a dónde se va tu dinero. Sin conectar tu banco, sin anuncios, sin rastreo.",
      primary: "Descargar en la App Store",
      secondary: "Ver cómo funciona",
      note: "Gratis · iPhone con iOS 26 o posterior · Español e inglés",
      imageAlt: "Inicio de Cifro: “Vas un poco rápido” con límite diario, gráfica de ritmo y ahorro esperado",
      secondImageAlt: "Cifro divide el mes por categoría en una sola barra",
    },
    highlights: ["Límite de gasto diario", "Presupuesto por categoría", "IA privada en tu iPhone", "Escaneo de recibos", "Voz y Siri", "Sincronización iCloud"],
    featuresHeading: {
      eyebrow: "Funciones",
      title: "Qué hace Cifro",
      body: "Cifro te dice tres cosas: si el mes va bien, cuánto puedes gastar al día y en qué se te fue la plata.",
    },
    features: [
      {
        id: "on-track",
        eyebrow: "Ritmo del presupuesto",
        title: "Una app de presupuesto que te dice si vas bien",
        body:
          "Abre Cifro y lee primero el veredicto (“Vas en ritmo” o “Vas un poco rápido”) con el límite diario exacto para cerrar el mes dentro del presupuesto.",
        points: ["Límite de gasto diario para lo que queda del mes", "Proyección de gasto al cierre", "Ahorro esperado frente a tu ingreso mensual"],
        image: "home",
        alt: "Inicio de Cifro con el veredicto del mes, límite diario, gráfica de ritmo y métricas",
      },
      {
        id: "where-it-goes",
        eyebrow: "Control de gastos",
        title: "Mira a dónde se va tu dinero",
        body:
          "Una sola barra divide el mes por categoría, por grupo o por intención: bien invertido, necesario o innecesario. Toca cualquier fila para ver esos gastos exactos.",
        points: ["Vistas por categoría, grupo e intención", "Porcentaje del gasto de cada categoría", "Presupuesto junto a lo gastado"],
        image: "where",
        alt: "“A dónde se va” en Cifro con una barra apilada y la lista de categorías",
      },
      {
        id: "budgets",
        eyebrow: "Presupuestos",
        title: "Un presupuesto para cada categoría",
        body:
          "Crea hasta ocho categorías con su propio presupuesto y organízalas en grupos como Hogar, Rutina o Metas. Cada una muestra lo gastado y lo que te queda.",
        points: ["Presupuesto mensual por categoría", "Grupos para gastos fijos, rutina y metas", "Anillos de progreso con lo disponible"],
        image: "budgets",
        alt: "Organizar en Cifro con presupuestos por categoría agrupados en Hogar, Rutina y Metas",
      },
      {
        id: "ai",
        eyebrow: "IA privada",
        title: "Pregúntale a Cifro por tu dinero",
        body:
          "Pregunta “¿Voy bien este mes?”, “¿Qué puedo recortar?” o “¿Cómo voy frente al mes pasado?”. Cifro IA responde con tus números reales usando Apple Intelligence en tu iPhone. La conversación nunca sale del dispositivo.",
        points: ["Respuestas basadas en tus propios gastos", "Corre en tu iPhone con Apple Intelligence", "Contexto del mes en cualquier iPhone"],
        image: "assistant",
        alt: "Cifro IA con el contexto del mes y preguntas sugeridas",
      },
      {
        id: "search",
        eyebrow: "Buscador de gastos",
        title: "Encuentra cualquier gasto en segundos",
        body:
          "Buscador nativo con filtros que se combinan en la misma barra: categorías, estado de revisión, fechas y montos para encontrar justo lo que buscas.",
        points: ["Busca por comercio, concepto o monto", "Combina filtros de categoría y estado", "Rangos de fechas y montos"],
        image: "search",
        alt: "Buscador de movimientos en Cifro con el filtro “Innecesario”",
      },
    ],
    capture: {
      eyebrow: "Registro de gastos",
      title: "Registra un gasto en segundos.",
      items: [
        { title: "Escríbelo", body: "Escribe “15 almuerzo en el sushi” y Cifro completa el monto, el lugar y la categoría." },
        { title: "Dilo", body: "Registra gastos con tu voz, o con Siri y Atajos." },
        { title: "Escanéalo", body: "Escanea un recibo con la cámara o desde tus fotos y confirma los gastos que encuentra." },
        { title: "Cualquier moneda", body: "¿Gastos en otra moneda? Cifro los convierte a la tuya automáticamente." },
      ],
    },
    privacy: {
      eyebrow: "Privado por diseño",
      title: "Tus datos financieros son tuyos.",
      items: [
        { title: "Sin cuenta ni banco", body: "Empieza sin correo, contraseña ni conexión bancaria. Cifro es útil desde el primer gasto." },
        { title: "Sin anuncios ni rastreo", body: "Sin publicidad y sin analíticas de terceros. Tus gastos no son los datos de nadie más." },
        { title: "Tu iPhone, tu iCloud", body: "Tus datos viven en tu iPhone y se sincronizan con tu propio iCloud privado. Face ID o Touch ID pueden bloquear la app." },
        { title: "IA en tu dispositivo", body: "Las sugerencias y Cifro IA corren en tu iPhone. Solo se consultan tasas de cambio en internet, nunca tus datos." },
      ],
    },
    faqHeading: { eyebrow: "Preguntas", title: "Preguntas sobre Cifro." },
    faqs: [
      { question: "¿Cifro es gratis?", answer: "Sí. Cifro se descarga gratis en la App Store, sin anuncios y sin suscripción para llevar tus gastos y presupuestos." },
      { question: "¿Cifro se conecta a mi banco?", answer: "No. Cifro nunca pide el acceso a tu banco. Registras los gastos escribiendo, con tu voz o Siri, o escaneando un recibo." },
      { question: "¿Mis datos financieros son privados?", answer: "Tus datos se guardan en tu iPhone y solo se sincronizan con tu propia cuenta privada de iCloud. Cifro no tiene anuncios, ni analíticas de terceros, ni cuenta que crear." },
      { question: "¿Cómo funciona Cifro IA?", answer: "Cifro IA usa Apple Intelligence en tu iPhone para responder preguntas sobre tus propios gastos. Necesita un iPhone compatible con Apple Intelligence; en otros iPhone igual tienes el contexto del mes y los insights." },
      { question: "¿Qué iPhone e idiomas son compatibles?", answer: "Cifro funciona en iPhone con iOS 26 o posterior y está disponible en español e inglés." },
      { question: "¿Puedo usar Cifro con otras monedas?", answer: "Sí. Elige tu moneda principal y registra gastos en otras; Cifro los convierte con tasas de cambio actuales." },
    ],
    cta: {
      title: "Empieza con un gasto.",
      body: "En pocos días sabrás tu límite diario, tus categorías principales y si el mes va bien.",
      primary: "Descargar Cifro",
      secondary: "Obtener soporte",
    },
    featureList: [
      "Veredicto del ritmo del presupuesto con límite de gasto diario",
      "Proyección de gasto al cierre del mes y ahorro esperado",
      "Presupuestos por categoría y grupos",
      "Desglose del gasto por categoría, grupo e intención",
      "Asistente de IA privado en el dispositivo con Apple Intelligence",
      "Registro de gastos por texto, voz, Siri y escaneo de recibos",
      "Conversión de múltiples monedas",
      "Buscador con filtros combinables",
      "Widgets, Actividad en Vivo y sincronización privada con iCloud",
    ],
  },
};
