// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/its-logo.png" }
      ]
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