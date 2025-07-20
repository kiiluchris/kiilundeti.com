// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://kiilundeti.com",
  integrations: [mdx(), sitemap(), icon()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
