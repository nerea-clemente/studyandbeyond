// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// El dominio final. Se usa para canonicals, sitemap y OG.
const SITE = 'https://studyandbeyond.es';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    preact(),
  ],
  image: {
    // Permite optimizar imágenes locales con astro:assets.
    responsiveStyles: true,
  },
});
