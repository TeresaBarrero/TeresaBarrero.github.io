import type { Lang } from '../i18n/ui';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Ruta interna respetando el "base" de GitHub Pages. */
export const u = (path = '/') => `${base}/${path.replace(/^\//, '')}`;
export const img = (file: string) => u(`images/${file}`);
export const home = (lang: Lang) => (lang === 'es' ? u('/') : u('/en/'));
export const projectPath = (lang: Lang, slug: string) =>
  lang === 'es' ? u(`/proyectos/${slug}/`) : u(`/en/projects/${slug}/`);
