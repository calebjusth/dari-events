const BASE_URL = "https://darievents.com";
const PAYLOAD_URL = "https://cms.darievents.com";
const pageModules = /* #__PURE__ */ Object.assign({"./404.astro": () => import('./404_DDpDKBI_.mjs').then(n => n._),"./aboutus.astro": () => import('./aboutus_C6guyq9z.mjs').then(n => n._),"./events.astro": () => import('./events_BPI-NXGh.mjs').then(n => n._),"./events/[id].astro": () => import('./_id__CHtGKdSP.mjs').then(n => n._),"./index.astro": () => import('./index_3n6AGav4.mjs').then(n => n._),"./portfolio/[slug].astro": () => import('./_slug__ByLqkbTe.mjs').then(n => n._),"./verify.astro": () => import('./verify_B7HS19iu.mjs').then(n => n._),"./work.astro": () => import('./work_BHCPE_yJ.mjs').then(n => n._)});
const normalizeRouteFromFile = (filePath) => {
  const route = filePath.replace(/^\.\//, "").replace(/\.(astro|md|mdx)$/, "");
  if (route.endsWith("/index")) {
    const indexRoute = route.slice(0, -"/".length);
    return indexRoute === "" ? "/" : `/${indexRoute}`;
  }
  return `/${route}`;
};
const isStaticPage = (filePath) => {
  if (filePath.includes("/_") || filePath.includes("/[") || filePath.includes("[")) return false;
  if (filePath.endsWith("/404.astro")) return false;
  return true;
};
const fetchDynamicRoutes = async (url, mapItem) => {
  const response = await fetch(url);
  if (!response.ok) return [];
  const data = await response.json();
  const docs = data.docs ?? [];
  return docs.flatMap(mapItem);
};
const GET = async () => {
  const staticRoutes = Object.keys(pageModules).filter(isStaticPage).map(normalizeRouteFromFile);
  const [eventRoutes, portfolioRoutes] = await Promise.all([
    fetchDynamicRoutes(
      `${PAYLOAD_URL}/api/events?sort=date&limit=500&depth=1`,
      (event) => event?.id ? [`/events/${event.id}`] : []
    ),
    fetchDynamicRoutes(
      `${PAYLOAD_URL}/api/case-studies?limit=500&depth=1`,
      (project) => project?.slug ? [`/portfolio/${project.slug}`] : []
    )
  ]);
  const urls = Array.from(/* @__PURE__ */ new Set([...staticRoutes, ...eventRoutes, ...portfolioRoutes]));
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((route) => `  <url><loc>${new URL(route, BASE_URL).toString()}</loc></url>`),
    "</urlset>"
  ].join("\n");
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
