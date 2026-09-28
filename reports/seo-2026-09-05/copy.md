# Textos propuestos para alesanabriav.com

Borradores del 5 de septiembre de 2026. Inglés para las páginas actuales. Basados en la web pública y README de herramientas; no se han publicado. Los títulos indicados son el HTML final deseado, no valores que deban pasarse ciegamente a `BaseLayout`: el layout actual agrega el nombre como sufijo en varias variantes.

## Home

**Title:** Alejandro Sanabria | Forward Deployed Engineer

**Meta description:** Forward Deployed Engineer at Wonderful.ai. I build AI workflows, mobile products, and open-source iOS tools. Explore my work and Cifro.

**H1:** Alejandro Sanabria

**Subtitle:** Forward Deployed Engineer at Wonderful.ai · Mobile Product Engineering

**Opening:**

I'm Alejandro Sanabria, a Forward Deployed Engineer at Wonderful.ai. I work where customer workflows, AI systems, and product engineering meet: understanding the problem, building the implementation, and checking how it behaves in real use.

My background is in mobile platforms across iOS and Android. I also build products and developer tools, including Cifro, iOS architecture skills, App Store automation, and repeatable simulator screenshots.

**Links:** `Explore my work` → `/work/`; `Browse developer tools` → `/projects/`; `Connect on LinkedIn` → perfil existente. Usar estos enlaces cerca de la introducción y conservar el acceso al recorrido profesional más abajo.

### Tres variantes de bio

**Rol y especialidad:**

Alejandro Sanabria is a Forward Deployed Engineer at Wonderful.ai, working across customer workflows, AI systems, and product implementation. His background spans iOS and Android platforms, and his public projects include Cifro and open-source tools for architecture, App Store operations, and simulator screenshots.

**Invitación a explorar:**

I build AI workflows, mobile products, and tools that make development easier to repeat and verify. I'm a Forward Deployed Engineer at Wonderful.ai. Explore Cifro, browse my developer tools, or connect with me on LinkedIn to talk about the work.

**Evidencia:**

I'm a Forward Deployed Engineer at Wonderful.ai with a background in mobile platform engineering. My public work includes a published iPhone finance app and open-source tools for iOS architecture, App Store Connect, and simulator screenshots. I care about making engineering decisions visible in software people can actually use.

No rotar las tres bios cada 30 días con solo cuatro clics históricos: elegir la más fiel al objetivo y revisar con datos suficientes.

## Work: introducción y bloque actual

**H1:** Forward deployed engineering and product work

I work across customer-facing AI implementation and mobile product engineering. This page connects the systems I build with the decisions behind them, supported by public products and tools.

### Forward deployed engineering at Wonderful.ai

My current work connects customer workflows, product constraints, AI systems, and implementation. The engineering question is practical: what does the system need to do, how does it connect to the rest of the workflow, and what evidence shows that it works?

### Product and delivery systems

My public projects make parts of that approach tangible. Cifro brings on-device AI into an everyday product. My developer tools cover iOS architecture, App Store operations, and repeatable simulator screenshots.

**CTA:** Explore the tools and products → `/projects/`.

Para un caso FDE adicional hace falta un ejemplo publicable de problema → decisión → implementación → verificación. No completar ese caso con contexto privado ni asumir métricas a partir de la descripción del rol.

## Projects: introducción y fichas

**H1:** iOS apps and developer workflow tools

These are products and tools I've built around recurring engineering work: structuring an iOS feature, preparing a release, capturing the same screen reliably, and making a useful app with on-device AI.

- **Cifro:** A private expense tracker and budget planner for iPhone. Capture purchases, review spending, and organize budgets with on-device AI. No Cifro account, ads, or third-party tracking; optional sync uses your private iCloud account. → `/cifro/`
- **iOS Architecture Skills:** A toolkit for AI coding agents working on SwiftUI applications. It separates feature architecture, persistence, platform integration, testing, and visual checks into focused workflows. → `/projects/ios-architect/`
- **App Store Tools:** A TypeScript CLI and library for App Store Connect. List apps, prepare IPAs, manage listing metadata, and upload builds through an explicit command-line workflow. → `/projects/appstore-tools/`
- **Screenshots iOS:** A CLI for repeatable iOS simulator captures. Configure the device and application state, then build, launch, and capture through one workflow. → `/projects/screenshots-ios/`

## Nueva página: iOS Architecture Skills

**URL:** `/projects/ios-architect/`

**Title:** iOS Architecture Skills | Alejandro Sanabria

**Description:** A toolkit for AI coding agents building SwiftUI apps: feature architecture, persistence, platform integration, testing, and visual checks.

### iOS architecture skills for AI coding agents

When an AI coding agent adds an iOS feature, the architecture needs to remain understandable after the first implementation. iOS Architecture Skills provides focused workflows for that work, from feature boundaries to persistence and verification.

The toolkit covers SwiftUI, Clean Architecture, MVVM, GRDB, and Swift concurrency. Its skills divide responsibilities across architecture, reusable UI, platform integration, storage, testing, and visual checks.

### What the toolkit covers

Use the architecture workflow for a new app or feature. Use the focused persistence workflow for a database change, or the testing workflow for concurrency and dependency injection work. This separation helps match the scope of the workflow to the scope of the change.

### Start with one feature

Choose a small feature and describe its expected behavior, storage needs, and existing project conventions. Follow the repository's installation instructions, then inspect the generated changes and verify the result in your project.

### Questions

**Is this an application framework?** It is a toolkit of instructions and supporting resources for coding agents.

**Does it include persistence guidance?** Yes. The public toolkit includes focused GRDB workflows alongside broader feature architecture.

**Does it replace code review?** Review and verification remain part of using generated changes in a real project.

**CTA:** [Read the repository and installation guide](https://github.com/alesanabriav7/ios-architect-skill).

**Enlaces internos propuestos:** home → esta página desde “iOS Workflow Systems”; `/projects/` → esta página desde su ficha; `/work/` → esta página desde el bloque de herramientas. Desde esta página enlazar `/projects/screenshots-ios/` cuando se mencione validación visual.

## Nueva página: App Store Tools

**URL:** `/projects/appstore-tools/`

**Title:** App Store Connect CLI | Alejandro Sanabria

**Description:** Use appstore-tools to list apps, prepare IPAs, manage App Store metadata, and upload builds from the command line.

### App Store Connect automation with appstore-tools

A release includes more than compiling an app. There are archives, signing options, listing metadata, and a build that needs to reach App Store Connect. appstore-tools brings those operations into a TypeScript CLI and library.

### What you can do

List applications, generate an IPA, read and update App Store metadata, and upload builds. The public documentation describes authentication and the commands for each part of the workflow.

### Start by reading

Begin with the command reference and a read-only operation such as listing your apps. Prepare and review changes before applying an update. The metadata workflow supports reading the existing listing into a file so that changes can be inspected.

### Questions

**Is this only a CLI?** The repository provides a TypeScript CLI and library.

**Can it help with metadata?** Yes. The documented workflow can read listing metadata and apply a reviewed metadata file.

**What setup does it need?** Follow the current README for Node.js, App Store Connect authentication, and Xcode requirements for build-related operations.

**CTA:** [Read the command reference](https://github.com/alesanabriav7/appstore-tools).

**Enlaces internos propuestos:** home → esta página desde “Release & Screenshot Automation”; `/projects/` → esta página desde su ficha; `/work/` → esta página desde entrega de productos. Desde aquí enlazar `/projects/screenshots-ios/` como herramienta relacionada.

## Nueva página: Screenshots iOS

**URL:** `/projects/screenshots-ios/`

**Title:** iOS Simulator Screenshot CLI | Alejandro Sanabria

**Description:** Capture iOS simulator screenshots with repeatable app state, device settings, and a command-line workflow for releases and visual checks.

### Repeatable iOS simulator screenshots from the CLI

A useful screenshot workflow starts before the capture. The app needs to open on the intended screen, with predictable content and consistent simulator settings. screenshots-ios coordinates that workflow from the command line.

### From configuration to capture

The tool resolves a simulator, builds and installs the application, sets up the status bar, launches the app with the configured environment, and captures the screen. A JSON context file holds the capture settings.

The application still owns its screen navigation and sample data. Configure those explicitly so that two captures represent the same state. The repository includes guidance for connecting launch environment variables to preview data and initial screens.

### Questions

**What runs the capture?** The workflow uses the iOS simulator and Xcode command-line tools on macOS.

**Can I capture multiple screens?** Yes. Use separate context files and reuse a build where appropriate.

**Does it create my test data?** Your application supplies the deterministic data and navigation hooks; the CLI supplies the launch configuration.

**CTA:** [Read the setup and context-file guide](https://github.com/alesanabriav7/screenshots-ios).

**Enlaces internos propuestos:** home → esta página desde automatización; `/projects/` → esta página desde su ficha; `/work/` → esta página desde evidencia de entrega. Desde aquí enlazar `/projects/appstore-tools/` para operaciones de publicación relacionadas.

## Cifro: precisión e imágenes sociales

Mantener el título descriptivo actual. Meta propuesta:

> Track expenses, review purchases, and plan budgets with Cifro for iPhone. On-device AI, no signup or ads, and optional private iCloud sync.

Texto para sustituir las afirmaciones absolutas de ausencia de nube en las otras páginas:

> Cifro is a private budget and expense tracker for iPhone, built with SwiftUI and Apple Foundation Models. It uses on-device AI, requires no Cifro account, and has no ads or third-party tracking. Optional sync uses your private iCloud account.

Alt de la imagen social propuesta:

> Cifro for iPhone: private expense tracking, budgets, and on-device AI.

Las tres nuevas páginas deben publicarse junto con los enlaces que las referencian. Hasta entonces, esos enlaces son destinos de borrador.
