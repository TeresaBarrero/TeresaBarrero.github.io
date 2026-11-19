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
  // Política de seguridad (CSP): Astro la añade como <meta> en cada página con los hashes de sus scripts y estilos.
  // GitHub Pages no permite cabeceras propias, así que es la única forma. Si se incrusta otra demo en un iframe,
  // hay que añadir su dirección a frame-src. (public/azara/index.html lleva su propia <meta>.)
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self'",
        'frame-src https://nido-bebes.vercel.app',
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
      scriptDirective: { resources: ["'self'"] },
      // Los atributos style="" (p. ej. el color de acento de cada caso) necesitan 'unsafe-inline' solo en style-src-attr
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: 'attribute' }] },
    },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-GB' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
