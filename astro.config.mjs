import { defineConfig } from 'astro/config';
import remarkExternalLinks from 'remark-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://koyu.space',
  markdown: {
    remarkPlugins: [[remarkExternalLinks, { target: '_blank' }]],
  },
});
