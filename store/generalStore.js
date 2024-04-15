export const useGeneralStore = defineStore(
  'general',
  () => {
    const notificationAttrs = reactive({
      isOpen: false,
      message: '',
      color: '',
    })
    function showNotification(message = 'Notificacion', color = 'warning') {
      notificationAttrs.isOpen = true
      notificationAttrs.message = message
      notificationAttrs.color = color
    }
    const counter = ref(0)
    function increment() {
      counter.value++
    }
    return {
      counter,
      increment,
      notificationAttrs,
      showNotification,
    }
  },
  { persist: true }
)
