import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server', 
  adapter: vercel({
    webAnalytics: { enabled: true } // or just vercel() with standalone mode
  }),
  integrations: [sitemap()],
});