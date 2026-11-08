---
title: "Building Cifro: on-device AI in a budgeting app"
description: "Why I built Cifro, a private iPhone budget planner, around Apple Foundation Models — and the product decisions that came from keeping every number on the device."
pubDate: 2026-11-08
tags: ["iOS", "Foundation Models", "Product"]
draft: true
---

[Cifro](/cifro/) is a budget planner for iPhone that answers one question when you open it: are you on track this month? I built it with SwiftUI and Apple Foundation Models, and one constraint shaped almost every decision — your financial data never leaves your device.

## Private by design, not by policy

Most finance apps ask you to connect a bank, create an account, and trust a privacy policy. I wanted the opposite default. Cifro has no account, no bank connection, no ads, and no third-party analytics. Data lives on the iPhone, and optional sync goes through your own private iCloud.

That constraint is a product feature, not just an engineering one. It changes what the app can promise in a single sentence.

## Where the AI actually helps

On-device models are a good fit for small, frequent, personal tasks. In Cifro that means:

- **Capture.** Type something like "15 lunch at the sushi place" and Cifro fills in the amount, the merchant, and the category.
- **Suggestions.** Proposing budget categories that match how you actually spend.
- **Questions.** Asking "Am I on track?" or "What can I cut this month?" and getting an answer grounded in your own numbers, through Apple Intelligence on the device.

None of these need a server. The conversation stays on the iPhone, and the only thing Cifro looks up online is currency exchange rates — never your data.

## Designing for phones without Apple Intelligence

Not every iPhone running iOS 26 supports Apple Intelligence. I didn't want the core experience to depend on it, so the month's context, the daily spending limit, and the insights work everywhere. The AI assistant is an addition on top of a budget that already answers the main question.

That split — a deterministic core plus an AI layer — made the app easier to reason about and easier to test.

## What I'd tell another iOS team

- **Start from the question the user has, not the model.** Cifro's home screen leads with a verdict like "You're on pace" because that's what people open a budget app to learn.
- **Keep the AI's job small and verifiable.** Parsing a sentence into a transaction is easy to check. Open-ended advice is not.
- **Treat privacy as UX.** Explaining what stays on the device is part of the interface, not the legal page.

Cifro is [on the App Store](/cifro/) in English and Spanish.
