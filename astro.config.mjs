import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://staging.conversiv.com',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
