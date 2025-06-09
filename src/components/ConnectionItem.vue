<template>
      <a :href="text == 'Связаться по телефону' ? 'tel:+79819975000' : 'mailto:hi@cidgital.ru'" class="connection_item">
            <p class="connection_item-text">{{ text }}</p>
            <h6 class="connection_item-title">{{ title }}</h6>
            <span></span>
      </a>

</template>
<script setup>
import { onMounted } from 'vue'
defineProps({
  title: String,
  text: String
})
onMounted(() => {
  
  initRippleEffect()
})

const initRippleEffect = () => { 
  document.addEventListener('DOMContentLoaded', function() {
  // Находим все кнопки с классом .nav_right-link
  const buttons = document.querySelectorAll('.connection_item');
  
  // Обрабатываем каждую кнопку
  buttons.forEach(button => {
    // Находим span внутри кнопки один раз
    const rippleSpan = button.querySelector('span');
    
    // Устанавливаем базовые стили для span
    Object.assign(rippleSpan.style, {
      position: 'absolute',
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.6s ease-out'
    });
    
    // Обработчик движения мыши
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      
      // Обновляем позицию span
      rippleSpan.style.left = `${relX}px`;
      rippleSpan.style.top = `${relY}px`;
    };
    
    // Обработчик наведения
    const handleMouseEnter = (e) => {
      handleMouseMove(e);
      rippleSpan.style.opacity = '1';
      rippleSpan.style.width = '1000px';
      rippleSpan.style.height = '1000px';
    };
    
    // Обработчик ухода мыши
    const handleMouseLeave = () => {
      rippleSpan.style.opacity = '0';
      rippleSpan.style.width = '0';
      rippleSpan.style.height = '0';
    };
    
    // Добавляем обработчики событий
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
  });
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
  });
});

}
</script>
<style>
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

.connection_item span {
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
}

.connection_item:hover span {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  width: 100%;
  height: 100%;
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