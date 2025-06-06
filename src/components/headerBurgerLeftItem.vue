<template>
      <div class="header_burger_left-item">
          <img :src="img" alt="" />
          <div class="header_burger_left-item-texts">
            <LinkNav class="befAll-two" :title="title" />
            <p>{{ text }}</p>
          </div>
     </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'

defineProps({
  title: String,
  text: String,
  img: String
})
</script>
<style></style>
