// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "nuxt-gtag",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      link: [
        // { rel: "icon", type: "image/x-icon", href: "/favicon.ico", sizes: "32x32" },
        // { rel: "icon", type: "image/png", href: "/icon-96x96.png", sizes: "96x96" },
        // { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: true,
        arrowParens: true,
        quoteProps: "as-needed",
        braceStyle: "1tbs",
      },
    },
  },
  fonts: {
    families: [
      {
        name: "Poppins",
        provider: "google",
      },
      {
        name: "Afacad Flux",
        provider: "google",
      },
    ],
  },
});
