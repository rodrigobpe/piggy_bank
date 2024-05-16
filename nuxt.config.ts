// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr:true,
  routeRules:{
    '/api/users':{cache:{maxAge:60*60}}
  }
})
