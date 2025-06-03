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


  const mobileBurger = [
    {
        id:1,
        title: 'Проекты',
        text:'Наши работы',
        img:project,
    },
    {
        id:2,
        title: 'Услуги',
        text:'Доверьтесь нам',
        img:services,
    },
    {
        id:3,
        title: 'Блог',
        text:'Интересные истории',
        img:blog,
    },
    {
        id:4,
        title: 'Агентство',
        text:'Подробнее о нас',
        img:agency,
    },
]
  return { mobilBurgerActive, toggleMobilBurger, mobileBurger }
})
