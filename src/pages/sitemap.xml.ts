// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';

const BASE_URL = import.meta.env.SITE ?? 'https://darievents.com';
const PAYLOAD_URL = import.meta.env.PAYLOAD_URL ?? 'https://cms.darievents.com';

const pageModules = import.meta.glob('./**/*.{astro,md,mdx}');

const normalizeRouteFromFile = (filePath: string) => {
  const route = filePath.replace(/^\.\//, '').replace(/\.(astro|md|mdx)$/, '');

  if (route.endsWith('/index')) {
    const indexRoute = route.slice(0, -'/'.length);
    return indexRoute === '' ? '/' : `/${indexRoute}`;
  }

  return `/${route}`;
};

const isStaticPage = (filePath: string) => {
  if (filePath.includes('/_') || filePath.includes('/[') || filePath.includes('[')) return false;
  if (filePath.endsWith('/404.astro')) return false;
  return true;
};

const fetchDynamicRoutes = async (url: string, mapItem: (item: any) => string[]) => {
  const response = await fetch(url);
  if (!response.ok) return [];
  const data = await response.json();
  const docs = data.docs ?? [];
  return docs.flatMap(mapItem);
};

export const GET: APIRoute = async () => {
  const staticRoutes = Object.keys(pageModules).filter(isStaticPage).map(normalizeRouteFromFile);

  const [eventRoutes, portfolioRoutes] = await Promise.all([
    fetchDynamicRoutes(`${PAYLOAD_URL}/api/events?sort=date&limit=500&depth=1`, (event: any) =>
      event?.id ? [`/events/${event.id}`] : []
    ),
    fetchDynamicRoutes(`${PAYLOAD_URL}/api/case-studies?limit=500&depth=1`, (project: any) =>
      project?.slug ? [`/portfolio/${project.slug}`] : []
    ),
  ]);

  const urls = Array.from(new Set([...staticRoutes, ...eventRoutes, ...portfolioRoutes]));

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((route) => `  <url><loc>${new URL(route, BASE_URL).toString()}</loc></url>`),
    '</urlset>',
  ].join('\n');

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};