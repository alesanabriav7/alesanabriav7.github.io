export function GET() {
  const text = `# Alejandro Sanabria

Canonical personal website: https://alesanabriav.com

Alejandro Sanabria is a Forward Deployed Engineer at Wonderful.ai and a mobile platform leader. He combines customer-facing AI delivery, mobile product engineering, and practical workflow systems.

## Core work

- Forward Deployed Engineering: customer workflows, agents, integrations, evaluation, observability, and delivery.
- Mobile platforms: iOS, Android, Swift, SwiftUI, Kotlin, React Native, architecture, and engineering leadership.
- Product systems: practical AI workflows, App Store operations, screenshot automation, and product delivery.

## Product

- Cifro: a private-by-design iOS finance app built with SwiftUI and Apple Foundation Models. It uses on-device AI and has no accounts or cloud data sharing.
- Product landing: https://alesanabriav.com/cifro
- Privacy policy: https://alesanabriav.com/cifro/privacy

## Canonical links

- Work: https://alesanabriav.com/work
- Projects: https://alesanabriav.com/projects
- GitHub: https://github.com/alesanabriav7
- LinkedIn: https://www.linkedin.com/in/alesanabriav/
`;

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
