<template>
  <modalZakaz  v-if="modalStore.modalActive"/>
  <header class="header">
    <projectModal v-if="modalStore.projectModal" />
    <div class="header_fon">
    </div>
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
    <div class="header_mid">
      <h1 class="title_1">Цифровые сидхи</h1>
      <div class="header_mid-oneFon">
        <div class="header_mid-threeFon"></div>
        <headerMid title="Разработка и дизайн Онлайн-сервисов в России." text="Наши услуги — это ключи к созданию неповторимого и успешного образа вашего бизнеса" />
        <Services />
      </div>
    </div>
  </header>
  <main class="main">
    <Projects :limit="6"  />
    <Clients />
    <Brifs />
    <Connection />
  </main>
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
import Services from '@/components/Services.vue';
import Clients from '@/components/Clients.vue';
import Brifs from '@/components/Brifs.vue';
import projectModal from '@/components/projectModal.vue';
import Projects from '@/components/Projects.vue';
import Connection from '@/components/Connection.vue';
import modalZakaz from '@/components/modalZakaz.vue'
import Foter from '@/components/Foter.vue';
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
.header_fon {
  position: absolute;
  padding-top: 28px;
  background:url("@/assets/headerFonThree.png");
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
