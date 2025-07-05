import { ref } from 'vue'
import { defineStore } from 'pinia'
import keus from '/src/assets/img/keus.png'
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

    const articleItemArray = ref([
    {
      id: 1,
      name:'Разработка и редизайн сайта Laser Zone',
      img: keus,
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
    {
      id: 2,
      name:'Lasez Zone v1.0',
      img: keus,
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
  ])
  
  return { article, articleItemArray }
})
