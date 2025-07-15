<template>
  <ModalZakaz v-if="modalStore.modalActive" />
  <modalResume v-if="modalStore.modalResume" />
  <header class="header">
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
  </header>
  <main class="main" v-if="project.length > 0">
    <div class="container_project">
      <div class="project_all">
        <section class="project_cover">
          <img :src="project[0].img" alt="" class="project_cover-img" />
        </section>
        <div class="project">
          <projectTop :project="project[0]" />
          <projectCommand :project="project[0]" />
          <ProjectDescription :project="project[0]" />
          <div class="container_sw">
            <swiper :project="project[0]" />
            <img class="project_img" :src="project[0].imgGlav" alt="" />
          </div>
          <ProjectWorked :project="project[0]" />
          <div class="project_footer-container">
            <ProjectFooter />
          </div>
        </div>
      </div>
    </div>
  </main>
  <Foter />
</template>
<script setup>
import Foter from '@/components/Foter.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue'
import projectTop from '@/components/projectTop.vue'
import projectCommand from '@/components/projectCommand.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useProjectStore } from '../stores/project'
import ProjectDescription from '@/components/projectDescription.vue'
import modalResume from '@/components/modalResume.vue'
import ProjectWorked from '@/components/projectWorked.vue'
import ProjectFooter from '@/components/projectFooter.vue'
import ModalZakaz from '@/components/modalZakaz.vue'
import swiper from '@/components/swiper.vue'
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
const projectStore = useProjectStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
const route = useRoute()
const id = ref(route.params.id)
const project = ref([])
onMounted(() => {
  project.value = projectStore.projectItemArray.filter((item) => item.id == id.value)
})
</script>
<style scoped>
.container_project {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.project_footer-container {
  padding: 0 27px;
}
.project_all {
  padding-bottom: 36px;
  margin-top: 40px;
  border: 1px solid #0000001a;
  border-radius: 30px;
}
.project_cover {
  width: 100%;
}
.project_cover img {
  width: 100%;
  max-height: 721px;
}
.project {
  margin-top: -200px;
  padding: 15px;
  background: #fff;
  backdrop-filter: blur(100px);
  border-radius: 22px 22px 0 0;
}

.project_img {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 80px;
  border-radius: 32px;
  border: 1px solid #0000001a;
}

@media (max-width: 1440px) {
  .container_project {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
}
@media (max-width: 450px) {
  .project {
    padding: 0;
    margin-top: -40px;
  }
  .project_footer-container {
    padding: 0 12px;
  }
  .project_img {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .container_sw {
    padding: 0 12px;
  }
}
</style>
