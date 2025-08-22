<template>
  <div class="header_burger">
    <span class="menu">меню</span>
    <div class="header_burger-all">
      <div class="header_burger_left">
        <headerBurgerLeftItem :item="headerBurgerLeft[0]" />
        <headerBurgerLeftItem
          class="befAll-two-uslugi"
          :item="headerBurgerLeft[1]"
        />
        <headerBurgerLeftItem
          class="befAll-two-agenstvo"
          :item="headerBurgerLeft[3]"
        />
        <div class="header_burger_right header_burger_right-three">
          <h4 class="header_burger_right-title">Агентство</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in burgerStore.mobileBurger[3].links"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <div class="header_burger_right header_burger_right-two">
          <h4 class="header_burger_right-title">Услуги</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in burgerStore.mobileBurger[1].links"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <div class="header_burger_right header_burger_right-one">
          <h4 class="header_burger_right-title">Наши веб сервисы</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in burgerStore.mobileBurger[0].default"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <headerBurgerLeftItem :item="headerBurgerLeft[2]" />
      </div>
    </div>
    <div class="header_burger-bottom">
      <div class="header_burger-bottom-top">
        <div class="header_burger-bottom-top_left">
          <LinkNav
            class="befAll-two"
            :item="{ id: 1, title: 'Документы', link: '/documents' }"
          />
          <LinkNav class="befAll-two" title="m: hi@cidgital.ru" />
        </div>
        <LinkNav class="befAll-two" title="p: 8 (981) 997-50-00" />
      </div>
      <div class="header_burger-bottom-bot">
        <a
          :href="item.link"
          target="_blank"
          class="befAll-two befAll"
          v-for="item in burgerStore.social"
          :key="item.title"
        >
          <div class="nav_right-link-one">
            <p class="nav_right-link-text_rel">{{ item.title }}</p>
            <p class="nav_right-link-text_abs">{{ item.title }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'
import icon from '@/assets/icon.svg'
import iconTwo from '@/assets/img/icon2.svg'
import iconThree from '@/assets/img/icon3.png'
import iconFour from '@/assets/img/icon4.png'
import headerBurgerLeftItem from './headerBurgerLeftItem.vue'
import { useBurgerStore } from '@/stores/burger'
import { ref } from 'vue'
const burgerStore = useBurgerStore()
const headerBurgerLeft = ref([
  {
    id: 1,
    img: icon,
    title: 'Проекты',
    link: '/project',
    text: '',
  },
  {
    id: 2,
    img: iconTwo,
    title: 'Услуги',
    link: '/services',
    text: '',
  },
  {
    id: 3,
    img: iconThree,
    title: 'Блог',
    link: '/',
    text: 'Интересные истории',
  },
  {
    id: 4,
    img: iconFour,
    title: 'Агентство',
    link: '/',
    text: 'Подробнее о нас',
  },
])
</script>
<style>
.header_burger {
  background-color: var(--frame-color);
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 4444;
  height: 90vh;
  width: 100%;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s;
  border-radius: 11px;
  border: var(--border);
}
.header_burger::after {
  content: '';
  position: absolute;
  width: 98%;
  height: 98.8%;
  border-radius: 11px;
  top: 5px;
  left: 5px;
  right: 5px;
  z-index: 2;
  bottom: 5px;
  background-color: var(--bgc-btn);
}
.header_burger::before {
  content: '';
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 11px 0px 11px 0;
  top: 5px;
  left: 5px;
  z-index: 3;
  right: 5px;
  bottom: 5px;
  background-color: var(--frame-color);
}

.menu {
  position: relative;
  z-index: 3;
  padding-left: 61px;
  color: var(--color-menu);
  font-size: 16px;
  top: 10px;
  text-transform: uppercase;
  font-weight: 600;
}
.header_burger-all {
  position: relative;
  z-index: 3;
  top: 82px;
  padding-left: 32px;
}

.header_burger_left-item {
  display: flex;
  align-items: start;
  gap: 16px;
  margin-bottom: 20px;
}
.header_burger_left-item img {
  padding-top: 3px;
}
.header_burger_left-item-texts {
  color: #677489;
  font-size: 14px;
  font-weight: 500;
}
.header_burger_left-item-texts p {
  min-height: 19px;
}
.header_burger_right {
  position: absolute;
  top: 0;
  display: flex;
  text-align: start;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  right: 72px;
}

.header_burger_right-one {
  transition: all 0.3s;
}
.header_burger_right-two {
  transition: all 0.3s;
  opacity: 0;
  max-width: 420px;
  width: 100%;
  visibility: hidden;
}
.header_burger_right-three {
  transition: all 0.3s;
  opacity: 0;
  max-width: 420px;
  width: 100%;
  visibility: hidden;
}
.header_burger_right-two:hover {
  opacity: 1;
  visibility: visible;
}
.header_burger_right-two:hover + .header_burger_right-one {
  opacity: 0;
  visibility: hidden;
}
@media (max-width: 450px) {
  .header_burger {
    display: none;
  }
}
</style>
