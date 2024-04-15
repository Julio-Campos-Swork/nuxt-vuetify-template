// import axios from '../plugins/axios'

// const $axios = axios().provide.axios
export const useUserStore = defineStore(
  'userStore',
  () => {
    async function loginUser(userName, password) {
      console.log({ userName, password })
    }
    async function registerUser(userName, email, password) {
      console.log({ userName, email, password })
    }
    return { loginUser, registerUser }
  },
  { persist: true }
)
