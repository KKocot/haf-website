// @ts-nocheck
// Tooling configuration for Astro — Node-side only, not shipped to clients.
// `@tailwindcss/vite` plugin types intermittently mismatch Astro's vite plugin
// signature; we keep this file out of the strict TS pipeline to avoid noise.
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://haf.openhive.network",
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
  integrations: [react(), sitemap()],
  adapter: vercel(),
});
