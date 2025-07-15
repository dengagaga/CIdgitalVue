<template>
  <div class="project_worked-one">
    <span class="project_worked-one-span">{{ title }}</span>
    <p
      class="project_worked-one-text"
      @click="modalStore.modalResumeToggle()"
      v-for="item in text"
      :key="item"
    >
      {{ item }}
    </p>
  </div>
</template>
<script setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
defineProps({
  title: String,
  text: Array,
})
</script>
<style>
.project_worked-one {
  width: 100%;
  max-width: 33%;
}

.project_worked-one-span {
  color: #696d73;
  font-size: 14px;
}
.project_worked-one-text {
  font-size: 18px;
  color: #080808;
  margin-top: 10px;
  cursor: pointer;
}
@media (max-width: 450px) {
  .project_worked-one {
    max-width: 45%;
  }
  .project_worked-one-text {
    font-size: 16px;
  }
}
</style>
