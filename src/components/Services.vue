<template>
  <div class="container">
     <div class="services">
    <h3 class="title_3">Услуги</h3>
    <div class="services_item-list">
      <ServicesItemNew v-for="item in servicesArray" :item="item" :key="item" />
    </div>
  </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import ServicesItemNew from './ServicesItemNew.vue'
import { useServicesStore } from '@/stores/servicesStore';
const servicesStore = useServicesStore()
const servicesArray = computed(() => servicesStore.servicesArray)
</script>
<style scoped>
.services {
  margin-top: 80px;
  margin-bottom: 50px;
}
.services_item-list {
  display: flex;
  gap: 12px;
  flex-direction: column;
}
@media (max-width: 450px) {
  .services_item-list {
    
  }
  .services {
    margin-bottom: 20px;
  }
}
</style>
