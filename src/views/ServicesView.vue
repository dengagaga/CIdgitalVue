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
        <div class="header_mid-oneFon">
           <Services class="services_view"></Services>
        </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import modalZakaz from '@/components/modalZakaz.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
import Services from '@/components/Services.vue';
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
.services_view {
    margin-top: 0;
}
@media(max-width: 450px) {
    
}
</style>
