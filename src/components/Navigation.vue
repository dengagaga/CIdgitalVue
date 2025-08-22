<template>
  <MobilBurgerMenu v-if="burgerStore.mobilBurgerActive" />
  <nav class="nav">
    <router-link to="/" class="logotype"
      ><img
        src="@/assets/Logo.svg"
        alt=""
        v-if="!burgerStore.mobilBurgerActive"
    /></router-link>
    <div class="nav_right">
      <div class="nav_right-burger" @click="$emit('toggleBurger')">
        <svg
          :class="
            burgerActive ? 'ham hamRotate ham4 active' : 'ham hamRotate ham4'
          "
          viewBox="0 0 100 100"
          width="42"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div
        class="nav_right-burger nav_right-burger-mob"
        @click="burgerStore.toggleMobilBurger()"
      >
        <svg
          :class="
            burgerStore.mobilBurgerActive
              ? 'ham hamRotate ham4 active'
              : 'ham hamRotate ham4'
          "
          viewBox="0 0 100 100"
          width="42"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div class="nav_right-all">
        <LinkNav v-for="item in NavArray" :key="item.title" :item="item" />
      </div>
      <navRightLink v-if="!burgerStore.mobilBurgerActive" />
      <slot></slot>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import LinkNav from './LinkNav.vue'
import navRightLink from './navRightLink.vue'
import MobilBurgerMenu from '@/components/MobilBurgerMenu.vue'
import { RouterLink } from 'vue-router'
import { useBurgerStore } from '@/stores/burger'
const burgerStore = useBurgerStore()
defineProps({
  burgerActive: Boolean,
})
defineEmits(['toggleBurger'])
// const burgerActive = ref(false)
const NavArray = ref([
  {
    title: 'проекты',
    link: '/project',
  },
  {
    title: 'услуги',
    link: '/services',
  },
  {
    title: 'агентство',
    link: '/',
  },
])
</script>
<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  position: relative;
  z-index: 2;
}
.nav_right {
  background-color: var(--frame-color);
  padding: 5px;
  border-radius: 16px;
  display: flex;
  position: relative;
  align-items: center;
  gap: 15px;
}
.nav_right-link {
  display: flex;
  max-width: 150px;
  padding: 7px 16px;
  line-height: 13px;
  font-size: 17px;
  color: var(--link-color);
  border-radius: 11px;
  gap: 8px;
  align-items: center;
  background-color: var(--bgc-btn);
  position: relative;
  overflow: hidden;
}
.nav_right-link svg {
  width: 17px;
  height: 10px;
  z-index: 2;
}
.nav_right-all {
  background-color: var(--bgc-btn);
  display: flex;
  gap: 32px;
  padding: 9.5px 13px;
  border-radius: 11px;
}
.nav_right-link-end {
  max-width: 122px;
}
.nav_right-burger {
  position: relative;
  z-index: 4445;
  border-radius: 11px;
  background-color: var(--bgc-btn);
  height: 36px;
  width: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_right-burger-mob {
  display: none;
}

.nav_right-link img {
  position: relative;
  z-index: 2;
}
.nav_right-link p {
  position: relative;
  z-index: 2;
}
.nav_right-link span {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition:
    transform 0.4s ease-out,
    opacity 0.3s ease-out,
    width 0.4s ease-out,
    height 0.4s ease-out;
  z-index: 0;
}

.nav_right-link:hover span {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  width: 200px;
  height: 200px;
}

/*BURGER*/
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.line {
  fill: none;
  transition:
    stroke-dasharray 400ms,
    stroke-dashoffset 400ms;
  stroke: var(--link-color);
  stroke-width: 5.5;
  /* stroke-linecap:round; */
}
.ham4 .top {
  stroke-dasharray: 30 121;
  transform: translateY(4px);
}
.ham4 .bottom {
  stroke-dasharray: 40 121;
  transform: translateY(-5px);
}
.ham4.active .top {
  stroke-dashoffset: -68px;
}
.ham4:hover.ham4 .top {
  stroke-dasharray: 40 121;
}
.ham4.active .bottom {
  stroke-dasharray: 40 121;
  stroke-dashoffset: -68px;
  transform: translateY(0px);
}
.ham4.active .top {
  stroke-dasharray: 40 121;
  stroke-dashoffset: -68px;
  transform: translateY(0px);
}

.befAll-two-uslugi:hover
  + .befAll-two-agenstvo
  + .header_burger_right-three
  + .header_burger_right-two {
  opacity: 1;
  visibility: visible;
}
.befAll-two-uslugi:hover
  + .befAll-two-agenstvo
  + .header_burger_right-three
  + .header_burger_right-two
  + .header_burger_right-one {
  opacity: 0;
  visibility: hidden;
}
.befAll-two-agenstvo:hover + .header_burger_right-three {
  opacity: 1;
  visibility: visible;
}
.befAll-two-agenstvo:hover
  + .header_burger_right-three
  + .header_burger_right-two
  + .header_burger_right-one {
  opacity: 0;
  visibility: hidden;
}
.befAll-two-agenstvo:hover
  + .header_burger_right-three
  + .header_burger_right-two {
  opacity: 0;
  visibility: hidden;
}
.header_burger_right-three:hover
  + .header_burger_right-two
  + .header_burger_right-one {
  opacity: 0;
  visibility: hidden;
}
.header_burger_right-three:hover {
  opacity: 1;
  visibility: visible;
}
.header_burger_right-title {
  color: var(--color-menu);
  font-size: 12px;
  text-transform: uppercase;
}

.befAll-two .nav_right-link-one {
  font-size: 16px;
  color: #111b29;
}

.befAll-two::after {
  display: none;
}
.header_burger-bottom {
  position: absolute;
  z-index: 3;
  left: 13px;
  right: 13px;
  bottom: 20px;
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
}
.header_burger-bottom-top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 24px;
}
.header_burger-bottom-top_left {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.header_burger-bottom-bot {
  display: flex;
  gap: 20px;
}
/*/BURGER*/

@media (max-width: 1440px) {
  .logotype {
    max-width: 120px;
    width: 100%;
    height: 20px;
    position: relative;
    z-index: 2;
  }
  .logotype img {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 450px) {
  .nav_right-all {
    display: none;
  }
  .nav_right-link-end {
    display: none;
  }
  .logotype {
    max-width: 96px;
  }
  .nav_right-burger {
    order: 2;
    display: none;
  }
  .nav_right-burger-mob {
    display: flex;
  }
  .nav_right-link {
    max-width: 129px;
  }
}
</style>
