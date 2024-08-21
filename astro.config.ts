import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://tech.jagasantagostino.com",
  integrations: [
    tailwind(),
    sitemap(),
    expressiveCode({
      defaultProps: {
        frame: "terminal",
        overridesByLang: {
          "bash,ps,sh,shell": { frame: "none" },
        },
      },
    }),
    mdx(),
  ],
  output: "hybrid",
  adapter: vercel({
    imageService: false,
  }),
  experimental: {
    serverIslands: true,
    contentIntellisense: true,
    env: {
      schema: {},
    },
  },
});
