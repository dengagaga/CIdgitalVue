<template>
  <div class="cook_modal" v-if="modal">
    <div class="cook_modal_left">
      <h3 class="cook_modal_left-title">Без cookies никак!</h3>
      <p class="cook_modal_left-text">
        Используя данный сайт, вы даете согласие на использование файлов cookies, помогающих нам
        сделать его удобнее для вас.
      </p>
    </div>
    <button class="cook_modal-btn" @click="modal = !modal">Я понял</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const modal = ref(false)
onMounted(() => {
  const wasModalShown = sessionStorage.getItem('modalShown')
  if (!wasModalShown) {
    setTimeout(() => {
      modal.value = true
      sessionStorage.setItem('modalShown', 'true')
    }, 5000)
  }
})
</script>
<style>
.cook_modal {
  background-color: #080808;
  padding: 20px 14px;
  border-radius: 9px;
  position: fixed;
  bottom: 15px;
  right: 41px;
  z-index: 999;
  display: flex;
  gap: 45px;
  align-items: center;
}
.cook_modal_left-title {
  font-size: 22px;
  font-weight: 600;
  color: white;
}
.cook_modal_left-text {
  font-size: 14px;
  margin-top: 10px;
  font-weight: 500;
  color: #a6a6a6;
  max-width: 550px;
}
.cook_modal-btn {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 12px 23px;
  font-size: 14px;
  font-weight: 600;
  color: white;
}
@media (max-width: 1440px) {
  .cook_modal {
    gap: 36px;
    right: 20px;
  }
  .cook_modal_left-title {
    font-size: 20px;
    font-weight: 600;
    color: white;
  }
  .cook_modal_left-text {
    font-size: 12px;
    margin-top: 10px;
    font-weight: 500;
    color: #a6a6a6;
    max-width: 450px;
  }
  .cook_modal-btn {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 12px 23px;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
}
@media (max-width: 768px) {
  .cook_modal {
    gap: 10px;
    right: 16px;
    left: 16px;
    justify-content: space-between;
  }
  .cook_modal-btn {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 9px 17px;
    font-size: 12px;
    font-weight: 600;
    color: white;
  }
  .cook_modal_left-text {
    max-width: 210px;
    margin-top: 5px;
  }
  .cook_modal_left-title {
    font-size: 18px;
    font-weight: 600;
    color: white;
  }
}
</style>
