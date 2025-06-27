<template>
      <div class="header_burger_left-item" v-if="item">
          <img :src="item.img" alt="" />
          <div class="header_burger_left-item-texts">
            <LinkNav class="befAll-two befAll-1366"  :item="item" />
            <p>{{ item.text }}</p>
          </div>
     </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'

defineProps({
  // title: String,
  // text: String,
  // img: String
  item:Object
})
</script>
<style></style>
