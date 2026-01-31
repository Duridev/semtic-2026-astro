// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://semtic.cl',
  integrations: [],
  vite: {
    plugins: [tailwindcss()]
  },
  // Mejoras SEO
  output: 'static',
  trailingSlash: 'ignore'
});