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
            <h2 class="title_2">Реквизиты</h2>
             <div class="details_item" v-for="item in details" :key="item.id">
                <h4 class="details_item-title">{{ item.title }}</h4>
                <p class="details_item-text">{{ item.text }}</p>
                <p class="text-none"></p>
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
const details = ref([
    {
        id:1,
        title:'Полное наименование',
        text:'Индивидуальный предприниматель ГОРИН ДЕНИС НИКОЛАЕВИЧ'
    },
    {
        id:2,
        title:'Краткое наименование',
        text:'ИП Горин Д. Н.'
    },
    {
        id:3,
        title:'Адрес',
        text:'г. Петрозаводск'
    },
    {
        id:4,
        title:'ИНН',
        text:'101303612769'
    },
    {
        id:5,
        title:'ОГРНИП',
        text:'324100000020367'
    },
    {
        id:6,
        title:'Телефон',
        text:'8 (981) 997-50-00'
    },
    {
        id:7,
        title:'E-mail',
        text:'cidgital@yandex.ru'
    },
    {
        id:8,
        title:'Сайт',
        text:'cidgital.ru'
    },
])
</script>

<style scoped>
.title_2 {
    margin-bottom: 50px;
}
.details_item {
  padding: 23px 0;
  border-top: 1px solid #0000001A;
  border-bottom: 1px solid #0000001A;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.details_item-title {
  max-width: 200px;
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  color: #696D73;
}
.details_item-text {
  max-width: 500px;
  width: 100%;
  font-size: 28px;
  font-weight: 500;
  color: #080808 ;
  text-align: left;
}
@media(max-width: 1440px) {
    .details_item-title {
      max-width: 200px;
      font-size: 22px;
}
.details_item-text {
      max-width: 400px;
      width: 100%;
      font-size: 22px;
}
}
@media(max-width: 450px) {
   .header_fon {
       height: 50vh;
   }
   .text-none {
    display: none;
   }
   .title_2 {
    margin-bottom: 40px;
}
   .title_1 {
    margin-top: 100px;
        margin-bottom: 20px;
   }  
    .details_item {
      flex-direction: column;
      align-items: start;
      gap: 24px;
    }
    .details_item-title {
      max-width: 300px;
      font-size: 18px;
}
    .details_item-text {
      max-width: 400px;
      width: 100%;
      font-size: 18px;
}
  
}

</style>
