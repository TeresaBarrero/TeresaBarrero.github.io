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
- Pendiente de añadir: anda CONMiGO (repo privado TeresaBarrero/andaconmigo-web), Nebula (CRM ajustable) y Azara Coffee (marca en creación; hoy solo tarjeta "En proceso").
- Mantener `public/llms.txt` al día cuando cambien los casos.

## Comandos
`npm run dev` · `npm run build` · `npm run preview`. Comprobar siempre a 390 px de ancho.
