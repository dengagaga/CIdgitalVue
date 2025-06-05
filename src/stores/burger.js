import { ref } from 'vue'
import { defineStore } from 'pinia'
import project from '@/assets/icon.svg'
import services from '@/assets/img/icon2.svg'
import agency from '@/assets/img/icon3.png'
import blog from '@/assets/img/icon4.png'

export const useBurgerStore = defineStore('burger', () => {
    
  const mobilBurgerActive = ref(false)
  const toggleMobilBurger = () => {
    mobilBurgerActive.value = !mobilBurgerActive.value
    const body = document.querySelector('body')
    body.classList.toggle('no-scroll')
  }


  const mobileBurger = ref([
    {
        id:1,
        title: 'Проекты',
        text:'Наши работы',
        img:project,
        links: [
          {
            id:1,
            title:'CMS сайта',
          },
          {
            id:2,
            title:'CPlace Templates',
          },
          {
            id:3,
            title:'Digame',
          },
        ]
    },
    {
        id:2,
        title: 'Услуги',
        text:'Доверьтесь нам',
        img:services,
        links: [
           {
              id:4,
              title: 'Аналитика',
            },
            {
              id:5,
              title: 'Дизайн',
            },
            {
              id:6,
              title: 'Разработка',
            },
            {
              id:7,
              title: 'Продвижение',
            },
            {
              id:8,
              title: 'CRM',
            },
        ]
    },
    {
        id:3,
        title: 'Блог',
        text:'Интересные истории',
        img:blog,
        links: []
    },
    {
        id:4,
        title: 'Агентство',
        text:'Подробнее о нас',
        img:agency,
        links: [
           {
            id:9,
              title: 'Сертификаты',
            },
            {
              id:10,
              title: 'Команда',
            },
            {
              id:11,
              title: 'Достижения',
            },
            {
              id:12,
              title: 'Отзывы',
            },
        ]
    },
])

  return { mobilBurgerActive, toggleMobilBurger, mobileBurger }
})
