<template>
  <modalZakaz  v-if="modalStore.modalActive"/>
  <header class="header">
    <div class="header_fon">
    </div>
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
    <div class="header_mid">
      <h1 class="title_1"></h1>
      <div class="header_mid-oneFon">
            <h2 class="title_2">Документы</h2>
             <div class="solutions_item" v-for="item in documents" :key="item.id">
                <h4 class="solutions_item-title">{{ item.title }}</h4>
                <button class="solutions_item-btn"><img src="@/assets/img/arrowSolution.svg" alt=""></button>
            </div>
      </div>
    </div>
  </header>
 
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import modalZakaz from '@/components/modalZakaz.vue'
import Foter from '@/components/Foter.vue';
import { useModalStore } from '../stores/modal'
const burgerActive = ref(false)
const modalStore = useModalStore()
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
const documents = ref([
    {
        id:1,
        title:'Реквизиты',
        link:'/'
    },
    {
        id:2,
        title:'Согласие на обработку персональных данных',
        link:'/'
    },
    {
        id:3,
        title:'Политика конфиденциальности',
        link:'/'
    },
])
</script>

<style scoped>
.title_1 {
    margin-top: 400px;
}
.solutions_item {
    width: 100%;
    justify-content: space-between;
}
.solutions_item-title {
    max-width: 800px;
    width: 100%;
}
</style>
