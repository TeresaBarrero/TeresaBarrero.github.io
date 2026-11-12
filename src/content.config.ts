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
    art: z.enum(['pweb', 'psocial', 'pseo']).optional(),
    cover: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), layout: z.enum(['long', 'mobile', 'post', 'wide']) })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
