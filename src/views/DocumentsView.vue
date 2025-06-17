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
             <router-link :to="item.link" class="solutions_item" v-for="item in documents" :key="item.id">
                <h4 class="solutions_item-title">{{ item.title }}</h4>
                <button class="solutions_item-btn"><img src="@/assets/img/arrowSolution.svg" alt=""></button>
            </router-link >
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
        link:'/details'
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
    /* margin-top: 400px; */
}
.header_fon {
       height: 80vh;
       background-position: bottom;
   }
.solutions_item {
    width: 100%;
    justify-content: space-between;
}
.solutions_item-title {
    max-width: 800px;
    width: 100%;
}
@media(max-width: 1440px) {
    .title_1 {
        /* margin-top: 250px; */
    }
}
@media(max-width: 450px) {
   .header_fon {
       height: 50vh;
   }
   .title_1 {
      margin-top: 100px;
        margin-bottom: 20px;
   }  
   footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            z-index: 2;
        }
    .solutions_item-title {
    max-width: 300px;
    width: 100%;
}
  
}
@media(max-width: 380px) {
 .title_1 {
    margin-top: 70px;
   } 
}
</style>
