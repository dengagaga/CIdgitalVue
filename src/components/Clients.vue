<template>
  <section class="clients">
    <div class="container">
      <div class="clients_all">
        <div class="clients_top">
          <div class="clients_top-one">
            <h3 class="clients_top-one-h3">
              Digital-агентство <span class="clients_top-one-span">Сиджитал</span>
            </h3>
            <p class="clients_top-one-text">В основе каждой нашей работы лежит стремление создать нечто большее, чем просто типовой сайт. Это стремление объединяет нас и вдохновляет на создание проектов, которые приносят максимальную пользу нашим заказчикам. Мы хотим, чтобы каждый проект не только решал задачи бизнеса, но и вдохновлял, удивлял и приносил реальные результаты.</p>
          </div>
          <div class="clients_top-two">
            <div class="clients_top-two-left">
              <img src="@/assets/img/photo.png" class="clients_top-two-left-img" alt="">
              <h4 class="clients_top-two-left-h4">Денис Горин, ответственный за ваш проект</h4>
              <p class="clients_top-two-left-text">Выберете удобный способ, чтобы рассказать о вашей задаче</p>
              <img src="@/assets/img/arrowBlack.png" class="clients_top-two-left-arrow" alt="">
            </div>
            <div class="clients_top-two-right">
              <button class="clients_top-two-right-btnTop">
                <h4 class="clients_top-two-right-btnTop-h4">Заполнить бриф</h4>
                <p class="clients_top-two-right-btnTop-text">открыть форму</p>
              </button>
              <div class="clients_top-two-right-all">
                  <button class="clients_top-two-right-btnBot">
                    <img src="@/assets/img/iconMail.png" alt="">
                    <h4 class="clients_top-two-right-btnBot-h4">Написать в телеграм</h4>
                    <p class="clients_top-two-right-btnBot-text">@realgorin</p>
                  </button>
                  <button class="clients_top-two-right-btnBot">
                    <img src="@/assets/img/iconTelega.png" alt="">
                    <h4 class="clients_top-two-right-btnBot-h4">Написать на почту</h4>
                    <p class="clients_top-two-right-btnBot-text">hi@cidgital.ru</p>
                  </button>
              </div>
            </div>
          </div>
         
        </div>
        <div class="clients_bot">
           <div class="clients_top-three">
            <h3 class="clients_top-one-h3">Нам доверились <br> <span class="clients_top-one-span">49 компаний</span> </h3>
            <p class="clients_top-one-text clients_top-three-text">Выполнили более <span class="clients_top-one-span">5000 задач</span></p>
          </div>
          <router-link to="/clients" class="clients_bot-link">Смотреть кейсы компаний</router-link>
          <div class="clients_bot-container">
            <Vue3Marquee
              :duration="20"
              :class="{
                hovered: isHovered,
              }"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
            >
              <clientsItem
                v-for="item in clientsItemArray"
                :item="item"
                :key="item"
              ></clientsItem>
            </Vue3Marquee>
            <div class="mobil_clients-items">
              <Vue3Marquee direction="reverse">
                <clientsItem
                  v-for="item in clientsItemArray"
                  :item="item"
                  :key="item"
                ></clientsItem>
              </Vue3Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import clientsItem from '@/components/ClientsItem.vue'
import { Vue3Marquee } from 'vue3-marquee'
import { useClientStore } from '@/stores/clientStore'
import { ref, computed } from 'vue'
const clientStore = useClientStore()
const clientsItemArray = computed(() => clientStore.clientsItemArray)
const isHovered = ref(false)
</script>
<style>
.vue3-marquee.horizontal > .marquee {
  gap: 26px;
}
.vue3-marquee.horizontal {
  display: flex;
  gap: 26px;
  position: relative;
  overflow: hidden;
}
.hovered .marquee {
  animation-play-state: paused !important;
}

.clients_all {
  padding: 94px 0px;
  background: url('@/assets/img/DigitalBgc.png');
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
  position: relative;
  padding: 0 62px;
}
.clients_bot {
  position: relative;
  transition: all .3s;
}
.clients_bot-link {
  border: 1px solid #015EF9;
  background-color: #fff;
  border-radius: 20px;
  padding: 11px 22px;
  color: #080808;
  font-size: 17px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 31;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s;
  visibility: hidden;
}
.clients_bot::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all .3s;
  visibility: hidden;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(14px);
  background: #FFFFFF03;
  z-index: 30;
}
.clients_bot:hover.clients_bot::after{
  opacity: 1;
  visibility: visible;
}
.clients_bot:hover .clients_bot-link {
  opacity: 1;
  visibility: visible;
}
.clients_bot h2 {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 70px;
  padding-left: 62px;
}
.clients_top-one {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.clients_top-one-h3 {
  font-size: 26px;
  font-weight: 500;
  
}
.clients_top-one-span {
  color: var(--blue-color);
}
.clients_top-one-text {
  color: #696D73;
  font-weight: 500;
  font-size: 20px;
  max-width: 820px;
}
.clients_top-two {
  margin-top: 72px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}
.clients_top-two-left {
  position: relative;
}
.clients_top-two-left-arrow {
  position: absolute;
  right: -250px;
  bottom: 20px;
}
.clients_top-two-left-img {
  max-width: 130px;
  border-radius: 16px;
}
.clients_top-two-left-h4 {
  font-size: 22px;
  color: #080808;
  font-weight: 600;
  margin-top: 16px;
}
.clients_top-two-left-text {
  margin-top: 10px;
  font-size: 18px;
  color: #696D73;
  max-width: 430px;
}
.clients_top-two-right {
  max-width: 820px;
  width: 100%;
}
.clients_top-two-right-btnTop {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 820px;
  width: 100%;
}
.clients_top-two-right-btnTop-h4 {
  font-size: 22px;
  margin-bottom: 10px;
}
.clients_top-two-right-btnTop-text, .clients_top-two-right-btnBot-text {
  font-size: 16px;
  color: #696D73;
}
.clients_top-two-right-all {
  display: flex;
  margin-top: 12px;
  gap: 12px;
}
.clients_top-two-right-btnBot {
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 820px;
  width: 100%;
}
.clients_top-two-right-btnBot-h4 {
  font-size: 22px;
  margin-top: 50px;
  margin-bottom: 10px;
  max-width: 120px;
  text-align: left;
}
.clients_top-three {
  padding: 0 62px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 80px;
  margin-top: 250px;
}
.clients_top-three-text {
  max-width: 820px;
  width: 100%;
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
  letter-spacing: 7px;
  width: 354px;
  height: 354px;
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  animation: rotate-circle 14s linear infinite;
}
.vue3-marquee {
  display: none !important;
}
.mobil_clients-items {
  display: none !important;
}
@keyframes rotate-circle {
  to {
    transform: rotate(1turn);
  }
}

@media (max-width: 1440px) {
  
}
@media (max-width: 1366px) {
  
  .circle-text {
    width: 300px;
    height: 231px;
  }
  .clients_top-left-logo {
    width: 93px;
    margin-top: 74px;
    margin-left: 106px;
  }
}
@media (max-width: 1024px) {
  .clients_top {
    flex-direction: column;
  }
  .circle-text {
    width: 266px;
    height: 123px;
    left: -30px;
  }
  .clients_top-left-logo {
    width: 87px;
    margin-top: 24px;
    margin-left: 60px;
  }
 
  .hr {
    margin-top: 100px;
  }
  .clients_top-right-link-left-text1 {
    font-weight: 500;
    font-size: 20px;
    color: #080808;
  }
  .clients_top-right-link-left-text2 {
    color: #696d73;
    font-weight: 500;
    font-size: 16px;
  }
  .clients_all {
    padding: 70px 0px;
    gap: 60px;
  }
  .clients_bot h2 {
    font-size: 24px;
    margin-bottom: 50px;
  }
}
@media (max-width: 450px) {
  .clients_all {
    padding: 30px 0px;
  }
  .mobil_clients-items {
    display: block !important;
    margin-top: 15px;
  }
  .clients_bot h2 {
    padding-left: 12px;
  }
  .clients_top {
    padding: 0 12px;
  }
  .clients_bot-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    --gap: 16px;
  }

  .clients_bot-list {
    display: none;
  }
  .clients_bot-container-mob {
    display: flex;
  }
  .clients_bot-list-item {
    flex: 0 0 200px;
    height: 120px;
    border-radius: 12px;
    display: flex;
    padding-right: 10px;
    padding-left: 10px;
    width: 170px;
    max-width: 170px;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  .hr {
    margin-top: 90px;
  }
  .clients_top-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle-text {
    width: 266px;
    height: 123px;
    margin-top: 50px;
    position: initial;
  }
  .clients_top-left-logo {
    width: 87px;
    margin-top: 0;
    margin-left: 0;
    left: 50%;
    top: 75px;
    transform: translateX(-48%);
    position: absolute;
  }
}
</style>
