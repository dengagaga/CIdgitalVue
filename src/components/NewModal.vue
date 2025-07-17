<template>
  <div class="cook_modal" v-if="modal">
    <div class="cook_modal_left">
      <h3 class="cook_modal_left-title">Новый сайт – новый уровень!</h3>
      <ul class="cook_modal_left-list">
        <li class="cook_modal_left-item">Мы обновились!  В настоящее время переносим наше портфолио, поэтому все проекты пока недоступны для просмотра онлайн.</li>
        <li class="cook_modal_left-item">Хотите увидеть наши работы? Просто свяжитесь с нами [ссылка на форму обратной связи] – мы будем рады предоставить их по запросу!</li>
      </ul>
    </div>
    <button class="cook_modal-btn" @click="close()">Я понял</button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const modal = ref(false)
onMounted(() => {
  const newModalShown = sessionStorage.getItem('newModalShown')
  if (!newModalShown) {
    setTimeout(() => {
      modal.value = true
    }, 5000)
  }
})
const close = () => {
  modal.value = !modal.value
  sessionStorage.setItem('newModalShown', 'true')
}
</script>
<style scoped>
.cook_modal {
  background-color: #F5F7F9;
  padding: 20px 14px;
  border-radius: 9px;
  position: fixed;
  bottom:144px;
  right: 41px;
  z-index: 999;
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content: space-between;
  max-width: 740px;
  width: 100%;
}
.cook_modal_left-link {
  color: #a6a6a6;
  text-decoration: underline !important;
}
.cook_modal_left-title {
  font-size: 22px;
  font-weight: 600;
  color: #080808;
  margin-bottom: 10px;
}
.cook_modal_left-item {
  font-size: 14px;
  
  font-weight: 500;
  color: #696D73;
  max-width: 540px;
  list-style: disc !important;
  margin-left: 20px;
}
.cook_modal-btn {
  background-color: #015EF9;
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
    bottom:138px;
    max-width: 614px;
  }
  .cook_modal_left-title {
    font-size: 20px;
    font-weight: 600;
  }
  .cook_modal_left-item {
    font-size: 12px;
    max-width: 410px;
  }
  .cook_modal-btn {
    
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
    width: auto;
    bottom: 164px;
  }
  .cook_modal-btn {
    width: 82px;
    border-radius: 8px;
    padding: 9px 17px;
    font-size: 12px;
    font-weight: 600;
    color: white;
  }
  .cook_modal_left {
    max-width: 230px;
  }
  .cook_modal_left-item {
    max-width: 230px;
    
  }
  .cook_modal_left-title {
    font-size: 18px;
    font-weight: 600;
    
  }
}
@media (max-width: 396px) {
      .cook_modal_left {
    max-width: 210px;
  }
  .cook_modal_left-item {
    max-width: 210px;
    margin-left: 15px;
    
  }
}
</style>
