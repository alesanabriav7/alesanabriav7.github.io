export function GET() {
  const text = `# Alejandro Sanabria

Canonical personal website: https://alejandrosanabria.com

Alejandro Sanabria (Alejandro Sanabria Villescas, alesanabriav) is a Forward Deployed Engineer at Wonderful (https://wonderful.ai) in Bogotá, Colombia. Before that he led iOS and Android at Platzi for 8+ years.

## Core work

- Forward Deployed Engineering: customer workflows, agents, integrations, evaluation, observability, and delivery.
- Mobile platforms: iOS, Android, Swift, SwiftUI, Kotlin, React Native, architecture, and engineering leadership.
- Developer tools: appstore-tools (App Store Connect CLI), screenshots-ios (iOS simulator screenshot CLI), ios-architect-skill (iOS skills for coding agents).

## Product

- Cifro: a budget planner and expense tracker for iPhone, built with SwiftUI and Apple Foundation Models. It tells you if your budget is on track, shows a daily spending limit, and includes a private on-device AI assistant. It uses on-device AI, requires no Cifro account, and has no ads or third-party tracking. Optional sync uses the user’s private iCloud account.
- Product landing: https://alejandrosanabria.com/cifro/
- Landing en español: https://alejandrosanabria.com/cifro/es/
- Privacy policy: https://alejandrosanabria.com/cifro/privacy

## Canonical links

- Work: https://alejandrosanabria.com/work
- Projects: https://alejandrosanabria.com/projects
- Blog (es): https://alejandrosanabria.com/blog/
- GitHub: https://github.com/alesanabriav7
- LinkedIn: https://www.linkedin.com/in/alesanabriav/
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
