import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // Changed from 'server' to 'static' for simpler deployment
  build: {
    assets: 'assets'
  }
});