---
title: Nido
uid: nido
lang: es
order: -1
year: 2026
duration: 1-2 semanas
type: "App móvil (PWA) navegable con datos reales"
lead: "Todo lo que tu bebé necesita, de familias de tu barrio, con la tranquilidad de comprarlo nuevo."
role: Producto, diseño UX/UI y desarrollo
services: "Investigación, estrategia, diseño UX/UI, prototipo, desarrollo y test"
tools: "Vite · React · TypeScript · Supabase · Stripe (modo prueba) · Vercel · Claude Code"
theme: nido
cover: nido-cover.webp
accent: "#4E6E9E"
url: https://nido-bebes.vercel.app/
demo:
  url: https://nido-bebes.vercel.app/
  shot: nido-app.webp
  note: "Es la app real: entra con la cuenta de demo y prueba a buscar, chatear y reservar. Los datos y el pago son de prueba."
  qr: nido-qr.svg
challenge: "Un bebé lo necesita todo en muy poco tiempo y lo usa durante muy poco tiempo. Aun así, muchas familias compran nuevo porque en las apps de segunda mano generalistas la oferta de bebé se pierde entre todo lo demás, no se puede buscar por la edad del bebé y no hay garantías sobre higiene, seguridad ni la persona que vende. Los artículos más buscados, como bañeras, cunas o carritos, son además caros de enviar."
solution: "Diseñé y desarrollé Nido, una app web instalable que organiza la oferta por etapas del bebé y prioriza lo que está cerca. La confianza se ve en cada pantalla: ficha de higiene, vendedores verificados, pago protegido también en mano y productos que, por seguridad, no se pueden vender."
highlights:
  - { value: "8", label: "secciones organizadas por uso (paseo, dormir, baño…), con filtros propios como la talla en centímetros" }
  - { value: "30 s", label: "para publicar un anuncio: fotos, ficha rellenada por la app y precio sugerido" }
  - { value: "390 px", label: "diseño móvil primero, instalable en la pantalla de inicio" }
---

## Investigación y estrategia

Estudio de mercado sobre natalidad, coste del primer año y segunda mano en España, análisis de competencia (Wallapop, Vinted y apps especializadas de Francia, Alemania y EE. UU.) y de opiniones públicas de padres. La conclusión: hay hueco para una app especializada, pero solo si genera oferta local suficiente y resuelve la desconfianza.

- Proto-personas: la familia que compra y la que vacía el armario.
- Mapa del recorrido actual y sus puntos de fricción: buscar, evaluar, quedar y pagar.
- Arquitectura de 8 secciones por uso, inspirada en cómo organizan las tiendas de puericultura.
- Decisiones de producto: entrega en mano por defecto, perfil del bebé opcional sin fotos y sillas de coche usadas no permitidas.

## Diseño UX/UI

Identidad minimalista y cálida: pasteles solo como fondo, acciones en azul nana, tipografía Nunito y formas redondeadas. Prototipo navegable en dos versiones: la segunda aplica las mejoras de una evaluación heurística con los 10 principios de Nielsen.

- Recorridos clave: publicar en 30 segundos, buscar por etapa y comprar en mano con código de entrega.
- Onboarding, notificaciones, valoraciones y aviso de «ya no le vale» para convertir compradores en vendedores.
- Animaciones con propósito (escaneo de fotos, transición de tarjeta a ficha) que respetan «reducir movimiento».
- Accesibilidad: contraste AA y zonas táctiles de 44 px.

## Desarrollo y test

El prototipo se convirtió en una app real con Claude Code, a partir de un kit con la especificación, los tokens de diseño y el prototipo de referencia.

- PWA con Vite, React y TypeScript, publicada en Vercel.
- Datos reales con Supabase: cuentas, anuncios con fotos, chat y permisos por usuario.
- Pago protegido simulado con Stripe en modo de prueba.
- Modo prueba con tareas guiadas, cuestionario y panel privado de resultados. El primer test detectó que salir del chat a mitad de una compra era difícil, y se rediseñó la navegación del flujo.
