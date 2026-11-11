import { posts, postPath } from "../data/posts";

export function GET() {
  const blog = posts.map((post) => `- ${post.title} (${post.lang}): https://alejandrosanabria.com${postPath(post.slug)}`).join("\n");
  const text = `# Alejandro Sanabria

Canonical personal website: https://alejandrosanabria.com

Alejandro Sanabria (Alejandro Sanabria Villescas, alesanabriav) is a Forward Deployed Engineer at Wonderful (https://wonderful.ai) in Bogotá, Colombia. He has built software products since 2012, with native iOS and Android at the core, plus full-stack web products and B2B platforms. Career: co-founder and engineering at Brand Spa (December 2012–October 2017), mobile at Platzi (October 2017–June 2026), and Wonderful since July 2026. His published products include Cifro and open-source developer tools under the GitHub handle alesanabriav7.

## Core work

- Forward Deployed Engineering: customer workflows, agents, integrations, evaluation, observability, and delivery.
- Mobile platforms (core): iOS, Android, Swift, SwiftUI, Kotlin, React Native, architecture, and engineering leadership.
- Product and full-stack engineering: TypeScript, Node.js, React, Laravel, Ruby on Rails, B2B platforms, and e-commerce.
- Developer tools: appstore-tools (App Store Connect CLI), screenshots-ios (iOS simulator screenshot CLI), ios-architect-skill (iOS skills for coding agents).

## Product

- Cifro: a budget planner and expense tracker for iPhone, built with SwiftUI and Apple Foundation Models. It tells you if your budget is on track, shows a daily spending limit, and includes a private on-device AI assistant. It requires no Cifro account and has no ads or third-party tracking. iCloud sync uses the user's private iCloud account through Apple's CloudKit service.
- Product landing: https://alejandrosanabria.com/cifro/
- Landing en español: https://alejandrosanabria.com/cifro/es/
- App Store: https://apps.apple.com/app/id6759523370
- Privacy policy: https://alejandrosanabria.com/cifro/privacy

## Canonical links

- About: https://alejandrosanabria.com/about/
- Sobre mí: https://alejandrosanabria.com/es/sobre-mi/
- Work: https://alejandrosanabria.com/work/
- Trabajo: https://alejandrosanabria.com/es/trabajo/
- Projects: https://alejandrosanabria.com/projects/
- Proyectos: https://alejandrosanabria.com/es/proyectos/
- Blog (es): https://alejandrosanabria.com/blog/
- GitHub: https://github.com/alesanabriav7
- LinkedIn: https://www.linkedin.com/in/alesanabriav/
- X: https://x.com/alesanabriav

## Blog

${blog}
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
