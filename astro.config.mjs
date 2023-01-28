import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
//import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://seeds4.earth",
  integrations: [
    astroI18next(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    partytown(),
    sitemap(),
  ],
});
