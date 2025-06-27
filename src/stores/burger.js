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
        text:'',
        img:project,
        link:'/project',
        default:[
           {
              id:1,
              title: 'CMS сайта',
              link:'/'
            },
            {
              id:2,
              title: 'CPlace Templates',
              link:'/'
            },
            {
              id:3,
              title: 'Digame',
              link:'/'
            },
      
        ]
    },
    {
        id:2,
        title: 'Услуги',
        text:'',
        img:services,
        links: [
           {
              id:13,
              title: 'Все услуги',
              link:'/services'
            },
           {
              id:4,
              title: 'Аналитика',
              link:'/'
            },
            {
              id:5,
              title: 'Дизайн',
              link:'/'
            },
            {
              id:6,
              title: 'Разработка',
              link:'/'
            },
            {
              id:7,
              title: 'Продвижение',
              link:'/'
            },
            // {
            //   id:8,
            //   title: 'CRM',
            // },
        ]
    },
    {
        id:3,
        title: 'Блог',
        text:'Интересные истории',
        img:blog,
        link:'/project'
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
              link:'/'
            },
            {
              id:10,
              title: 'Команда',
              link:'/'
            },
            {
              id:11,
              title: 'Достижения',
              link:'/'
            },
            {
              id:12,
              title: 'Отзывы',
              link:'/'
            },
        ]
    },
])
  const social = ref([
    {
        id:1,
        title: 'Vkontakte',
    },
    {
        id:2,
        title: 'Behance',

    },
    {
        id:3,
        title: 'Telegram',

    },
    {
        id:4,
        title: 'Dprofile',
     
    },
    {
        id:5,
        title: 'Dribble',
     
    },
  ])
  return { mobilBurgerActive, social, toggleMobilBurger, mobileBurger }
})
