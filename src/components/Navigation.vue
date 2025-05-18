<template>
  <nav class="nav">
    <router-link to="/" class="logotype"><img src="@/assets/Logo.svg" alt="" /></router-link>
    <div class="nav_right">
      <div class="nav_right-burger">
        <svg
          :class="burgerActive ? 'ham hamRotate ham4 active' : 'ham hamRotate ham4'"
          viewBox="0 0 100 100"
          width="42"
          @click="$emit('toggleBurger')"
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
      <a href="#" class="nav_right-link">
        <p>написать в telegram</p>
        <img src="@/assets/ava.png" alt="" /><span class="nav_right-link-span"></span>
      </a>
      <a href="#" @click="$emit('modalZakazToggle')" class="nav_right-link nav_right-link-end">
        <p>заказать проект</p>
        <img src="@/assets/arrow.svg" alt="" />
        <span class="nav_right-link-span"></span>
      </a>
      <slot></slot>
    </div>
  </nav>
  
</template>
<script setup>
import { ref } from 'vue'
import LinkNav from './LinkNav.vue'

import { RouterLink } from 'vue-router'
defineProps({
  burgerActive: Boolean,
})

defineEmits(['toggleBurger','modalZakazToggle'])
// const burgerActive = ref(false)
const NavArray = ref([
  {
    title: 'проекты',
    link:'/project'
  },
  {
    title: 'услуги',
    link:'/'
  },
  {
    title: 'агентство',
    link:'/'
  },
])

document.addEventListener('DOMContentLoaded', function () {
  var buttonElements = document.querySelectorAll('.nav_right-link')

  buttonElements.forEach(function (button) {
    button.addEventListener('mouseenter', function (e) {
      var rect = button.getBoundingClientRect()
      var relX = e.clientX - rect.left
      var relY = e.clientY - rect.top
      var span = button.querySelector('span')
      span.style.top = relY + 'px'
      span.style.left = relX + 'px'
      span.style.position = 'absolute' // Ensure span is positioned absolutely
    })

    button.addEventListener('mouseout', function (e) {
      var rect = button.getBoundingClientRect()
      var relX = e.clientX - rect.left
      var relY = e.clientY - rect.top
      var span = button.querySelector('span')
      span.style.top = relY + 'px'
      span.style.left = relX + 'px'
      span.style.position = 'absolute' // Ensure span is positioned absolutely
    })
  })

  // Prevent default action for links with href="#"
  var links = document.querySelectorAll('a[href="#"]')
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
    })
  })
})
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
.nav_right-link {
  position: relative;
  overflow: hidden;
}
.nav_right-link img {
  position: relative;
  z-index: 2;
}
.nav_right-link p {
  position: relative;
  z-index: 2;
}
.nav_right-link-span {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: #ffffff;
  transition:
    width 0.4s ease-in-out,
    height 0.4s ease-in-out;
  transform: translate(-50%, -50%);
  /* z-index: -1; */
}

.nav_right-link:hover span {
  width: 225%;
  height: 562.5px;
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
.befAll-two-agenstvo:hover + .header_burger_right-three + .header_burger_right-two {
  opacity: 0;
  visibility: hidden;
}
.header_burger_right-three:hover + .header_burger_right-two + .header_burger_right-one {
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

@media(max-width:1440px) {
  .logotype {
    max-width: 120px;
    width: 100%;
    height: 20px;
  }
  .logotype img {
    width: 100%;
    height: 100%;
  }
}
</style>
