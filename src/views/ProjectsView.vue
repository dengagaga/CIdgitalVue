<template>
  <modalZakaz v-if="modalStore.modalActive" />
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
          title="Проекты"
          text="Мы накопили уникальный опыт, работая с клиентами из различных сфер, и каждый из них подарил нам уникальные знания и навыки. "
        />
        <div class="main_projects">
          <projectItem
            v-for="item in isMobile ? projectItemArrayMob : displayedProjects"
            :item="item"
            :key="item"
          ></projectItem>
          <button
            v-if="!showHideButton && isMobile"
            class="watch_add"
            @click="loadMore"
          >
            Показать ещё
          </button>
        </div>
        <button v-if="showHideButton" class="watch_add" @click="hideProjects">
          Скрыть
        </button>
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
import { useProjectStore } from '@/stores/project'
import { useModalStore } from '@/stores/modal'
import projectItem from '@/components/ProjectItem.vue'
const projectStore = useProjectStore()
const modalStore = useModalStore()
const burgerActive = ref(false)
const projectItemArrayMob = ref([])
const showHideButton = ref(false)
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
const hideProjects = () => {
  isMobile.value = true
  showHideButton.value = false
}
const loadMore = () => {
  isMobile.value = false
  showHideButton.value = true
}
const displayedProjects = computed(() => {
  return projectStore.projectItemArraySelect.length > 0
    ? projectStore.projectItemArraySelect
    : projectStore.projectItemArray
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
