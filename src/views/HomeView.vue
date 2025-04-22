<template>
  <header class="header">
    <div class="container">
      <Navigation @toggleBurger="toggleBurger" :burgerActive="burgerActive">
        <burgerMenu :class="burgerActive ? 'header_burger' : 'header_burger header_burger--none'" />
      </Navigation>
    </div>
    <headerMid />
  </header>
</template>
<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import burgerMenu from '@/components/burgerMenu.vue';
import headerMid from '@/components/headerMid.vue';
const burgerActive = ref(false)
const toggleBurger = () => {
  burgerActive.value = !burgerActive.value
}
</script>

<style>
.header {
  padding-top: 28px;
  background:url("@/assets/headerFonThree.png");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
