import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  
  site: 'https://dripsender.id',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    image({
    serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ]
  
});

