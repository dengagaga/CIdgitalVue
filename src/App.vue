<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
.body-active_fon {
  position: relative;
}
.body-active_fon::after {
  content: '';
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.658);
  z-index: 9998;
}
.services_view {
  margin-top: 0;
}
.cook-fade-enter-active {
  transition: all 0.3s ease-out;
}
.cook-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.cook-fade-enter-from,
.cook-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.swiper-button-next,
.swiper-button-prev {
  background: #fff;
  color: #000000 !important;
  width: 38px !important;
  height: 38px !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 12px 0px #00000012 !important;
  transition: all 0.3s ease;
}
.swiper-button-next:hover {
  background: #f5f5f5;
}
.swiper-button-prev:hover {
  background: #f5f5f5;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px !important;
  font-weight: 700;
}
.swiper-button-prev:after {
  margin-right: 3px;
}
.swiper-button-next:after {
  margin-left: 2px;
}
</style>
