<template>
  <modalZakaz @modalZakazToggle="modalZakazToggle" v-if="modalActive"/>
  <header class="header">
    <div class="header_fon">
    </div>
    <div class="container">
      <Navigation @modalZakazToggle="modalZakazToggle" @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu :class="burgerActive ? 'header_burger' : 'header_burger header_burger--none'" />
      </Navigation>
    </div>
    <div class="header_mid">
        <h1 class="title_1">Цифровые сидхи</h1>
        <div class="header_mid-oneFon">
            <div class="header_mid-threeFon"></div>
            <headerMid title="Разработка и дизайн Онлайн-сервисов в России." text="Наши услуги — это ключи к созданию неповторимого и успешного образа вашего бизнеса" />
            <Services />
        </div>
    </div>
  </header>
  <main class="main">
    <section class="projects">
        <div class="container">
          <div class="main_projects">
            <projectItem v-for="item in projectStore.projectItemArray" :item="item" :key="item"></projectItem>
          </div>
        </div>
    </section>
    <section class="clients">
        <div class="container">
          <div class="clients_all">
              <div class="clients_top">
                <div class="clients_top-left">
                   <div class="circle-text">
                      <svg id="rotatingText" viewBox="0 0 200 200" width="354" height="354">
                        <defs>
                          <path id="circle" d="M 100, 100
                                  m -75, 0
                                  a 75, 75 0 1, 0 150, 0
                                  a 75, 75 0 1, 0 -150, 0
                                  ">
                          </path>
                        </defs>
                        <text width="400">
                          <textPath alignment-baseline="top" xlink:href="#circle">
                            Агентство полного цикла - cidgital -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  <img class="clients_top-left-logo" src="@/assets/img/logo.svg" alt="">
                </div>
               
                <div class="clients_top-right">
                   <h2>“В основе каждой нашей работы лежит стремление создать что‑то большее, чем просто типовой сайт. Это и объединяет нас. <br>
                    Мы хотим создавать и видеть проект, который сможет принести максимальную пользу своему заказчику”</h2>
                    <hr class="hr">
                    <a href="#" class="clients_top-right-link">
                        <div class="clients_top-right-link-left">
                            <img src="@/assets/img/person.png" alt="">
                            <div class="clients_top-right-link-left-texts">
                                <p class="clients_top-right-link-left-text1">Денис Горин </p>
                                <p class="clients_top-right-link-left-text2">Ответственный за ваш проект</p>
                            </div>
                        </div>
                        <div class="clients_top-right-link-right">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L11 1M11 1V10.82M11 1H1.15275" stroke="black" stroke-opacity="0.301961" stroke-width="1.6"/>
                            </svg>
                        </div>
                    </a>
                </div>
              </div>
              <div class="clients_bot">
                  <h2>Наши клиенты</h2>
                  <div class="clients_bot-list">
                      <clientsItem v-for="item in projectStore.clientsItemArray" :item="item" :key="item"></clientsItem>
                  </div>
              </div>
          </div>
        </div>
    </section>
     <section class="brifs">
        <div class="container">
          <div class="brifs_all">
            <div class="brifs_all-left">
              <h2 class="title_2">
                Узнайте сроки разработки сайта, его стоимость и получите прототип первых блоков в подарок!
              </h2>
              <p>Расскажите о своей задаче прямо сейчас. Позвоним вам в течение 15 минут и обязательно поможем вам с решением.</p>
            </div>
            <div class="brifs_all-right">
              <button>Заполнить бриф</button>
            </div>
             
          </div>
        </div>
     </section>
    </main>
</template>
<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/BurgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
import Services from '@/components/Services.vue';
import projectItem from '@/components/ProjectItem.vue';
import { useProjectStore } from '@/stores/project'
import clientsItem from '@/components/ClientsItem.vue';
import modalZakaz from '@/components/modalZakaz.vue'
const projectStore =  useProjectStore()
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
const modalZakazToggle = () => {
  modalActive.value = !modalActive.value
  // const body = document.querySelector('body')
  // const header = document.querySelector('header')
  // body.style.height = modalActive.value ? '100vh' : 'auto'
  // header.style.height = modalActive.value ? '135vh' : 'auto'
  // header.style.overflow = modalActive.value ? 'scroll' : 'auto';
  // body.style.overflow = modalActive.value ? 'hidden' : 'auto';
}
const modalActive = ref(false)
</script>

<style>
#app {
  position: relative;
}
.header {
  position: relative;

}
.header_fon {
  position: absolute;
  padding-top: 28px;
  background:url("@/assets/headerFonThree.png");
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.main_projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding-bottom: 100px;
}
.clients_all {
  padding: 94px 60px;
  background: url("@/assets/img/clients.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 22px;
  gap: 77px;
  margin-bottom: 12px;
}
.clients_top {
  display: flex;
  position: relative;
  justify-content: space-between;
}
.clients_bot h2{
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 70px;
}
.clients_top-left {
  position: relative;
}
.clients_top-right {
  max-width: 742px;
}
.clients_top-right h2{
  font-size: 28px;
  font-weight: 500;
}
.clients_top-right-link {
  border: 1px solid #FFFFFF33;
  background: #FFFFFF33;
  backdrop-filter: blur(4px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
}
.clients_top-right-link-left {
  display: flex;
  gap: 19px;
  align-items: center;
}
.hr {
  background-color: #0000001A;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 145px;
}
.clients_top-right-link-left-text1 {
  font-weight: 500;
  font-size: 22px;
  color: #080808;
}
.clients_top-right-link-left-text2 {
  color: #696D73;
    font-weight: 500;
  font-size: 18px;
}
.clients_bot-list {
  display: flex;
  gap: 24px;
  align-items: center;
}
.clients_top-left-logo {
  width: 100px;
  margin-top: 130px;
  margin-left: 130px;
}

.circle-text {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  letter-spacing:7px;
  width: 354px;
  height: 354px;
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  animation: rotate-circle 5s linear infinite;
}
.brifs_all {
  background: url("@/assets/img/brifFons.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 41px 80px;
  border-radius: 22px;
  gap: 77px;
  margin-bottom: 12px;
}
@keyframes rotate-circle {
  to {
    transform: rotate(1turn);
  }
}
@media(max-width: 450px) {
  .main_projects {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
  }
</style>
