---
title: "What a forward deployed engineer actually does"
description: "Forward deployed engineering isn't consulting and it isn't support. It's product engineering done next to the customer, where the workflow is the spec."
pubDate: 2026-11-08
tags: ["Forward Deployed Engineering", "AI agents"]
draft: true
---

People ask me what a forward deployed engineer does, usually right after I say I build AI agents at Wonderful.ai. The short answer: I write production software, but my starting point is a customer's workflow, not a ticket.

## The workflow is the spec

A product team usually starts from a roadmap. A forward deployed engineer starts from how work actually happens today: who does what, which systems are involved, where the handoffs break, and what "done" means for the people doing it.

That context is the spec. An AI agent that answers well in a demo but doesn't fit the surrounding workflow isn't finished. It only becomes useful once it connects to the real systems, follows the real rules, and hands off cleanly when it shouldn't act on its own.

## Three jobs in one

Most of my week falls into three kinds of work:

- **Understanding.** Sitting with the customer's process until I can explain it back better than the documentation does. This is where most of the hard problems get found.
- **Building.** Agents, integrations, and the glue around them, held to the same standards as any other production code.
- **Verifying.** Proving the system behaves correctly on real cases, not just the happy path. With AI in the loop, verification isn't optional; it's where trust gets built.

Skipping any one of them shows up later. If you build without understanding, you solve the wrong problem. If you understand without verifying, you ship something nobody can rely on.

## Why a product background helps

Before this role I spent more than twelve years building software products, mostly native iOS and Android, along with full-stack web and B2B platforms. That background matters more than I expected.

Mobile teaches you that the user's context is unforgiving: a slow screen or a confusing state is felt immediately. Product work teaches you to ask what outcome a feature is for. Both habits transfer directly. A customer workflow is just another product surface, and an agent is just another component that has to earn its place in it.

## What makes it work

The pattern I keep coming back to: **AI becomes useful once it lands inside a workflow.** The model is rarely the bottleneck. The hard part is connecting model behavior to a real job, a real team, and an outcome someone can measure.

That's the job. Less glamorous than "building AI," and a lot more interesting.
