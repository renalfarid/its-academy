// https://nuxt.com/docs/api/configuration/nuxt-config
const year = 31536000
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
  routeRules: {
    '/': { prerender: true },
    '/services/**': { isr: true },
    '/about/**': { isr: true },
    '/corporate/**': { isr: true },
    '/api/**': { cors: true },
    "/img/**": { headers: { 'cache-control': `public,max-age=${year},s-maxage=${year}` } },
    "/_nuxt/**": { headers: { 'cache-control': `public,max-age=${year},s-maxage=${year}` } },
    
  },
  devtools: { enabled: false },
  spaLoadingTemplate: false,
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: "~/plugins/fontawesome.js", ssr: false} 
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  }
})