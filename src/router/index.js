import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ServicesView from '../views/ServicesView.vue'
import ClientsView from '../views/ClientsView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import DetailsView from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(),
    scrollBehavior() {
    return window.scrollTo(0, 0)
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
    
  ],
})

export default router
