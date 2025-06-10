<template>
    <header class="header">
      <div class="header_fon">
      </div>
      <div class="container">
        <Navigation  @toggleBurger="toggleBurger" :burgerActive="burgerActive">
          <burgerMenu v-if="burgerActive" />
        </Navigation>
      </div>
      <div class="header_mid">
          <h1 class="title_1 title_1-cliets_view"></h1>
          <div class="header_mid-oneFon" v-if="project.length > 0">
              <div class="cliets_view-top">
                  <img :src="project[0].ava" alt="">
                  <div class="cliets_view-top-right">
                    <h4 class="cliets_view-top-right-title">{{ project[0].name }}</h4>
                    <div class="cliets_view-top-right-texts">
                        <p>{{ project[0].cooperat }}</p>
                        <p>{{ project[0].projects }}</p>
                        <p>{{ project[0].task }}</p>
                    </div>
                  </div>
              </div>
              <div class="cliets_view-about">
                  <p class="cliets_view-about-text">О клиенте</p>
                  <p class="cliets_view-about-text-big">{{ project[0].desc }}</p>
              </div>
          </div>
      </div>
    </header>
    <main class="main">
        <div class="article">
            <ul class="cliets_view-list">
              <li class="cliets_view-item" :class="item.active ? 'cliets_view-item--active' : ''" v-for="item in articleStore.article" :key="item.id">
                <button class="cliets_view-item-btn">{{ item.title }}</button>
              </li>
            </ul>
        </div>
    </main>
    <Foter />
</template>
<script setup>
import Foter from '@/components/Foter.vue';
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import { useRoute } from 'vue-router'
import { useProjectStore } from '@/stores/project'
import { onMounted, ref } from 'vue'
import { useArticleStore } from '@/stores/article';
const articleStore = useArticleStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}

const route = useRoute()
const id = ref(route.params.id) 
const projectStore =  useProjectStore()
const project = ref([])
onMounted(() => {
  project.value = projectStore.clientsItemArray.filter((item) => item.id == id.value)
})
</script>
<style>
.title_1-cliets_view {
    margin-top: 350px;
}
.cliets_view-top {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 120px;
}
.cliets_view-top-right-title {
  font-size: 44px;
  font-weight: 600;
}
.cliets_view-top-right-texts {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 24px;
  color: #696D73;
}

.cliets_view-about {
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
}
.cliets_view-about-text {
  font-size: 18px;
  font-weight: 600;
}
.cliets_view-about-text-big {
   font-size: 24px;
  font-weight: 600;
  max-width: 861px;
}


.article {
  padding: 40px 80px;
  border: 1px solid #F3F3F3;
  margin-bottom: 130px;


}
.cliets_view-list {
  display: flex;
  gap: 8px;
  align-items: center;
}
.cliets_view-item {
  font-size: 18px;
  padding: 10px 14px;
}
.cliets_view-item--active {
  background: #F5F5F5;
  border: 2px solid #F9F9F9;
  border-radius: 50px;
}
.cliets_view-item-btn {
}
</style>