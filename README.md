# Portfolio · María Teresa Barrero

Portfolio bilingüe (español / inglés) de María Teresa Barrero, Full Stack Marketer.
Hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

- Español: `/` · Inglés: `/en/`
- Casos de estudio: `/proyectos/<id>/` y `/en/projects/<id>/`

## Verlo en tu ordenador

Necesitas [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:4321. Los cambios se ven al guardar.

## Añadir un proyecto nuevo

1. Copia las imágenes en `public/images/` (mejor en `.webp`, de 1200 px de ancho como mucho).
2. Duplica un archivo de `src/content/projects/es/` y otro de `src/content/projects/en/`.
3. Cambia los datos en los dos. Lo más importante:
   - `uid`: el identificador de la URL, igual en los dos idiomas (por ejemplo `azara-coffee`).
   - `order`: la posición en el scroll horizontal (1 = el primero).
   - `cover`: el nombre de la imagen de portada, por ejemplo `azara-portada.webp`.
     (Los proyectos de Panthera usan `art`, que son composiciones hechas a medida; los nuevos usan `cover`).
   - `highlights`: 2 o 3 datos destacados. Pon solo datos reales.
   - `gallery`: las imágenes del caso. `layout` puede ser `long` (captura larga), `mobile` (captura de móvil), `post` (publicación de redes) o `wide` (imagen ancha).
4. Si quieres contar más, escribe texto debajo del segundo `---`: aparecerá como "Más detalles".
5. Para ocultar un proyecto sin borrarlo, pon `draft: true`.

## Otras cosas que puedes cambiar

| Qué | Dónde |
| --- | --- |
| Textos de la web (titulares, manifiesto, botones) | `src/i18n/ui.ts` |
| Email, teléfono, redes, herramientas, experiencia, formación, disciplinas | `src/data/profile.ts` |
| Proyectos "En proceso" (tarjeta con punto azul) | `inProgress` en `src/data/profile.ts` |
| Piezas del Archivo | `src/data/archive.ts` |
| Colores y tipografías | `:root` al principio de `src/styles/global.css` |
| Resumen para buscadores con IA | `public/llms.txt` |

## Publicar

Cada vez que subes cambios a la rama `main`, GitHub Actions construye la web y la publica (`.github/workflows/deploy.yml`).

La primera vez:
1. Crea en GitHub un repositorio llamado **`TeresaBarrero.github.io`** y sube este proyecto.
2. En el repositorio, ve a **Settings → Pages** y en "Source" elige **GitHub Actions**.
3. La web quedará en https://teresabarrero.github.io/

Si el repositorio tiene otro nombre (por ejemplo `portfolio`), cambia en `.github/workflows/deploy.yml`
`BASE_PATH: /portfolio` y la web quedará en https://teresabarrero.github.io/portfolio/.
Si algún día usas un dominio propio, cambia `SITE` por ese dominio y `BASE_PATH` por `/`, y actualiza `public/robots.txt` y `public/llms.txt`.
