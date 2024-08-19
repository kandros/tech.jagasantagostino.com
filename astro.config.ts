import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://tech.jagasantagostino.com",
  integrations: [tailwind(), sitemap(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
    serverIslands: true,
    contentIntellisense: true,
    env: {
      schema: {},
    },
  },
});
