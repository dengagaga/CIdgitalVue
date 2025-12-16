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
      <div class="header_mid-oneFon">
        <div class="resume_top">
          <img class="resume_top-img" src="@/assets/img/person.jpg" alt="" />
          <div class="resume_top-right">
            <h2 class="resume_top-right-title">Денис Нефёдов</h2>
            <p class="resume_top-right-text">Senior разработчик на Vue</p>
          </div>
        </div>
        <div class="resume_stack">
          <h2 class="resume_stack-title">Основной стек:</h2>
          <div class="resume_stack-right">
            <div
              class="resume_stack-right-item"
              v-for="item in stack"
              :key="item"
            >
              <img :src="item.img" alt="" />
              <p>{{ item.title }}</p>
              <div class="resume_stack-right-item_all">
                <h4 class="resume_stack-right-item_all-title">
                  {{ item.title }}
                </h4>
                <p class="resume_stack-right-item_all-text">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div class="resume_stack-2">
          <h2 class="resume_stack-title">Коммерческая разработка:</h2>
          <div class="resume_stack-right-2">
            <div class="resume_stack-right-item-2">4 года</div>
          </div>
          <div></div>
        </div>
        <div class="resume_skils">
          <h2 class="resume_skils-title">Навыки</h2>
          <ul class="resume_skils-list">
            <li class="resume_skils-list-item" v-for="item in list" :key="item">
              {{ item.title }}
            </li>
          </ul>
        </div>
        <div class="resume_experience">
          <h2 class="resume_skils-title">Опыт работы</h2>
          <ul class="resume_experience-list">
            <li
              class="resume_experience-list-item"
              v-for="item in experience"
              :key="item"
            >
              <div class="resume_experience-list-item-left">
                <p class="resume_experience-list-item-title">{{ item.date }}</p>
                <p class="resume_experience-list-item-place">{{ item.city }}</p>
              </div>
              <div class="resume_experience-list-item-right">
                <h3 class="resume_experience-list-item-title">
                  {{ item.title }}
                </h3>
                <p class="resume_experience-list-item-text">{{ item.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="resume_experience">
          <h2 class="resume_skils-title">Образование</h2>
          <ul class="resume_experience-list">
            <li
              class="resume_experience-list-item"
              v-for="item in experienceTwo"
              :key="item"
            >
              <div class="resume_experience-list-item-left">
                <p class="resume_experience-list-item-title">{{ item.date }}</p>
                <p class="resume_experience-list-item-place">{{ item.city }}</p>
              </div>
              <div class="resume_experience-list-item-right">
                <h3 class="resume_experience-list-item-title">
                  {{ item.title }}
                </h3>
                <p class="resume_experience-list-item-text">{{ item.text }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <section class="article">
      <ul class="cliets_view-list">
        <li
          class="cliets_view-item"
          :class="item.active ? 'cliets_view-item--active' : ''"
          v-for="item in articleStore.article"
          :key="item.id"
        >
          <button class="cliets_view-item-btn">{{ item.title }}</button>
        </li>
      </ul>
    </section>
    <section class="article_list">
      <div class="container">
        <div class="main_projects cliets_view-main_projects">
          <projectItem
            v-for="item in articleStore.articleItemArray"
            :item="item"
            :key="item"
          ></projectItem>
        </div>
      </div>
    </section>
  </main>
  <Foter />
</template>
<script setup>
import { ref } from 'vue'
import CookModal from '@/components/CookModal.vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue'
import modalZakaz from '@/components/modalZakaz.vue'
import Foter from '@/components/Foter.vue'
import { useModalStore } from '../stores/modal'
import js from '@/assets/img/js.png'
import projectItem from '@/components/ProjectItem.vue'
import vue from '@/assets/img/vue.png'
import html from '@/assets/img/html.png'
import css from '@/assets/img/css.png'
import { useArticleStore } from '@/stores/article'
const articleStore = useArticleStore()
const burgerActive = ref(false)
const modalStore = useModalStore()
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
const stack = ref([
  {
    id: 1,
    img: html,
    title: 'HTML',
    desc: 'Cтандартный язык разметки, используемый для создания веб-страниц',
  },
  {
    id: 2,
    img: js,
    title: 'JavaScript',
    desc: 'Язык программирования, который в основном используется для создания интерактивных веб-страниц',
  },
  {
    id: 3,
    img: vue,
    title: 'Vue.js',
    desc: 'JavaScript-фреймворк для создания пользовательских интерфейсов и одностраничных веб-приложений.',
  },
  {
    id: 5,
    img: css,
    title: 'CSS',
    desc: 'Язык, используемый для описания внешнего вида (стиля) веб-страниц, написанных на HTML, XHTML или XML',
  },
])
const list = ref([
  {
    id: 1,
    title: 'Владею навыками адаптивной вёрстки на HTML и CSS',
  },
  {
    id: 2,
    title: 'Работаю в графическом редакторе Figma',
  },
  {
    id: 3,
    title: 'Использую препроцессор Sass',
  },
  {
    id: 4,
    title: 'Работаю в системе контроля версий Git',
  },
  {
    id: 5,
    title: 'Владею инструментами оптимизации изображений и кода',
  },
  {
    id: 6,
    title: 'Программирую на JavaScript, использую REST API',
  },
  {
    id: 7,
    title: 'Владею Vue.js / Nuxt 3',
  },
  {
    id: 8,
    title: 'Придерживаюсь компонентного подхода',
  },
  {
    id: 9,
    title: 'Коммуникабельный, понимаю свою роль в команде разработки',
  },
])
const experience = ref([
  {
    id: 1,
    title: 'Coffee Way',
    date: '12.2023 - по настоящее время',
    city: 'Липецк',
    text: ' Разработка и доработка большой CRM системы (более 80 страниц с огромным функционалом). Переписал систему с Options API на Composition API, уменьшив объем кода на 25%. Сделал полный редизайн системы.  Разработал кассу для барист - высоконагруженное приложение (Vue 3 + Pinia), обрабатывающее 1000+ транзакций ежедневно. Огромное количество логики (подсчеты, меню, программа лояльности, оплата и тд.). Разрабатывал и обновлял UI Kit компании (Более 100 кастомных компонентов). Интерфейс и логика для Кассы самообслуживания и интеграция ее в работу компании. (Nuxt)',
  },
  {
    id: 2,
    title: 'Elastomeric Systems',
    date: '02.2021 - 12.2023',
    city: 'Липецк',
    text: 'Реорганизовал существующие store: замена Vuex сторов на Pinia, изоляция и разделение бизнес логики в composables. Также оптимизировал продукт с помощью lazy-load, CDN, code splitting. В результате чего уменьшился размер бандла, а также в разы улучшились метрики Lighthouse, Core Web Vitals. Участвовал в code review, внедрил ESLint + Prettier для единого стиля кода.',
  },
])
const experienceTwo = ref([
  {
    id: 1,
    title: 'ВИВТ',
    date: '06.2025 - по настоящее время',
    city: 'Липецк',
    text:'ВИВТ - Воронежский институт высоких технологий'
  },
])
</script>

<style scoped>
.header_fon {
  height: 80vh;
  background-position: bottom;
}
.resume_top {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 100px;
}
.resume_top-img {
  border-radius: 22px;
  width: 85px;
  object-fit: cover;
  height: 85px;
}
.resume_top-right-title {
  font-size: 32px;
  font-weight: 600;
}
.resume_top-right-text {
  color: #696d73;
  font-size: 22px;
}
.resume_stack-title {
  font-size: 24px;
  font-weight: 500;
  color: #696d73;
  max-width: 320px;
  width: 100%;
}
.resume_stack {
  padding-top: 21px;
  padding-bottom: 21px;
  border-top: 1px solid #0000001a;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.resume_stack-right {
  display: flex;
  gap: 10px;
  max-width: 560px;
  width: 100%;
}
.resume_stack-right-item {
  padding: 6px;
  padding-right: 17px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 18px;

  position: relative;
  font-weight: 500;
  background-color: #f5f5f5;
  color: #080808;
  border-radius: 10px;
}

.resume_stack-right-item_all {
  position: absolute;
  font-size: 13px;
  color: white;
  font-weight: 500;
  background-color: #292929;
  padding: 24px;
  border-radius: 10px;
  top: -150px;
  min-width: 300px;
  left: -90px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  gap: 12px;
  transition: all 0.4s;
}
/* .resume_stack-right-item:hover .resume_stack-right-item_all {
    opacity: 1;
} */

.resume_stack-right-item_all-title {
  font-weight: 700;
  font-size: 16px;
}
.resume_stack-right-item_all::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #292929 transparent transparent transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.resume_stack-right-item img {
  width: 31px;
  height: 31px;
  border-radius: 6px;
  cursor: pointer;
}
.resume_stack-right-item img:hover ~ .resume_stack-right-item_all {
  opacity: 1;
}
.resume_stack-right-item p:hover ~ .resume_stack-right-item_all {
  opacity: 1;
}
.resume_stack-right-item p {
  opacity: 1;
  cursor: pointer;
}
.resume_stack-2 {
  margin-bottom: 50px;
  padding-top: 21px;
  padding-bottom: 21px;
  border-top: 1px solid #0000001a;
  border-bottom: 1px solid #0000001a;
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.resume_stack-right-2 {
  max-width: 560px;
  width: 100%;
}
.resume_stack-right-item-2 {
  font-size: 24px;
  font-weight: 500;
  color: #080808;
}
.resume_skils {
}
.resume_skils-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 50px;
}
.resume_skils-list {
  margin-bottom: 80px;
}
.resume_skils-list-item {
  color: #080808;
  font-size: 24px;
  margin-bottom: 18px;
  list-style: disc;
  margin-left: 30px;
}
.resume_experience {
  margin-bottom: 80px;
}
.resume_experience-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.resume_experience-list-item {
  display: flex;
  gap: 100px;
}
.resume_experience-list-item-left {
  min-width: 350px;
}

.resume_experience-list-item-place {
  font-size: 20px;
  color: #696d73;
}
.resume_experience-list-item-right {
  max-width: 1200px;
}
.resume_experience-list-item-title {
  font-size: 24px;
  font-weight: 600;
  color: #212121;
  margin-bottom: 16px;
}
.resume_experience-list-item-text {
  font-size: 18px;
  color: #696d73;
}
@media (max-width: 1440px) {
  .resume_top-right-title {
    font-size: 28px;
  }
  .resume_top-right-text {
    font-size: 18px;
  }
  .resume_top-img {
    width: 80px;
    height: 80px;
  }
  .resume_stack-title {
    font-size: 22px;
  }
  .resume_stack-right-item-2 {
    font-size: 22px;
  }
  .resume_stack-right-item {
    font-size: 16px;
  }
  .resume_skils-title {
    font-size: 28px;
  }
  .resume_skils-list-item {
    font-size: 22px;
  }
  .resume_skils-title {
    font-size: 28px;
  }
  .resume_experience-list-item-title {
    font-size: 22px;
  }
  .resume_experience-list-item-place {
    font-size: 18px;
  }
  .resume_experience-list-item-text {
    font-size: 16px;
  }
  .resume_experience-list-item-right {
    max-width: 760px;
  }
  
}
@media (max-width: 450px) {
  .header_fon {
    height: 50vh;
  }
  .resume_stack-right-item_all {
    display: none;
  }
  .title_1 {
    margin-top: 100px;
    margin-bottom: 20px;
  }

  .solutions_item-title {
    max-width: 300px;
    width: 100%;
  }
  .resume_stack {
    flex-direction: column;
    gap: 24px;
    padding-bottom: 0;
  }
  .resume_stack-right {
    flex-wrap: wrap;
  }
  .resume_skils-title {
    font-size: 24px;
  }
  .resume_skils-list-item {
    font-size: 18px;
    margin-left: 20px;
  }
  .resume_stack-title {
    font-size: 18px;
  }
  .resume_stack-2 {
    flex-direction: column;
    gap: 24px;
    padding-bottom: 0;
  }
  .resume_top-right-title {
    font-size: 22px;
  }
  .resume_top-right-text {
    font-size: 14px;
  }
  .resume_top-img {
    width: 68px;
    height: 68px;
  }
  .resume_top {
    margin-bottom: 70px;
  }
  .resume_experience-list-item {
    gap: 30px;
    flex-direction: column;
  }
  .resume_experience-list-item-place {
    font-size: 15px;
  }
}
@media (max-width: 380px) {
  .title_1 {
    margin-top: 70px;
  }
}
</style>
