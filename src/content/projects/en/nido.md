---
title: Nido
uid: nido
lang: en
order: -1
year: 2026
duration: 1-2 weeks
type: Mobile app (PWA), fully navigable with real data
lead: Everything your baby needs, from families in your neighbourhood, with the peace of mind of buying new.
role: Product, UX/UI design and development
services: Research, analysis of other apps, prototype, user testing and development
tools: React · Supabase · Vercel
theme: nido
cover: nido-cover.webp
accent: "#4E6E9E"
url: https://nido-bebes.vercel.app/
demo:
  url: https://nido-bebes.vercel.app/
  shot: nido-app.webp
  note: "This is the real app: sign in with the demo account and try searching, chatting and booking. Data and payments are for testing only."
  qr: nido-qr.svg
challenge: Babies grow so fast that clothes, prams and cots are outgrown within months. Buying second-hand saves money, but it raises doubts. Is it safe? Can you trust the seller? How do you meet up?
solution: A buy-and-sell app for families in the same neighbourhood, organised by the baby's stage, with chat, meet-ups and protected payment inside the app.
highlights:
  - { value: "4 digits", label: "delivery code that releases the protected payment" }
  - { value: "44 px", label: "minimum touch targets" }
  - { value: "AA", label: "colour contrast" }
---

## Principles

<ul class="nd-principles"><li>By stage, not by category</li><li>Trust you can see</li><li>Nearby first</li><li>Selling takes minimal effort</li><li>Safety comes before the sale</li></ul>

## Design decisions

<div class="nd-cards">
<div><b>Safety first</b><span>Used car seats can't be listed, only new and sealed ones. Hygiene products, new only.</span></div>
<div><b>Protected payment</b><span>The money is held and released with a 4-digit delivery code.</span></div>
<div><b>Hand delivery</b><span>The default option, at a safe meeting point.</span></div>
<div><b>Sizes in centimetres</b><span>With months as a guide: "68 cm · 3-6 m".</span></div>
<div><b>Optional baby profile</b><span>Only date of birth and name, never photos.</span></div>
<div><b>Accessibility</b><span>AA contrast, 44 px touch targets and animations that respect "reduce motion".</span></div>
</div>

## My process

<ol class="nd-steps">
<li><b>Research</b><span>The doubts families have when buying second-hand baby items: whether it's safe, whether the seller can be trusted and how to meet up.</span></li>
<li><b>Analysis of other apps</b><span>Second-hand marketplace apps, to see what they lack when the item is for a baby.</span></li>
<li><b>Prototype</b><span>The screens and main flows: search by stage, list an item, chat, meet up and pay.</span></li>
<li><b>User testing</b><span>The demo has a test mode with three tasks (list an item, find something for a 6-month-old within 5 km, and book and pay) and a form to leave feedback.</span></li>
</ol>

## How it's built

From prototype to a real app you can install on your phone (PWA), with accounts, a database, real-time chat and simulated payment.

<div class="nd-stack"><span>React</span><span>Supabase</span><span>Vercel</span><span>PWA</span></div>
