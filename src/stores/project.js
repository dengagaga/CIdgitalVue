import { ref } from 'vue'
import { defineStore } from 'pinia'
import lahti from '/src/assets/img/lahti.png'
import vayx from '/src/assets/img/vayx.png'
import ultimate from '/src/assets/img/ultimate.png'
import red from '/src/assets/img/red.png'
import lz from '/src/assets/img/lz.png'
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
    },
    {
      id: 2,
      name:'Laser Zone',
      img: lahti,
    },
    {
      id: 3,
      name:'Laser Zone',
      img: ultimate,
    },
    {
      id: 4,
      name:'Laser Zone',
      img: vayx,
    },
    {
      id: 5,
      name:'Laser Zone',
      img: red,
    },
  ])
  
  return { projectItemArray, clientsItemArray }
})
