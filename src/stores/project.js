import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', () => {
  const projectItemArraySelect = ref([])
  const selectedProject = ref([])
  const projectItemArray = ref([
    {
      id: 1,
      name:'Сайт российского игрового издательства Reegames',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Лендинг', 'Кейс | Сайт' , 'Gamedev']
    },
    {
      id: 2,
      name:'Медвежьегорс Втормет - сервис по приёму металла с админ панелью ',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Лендинг', 'Кейс | Сайт' , 'Металлургия']
    },
    {
      id: 3,
      name:'Сайт и айдентика по строительству домов из карельской сосны кело “Кархум Кело”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Лендинг', 'Кейс | Сайт' , 'Строительство и ремонт']
    },
    {
      id: 4,
      name:'Сайт для Карельского перевозчика “Карел экспресс”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Система сайтов', 'Кейс | Сайт' , 'Транспорт и логистика']
    },
    {
      id: 5,
      name:'Разработка сайта для узнаваемости игры “Beat the Humans”',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Лендинг', 'Кейс | Сайт' , 'Gamedev']
    },
    {
      id: 6,
      name:'АЗС КиТЭК — современный сайт для автозаправочной станции',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Система сайтов', 'Кейс | Сайт' , 'Промышленность']
    },
    {
      id: 7,
      name:'Финант — аналитический сервис по финансам и экономическим новостям',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Лендинг', 'Кейс | Сайт' , 'Финансы']
    },
    {
      id: 8,
      name:'Олклин — интернет-магазин стеклоомывающей жидкости от производителя',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Control Place', 'Кейс | Сайт' , 'Промышленность']
    },
    {
      id: 9,
      name:'Разработка и редизайн сайта Laser Zone',
      img: '/src/assets/img/keus.png',
      video:'',
      tags: ['Корпоративные сайты', 'Кейс | Сайт' , 'Бьюти сфера']
    },
  ])
  const selectProject = ref([
    {
        id:1,
        title:'Услуги',
        active: false,
        select:[
            {
                id:1,
                title: 'UX-аналитика',
                active:false
            },
            {
                id:2,
                title: 'Веб-аналитика',
                active:false
            },
            {
                id:3,
                title: 'Исследования',
                active:false
            },
            {
                id:4,
                title: 'UX/UI дизайн',
                active:false
            },
            {
                id:5,
                title: 'Лендинг',
                active:false
            }, {
                id:6,
                title: '3D-визуализация',
                active:false
            },
            {
                id:7,
                title: 'Графический дизайн',
                active:false
            },
            {
                id:8,
                title: 'Дизайн-поддержка',
                active:false
            },
            {
                id:9,
                title: 'Брендинг',
                active:false
            },
            {
                id:10,
                title: 'Корпоративные сайты',
                active:false
            },
            {
                id:11,
                title: 'Онлайн-сервисы',
                active:false
            },
            {
                id:12,
                title: 'Система сайтов',
                active:false
            },
            {
                id:13,
                title: 'SEO-поддержка',
                active:false
            },
            {
                id:14,
                title: 'Crm',
                active:false
            },
            {
                id:15,
                title: 'SEO на этапе разработки сайта',
                active:false
            },
            {
                id:16,
                title: 'Вконтакте',
                active:false
            },
            {
                id:17,
                title: 'Яндекс',
                active:false
            },
            {
                id:18,
                title: 'Wordpress',
                active:false
            },
            {
                id:19,
                title: 'OpenCart',
                active:false
            },
            {
                id:20,
                title: 'Control Place',
                active:false
            },
        ]
    },
    {
        id:2,
        title:'Типы сайтов',
        active: false,
        select:[
            {
                id:21,
                title: 'e-commerce',
                active:false
            },
            {
                id:22,
                title: 'Корпоративный сайт',
                active:false
            },
            {
                id:23,
                title: 'Каталог и витрина',
                active:false
            },
            {
                id:24,
                title: 'Портал',
                active:false
            },
            {
                id:25,
                title: 'Продуктовый сайт',
                active:false
            },
            {
                id:26,
                title: 'Промо-сайт',
                active:false
            },
            {
                id:27,
                title: 'Система сайтов',
                active:false
            },
            {
                id:28,
                title: 'Сервис',
                active:false
            },
            {
                id:29,
                title: 'Crm',
                active:false
            },
            {
                id:30,
                title: 'Корпоративный портал',
                active:false
            },
            {
                id:31,
                title: 'Карьерные сайты',
                active:false
            },
            {
                id:32,
                title: 'Интернет-магазин',
                active:false
            },
        ]
    },
     {
        id:3,
        title:'Отрасли',
        active: false,
        select:[
            {
                id:34,
                title: 'Gamedev',
                active:false
            },
            {
                id:35,
                title: 'Строительство и ремонт',
                active:false
            },
            {
                id:36,
                title: 'Транспорт и логистика',
                active:false
            },
            {
                id:37,
                title: 'Промышленность',
                active:false
            },
            {
                id:38,
                title: 'Металлургия',
                active:false
            },
            {
                id:39,
                title: 'Финансы',
                active:false
            },
            {
                id:40,
                title: 'Авиа',
                active:false
            },
            {
                id:41,
                title: 'Аренда',
                active:false
            },
            {
                id:42,
                title: 'Интернет-магазин',
                active:false
            },
            {
                id:43,
                title: 'Ювелирные изделия',
                active:false
            },
            {
                id:44,
                title: 'Психология',
                active:false
            },
            {
                id:45,
                title: 'Бьюти сфера',
                active:false
            },
        ]
    },
  
  
])
  
  
  return { projectItemArray, selectedProject,  selectProject, projectItemArraySelect }
})
