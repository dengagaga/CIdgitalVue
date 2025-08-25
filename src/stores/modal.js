import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useBurgerStore } from './burger'
import router from '@/router'
import { useRouter, useRoute } from 'vue-router'
// const route = useRoute()
export const useModalStore = defineStore('modal', () => {
  const burgerStore = useBurgerStore()
  const arrayType = ref([
    {
      id: '1',
      title: 'Корпоративный сайт',
      active: false,
    },
    {
      id: '2',
      title: 'Лендинг',
      active: false,
    },
    {
      id: '3',
      title: 'Мобильное приложение',
      active: false,
    },
    {
      id: '4',
      title: 'Доработки и техподдержка',
      active: false,
    },
    {
      id: '5',
      title: 'eCommerce / b2b',
      active: false,
    },
    {
      id: '6',
      title: 'Аутстаф',
      active: false,
    },
    {
      id: '7',
      title: 'Личный кабинет',
      active: false,
    },
    {
      id: '8',
      title: 'Внедрение 1С',
      active: false,
    },
    {
      id: '9',
      title: 'Другое',
      active: false,
    },
  ])
  const arrayСonnection = ref([
    {
      id: '1',
      title: 'Телеграм',
      active: false,
    },
    {
      id: '2',
      title: 'Whats App',
      active: false,
    },
    {
      id: '3',
      title: 'По телефону',
      active: false,
    },
    {
      id: '4',
      title: 'e-mail',
      active: false,
    },
  ])
  const idProject = ref(0)
  const body = document.querySelector('body')
  const toggleProjectModal = id => {
    window.history.pushState({}, '', `/project/${id}`)
    modalProject.value = true
    idProject.value = id

    body.classList.add('no-scroll')
  }
  const projectModalClose = () => {
    modalProject.value = false
    window.history.pushState({}, '', `/`)
    body.classList.remove('no-scroll')
  }
  const modalProject = ref(false)
  const modalActive = ref(false)
  const modalResume = ref(false)
  const modalResumeName = ref('')
  const modalResumeToggle = item => {
    modalResumeName.value = item
    modalResume.value = !modalResume.value
  }
  const modalZakazToggle = () => {
    modalActive.value = true
    modalProject.value = false

    body.classList.add('no-scroll')
    burgerStore.mobilBurgerActive = false
    window.scrollTo(0, 0)
  }
  const modalZakazClose = () => {
    modalActive.value = false

    body.classList.remove('no-scroll')
  }
  return {
    arrayType,
    modalActive,
    modalZakazToggle,
    modalResumeToggle,
    modalZakazClose,
    modalResume,
    arrayСonnection,
    modalProject,
    idProject,
    projectModalClose,
    toggleProjectModal,
    modalResumeName,
  }
})
