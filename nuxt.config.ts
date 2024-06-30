// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/its-logo.png" }
      ]
    }
  },
  runtimeConfig: {
    public: {
      SPREAD_SHEET_ID: process.env.NUXT_PUBLIC_SPREAD_SHEET_ID,
      GOOGLE_CLIENT_EMAIL: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      GOOGLE_PRIVATE_KEY: process.env.NUXT_PUBLIC_GOOGLE_PRIVATE_KEY
    }
  },
  devtools: { enabled: false },
  spaLoadingTemplate: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: "~/plugins/fontawesome.js", ssr: false} 
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
})