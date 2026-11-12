// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE: dirección pública de la web. BASE_PATH: "/" si el repositorio se llama
// TeresaBarrero.github.io, o "/nombre-del-repo" si tiene otro nombre.
export default defineConfig({
  site: process.env.SITE ?? 'https://teresabarrero.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
