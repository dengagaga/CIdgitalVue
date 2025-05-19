import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
    const arrayType = ref([
        {
            id:'1',
            title:'Корпоративный сайт',
            active: false,
        },
        {
            id:'2',
            title:'Лендинг',
            active: false,
        },
        {
            id:'3',
            title:'Мобильное приложение',
            active: false,
        },
        {
            id:'4',
            title:'Доработки и техподдержка',
            active: false,
        },
        {
            id:'5',
            title:'eCommerce / b2b',
            active: false,
        },
        {
            id:'6',
            title:'Аутстаф',
            active: false,
        },
        {
            id:'7',
            title:'Личный кабинет',
            active: false,
        },
        {
            id:'8',
            title:'Внедрение 1С',
            active: false,
        },
        {
            id:'9',
            title:'Другое',
            active: false,
        },
    ])
    const arrayСonnection = ref([
        {
            id:'1',
            title:'Телеграм',
            active: false,
        },
        {
            id:'2',
            title:'Whats App',
            active: false,
        
        },
        {
            id:'3',
            title:'По телефону',
            active: false,
           
        },
        {
            id:'4',
            title:'e-mail',
            active: false,
        },
     
    ])
  
  
  return {  arrayType, arrayСonnection }
})
