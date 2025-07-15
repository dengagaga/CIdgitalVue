import { ref } from 'vue'
import { defineStore } from 'pinia'
import lahti from '/src/assets/img/lahti.png'
import vayx from '/src/assets/img/vayx.png'
import ultimate from '/src/assets/img/ultimate.png'
import red from '/src/assets/img/red.png'
import lz from '/src/assets/img/lz.png'
import logoLz from '/src/assets/img/logoLz.png'

export const useClientStore = defineStore('client', () => {
  const clientsItemArray = ref([
    {
      id: 1,
      name: 'Laser Zone',
      img: lz,
      cooperat: 'Сотрудничаем 8 лет',
      projects: '2 проекта',
      task: 'Более 250 задач выполнено',
      ava: logoLz,
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️',
    },
    {
      id: 2,
      name: 'Лахти',
      img: lahti,
      ava: lahti,
      cooperat: 'Сотрудничаем 2 года',
      projects: '1 проект',
      task: 'Более 100 задач выполнено',
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️',
    },
    {
      id: 3,
      name: 'Ultimate Force',
      img: ultimate,
      ava: ultimate,
      cooperat: 'Сотрудничаем 1 год',
      projects: '1 проект',
      task: 'Более 150 задач выполнено',
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️',
    },
    {
      id: 4,
      name: 'Vayx',
      img: vayx,
      ava: vayx,
      cooperat: 'Сотрудничаем 4 года',
      projects: '1 проект',
      task: 'Более 200 задач выполнено',
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️',
    },
    {
      id: 5,
      name: 'Контакт 10',
      img: red,
      ava: red,
      cooperat: 'Сотрудничаем 3 года',
      projects: '1 проект',
      task: 'Более 50 задач выполнено',
      desc: 'Laser Zone — первая студия лазерной эпиляции в Петрозаводске, работающая с 2018 года, предлагает услуги комфорт-класса, создавая идеальные условия для достижения гладкости и уверенности в себе ☘️',
    },
  ])

  return { clientsItemArray }
})
