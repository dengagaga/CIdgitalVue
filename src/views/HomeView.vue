<template>
  <modalZakaz @modalZakazToggle="modalZakazToggle" v-if="modalActive"/>
  <header class="header">
    <div class="header_fon">
    </div>
    <div class="container">
      <Navigation @modalZakazToggle="modalZakazToggle" @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu :class="burgerActive ? 'header_burger' : 'header_burger header_burger--none'" />
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
      <div class="container">
        <div class="main_projects">
          <projectItem v-for="item in projectStore.projectItemArray" :item="item" :key="item"></projectItem>
        </div>
      </div>
    </main>
</template>
<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
import Services from '@/components/Services.vue';
import projectItem from '@/components/ProjectItem.vue';
import { useProjectStore } from '@/stores/project'
import modalZakaz from '@/components/modalZakaz.vue'
const projectStore =  useProjectStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
const modalZakazToggle = () => {
  modalActive.value = !modalActive.value
  // const body = document.querySelector('body')
  // const header = document.querySelector('header')
  // body.style.height = modalActive.value ? '100vh' : 'auto'
  // header.style.height = modalActive.value ? '135vh' : 'auto'
  // header.style.overflow = modalActive.value ? 'scroll' : 'auto';
  // body.style.overflow = modalActive.value ? 'hidden' : 'auto';
}
const modalActive = ref(false)
</script>

<style>
#app {
  position: relative;
}
.header {
  position: relative;

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
.main_projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding-bottom: 100px;
}
</style>
