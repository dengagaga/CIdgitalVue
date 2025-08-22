import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ServicesView from '../views/ServicesView.vue'
import ClientsView from '../views/ClientsView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import DetailsView from '../views/DetailsView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import PersonalDataView from '../views/PersonalDataView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(),

  // scrollBehavior() {
  //   return window.scrollTo(0, 0)
  // },
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.noScroll) {
      return {}
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectsView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/clients/:id',
      name: 'ClientsView',
      component: ClientsView,
    },
    {
      path: '/project/:id',
      name: 'ProjectView',
      component: ProjectView,
      meta: { noScroll: true },
    },
    {
      path: '/documents',
      name: 'DocumentsView',
      component: DocumentsView,
    },
    {
      path: '/details',
      name: 'DetailsView',
      component: DetailsView,
    },
    {
      path: '/policy',
      name: 'PrivacyPolicyView',
      component: PrivacyPolicyView,
    },
    {
      path: '/personal',
      name: 'PersonalDataView',
      component: PersonalDataView,
    },
    {
      path: '/resume',
      name: 'resumeView',
      component: ResumeView,
    },
  ],
})

export default router
