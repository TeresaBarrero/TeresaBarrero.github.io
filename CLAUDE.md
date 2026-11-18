# Portfolio de María Teresa Barrero

Portfolio bilingüe (es/en) en Astro 5, estático, publicado en GitHub Pages con `.github/workflows/deploy.yml`. La dueña es María Teresa (Teresa) y escribe en español: respóndele en español. Ella ha aprobado el diseño; no cambies la dirección visual sin preguntarle.

## Estructura
- Contenido de proyectos: `src/content/projects/{es,en}/*.md` (esquema en `src/content.config.ts`). El campo de URL es `uid`, NO `slug` (el loader `glob` usa `slug` como id y los dos idiomas chocarían).
- Textos: `src/i18n/ui.ts`. Datos personales, trayectoria, disciplinas y proyectos "En proceso": `src/data/profile.ts`. Archivo: `src/data/archive.ts`.
- Páginas: `src/components/Home.astro` (portada), `src/components/CaseStudy.astro` (caso), rutas en `src/pages/`.
- Estilos: `src/styles/global.css` (tokens en `:root`). Animaciones e interacciones: `src/scripts/main.ts`.
- Imágenes en `public/images/`; enlaces internos siempre con los helpers de `src/lib/paths.ts` (respetan `BASE_PATH`).
- Fuentes autoalojadas con @fontsource (no cargar Google Fonts).

## Reglas de contenido
- No inventar proyectos, cifras ni resultados. Los `highlights` son solo datos reales.
- Panthera Fitness Guareña es un cliente real (web: https://pantherafitnessguarena.com/).
- La web de anda CONMiGO fue una propuesta que no se llegó a publicar: preséntala como "Propuesta".
- Castúo Cooperativa es un proyecto académico del máster del CEI (2025): sus cifras de objetivos son metas, no resultados. El análisis va en el cuerpo del .md (secciones ## que se maquetan en columnas); las imágenes son piezas recortadas de la presentación, nunca diapositivas enteras.
- AZARA Coffee es un proyecto conceptual de marca (no es un negocio real): debe indicarse siempre, junto con que las imágenes se generaron con IA. La colaboración con El Hombre Pez es ficticia: no nombrar a su dueño ni presentarla como real. No publicar el presupuesto de marketing. Su caso usa `theme: azara` (colores y tipografías de la marca, estilos `.theme-azara` y bloques `.az-*` en global.css) y su web está copiada en `public/azara/`.
- Nido es una app propia publicada en https://nido-bebes.vercel.app/ (demo de portfolio: datos y pagos de prueba). Su caso usa el campo `demo` del .md (marco de móvil con la app en un iframe en escritorio; captura y botón en móvil; QR en `public/images/nido-qr.svg`) y `theme: nido` (azul #4E6E9E, crema #FAF7F4 y pasteles; Nunito + Nunito Sans). Duración: 1-2 semanas.
- Pendiente de añadir: anda CONMiGO (repo privado TeresaBarrero/andaconmigo-web) y Nebula (CRM ajustable).
- Cada caso tiene su tema visual (`theme` en el .md → clase `.theme-<tema>` en global.css, que cambia colores, tipografías, botones, pie y botón «volver arriba»): `azara` (verde y naranja; Cormorant Garamond + Jost), `panthera` (página oscura en carbón como su web, con turquesa #1ED3D3 de acento y texto carbón sobre los rellenos turquesa; Ultra + Bebas Neue + Barlow, como su web) y `castuo` (marrón #75502D, crema y vino #8B1E24; Cinzel + Lora). Un caso nuevo debe llevar el suyo con los colores de la marca.
- Mantener `public/llms.txt` al día cuando cambien los casos.

## Comandos
`npm run dev` · `npm run build` · `npm run preview`. Comprobar siempre a 390 px de ancho.
