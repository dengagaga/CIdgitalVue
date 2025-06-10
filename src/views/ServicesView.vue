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
  <main class="main">
    <Industries />
    <Solutions />
  </main>
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import Solutions from '@/components/Solutions.vue';
import Foter from '@/components/Foter.vue';
import modalZakaz from '@/components/modalZakaz.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import Services from '@/components/Services.vue';
import Industries from '@/components/Industries.vue';
import { useModalStore } from '@/stores/modal';
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
