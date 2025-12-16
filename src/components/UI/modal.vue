<template>
  <div class="modal_background">
    <div class="modal" ref="modalRef">
     <img src="@/assets/images/qr.png" alt="" />
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const modalRef = ref(null)
const emit = defineEmits(['closeModal'])
const closeModal = () => {
  emit('closeModal')
}
onClickOutside(modalRef, () => {
  closeModal()
})
</script>
<style scoped>
.modal_background {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 1;
}
.modal {
  position: absolute;
  height: 55vh;
  border-radius: 12px 12px 0 0;
  padding: 20px;
  z-index: 2;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  background-color: #181D27;
}
.modal img {
  max-width: 350px;
  height: 350px;
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-active .modal,
.slide-up-leave-active .modal {
  transition: transform 0.4s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}

.slide-up-enter-from .modal,
.slide-up-leave-to .modal {
  transform: translateY(100%);
}

.slide-up-enter-to .modal,
.slide-up-leave-from .modal {
  transform: translateY(0);
}
</style>
