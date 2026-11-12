import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md en src/content/projects/es/ y otro en src/content/projects/en/
// con el mismo "slug". Mira README.md para ver cómo añadir uno nuevo.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    uid: z.string(),
    lang: z.enum(['es', 'en']),
    order: z.number(),
    year: z.number(),
    type: z.string(),
    lead: z.string(),
    role: z.string(),
    services: z.string(),
    tools: z.string(),
    url: z.string().url().optional(),
    /** Enlace al documento o presentación completa (Canva, PDF...) */
    document: z.string().url().optional(),
    art: z.enum(['pweb', 'psocial', 'pseo', 'pmix']).optional(),
    /** Enlaces del proyecto, se muestran como botones (web, redes, Google Business...) */
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    /** Botones «ver más» debajo de un bloque de la galería (group = título del bloque) */
    more: z.array(z.object({ group: z.string(), label: z.string(), href: z.string().url() })).default([]),
    cover: z.string().optional(),
    /** Color propio del proyecto (botón fijo «Ver proyecto completo»). Por defecto, tinta. */
    accent: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    /** group: título de bloque en la galería (p. ej. «Redes sociales»); las piezas seguidas con el mismo group van juntas */
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), layout: z.enum(['long', 'mobile', 'post', 'wide', 'full', 'fit', 'social']), group: z.string().optional() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
