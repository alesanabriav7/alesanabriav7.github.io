# Auditoría SEO de alesanabriav.com

Fecha: 5 de septiembre de 2026. Sitio público, código local y sesión autenticada de Google Search Console. Petición: aplicar los prompts del [artículo de Sarvesh Shrivastava](https://x.com/bloggersarvesh/status/2095896040155340809).

**El primer trabajo es conseguir que Google descubra las páginas publicadas y hacer que cada una explique un tema concreto.** La home concentra los cuatro clics del periodo. `/projects/` y `/cifro/` responden correctamente, pero la inspección individual de Search Console las muestra como desconocidas para Google. La propiedad no tiene sitemaps enviados.

Esta entrega contiene una auditoría y propuestas de contenido. Los cambios de implementación y publicación siguen pendientes.

## Contexto usado

- Marca: Alejandro Sanabria / alesanabriav.
- Foco vigente: Forward Deployed Engineer en Wonderful.ai; experiencia móvil y herramientas propias como evidencia técnica.
- Objetivo de trabajo: mejorar el descubrimiento de su identidad profesional, trabajo y proyectos. No se presupone una oferta de consultoría ni búsqueda de empleo.
- Audiencias: ingenieros y equipos interesados en implementación de IA, herramientas de desarrollo y productos iOS; Cifro tiene además una audiencia de usuarios finales.
- Idioma actual del sitio: inglés. Las propuestas para las páginas conservan ese idioma.
- Geografía: no se aplica la estrategia de crear páginas por ciudad. El sitio no se presenta como un negocio local con atención presencial.

## Resultado de los 12 prompts

| Prompt original | Aplicación al sitio | Resultado |
|---|---|---|
| 1. Categorías GBP | Posicionamiento profesional | FDE como identidad principal; mobile/product engineering como respaldo. Comparación de tres portafolios en `comparison.csv`. |
| 2. Atributos GBP | Evidencia y señales de confianza | Ya existen cargo, empresa, GitHub, LinkedIn y producto publicado. Faltan explicaciones concretas por proyecto y enlaces más descriptivos hacia ellas. |
| 3. Reseñas de competidores | Prueba pública de trabajo | Se compararon casos, repositorios y estructura de evidencia. Métricas de reseñas locales no aplican. No se inventaron testimonios ni resultados. |
| 4. Respuestas a reseñas | No aplica al portafolio | No hay una superficie de reseñas de negocio local que gestionar. Soporte de Cifro es una función distinta. |
| 5. Publicaciones GBP | Contenido propio + distribución | Calendario de ocho semanas y ocho textos para las primeras cuatro en `content.md`. Es una propuesta, no una programación automática. |
| 6. Descripciones de servicios | Descripciones de capacidades/proyectos | Texto propuesto en `copy.md`, basado en lo que ya es público. |
| 7. Descripción GBP | Bio y metadatos | Tres variantes de bio, metadatos para cinco páginas existentes y tres nuevas. |
| 8. Fotos GBP | Imágenes de producto y vistas previas | Recursos comprobados, alt incorrecto de Cifro y plan de imágenes en `content.md`. |
| 9. Keyword Gap | Brechas temáticas y consultas reales | 20 términos priorizados en `keywords.csv`. Semrush mostró la página pública con “Log In”; volumen, dificultad y posiciones de competidores quedan sin medir. |
| 10. Money pages | Home, work, projects y Cifro | Auditoría página por página, prioridades y textos concretos. |
| 11. Servicio + ciudad | Páginas por herramienta | Tres borradores: iOS Architecture Skills, App Store Tools y Screenshots iOS. Una URL por intención, sin multiplicar páginas por ciudades. |
| 12. Search Console | Ejecución con datos reales | Exportación de tres meses, indexación e inspecciones de URLs. Ninguna consulta visible cumple el filtro original de posición 11–20 y 100 impresiones mensuales. |

Los prompts locales se adaptaron porque la [elegibilidad de Google Business Profile](https://support.google.com/business/answer/13763036?hl=en) exige condiciones que un portafolio exclusivamente online no cumple por sí solo.

## Search Console: resultados reales

Propiedad: `sc-domain:alesanabriav.com`. Tipo: Web. Periodo exportado: **4 de junio–3 de septiembre de 2026**. La interfaz lo denomina “Last 3 months”.

| Métrica | Valor |
|---|---:|
| Clics | 4 |
| Impresiones | 146 |
| CTR | 2,74 % |
| Posición media | 7,5 |
| Consultas reveladas en la exportación | 7 |
| Impresiones asociadas a esas consultas reveladas | 14 |

La tabla de consultas no permite identificar la mayor parte de las impresiones ni atribuir los cuatro clics a un término concreto. Las consultas visibles son nombres y variaciones de nombres; no prueban demanda por FDE, herramientas o Cifro. No interpretar los datos omitidos como cero búsquedas.

| Consulta visible | Clics | Impresiones | Posición |
|---|---:|---:|---:|
| alejandro sanabria | 0 | 8 | 10,88 |
| ale sanabia | 0 | 1 | 2 |
| ale sanabria | 0 | 1 | 8 |
| alexis sanabria | 0 | 1 | 10 |
| alex sanabria | 0 | 1 | 23 |
| alexander sanabria | 0 | 1 | 24 |
| no brand sanabria | 0 | 1 | 34 |

**Acción derivada:** mejorar la identificación del nombre con el rol y construir entradas por proyectos concretos. No crear contenido dirigido a homónimos. Ocho impresiones de una consulta no bastan para diagnosticar su CTR ni prometer un salto de posiciones.

| URL en el informe de rendimiento | Clics | Impresiones | Posición |
|---|---:|---:|---:|
| `https://alesanabriav.com/` | 4 | 146 | 7,5 |
| `https://alesanabriav.com/work/` | 0 | 1 | 4 |
| `https://alesanabriav.com/work` | 0 | 1 | 9 |

Los totales por página y por propiedad usan agrupaciones distintas; no sumar las filas para sustituir el total de la propiedad. `/projects/` y `/cifro/` no tienen filas en esta exportación.

Desktop: 4 clics / 95 impresiones. Mobile: 0 / 51. Estados Unidos aporta 86 impresiones; Colombia, 4. Es una muestra pequeña: no justifica cambiar de mercado o idioma por sí sola.

### Descubrimiento e indexación

| Evidencia | Resultado observado | Interpretación |
|---|---|---|
| Informe de indexación, actualizado el 27 de agosto | 3 URLs indexadas: `/`, `/work`, `/work/` | Son dos contenidos principales con variantes de URL, no tres secciones distintas. |
| Único motivo de exclusión en ese informe | Una página con redirección | No demuestra un fallo: excluir una URL que redirige puede ser correcto. |
| Inspección de `/projects/` el 5 de septiembre | URL desconocida para Google; sin rastreo ni sitemap referente detectado | Prioridad: facilitar descubrimiento. |
| Inspección de `/cifro/` el 5 de septiembre | Mismo resultado | Prioridad: facilitar descubrimiento. |
| Sitemaps enviados, propiedad de dominio | 0 filas | Enviar el índice existente es una acción concreta. Google también puede descubrir sitemaps por robots.txt. |
| Sitemap público actual | 5 URLs, todas accesibles | `/`, `/work/`, `/projects/`, `/cifro/`, `/cifro/support/`. |
| Core Web Vitals en el resumen de GSC | Sin datos | No se asigna un resultado de velocidad con mediciones HTTP. |
| Mejora ProfilePage en GSC | 1 válido, 0 inválidos | Google ya reconoce el marcado del perfil. |

Próxima acción operativa: en [Sitemaps de Search Console](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aalesanabriav.com), enviar `https://alesanabriav.com/sitemap-index.xml`. Después, probar las URLs publicadas en Inspección de URLs y solicitar indexación de las principales. Comprobar lectura del sitemap y nuevo rastreo; enviar no garantiza indexación.

## Auditoría de páginas y contenido

El HTML principal está disponible sin ejecutar JavaScript. Las páginas tienen título, descripción, H1, canonical y reglas de indexación. `robots.txt` permite rastrear y anuncia el sitemap. HTTPS y `www` llevan al dominio preferido. La política de privacidad usa `noindex` y no aparece en el sitemap.

| Página | Observación | Cambio propuesto |
|---|---|---|
| Home | `<title>` y `og:title` contienen solo el nombre. El rol sí está en el cuerpo y descripción. | Título final: `Alejandro Sanabria \| Forward Deployed Engineer`. Mantener el H1 con el nombre y escribir el rol completo en el subtítulo. |
| `/work/` | Título genérico; unas 211 palabras incluyendo navegación. Resume experiencias sin desarrollar problemas y decisiones. | Explicar FDE/product engineering en título e introducción; presentar ejemplos concretos que puedan publicarse y enlazar proyectos. |
| `/projects/` | Unas 117 palabras incluyendo navegación; las herramientas solo tienen una frase y salen directamente a GitHub. | Convertirla en índice con descripciones útiles y enlazar tres páginas propias de herramientas. |
| `/cifro/` | Título descriptivo, CTA a App Store, cuatro capturas y explicación del producto. | Priorizar descubrimiento, coherencia de privacidad y vista previa social. Conservar el H1 de producto: la categoría ya está clara en el título y texto. |
| `/cifro/support/` | Página breve con contacto. | H1 y título identificados con Cifro; añadir solo respuestas de soporte comprobadas. |

El número de palabras describe la situación, no un umbral de calidad. Google [no prescribe una extensión mínima](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). El problema de las fichas es que apenas explican lo que hace cada herramienta.

### Coherencia de Cifro

La home, `/projects/` y `/llms.txt` presentan Cifro como “no cloud” o sin intercambio de datos en la nube. La landing describe sincronización opcional en iCloud privado. Usar una formulación consistente:

> On-device AI, no Cifro account, no ads or third-party tracking, and optional sync through your private iCloud account.

Esto mejora la precisión de la información que reciben lectores y asistentes. Revisar la formulación también en `src/pages/index.astro`, `src/pages/projects/index.astro`, `src/pages/work/index.astro` y `src/pages/llms.txt.ts`.

### Respuestas Markdown

Se hicieron GET reales con `Accept: text/html` y `Accept: text/markdown`.

| Solicitud | HTML | Markdown |
|---|---|---|
| `/` | Perfil, 200 | Resumen de `/llms.txt`, 200 |
| `/work` | Página work tras redirección, 200 | Mismo resumen, 200 |
| `/cifro` | Página Cifro tras redirección, 200 | Mismo resumen, 200 |
| `/seo-audit-definitely-missing-20260905` | 404 | Mismo resumen, **200** |

Causa visible en `worker.js`: toda solicitud cuyo Accept contiene `text/markdown` recibe `/llms.txt`, sin comprobar la ruta y construyendo una respuesta nueva con estado 200. Tampoco aparece `Vary: Accept` en las respuestas medidas.

**Corrección propuesta:** servir HTML normalmente hasta disponer de Markdown específico por página; o implementar representaciones equivalentes por ruta, negociación correcta y conservación de 404/redirecciones. Si hay variantes cacheables, declarar la variación por Accept y revisar su caché.

Es un fallo de exactitud para clientes que piden Markdown. No hay evidencia de que haya causado el estado de indexación observado en Google. Google indica que [no exige archivos especiales para sus funciones de IA](https://developers.google.com/search/docs/appearance/ai-features).

### Dominio anterior y enlaces

- `alesanabriav7.github.io` sigue devolviendo 200 con una versión anterior; sí declara canonical hacia el dominio actual. Revisar la consolidación de esa publicación cuando se implemente el cambio. No se interpreta el canonical existente como ausencia de protección.
- Los enlaces internos revisados y los enlaces a repositorios, App Store y Wonderful respondieron correctamente. LinkedIn rechazó HEAD con 405: esa prueba no permite marcar el enlace como roto.
- Las variantes internas sin barra final redirigen al canonical con barra. Normalizar los href evita saltos innecesarios; el comportamiento actual ya consolida las visitas.

## Comparación y palabras clave

Se eligieron [Greg Chedwick](https://gregchedwick.dev/), [Nathan Joel](https://www.nathanjoel.com/) y [Prayas Jain](https://prayas17.github.io/portfolio/) como referencias públicas del mismo rol. No son competidores de ranking demostrados. Sus métricas son afirmaciones de sus portafolios, no resultados verificados por esta auditoría.

Los tres incluyen el rol en el título y explican trabajos concretos. Greg organiza impacto y proyectos; Nathan explica responsabilidades y mecanismos de entrega; Prayas estructura casos y proceso. La oportunidad de Ale es aportar ese nivel de explicación usando sus herramientas y productos ya publicados.

La respuesta HTTP actual de Nathan es distinta de la extracción antigua del buscador; se usó la versión actual. La comparación completa está en `comparison.csv`.

Las 20 propuestas de `keywords.csv` se agrupan por intención y URL. Varias consultas comparten una página: no se propone una página por sinónimo. Las prioridades son editoriales, basadas en relevancia y evidencia propia; no son puntuaciones calculadas con volumen o dificultad. Primero: nombre + rol, marcas de herramientas y Cifro. Después: términos técnicos concretos. Un artículo de evaluación de agentes requiere un ejemplo original antes de publicarse.

## Orden de ejecución propuesto

| Orden | Acción | Impacto esperado | Trabajo estimado | Cómo verificar |
|---|---|---|---|---|
| 1 | Enviar el sitemap existente y solicitar revisión de las páginas principales | Alto para descubrimiento | 20–40 min | Sitemap leído; inspecciones registran rastreo y estado. |
| 2 | Aplicar metadatos, subtítulo y enlaces descriptivos | Medio para identificación y navegación | 1–2 h | HTML publicado contiene el texto y canonical previstos. |
| 3 | Unificar la explicación de privacidad de Cifro | Alto para exactitud del producto | 30–60 min | Todas las páginas y llms.txt describen el mismo comportamiento. |
| 4 | Corregir la respuesta Markdown generalizada | Alto para clientes que solicitan Markdown | 1–2 h | Contenido correcto por ruta y 404 consistente con ambos Accept. |
| 5 | Publicar páginas propias de las tres herramientas | Alto para cobertura temática | 1–2 días incluyendo revisión de ejemplos | Contenido útil, enlaces desde home/proyectos y nuevas URLs en sitemap. |
| 6 | Desarrollar un ejemplo público de trabajo FDE | Alto para respaldo profesional | 2–4 h si el material ya existe | Problema, decisión y resultado documentados; ninguna métrica inventada. |
| 7 | Ajustar imágenes sociales y enlaces internos | Medio para presentación | 1–2 h | Previews y destinos correctos. |

El esfuerzo es una estimación de implementación. No se promete una fecha para subir posiciones. Google señala que [los cambios de títulos requieren un nuevo rastreo y procesamiento](https://developers.google.com/search/docs/appearance/title-link), que puede tardar días o semanas.

### Sprint de 30 días

1. **Semana 1:** descubrimiento, metadatos, coherencia de Cifro y respuestas por formato; registrar la fecha real de despliegue.
2. **Semana 2:** publicar las tres páginas de herramientas con un ejemplo útil y enlazarlas desde `/projects/`, la home y `/work/` donde corresponda.
3. **Semana 3:** añadir un ejemplo público de trabajo FDE y distribuir las páginas con contexto propio. Usar el calendario adjunto como propuesta editable.
4. **Semana 4:** revisar indexación, consultas nuevas y páginas que empiezan a aparecer; ajustar según demanda observada. Con este volumen, no atribuir a un título diferencias de uno o dos clics.

Medir: páginas descubiertas/indexadas, impresiones por página, consultas no relacionadas con el nombre y clics a proyectos. Search Console no mide por sí solo clics salientes a GitHub, LinkedIn o App Store; cualquier instrumentación de esos eventos sería otro cambio de implementación.

## Entregables y evidencia

- [Textos listos para revisión](copy.md): bios, introducciones y tres páginas de proyecto.
- [Calendario y plan de imágenes](content.md): ocho semanas y textos de las primeras cuatro.
- [Inventario actual](pages.csv), [metadatos propuestos](metadata-proposed.csv), [20 palabras clave](keywords.csv), [comparación](comparison.csv).
- [Exportación de consultas](evidence/gsc/Queries.csv), [páginas](evidence/gsc/Pages.csv), [serie diaria](evidence/gsc/Chart.csv), [URLs indexadas](evidence/indexing/Table.csv).
- [Inspecciones y sitemap](evidence/search-console-inspections.txt), [auditoría HTTP](evidence/http-audit.json), [enlaces](evidence/link-checks.json), [imágenes](evidence/images.json).

La auditoría no ejecutó un benchmark de rendimiento ni el validador de resultados enriquecidos. Cifro tiene JSON-LD de aplicación, pero no incluye rating/review: el marcado por sí solo no basta para la [elegibilidad del resultado enriquecido de software](https://developers.google.com/search/docs/appearance/structured-data/software-app). Esto no impide indexar una landing normal y no justifica añadir reseñas ficticias.
