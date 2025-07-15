<template>
  <router-link :to="'/clients/' + item.id" class="clients_bot-list-item">
    <img :src="item.img" alt="" />
  </router-link>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
<style>
.clients_bot-list-item {
  border: 2px solid #0000001a;
  background: transparent;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  height: 190px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1440px) {
  .clients_bot-list-item {
    height: 160px;
    width: 230px;
    border-radius: 12px;
  }
}
</style>
