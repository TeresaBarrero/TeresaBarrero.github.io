// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE: dirección pública de la web. BASE_PATH: "/" si el repositorio se llama
// TeresaBarrero.github.io, o "/nombre-del-repo" si tiene otro nombre.
export default defineConfig({
  site: process.env.SITE ?? 'https://teresabarrero.github.io',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  // Los tres casos antiguos de Panthera se unieron en uno: las direcciones viejas llevan al nuevo
  redirects: {
    '/proyectos/panthera-fitness-web': '/proyectos/panthera-fitness/',
    '/proyectos/panthera-fitness-redes': '/proyectos/panthera-fitness/',
    '/proyectos/panthera-fitness-seo-local': '/proyectos/panthera-fitness/',
    '/en/projects/panthera-fitness-web': '/en/projects/panthera-fitness/',
    '/en/projects/panthera-fitness-redes': '/en/projects/panthera-fitness/',
    '/en/projects/panthera-fitness-seo-local': '/en/projects/panthera-fitness/',
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
