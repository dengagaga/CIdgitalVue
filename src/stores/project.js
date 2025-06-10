import { ref } from 'vue'
import { defineStore } from 'pinia'
import lahti from '/src/assets/img/lahti.png'
import vayx from '/src/assets/img/vayx.png'
import ultimate from '/src/assets/img/ultimate.png'
import red from '/src/assets/img/red.png'
import lz from '/src/assets/img/lz.png'
import logoLz from '/src/assets/img/logoLz.png'
export const useProjectStore = defineStore('project', () => {

  const projectItemArray = ref([
    {
      id: 1,
      name:'Сайт российского игрового издательства Reegames',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
    {
      id: 2,
      name:'Виды сайтов: какие они бывают и для чего нужны',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: false
    },
    {
      id: 3,
      name:'Сайт и айдентика по строительству домов из карельской сосны кело “Кархум Кело”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
    {
      id: 4,
      name:'Сайт для Карельского перевозчика “Карел экспресс”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
    {
      id: 5,
      name:'Разработка сайта для узнаваемости игры “Beat the Humans”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
    {
      id: 6,
      name:'АЗС КиТЭК — современный сайт для автозаправочной станции',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Скоро кейс | Лендинг', 'Кейс | Сайт' , 'Бьюти сфера']
    },
  ])
  const clientsItemArray = ref([
    {
      id: 1,
      name:'Laser Zone',
      img: lz,
      cooperat:'Сотрудничаем 8 лет',
      projects: '2 проекта',
      task:'Более 250 задач выполнено',
      ava:logoLz,
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️'
    },
    {
      id: 2,
      name:'Лахти',
      img: lahti,
      ava: lahti,
      cooperat:'Сотрудничаем 2 года',
      projects: '1 проект',
      task:'Более 100 задач выполнено',
    },
    {
      id: 3,
      name:'Ultimate Force',
      img: ultimate,
      ava: ultimate,
      cooperat:'Сотрудничаем 1 год',
      projects: '1 проект',
      task:'Более 150 задач выполнено',
    },
    {
      id: 4,
      name:'Vayx',
      img: vayx,
      ava: vayx,
      cooperat:'Сотрудничаем 4 года',
      projects: '1 проект',
      task:'Более 200 задач выполнено',
    },
    {
      id: 5,
      name:'Контакт 10',
      img: red,
      ava: red,
      cooperat:'Сотрудничаем 3 года',
      projects: '1 проект',
      task:'Более 50 задач выполнено',
    },
  ])
  
  return { projectItemArray, clientsItemArray }
})
