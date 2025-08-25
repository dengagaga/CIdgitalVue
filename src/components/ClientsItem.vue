<template>
  <router-link 
    :to="'/clients/' + item.id" 
    class="clients_bot-list-item"
    ref="buttonElement"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter">
    <img :src="item.img" alt=""  v-if="!ripple" />
    <div class="ripple-effect-content" v-if="ripple">
       <h3 class="ripple-effect-title">{{ item.name }}</h3>
       <p class="ripple-effect-desc">{{ item.descSmall }}</p>
       <button class="ripple-effect-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.53727 3.28744L10.312 3.28744M10.312 3.28744L10.312 9.06214M10.312 3.28744L2.88735 10.7121" stroke="#080808" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
    </div>
    
    <div class="ripple-effect" :style="rippleStyle">
     
    </div>
  </router-link>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  item: Object,
})

const buttonElement = ref(null)
const ripple = ref(false)
const rippleStyle = ref({
  left: '0px',
  top: '0px',
  width: '0px',
  height: '0px',
  opacity: '0'
})

const handleMouseMove = e => {
  if (!buttonElement.value) return

  // Получаем DOM-элемент из router-link
  const element = buttonElement.value.$el || buttonElement.value
  const rect = element.getBoundingClientRect()
  const relX = e.clientX - rect.left
  const relY = e.clientY - rect.top
  ripple.value = true
  rippleStyle.value.left = `${relX}px`
  rippleStyle.value.top = `${relY}px`
}

const handleMouseEnter = e => {
  handleMouseMove(e)
  rippleStyle.value.opacity = '1'
  rippleStyle.value.width = '1700px'
  rippleStyle.value.height = '1700px'
}

const handleMouseLeave = () => {
  rippleStyle.value.opacity = '0'
  ripple.value = false
  rippleStyle.value.width = '0px'
  rippleStyle.value.height = '0px'
}
</script>

<style>
.clients_bot-list-item {
  position: relative;
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
  overflow: hidden;
}

.ripple-effect {
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all 0.7s ease-out;
  background: #015EF9;
  border-radius: 50%;
  color: #fff;
  left: 0;
  top: 0;
  opacity: 0;
  width: 0;
  height: 0;
}
.ripple-effect-content {
  position: absolute;
  z-index: 9999;
  top: 24px;
  left: 24px;
  
}
.ripple-effect-title {
    font-size: 18px;
    margin-bottom: 17px;
    font-weight: 500;
    color: #fff;
}
.ripple-effect-desc {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.ripple-effect-btn {
    background-color: #F5F7F9;
    border-radius: 24px;
    width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    margin-top: 39px;
}
@media (max-width: 1440px) {
  .clients_bot-list-item {
    height: 160px;
    width: 230px;
    border-radius: 12px;
  }
  .ripple-effect-title {
    font-size: 16px;

}
.ripple-effect-desc {
  font-size: 12px;
}
.ripple-effect-btn {
    margin-top: 22px;
}
}
</style>