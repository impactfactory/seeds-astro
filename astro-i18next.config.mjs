/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "de"],
  namespaces: ["translations", "components"],
  defaultNamespace: "translations",
  routes: {
    de: {
      about: "ueber-uns",
      animals: "tiere",
      authors: "autoren",
      blog: "blog",
      dataprotection: "dataprotection",
      environments: "oekosysteme",
      imprint: "impressum",
      plants: "pflanzen",
      principles: "prinzipien",
      seeds: "seeds",
    },
  },
};
