import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', ({ data }) => data.lang === lang && !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
