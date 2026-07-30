import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Prioridad y frecuencia por ruta. Las landings de producto (Astra, Inbizio)
// se anuncian por encima del CV porque son las que interesa posicionar.
const SITEMAP_ENTRIES = {
  '/': { priority: 0.8, changefreq: 'monthly' },
  '/astra/': { priority: 1.0, changefreq: 'weekly' },
  '/inbizio/': { priority: 1.0, changefreq: 'weekly' }
};

// https://astro.build/config
export default defineConfig({
  site: 'https://bsjaramillo.github.io',
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        return { ...item, ...SITEMAP_ENTRIES[path] };
      }
    })
  ]
});
