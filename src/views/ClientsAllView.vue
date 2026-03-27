<template>
  <modalZakaz v-if="modalStore.modalActive" />
   <modalProject v-if="modalStore.modalProject" />
  <Transition name="cook-fade">
    <CookModal />
  </Transition>
  <header class="header">
    <div class="header_fon"></div>
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu v-if="burgerActive" />
      </Navigation>
    </div>
    <div class="header_mid">
      <h1 class="title_1"></h1>
      <div class="header_mid-oneFon header_mid-oneFon-projects">
        <div class="header_mid-threeFon"></div>
        <headerMid
          title="Клиенты"
          text="Мы любим наших клиентов, поэтому умеем слышать, погружаться в бизнес, становясь частью их команды."
        />
            <div class="clientsView_all">
                <div class="clintesView_item" v-for="value in clientStore.clientsItemArray" :key="value">
                    <div class="clintesView_item-top">
                        <img class="clintesView_item-top-img" :src="value.img" alt="">
                    </div>
                    <div class="clintesView_item-bot">
                        <p class="clintesView_item-bot-text">Поддерживаем и развиваем проект постоянного клиента</p>
                        <div class="clintesView_item-bot-all">
                            <p class="clintesView_item-bot-all-text">{{ value.cooperat }}</p>
                            <router-link class="clintesView_item-bot-all-link" :to="'/clients/' + value.id"><img src="@/assets/img/arrow.svg" alt=""></router-link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </header>
  <Foter />
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Foter from '@/components/Foter.vue'
import CookModal from '@/components/CookModal.vue'
import modalZakaz from '@/components/modalZakaz.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue'
import headerMid from '@/components/headerMid.vue'
import { useProjectStore } from '@/stores/projectStore'
import { useModalStore } from '@/stores/modal'
import { useClientStore } from '@/stores/clientStore'
import modalProject from '@/components/modalProject.vue'
const projectStore = useProjectStore()
const modalStore = useModalStore()
const clientStore = useClientStore()
const burgerActive = ref(false)
const projectItemArrayMob = ref([])
const isMobile = ref(false)
onMounted(() => {
  isMobile.value = window.innerWidth <= 450
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 450
  })
  if (isMobile.value) {
    projectItemArrayMob.value = projectStore.projectItemArray.slice(0, 5)
  }
})
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
watch(
  () => projectStore.projectItemArraySelect.length, // Следим только за длиной
  newLength => {
    if (newLength > 0) {
      isMobile.value = false
    }
  }
)
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
.watch_add {
  display: none;
}
.clientsView_all {
    margin-top: 80px;
    width: 100%;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
.clintesView_item {
    border: 1px solid #0000001A;
    overflow: hidden;
    width: 24.4%;
    border-radius: 22px;
    background-color: #F8F7FF;
}
.clintesView_item-top {
    width: 100%;
    display: flex;
    padding: 45px 74px;
    max-height: 130px;
    height: 100%;
}
.clintesView_item-top-img {
    margin: 0 auto;
    
}
.clintesView_item-bot {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px;
    border-radius: 21px 21px 0 0;
}
.clintesView_item-bot-text {
    margin-bottom: 140px;
    color: #696D73;
    
    font-size: 14px;
    max-width: 290px;
}
.clintesView_item-bot-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.clintesView_item-bot-all-text {
    color: #696D73;
    font-size: 14px;
    font-weight: 600;
}
.clintesView_item-bot-all-link {
    border-radius: 50%;
    background-color: #F4F4F4;
    display: flex;
    padding: 12px;
    width: 35px;
    height: 35px;
}
@media (max-width: 450px) {
  .header_mid-oneFon-projects .main_projects {
    padding-bottom: 0;
  }

  .watch_add {
    display: flex;
    border: 1px solid #0000001a;
    border-radius: 16px;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    margin: 0 auto;
    margin-top: 30px;
  }
}
</style>
