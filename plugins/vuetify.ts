// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { es } from "vuetify/locale";
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: { locale: "es",  messages: { es } },
    theme: {
      defaultTheme: 'dark'
    }
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})
