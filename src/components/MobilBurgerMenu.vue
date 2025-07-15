<template>
  <div class="mobil_header_burger">
    <div class="container">
      <img class="mobil_header_burger-logo" src="@/assets/Logo.svg" alt="" />
      <h4 class="header_mobburger_right-title">меню</h4>
      <div class="mobil_header_burger_list">
        <div
          @click="item.links ? avtiveMobilMenu(item) : mobilMenuLink(item)"
          class="header_burger_left-item"
          v-for="item in burgerStore.mobileBurger"
          :key="item.id"
        >
          <img :src="item.img" alt="" />
          <div class="header_burger_left-item-texts">
            <div class="befAll-two mobil_header_burger-btn">{{ item.title }}</div>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <transition>
          <MobilMenu
            @closeMobilmenu="closeMobilmenu"
            :mobilMenuTitle="mobilMenuTitle"
            v-if="mobilMenu"
          />
        </transition>
      </div>
      <div class="mobil_header_burger-bgc">
        <h3 class="mobil_header_burger-bgc-title">Денис Горин</h3>
        <p class="mobil_header_burger-bgc-text">Ответственный за ваш проект</p>
        <a href="https://t.me/realgorin" target="_blank" class="mobil_header_burger-bgc-button">
          <div class="mobil_header_burger-bgc-button-left">
            <!-- <img src="@/assets/img/person.png" alt=""> -->
            <div class="nav_right-link-img-video">
              <video
                class="nav_right-link-img"
                autoplay
                loop
                muted
                src="@/assets/img/ava.gif.mp4"
              ></video>
            </div>
            <p>Написать в Telegram</p>
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-inspector="src/views/HomeView.vue:66:29"
          >
            <path
              d="M1 11L11 1M11 1V10.82M11 1H1.15275"
              stroke="black"
              stroke-opacity="0.301961"
              stroke-width="1.6"
              data-v-inspector="src/views/HomeView.vue:67:31"
            ></path>
          </svg>
        </a>
        <a class="mobil_header_burger-bgc-button-2" @click="modalStore.modalZakazToggle">
          <p>Заказать проект</p>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 11L11 1M11 1V10.82M11 1H1.15275" stroke="#717171" stroke-width="1.1" />
          </svg>
        </a>
      </div>
      <h5 class="mobil_header_burger-our_services-title">Наши веб сервисы</h5>
      <div class="mobil_header_burger-our_services">
        <LinkNav class="befAll-two" title="CMS сайта" />
        <LinkNav class="befAll-two" title="CPlace Templates" />
        <LinkNav class="befAll-two" title="Digame" />
      </div>
    </div>

    <div class="mobil_header_burger_bot">
      <div class="mobil_header_burger_bot-top">
        <LinkNav class="befAll-two" :item="{ id: 1, title: 'Документы', link: '/documents' }" />
      </div>
      <div class="mobil_header_burger_bot-mid">
        <LinkNav class="befAll-two" title="m: hi@cidgital.ru" />
        <LinkNav class="befAll-two" title="p: 8 (981) 997-50-00" />
      </div>
      <div class="mobil_header_burger_bot-bot">
        <LinkNav
          class="befAll-two"
          v-for="item in burgerStore.social"
          :title="item.title"
          :key="item.title"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'
import { useBurgerStore } from '@/stores/burger'
import { useModalStore } from '@/stores/modal'
import MobilMenu from './MobilMenu.vue'
import { ref } from 'vue'
import router from '@/router'
const burgerStore = useBurgerStore()
const modalStore = useModalStore()
const mobilMenu = ref(false)
const mobilMenuTitle = ref('')
const avtiveMobilMenu = (item) => {
  mobilMenu.value = !mobilMenu.value
  mobilMenuTitle.value = item.title
}
const mobilMenuLink = (item) => {
  router.push(item.link)
  burgerStore.toggleMobilBurger()
}
const closeMobilmenu = () => {
  mobilMenu.value = false
}
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
  left: -500px;
}
.mobil_header_burger {
  display: none;
}
.nav_right-link-img-video {
  position: relative;
  max-width: 46px;
  height: 46px;
  width: 100%;
  position: relative;
}

.nav_right-link-img-video::after {
  position: absolute;
  content: '';
  z-index: 2;
  background: url('@/assets/img/telega.png') no-repeat center center;
  width: 21px;
  height: 21px;
  bottom: -2px;
  right: -4px;
  border-radius: 50%;
}
@media (max-width: 450px) {
  .mobil_header_burger {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    padding: 34px 0px;
    padding-bottom: 0;
    background-color: #fbfbfb;
    z-index: 2;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;
  }
  .mobil_header_burger-logo {
    max-width: 96px;
    height: 20px;
    margin-top: 7px;
  }
  .header_mobburger_right-title {
    position: fixed;
    top: 40px;
    right: 75px;
    color: #97a3b7;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
  }
  .mobil_header_burger_list {
    position: relative;
    margin-top: 20px;
    padding-top: 45px;
    padding-bottom: 15px;
    margin-bottom: 17px;
  }
  .mobil_header_burger-bgc {
    padding: 29px 23px;
    background-color: #fff;
    border-radius: 11px;
    margin-bottom: 32px;
  }
  .mobil_header_burger-bgc-title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .mobil_header_burger-bgc-text {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .mobil_header_burger-bgc-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #0000001a;
    border-radius: 11px;
    width: 100%;
    padding: 7px 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .mobil_header_burger-bgc-button-left {
    display: flex;
    gap: 19px;
    align-items: center;
  }
  .mobil_header_burger-bgc-button-left video {
    max-width: 46px;
    height: 46px;
    width: 100%;
  }

  .mobil_header_burger-bgc-button-left p {
    font-size: 14px;
    font-weight: 500;
    color: #696d73;
  }
  .mobil_header_burger-bgc-button-2 {
    background: #fbfbfb;
    padding: 23px 10px;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: #6f737c;
    font-size: 14px;
    width: 100%;
  }
  .mobil_header_burger-our_services {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .mobil_header_burger-our_services-title {
    margin-bottom: 16px;
    color: #97a3b7;
    font-size: 12px;
    font-weight: 400;
  }
  .mobil_header_burger_bot {
    background-color: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .mobil_header_burger_bot-top .befAll-two .nav_right-link-one,
  .mobil_header_burger_bot-mid .befAll-two .nav_right-link-one,
  .mobil_header_burger_bot-bot .befAll-two .nav_right-link-one {
    font-size: 14px;
  }
  .mobil_header_burger_bot-top {
  }
  .mobil_header_burger_bot-mid {
    display: flex;
    justify-content: space-between;
  }
  .mobil_header_burger_bot-bot {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .mobil_header_burger-btn {
    font-size: 16px;
    color: #111b29;
  }
}
</style>
