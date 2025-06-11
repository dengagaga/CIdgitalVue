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
              <projectItem v-for="item in displayedProjects" :item="item" :key="item"></projectItem>
              <button  v-if="!showHideButton"
              class="watch_add" 
              @click="loadMore">Показать ещё</button>
            </div>
              <button v-if="showHideButton"  
              class="watch_add" 
              @click="hideProjects">Скрыть</button>
            
        </div>
    </div>
  </header>
  <Foter />
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, computed  } from 'vue'
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
const isMobile = ref(false);
const visibleCount = ref(0);
const showHideButton = computed(() => {
  return isMobile.value && visibleCount.value > 6;
});
const hideProjects = () => {
  visibleCount.value = 6;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 450; // 768px - обычная точка перелома для мобильных устройств
  visibleCount.value = isMobile.value ? 6 : projectStore.projectItemArray.length;
};
const loadMore = () => {
  const remaining = projectStore.projectItemArray.length - visibleCount.value;
  visibleCount.value += Math.min(4, remaining); // Показываем ещё 4 или сколько осталось
};
const displayedProjects = computed(() => {
  return projectStore.projectItemArraySelect.length > 0 ? projectStore.projectItemArraySelect : projectStore.projectItemArray.slice(0, visibleCount.value);
});
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
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
@media(max-width: 450px) {
    .header_mid-oneFon-projects .main_projects {
  padding-bottom: 0;
}
.watch_add {
  display: flex;
  border: 1px solid #0000001A;
  border-radius: 16px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 30px;
}
}
</style>
