import { ref } from 'vue'
import { defineStore } from 'pinia'
import analitika from '@/assets/img/analitika.png'
import analitica from '@/assets/img/analitica.png'
import desighn from '@/assets/img/Desighn.png'
import develop from '@/assets/img/develop.png'
import stylus from '@/assets/img/stylus.png'
import development from '@/assets/img/development.png'
import rocket from '@/assets/img/rocket.png'
import crm from '@/assets/img/crm.png'
import user from '@/assets/img/user.svg'

export const useServicesStore = defineStore('services', () => {
  const servicesArray = ref([
  {
    id: '01',
    title: 'Аналитика',
    color:"red",
    text: 'Анализируем бизнес-процессы, метрики и поведение пользователей',
    textGrey:'Изучаем запрос клиента, поведение пользователей, подбираем метрики и способы продвижения',
    tegs: [
      {
        id: 1,
        teg: 'UX-аналитика',
      },
    ],
    img: analitika,
    imgGlav: analitica,
  },
  {
    id: '02',
    title: 'Дизайн',
    color:"blue",
    text: 'Интерфейсы на основе аналитики и данных',
    textGrey:'Создаём привлекательный веб-дизайн, объединённый с уникальным пользовательским опытом',
    tegs: [
      {
        id: 1,
        teg: 'UX/UI дизайн',
      },
      {
        id: 9,
        teg: 'Дизайн-системы',
      },
      {
        id: 2,
        teg: 'Брендинг',
      },
      {
        id: 3,
        teg: 'Исследования',
      },
      {
        id: 4,
        teg: '3D-визуализация',
      },
      {
        id: 5,
        teg: 'Key Visual',
      },
      {
        id: 6,
        teg: 'Графический дизайн',
      },
      {
        id: 7,
        teg: 'Дизайн-поддержка',
      },
      {
        id: 8,
        teg: 'Брендинг',
      },
    ],
    img: stylus,
    imgGlav: desighn,
  },
  {
    id: '03',
    title: 'Разработка',
    color:"green",
    text: 'Доверьте нам разработку сайта, сервиса или приложения: от идеи до внедрения ',
    textGrey:'Используем передовые технологии для создания инновационных продуктов',
    img: development,
    imgGlav: develop,
    tegs: [
      {
        id: 1,
        teg: 'Корпоративные сайты',
      },
      {
        id: 2,
        teg: 'Онлайн-сервисы',
      },
      {
        id: 3,
        teg: 'E-commerce',
      },
      {
        id: 4,
        teg: 'Порталы',
      },
      {
        id: 5,
        teg: 'Карьерные сайты',
      },
      {
        id: 6,
        teg: 'Системы сайтов',
      },
      {
        id: 7,
        teg: 'Продуктовые каталоги',
      },
      {
        id: 8,
        teg: 'Промо-сайты',
      },
      {
        id: 9,
        teg: 'No-code',
      },
    ],
  },
  {
    id: '04',
    title: 'Продвижение',
    color:'sky',
    text: 'Приведем клиентов через платный и поисковый трафик ',
    textGrey:'Улучшаем видимость продукта в поисковых результатах для привлечения целевой аудитории',
    tegs: [
      {
        id: 1,
        teg: 'SEO на этапе разработки сайта',
      },
      {
        id: 2,
        teg: 'SEO-продвижение',
      },
      {
        id: 3,
        teg: 'SEO-поддержка',
      },
      {
        id: 4,
        teg: 'Вконтакте',
      },
      {
        id: 5,
        teg: 'Яндекс',
      },
      {
        id: 6,
        teg: 'Твиттер',
      },
    ],
    img: rocket,
    imgGlav: analitica,
  },
  {
    id: '05',
    title: 'Аутстаффинг',
    color:"pink",
    text: 'Подберём специалиста и начнём работу',
    textGrey:'Нужные люди для сложных проектов',
    tegs: [
      {
        id: 1,
        teg: 'Frontend',
      },
      {
        id: 2,
        teg: 'Backend',
      },
      {
        id: 3,
        teg: 'QA',
      },
      {
        id: 4,
        teg: 'Analyst',
      },
      {
        id: 5,
        teg: 'Devops',
      },
      {
        id: 6,
        teg: 'AI/ML Development',
      },
      {
        id: 7,
        teg: 'Mobile',
      },
    ],
    img: user,
    imgGlav: analitica,
  },
  {
    id: '06',
    title: 'CRM',
    color:'orange',
    text: 'Интерфейсы на основе аналитики и данных',
    textGrey:'Эффективно взаимодействуем с клиентами через интегрированные CRM-решения',
    tegs: [
      {
        id: 1,
        teg: 'Wordpress',
      },
      {
        id: 2,
        teg: 'OpenCart',
      },
      {
        id: 3,
        teg: 'Control Place',
      },
    ],
    img: crm,
    imgGlav: analitica,
  },
])

  return { servicesArray }
})
