import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://un-sheeple.me",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    mdx(),
    react(),
    sentry({
      dsn: "https://63fa277e17f202ed07d687a3747ce513@o4506631183597568.ingest.sentry.io/4506631292715008",
      sourceMapsUploadOptions: {
        telemetry: false,
        project: "un-sheeple-me",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
      options: {
        telemetry: false,
      },
    }),
    spotlightjs(),
  ],
});
