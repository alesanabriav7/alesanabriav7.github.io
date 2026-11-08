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
  footer: { tagline: string; madeBy: string; navLabel: string; privacy: string; support: string };
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
      title: "Cifro — Budget Planner & Expense Tracker for iPhone with Private AI",
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
      madeBy: "Made by",
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
      title: "Everything you need to stay on budget.",
      body: "A calm, native iPhone app that answers the questions that matter before the month gets away from you.",
    },
    features: [
      {
        id: "on-track",
        eyebrow: "Budget pace",
        title: "A budget planner that tells you if you're on track",
        body:
          "Open Cifro and read the verdict first — “You're on pace” or “You're spending a bit fast” — with the exact daily limit to finish the month within budget.",
        points: ["Daily spending limit for the rest of the month", "Projection for month-end spending", "Expected savings against your monthly income"],
        image: "home",
        alt: "Cifro Home with the month verdict, daily limit, pace chart and metrics",
      },
      {
        id: "where-it-goes",
        eyebrow: "Spending tracker",
        title: "See where your money goes",
        body:
          "One stacked bar splits the month by category, by group, or by intention — well spent, necessary, or unnecessary. Tap any row to open those exact expenses.",
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
          "Ask “Am I on track?”, “What can I cut this month?” or “How am I doing vs. last month?”. Cifro AI answers with your real numbers using Apple Intelligence on your iPhone — the conversation never leaves the device.",
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
        { title: "AI on device", body: "Suggestions and Cifro AI run on your iPhone. Only exchange rates are fetched from the internet — never your data." },
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
      title: "Cifro — App de presupuesto y control de gastos para iPhone con IA",
      description:
        "Cifro es la app de presupuesto y control de gastos para iPhone que te dice si vas bien en el mes, cuánto puedes gastar al día y en qué se te va el dinero. Con IA privada, sin conectar tu banco y sin anuncios.",
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
      madeBy: "Hecha por",
      navLabel: "Enlaces de Cifro",
      privacy: "Privacidad",
      support: "Soporte",
    },
    hero: {
      eyebrow: "App de presupuesto y control de gastos para iPhone",
      title: "¿Vas bien este mes?\nCifro te lo dice.",
      body:
        "Cifro convierte tus gastos en respuestas claras: si vas bien con el presupuesto, cuánto puedes gastar al día y en qué se te está yendo la plata. Sin conectar tu banco, sin anuncios y sin rastreo.",
      primary: "Descargar en la App Store",
      secondary: "Ver cómo funciona",
      note: "Gratis · Para iPhone con iOS 26 o posterior · En español e inglés",
      imageAlt: "Inicio de Cifro: “Vas un poco rápido” con límite diario, gráfica de ritmo y ahorro esperado",
      secondImageAlt: "Cifro divide el mes por categoría en una sola barra",
    },
    highlights: ["Límite de gasto diario", "Presupuesto por categoría", "IA privada en tu iPhone", "Escaneo de recibos", "Voz y Siri", "Sincronización con iCloud"],
    featuresHeading: {
      eyebrow: "Funciones",
      title: "Todo lo que necesitas para cumplir tu presupuesto.",
      body: "Una app nativa, sin ruido, que te responde lo importante antes de que se te vaya el mes.",
    },
    features: [
      {
        id: "on-track",
        eyebrow: "Cómo vas en el mes",
        title: "Una app de presupuesto que te dice si vas bien",
        body:
          "Apenas abres Cifro ves cómo vas: “Vas en ritmo” o “Vas un poco rápido”, con el límite diario exacto para terminar el mes dentro del presupuesto.",
        points: ["Cuánto puedes gastar al día lo que queda del mes", "Cuánto habrás gastado al cierre", "Cuánto vas a ahorrar según tu ingreso"],
        image: "home",
        alt: "Inicio de Cifro con el veredicto del mes, límite diario, gráfica de ritmo y métricas",
      },
      {
        id: "where-it-goes",
        eyebrow: "Control de gastos",
        title: "Mira en qué se te va el dinero",
        body:
          "Una sola barra reparte tu mes por categoría, por grupo o por intención: bien invertido, necesario o innecesario. Tocas cualquier fila y ves exactamente esos gastos.",
        points: ["Vistas por categoría, grupo e intención", "Qué porcentaje se lleva cada categoría", "Lo presupuestado al lado de lo gastado"],
        image: "where",
        alt: "“A dónde se va” en Cifro con una barra apilada y la lista de categorías",
      },
      {
        id: "budgets",
        eyebrow: "Presupuestos",
        title: "Un presupuesto para cada categoría",
        body:
          "Crea hasta ocho categorías, cada una con su presupuesto, y agrúpalas en Hogar, Rutina o Metas. De un vistazo ves lo gastado y lo que te queda.",
        points: ["Presupuesto mensual por categoría", "Grupos para gastos fijos, rutina y metas", "Anillos de progreso con lo que te queda"],
        image: "budgets",
        alt: "Organizar en Cifro con presupuestos por categoría agrupados en Hogar, Rutina y Metas",
      },
      {
        id: "ai",
        eyebrow: "IA privada",
        title: "Pregúntale a Cifro por tu dinero",
        body:
          "Pregunta “¿Voy bien este mes?”, “¿Qué puedo recortar?” o “¿Cómo voy frente al mes pasado?”. Cifro IA te responde con tus números reales usando Apple Intelligence, y la conversación nunca sale de tu iPhone.",
        points: ["Respuestas basadas en tus propios gastos", "Funciona en tu iPhone con Apple Intelligence", "Resumen del mes en cualquier iPhone"],
        image: "assistant",
        alt: "Cifro IA con el contexto del mes y preguntas sugeridas",
      },
      {
        id: "search",
        eyebrow: "Buscador de gastos",
        title: "Encuentra cualquier gasto en segundos",
        body:
          "Un buscador nativo con filtros que se combinan en la misma barra —categoría, estado de revisión, fechas y montos— para dar justo con lo que buscas.",
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
        { title: "Dilo", body: "Díctaselo a Cifro, o usa Siri y Atajos." },
        { title: "Escanéalo", body: "Toma una foto del recibo o elígelo de tu galería, y confirma los gastos que Cifro encuentra." },
        { title: "Cualquier moneda", body: "¿Pagaste en dólares o en euros? Cifro lo pasa a tu moneda automáticamente." },
      ],
    },
    privacy: {
      eyebrow: "Privado por diseño",
      title: "Tus datos financieros son tuyos.",
      items: [
        { title: "Sin cuenta ni banco", body: "Empieza sin correo, sin contraseña y sin conectar el banco. Cifro te sirve desde el primer gasto." },
        { title: "Sin anuncios ni rastreo", body: "Sin publicidad y sin analíticas de terceros. Lo que gastas no es asunto de nadie más." },
        { title: "Tu iPhone, tu iCloud", body: "Tus datos se quedan en tu iPhone y se sincronizan solo con tu iCloud privado. Puedes bloquear la app con Face ID o Touch ID." },
        { title: "IA en tu dispositivo", body: "Las sugerencias y Cifro IA funcionan en tu iPhone. Lo único que se consulta en internet son las tasas de cambio, nunca tus datos." },
      ],
    },
    faqHeading: { eyebrow: "Preguntas", title: "Preguntas sobre Cifro." },
    faqs: [
      { question: "¿Cifro es gratis?", answer: "Sí. Cifro es gratis en la App Store: sin anuncios y sin pagar suscripción para llevar tus gastos y presupuestos." },
      { question: "¿Cifro se conecta a mi banco?", answer: "No. Cifro nunca te pide acceso a tu banco. Los gastos los registras tú: escribiéndolos, dictándolos, con Siri o escaneando un recibo." },
      { question: "¿Mis datos financieros son privados?", answer: "Sí. Tus datos se guardan en tu iPhone y solo se sincronizan con tu cuenta privada de iCloud. Cifro no tiene anuncios ni analíticas de terceros, y no tienes que crear ninguna cuenta." },
      { question: "¿Cómo funciona Cifro IA?", answer: "Cifro IA usa Apple Intelligence en tu iPhone para responder preguntas sobre tus propios gastos. Necesitas un iPhone compatible con Apple Intelligence; en los demás igual ves el resumen y los análisis del mes." },
      { question: "¿Qué iPhone e idiomas son compatibles?", answer: "Cifro funciona en iPhone con iOS 26 o posterior y está disponible en español e inglés." },
      { question: "¿Puedo usar Cifro con otras monedas?", answer: "Sí. Eliges tu moneda principal y registras gastos en cualquier otra; Cifro los convierte con la tasa de cambio del día." },
    ],
    cta: {
      title: "Empieza con tu primer gasto.",
      body: "En pocos días vas a saber cuánto puedes gastar al día, en qué se te va más y si el mes va bien.",
      primary: "Descargar Cifro",
      secondary: "Ayuda y soporte",
    },
    featureList: [
      "Cómo vas con el presupuesto y cuánto puedes gastar al día",
      "Cuánto habrás gastado al cierre del mes y cuánto vas a ahorrar",
      "Presupuestos por categoría y grupos",
      "Desglose del gasto por categoría, grupo e intención",
      "Asistente de IA privado en tu iPhone con Apple Intelligence",
      "Registro de gastos por texto, voz, Siri y escaneo de recibos",
      "Conversión entre monedas",
      "Buscador con filtros combinables",
      "Widgets, Actividades en vivo y sincronización privada con iCloud",
    ],
  },
};
