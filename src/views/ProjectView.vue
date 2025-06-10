<template>
  <modalZakaz v-if="modalStore.modalActive"/>
  <header class="header">
    <div class="header_fon">
    </div>
    <div class="container">
      <Navigation  @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
    <div class="header_mid">
        <h1 class="title_1"></h1>
        <div class="header_mid-oneFon header_mid-oneFon-projects">
            <div class="header_mid-threeFon"></div>
            <headerMid title="Проекты" text="Мы накопили уникальный опыт, работая с клиентами из различных сфер, и каждый из них подарил нам уникальные знания и навыки. " />
            <div class="main_projects">
              <projectItem v-for="item in projectStore.projectItemArray" :item="item" :key="item"></projectItem>
            </div>
        </div>
    </div>
  </header>
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import Foter from '@/components/Foter.vue';
import modalZakaz from '@/components/modalZakaz.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
import { useProjectStore } from '@/stores/project'
import { useModalStore } from '@/stores/modal';
import projectItem from '@/components/ProjectItem.vue';
const projectStore =  useProjectStore()
const modalStore =  useModalStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}

</script>

<style scoped>

.main_projects {
  margin-top: 80px;
}
.header_mid-oneFon-projects .main_projects {
  padding-bottom: 0;
}
.header_mid-oneFon-projects {
  padding-bottom: 0;
}
@media(max-width: 450px) {
    .header_mid-oneFon-projects .main_projects {
  padding-bottom: 0;
}
}
</style>
