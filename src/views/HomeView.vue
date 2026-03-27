<template>
  <modalZakaz v-if="modalStore.modalActive" />
  <modalProject v-if="modalStore.modalProject" />
  <Transition name="cook-fade">
    <CookModal />
  </Transition>
  <Transition name="cook-fade">
    <NewModal />
  </Transition>
  <header class="header">
    <div class="header_fon"></div>
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
    <div class="header_mid">
      <h1 class="title_1">Дизайн и разработка онлайн-сервисов в России</h1>
      <div class="header_mid-oneFon">
        <div class="header_mid-threeFon"></div>
        <headerMid
          title="Разработка и дизайн Онлайн-сервисов в России."
          text="Наши услуги — это путь к созданию неповторимого и успешного образа вашего бизнеса, любимого дела или продукта"
        />
      </div>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <h3 class="title_3">Кейсы</h3>
    </div>
    <Projects :limit="6" />
    <Services />
    <Clients />
    <!-- <Brifs />
    <Connection /> -->
    <Media />
  </main>
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import CookModal from '@/components/CookModal.vue'
import NewModal from '@/components/NewModal.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue'
import headerMid from '@/components/headerMid.vue'
import Services from '@/components/Services.vue'
import Clients from '@/components/Clients.vue'
import Media from '@/components/Media.vue'
import modalProject from '@/components/modalProject.vue'
import Projects from '@/components/Projects.vue'
import modalZakaz from '@/components/modalZakaz.vue'
import Foter from '@/components/Foter.vue'
import { useModalStore } from '../stores/modal'
const burgerActive = ref(false)
const modalStore = useModalStore()
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
</script>

<style>
#app {
  position: relative;
}
.header {
  position: relative;
}

.no-scroll {
  overflow: hidden;
}
.title_1 {
  font-size: 60px;
  font-weight: 400;
  margin-bottom: 140px;
  margin-top: 250px;
  text-transform: uppercase;
  color: #454749;
  position: relative;
  z-index: 1;
  max-width: 900px;
}
.header_fon {
  position: absolute;
  padding-top: 28px;
  background: url('@/assets/img/Background.png');
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 1440px) {
  .title_1 {
    font-size: 52px;
    max-width: 800px;
  }
}
@media (max-width: 450px) {
  .header_fon {
    height: 80vh;
    background-position: left;
  }
}
</style>
