<template>
      <a :href="text == 'Связаться по телефону' ? 'tel:+79819975000' : 'mailto:hi@cidgital.ru'" ref="button" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter" class="connection_item">
            <p class="connection_item-text">{{ text }}</p>
            <h6 class="connection_item-title">{{ title }}</h6>
            <span :style="rippleStyle"></span>
      </a>

</template>
<script setup>
import { ref } from 'vue'
defineProps({
  title: String,
  text: String
})

const button = ref(null);
const rippleStyle = ref({
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.7s ease-out',
        opacity: '0',
        background: '#ededed',
        borderRadius: '50%',
        width: '0',
        height: '0',
        left: '0',
        top: '0'
})
const handleMouseMove = (e) => {
  if (!button.value) return;
  
  const rect = button.value.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;
  
  rippleStyle.value.left = `${relX}px`;
  rippleStyle.value.top = `${relY}px`;
};

const handleMouseEnter = (e) => {
  handleMouseMove(e);
  rippleStyle.value.opacity = '1';
  rippleStyle.value.width = '1700px';
  rippleStyle.value.height = '1700px';
};

const handleMouseLeave = () => {
  rippleStyle.value.opacity = '0';
  rippleStyle.value.width = '0';
  rippleStyle.value.height = '0';
};

</script>
<style scoped>
.connection_item {
  background-color: #FBFBFB;
  border-radius: 22px;
  padding: 45px 42px 20px;
  width: 100%;
  color: #000000;
  position: relative;
  overflow: hidden;
}
.connection_item-text {
  font-weight: 500;
  font-size: 16px;
   position: relative;
  z-index: 2;
}
.connection_item-title {
  font-size: 22px;
  font-weight: 600;
  margin-top: 50px;
   position: relative;
  z-index: 2;
}

/* .connection_item span {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background-color: #ededed;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: 
    transform 0.4s ease-out,
    opacity 0.3s ease-out,
    width 0.4s ease-out,
    height 0.4s ease-out;
  z-index: 0;
} */

.connection_item:hover span {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  width: 100%;
  height: 100%;
}
.active {
    position: absolute;
    pointer-events: none;
    transition: all 0.6s ease-out;

    transform: translate(-50%, -50%);
}
@media(max-width: 1440px) {

}
@media(max-width: 1366px) {

}
@media(max-width: 1024px) {
 
}
@media(max-width:450px) {
 
}
</style>