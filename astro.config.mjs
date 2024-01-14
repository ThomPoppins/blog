import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [mdx(), react(), sentry(), spotlightjs()]
});