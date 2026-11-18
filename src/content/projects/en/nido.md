---
title: Nido
uid: nido
lang: en
order: -1
year: 2026
duration: 1-2 weeks
type: "Mobile app (PWA), fully navigable with real data"
lead: "Everything your baby needs, from families in your neighbourhood, with the peace of mind of buying new."
role: Product, UX/UI design and development
services: "Research, strategy, UX/UI design, prototype, development and testing"
tools: "Vite · React · TypeScript · Supabase · Stripe (test mode) · Vercel · Claude Code"
theme: nido
cover: nido-cover.webp
accent: "#4E6E9E"
url: https://nido-bebes.vercel.app/
demo:
  url: https://nido-bebes.vercel.app/
  shot: nido-app.webp
  note: "This is the real app: sign in with the demo account and try searching, chatting and booking. Data and payments are for testing only."
  qr: nido-qr.svg
challenge: "A baby needs everything in a very short time and uses it for a very short time. Even so, many families buy new because on general second-hand apps baby items get lost among everything else, you cannot search by the baby's age and there are no guarantees about hygiene, safety or the seller. The most wanted items, such as baths, cots and prams, are also expensive to ship."
solution: "I designed and built Nido, an installable web app that organises listings by the baby's stage and puts what is nearby first. Trust is visible on every screen: a hygiene sheet, verified sellers, protected payment even for hand delivery, and products that cannot be sold for safety reasons."
highlights:
  - { value: "8", label: "sections organised by use (outings, sleep, bath…), with their own filters such as size in centimetres" }
  - { value: "30 s", label: "to post a listing: photos, a sheet filled in by the app and a suggested price" }
  - { value: "390 px", label: "mobile-first design, installable on the home screen" }
---

## Research and strategy

Market research on birth rates, the cost of a baby's first year and second-hand buying in Spain, competitor analysis (Wallapop, Vinted and specialist apps from France, Germany and the US) and analysis of public reviews by parents. The conclusion: there is room for a specialist app, but only if it builds enough local supply and solves the lack of trust.

- Proto-personas: the family that buys and the family that clears out the wardrobe.
- Map of the current journey and its friction points: searching, evaluating, meeting up and paying.
- An 8-section architecture organised by use, inspired by how baby stores arrange their products.
- Product decisions: hand delivery by default, an optional baby profile without photos, and no used car seats.

## UX/UI design

A minimal, warm identity: pastels only as backgrounds, actions in nanny blue, the Nunito typeface and rounded shapes. A navigable prototype in two versions: the second applies the improvements from a heuristic evaluation using Nielsen's 10 principles.

- Key journeys: post in 30 seconds, search by stage and buy in person with a delivery code.
- Onboarding, notifications, ratings and an "outgrown" alert that turns buyers into sellers.
- Purposeful animations (photo scanning, card-to-listing transition) that respect "reduce motion".
- Accessibility: AA contrast and 44 px touch targets.

## Development and testing

The prototype became a real app with Claude Code, built from a kit with the specification, the design tokens and the reference prototype.

- A PWA built with Vite, React and TypeScript, deployed on Vercel.
- Real data with Supabase: accounts, listings with photos, chat and per-user permissions.
- Simulated protected payment with Stripe in test mode.
- A test mode with guided tasks, a questionnaire and a private results dashboard. The first test found that leaving the chat in the middle of a purchase was hard, so the flow's navigation was redesigned.
