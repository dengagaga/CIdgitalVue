import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useArticleStore = defineStore('article', () => {
    const article = ref([
        {
            id: 1,
            title: 'Все статьи',
            active:true
        },
        {
            id: 2,
            title: 'Разработка',
            active:false
        },
        {
            id: 3,
            title: 'Дизайн',
            active:false
        },
        {
            id: 4,
            title: 'Аналитика',
            active:false
        },
        {
            id: 5,
            title: 'Маркетинг',
            active:false
        },
       
    ])
  
  return { article }
})
