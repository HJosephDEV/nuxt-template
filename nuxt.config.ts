// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "/api"
    }
  },
  modules: ["@pinia/nuxt", "@invictus.codes/nuxt-vuetify", "nuxt-lucide-icons"],
  pinia: {
    autoImports: []
  },
  vuetify: {
    vuetifyOptions: {},
    moduleOptions: {
      treeshaking: true,
      useIconCDN: false,
      styles: true,
      autoImport: true,
      useVuetifyLabs: true
    }
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ]
});
