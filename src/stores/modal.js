import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useBurgerStore } from './burger'
import router from '@/router';

export const useModalStore = defineStore('modal', () => {
    const burgerStore = useBurgerStore()
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
  
  const projectModal = ref(false)
    const toggleProjectModal = (id) => {
        // projectModal.value = !projectModal.value
        // console.log(projectModal.value);
        // const body = document.querySelector('body')
        // body.classList.toggle('body-active_fon') 
        router.push('/project/' + id)
    }
    const modalActive = ref(false)
    const modalZakazToggle = () => {
        modalActive.value = true
        const body = document.querySelector('body')
        body.classList.add('no-scroll')
        burgerStore.mobilBurgerActive = false
        window.scrollTo(0, 0)
    }
    const modalZakazClose = () => {
        modalActive.value = false
        const body = document.querySelector('body')
        body.classList.remove('no-scroll')
    }
  return {  arrayType, modalActive, modalZakazToggle, modalZakazClose,  arrayСonnection, projectModal, toggleProjectModal }
})
