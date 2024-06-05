// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules:['@pinia/nuxt', "vuetify-nuxt-module"],
  pages:true,
  ssr:true,
  pinia: {
    storesDirs: ['./stores/**'],
  },
  routeRules:{
    '/api/users':{cache:{maxAge:60*60}}
  },
  vuetify:{
    vuetifyOptions:{
      theme:{
        themes:{
          'light':{
            dark:false,
            colors:{
              "bg-default":"#fff",
              "bg-contrast":"#F6F6F3",
              "btn":"#342D3F",
              "btn-100":"#504450",
              "text":"#090C1F",
              "text-100":"#FE7D08",
              "dark-orange":"#DD4B00",
              "purple-100":'#C486D1',
              "purple-200":"#9858C0",
              "purple-300":"#8848B6",
              "purple-400":"#612E8D",
            }
          },
          'dark':{
            dark:true,
            colors:{
              "bg-default":"#1A1C22",
              "bg-contrast":"#282C35",
              "btn":"#DD4B00",
              "btn-100":"#FE7D08",
              "text":"#FE7D08",
              "text-100":"#FE7D08",
              "dark-orange":"#DD4B00",
              "purple-100":'#6B379A',
              "purple-200":"#52257B",
              "purple-300":"#461E67",
              "purple-400":"#2D123E",
            }
          }
        }
      }
    }
  }
})