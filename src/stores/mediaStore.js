import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useMediaStore = defineStore('media', () => {
  const media = ref([
    {
      id: 1,
      date: '8 декабря 2024',
      tema: 'политика',
      text: 'Эффективно взаимодействуем с клиентами через интегрированные CRM-решения',
    },
    {
      id: 2,
      date: '8 декабря 2024',
      tema: 'политика',
      text: 'Эффективно взаимодействуем с клиентами через интегрированные CRM-решения',
    },
    {
      id: 3,
      date: '8 декабря 2024',
      tema: 'политика',
      text: 'Эффективно взаимодействуем с клиентами через интегрированные CRM-решения',
    },
  ])

  return { media }
})
