---
title: "Teaching AI coding agents to respect iOS architecture"
description: "AI coding agents can write SwiftUI fast. Keeping the architecture understandable after the first feature takes explicit boundaries, scoped workflows, and verification."
pubDate: 2026-11-08
tags: ["iOS", "AI workflows", "Architecture"]
draft: true
---

AI coding agents are good at producing SwiftUI that compiles. The problem shows up on the third or fourth feature, when the codebase no longer has a shape anyone can explain. That's why I built [iOS Architecture Skills](/projects/ios-architect/): a set of workflows that make agents work inside deliberate boundaries.

## Speed isn't the bottleneck

An agent can add a screen in minutes. What it won't do on its own is ask where the domain model should live, which layer owns persistence, or how the new view's state should be tested. Without that, every feature makes its own local decisions, and the architecture drifts.

The fix isn't a better prompt. It's giving the agent the same structure a senior iOS engineer would bring to the task.

## Scope the workflow to the change

The toolkit splits responsibilities instead of offering one giant instruction set:

- **Architecture** for a new app or feature: boundaries, layers, and an implementation plan.
- **Persistence** for database changes, with focused GRDB guidance.
- **Testing** for concurrency and dependency injection.
- **Visual checks** for UI that needs to look right, not just compile.

Matching the workflow to the size of the change keeps the agent from over-engineering a small fix or under-planning a big one.

## Ask for behavior, not code

The requests that work best describe behavior and constraints:

> Add a saved-items feature. Persist items locally, follow the existing feature boundaries, and verify that saved items survive relaunch.

That gives the agent a definition of done it can check. Then review the result the way you'd review a teammate's pull request: domain model, storage boundary, and view state, separately.

## Verification stays human

AI doesn't remove code review; it changes what you review. Instead of reading every line for typos, you check whether the boundaries held and whether the behavior was actually proven. The goal is better engineering, not just faster output.

The toolkit is open source [on GitHub](https://github.com/alesanabriav7/ios-architect-skill).
