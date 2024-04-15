// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    //...
    'nuxt-icon', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/eslint'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})
