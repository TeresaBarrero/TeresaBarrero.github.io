---
title: Nido
uid: nido
lang: es
order: -1
year: 2026
duration: 1-2 semanas
type: App móvil (PWA) navegable con datos reales
lead: Todo lo que tu bebé necesita, de familias de tu barrio, con la tranquilidad de comprarlo nuevo.
role: Producto, diseño UX/UI y desarrollo
services: Investigación, análisis de otras apps, prototipo, pruebas con usuarias y desarrollo
tools: React · Supabase · Vercel
theme: nido
cover: nido-cover.webp
accent: "#4E6E9E"
url: https://nido-bebes.vercel.app/
demo:
  url: https://nido-bebes.vercel.app/
  shot: nido-app.webp
  note: "Es la app real: entra con la cuenta de demo y prueba a buscar, chatear y reservar. Los datos y el pago son de prueba."
  qr: nido-qr.svg
challenge: Los bebés crecen tan rápido que la ropa, los carritos o las cunas se quedan pequeños en meses. Comprar de segunda mano ahorra, pero genera dudas. ¿Es seguro? ¿Es de fiar quien vende? ¿Cómo quedamos?
solution: Una app de compraventa entre familias del mismo barrio, organizada por etapas del bebé, con chat, quedada y pago protegido dentro de la app.
highlights:
  - { value: "4 cifras", label: "código de entrega que libera el pago protegido" }
  - { value: "44 px", label: "zonas táctiles mínimas" }
  - { value: "AA", label: "contraste de color" }
---

## Principios

<ul class="nd-principles"><li>Por etapas, no por categorías</li><li>La confianza se ve</li><li>Cerca primero</li><li>Vender cuesta lo mínimo</li><li>La seguridad va antes que la venta</li></ul>

## Decisiones de diseño

<div class="nd-cards">
<div><b>Seguridad primero</b><span>No se pueden publicar sillas de coche usadas, solo nuevas y precintadas. La higiene, solo nueva.</span></div>
<div><b>Pago protegido</b><span>El dinero queda retenido y se libera con un código de entrega de 4 cifras.</span></div>
<div><b>Entrega en mano</b><span>Es la opción por defecto, en un punto de encuentro seguro.</span></div>
<div><b>Tallas en centímetros</b><span>Con los meses como ayuda: «68 cm · 3-6 m».</span></div>
<div><b>Perfil del bebé opcional</b><span>Solo la fecha de nacimiento y el nombre, nunca fotos.</span></div>
<div><b>Accesibilidad</b><span>Contraste AA, zonas táctiles de 44 px y animaciones que respetan «reducir movimiento».</span></div>
</div>

## Mi proceso

<ol class="nd-steps">
<li><b>Investigación</b><span>Las dudas de las familias al comprar cosas de bebé de segunda mano: si es seguro, si quien vende es de fiar y cómo quedar.</span></li>
<li><b>Análisis de otras apps</b><span>Apps de compraventa de segunda mano, para ver qué les falta cuando lo que se vende es para un bebé.</span></li>
<li><b>Prototipo</b><span>Las pantallas y los flujos principales: buscar por etapa, publicar, chatear, quedar y pagar.</span></li>
<li><b>Pruebas con usuarias</b><span>La demo tiene un modo prueba con tres tareas (publicar un artículo, encontrar algo para un bebé de 6 meses a menos de 5 km, y reservar y pagar) y un formulario para dejar la opinión.</span></li>
</ol>

## Cómo está hecha

Del prototipo a una app real que se instala en el móvil (PWA), con cuentas, base de datos, chat en tiempo real y pago simulado.

<div class="nd-stack"><span>React</span><span>Supabase</span><span>Vercel</span><span>PWA</span></div>
