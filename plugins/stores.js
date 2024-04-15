import { useGeneralStore } from '~/store/generalStore'
import { useUserStore } from '~/store/userStore'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      generalStore: useGeneralStore(),
      userStore: useUserStore(),
    },
  }
})
