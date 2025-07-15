import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useIndustriesStore = defineStore('industries', () => {
  const industries = ref([
    {
      id: 1,
      name: 'Металлургия',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 2,
      name: 'Строительство и ремонт',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 3,
      name: 'Ювелирные изделия',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 4,
      name: 'Промышленность',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 5,
      name: 'Транспорт и логистика',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 6,
      name: 'Бьюти сфера',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
    {
      id: 7,
      name: 'Gamedev',
      text: '6 лет отраслевого опыта',
      projects: 10,
    },
  ])

  return { industries }
})
