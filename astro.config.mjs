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
    webAnalytics: {
      enabled: true,
    },
  }),


  site:'https://darievents.com',
  integrations: [sitemap()],
});