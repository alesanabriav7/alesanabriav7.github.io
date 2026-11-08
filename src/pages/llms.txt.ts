export function GET() {
  const text = `# Alejandro Sanabria

Canonical personal website: https://alejandrosanabria.com

Alejandro Sanabria is a Forward Deployed Engineer at Wonderful.ai with 12+ years building software products. Native iOS and Android are the core of his work, alongside full-stack web products, B2B platforms, and customer-facing AI delivery.

## Core work

- Forward Deployed Engineering: customer workflows, agents, integrations, evaluation, observability, and delivery.
- Mobile platforms (core): iOS, Android, Swift, SwiftUI, Kotlin, React Native, architecture, and engineering leadership.
- Product and full-stack engineering: TypeScript, Node.js, React, Laravel, Ruby on Rails, B2B platforms, and e-commerce.
- Product systems: practical AI workflows, App Store operations, screenshot automation, and product delivery.

## Product

- Cifro: a budget planner and expense tracker for iPhone, built with SwiftUI and Apple Foundation Models. It tells you if your budget is on track, shows a daily spending limit, and includes a private on-device AI assistant. It uses on-device AI, requires no Cifro account, and has no ads or third-party tracking. Optional sync uses the user’s private iCloud account.
- Product landing: https://alejandrosanabria.com/cifro
- Landing en español: https://alejandrosanabria.com/cifro/es/
- Privacy policy: https://alejandrosanabria.com/cifro/privacy

## Canonical links

- Work: https://alejandrosanabria.com/work
- Projects: https://alejandrosanabria.com/projects
- GitHub: https://github.com/alesanabriav7
- LinkedIn: https://www.linkedin.com/in/alesanabriav/
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
