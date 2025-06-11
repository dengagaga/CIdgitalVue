<template>
    <header class="header">
      <div class="header_fon cliets_view-header_fon">
      </div>
      <div class="container">
        <Navigation  @toggleBurger="toggleBurger" :burgerActive="burgerActive">
          <burgerMenu v-if="burgerActive" />
        </Navigation>
      </div>
      <div class="header_mid">
          <h1 class="title_1 title_1-cliets_view"></h1>
          <div class="header_mid-oneFon" v-if="client.length > 0">
            <ClietsAllTop :project="client" />
          </div>
      </div>
    </header>
    <main class="main">
        <section class="article">
            <ul class="cliets_view-list">
              <li class="cliets_view-item" :class="item.active ? 'cliets_view-item--active' : ''" v-for="item in articleStore.article" :key="item.id">
                <button class="cliets_view-item-btn">{{ item.title }}</button>
              </li>
            </ul>
        </section>
        <section class="article_list">
          <div class="container">
            <div class="main_projects cliets_view-main_projects">
                <projectItem v-for="item in articleStore.articleItemArray" :item="item" :key="item"></projectItem>
            </div>
          </div>
        </section>
    </main>
    <Foter />
</template>
<script setup>
import Foter from '@/components/Foter.vue';
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import ClietsAllTop from '@/components/ClietsAllTop.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useArticleStore } from '@/stores/article';
import projectItem from '@/components/ProjectItem.vue';
import { useClientStore } from '@/stores/client';
const clientStore = useClientStore()
const articleStore = useArticleStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}

const route = useRoute()
const id = ref(route.params.id) 
const client = ref([])
onMounted(() => {
  client.value = clientStore.clientsItemArray.filter((item) => item.id == id.value)
})
</script>
<style>
.title_1-cliets_view {
    margin-top: 350px;
}

.cliets_view-main_projects {
  padding-bottom: 0;
  margin-bottom: 30px;
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
  border: 1px solid #F9F9F9;
  padding: 10px 14px;
  border-radius: 50px;
}
.cliets_view-item--active {
  background: #F5F5F5;
  border: 2px solid #F9F9F9;
  
}
@media (max-width: 1440px) {
    .title_1-cliets_view {
        font-size: 120px;
        margin-top: 200px;
    }
    .cliets_view-top-right-title {
    font-size: 28px;
}
.cliets_view-top img {
    width: 80px;
}
.cliets_view-top-right-texts {
  font-size: 18px;
}
.cliets_view-about-text-big {
  font-size: 18px;
  max-width: 655px;
}
.cliets_view-top {
  margin-bottom: 104px;
}
.cliets_view-about-text {
  font-size: 14px;
}
.cliets_view-header_fon {
  height: 94vh; 
}
.cliets_view-about {
  margin-bottom: 120px;
}
.cliets_view-item {
  font-size: 14px;
}
.article {
  margin-bottom: 80px;
}

}
@media (max-width: 450px) {
  .article {
      padding: 20px 16px;
  }
  .cliets_view-top-right-texts {
    font-size: 14px;
    flex-wrap: wrap;
    margin-top: 14px;
  }
  .cliets_view-top-right-title {
        font-size: 22px;
    }
        .cliets_view-top img {
        width: 68px;
    }
    .cliets_view-top {
      align-items: start;
      margin-bottom: 54px;
    }
    .cliets_view-about {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }
    .cliets_view-header_fon {
        height: 50vh;
    }
        .title_1-cliets_view {
        font-size: 120px;
        margin-top: 120px;
    }
    .cliets_view-list {
      flex-wrap: wrap;
    }
        .cliets_view-about-text-big {
        font-size: 18px;
        max-width: 345px;
    }
    .article {
        margin-bottom: 40px;
    }
}
</style>