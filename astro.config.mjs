import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Origin and base path come from the environment so one codebase serves both
// the GitHub Pages preview (sub-path) and the live domain (root).
//   PUBLIC_SITE_ORIGIN  https://kpconsulting.co   |  https://user.github.io
//   PUBLIC_BASE_PATH    /                         |  /kp-consulting/
const SITE = process.env.PUBLIC_SITE_ORIGIN || 'https://kpconsulting.co';
const BASE = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
