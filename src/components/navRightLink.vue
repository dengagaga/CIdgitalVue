<template>
  <a
    v-for="(item, index) in navRightLink"
    :target="item.title === 'заказать проект' ? '_self' : '_blank'"
    :key="item.title"
    :href="item.link"
    @click="item.title === 'заказать проект' ? modalStore.modalZakazToggle() : ''"
    :class="
      item.title === 'заказать проект' ? 'nav_right-link nav_right-link-end' : 'nav_right-link'
    "
    @mousemove="(e) => handleMouseMove(e, index)"
    @mouseleave="handleMouseLeave(index)"
    @mouseenter="(e) => handleMouseEnter(e, index)"
  >
    <p>{{ item.title }}</p>
    <img v-if="item.title === 'заказать проект'" :src="item.img" alt="" />
    <video class="nav_right-link-img" v-else autoplay loop muted :src="item.img"></video>
    <span :style="rippleStyles[index] || rippleStyle" class="nav_right-link-span"></span>
  </a>
</template>

<script setup>
import { ref } from 'vue'
import ava from '@/assets/img/ava.gif.mp4'
import arrow from '@/assets/arrow.svg'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
const navRightLink = ref([
  {
    title: 'написать в telegram',
    link: 'https://t.me/realgorin',
    img: ava,
  },
  {
    title: 'заказать проект',
    link: '#',
    img: arrow,
  },
])

// Создаем массив для хранения ripple-стилей каждого элемента
const rippleStyles = ref([])
const rippleStyle = {
  position: 'absolute',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.5s ease-out',
  opacity: '0',
  background: '#fff',
  borderRadius: '50%',
  width: '0',
  height: '0',
  left: '0',
  top: '0',
}

// Инициализируем стили для каждого элемента
navRightLink.value.forEach((_, index) => {
  rippleStyles.value[index] = { ...rippleStyle }
})

const handleMouseMove = (e, index) => {
  const button = e.currentTarget // Получаем текущий элемент

  const rect = button.getBoundingClientRect()
  const relX = e.clientX - rect.left
  const relY = e.clientY - rect.top

  rippleStyles.value[index] = {
    ...rippleStyles.value[index],
    left: `${relX}px`,
    top: `${relY}px`,
  }
}

const handleMouseEnter = (e, index) => {
  handleMouseMove(e, index)
  rippleStyles.value[index] = {
    ...rippleStyles.value[index],
    opacity: '1',
    width: '300px',
    height: '300px',
  }
}

const handleMouseLeave = (index) => {
  rippleStyles.value[index] = {
    ...rippleStyles.value[index],
    opacity: '0',
    width: '0',
    height: '0',
  }
}
</script>
<style>
.nav_right-link-img {
  width: 26px;
  height: 26px;
  position: relative;
  z-index: 1;
  border-radius: 50%;
}
</style>
