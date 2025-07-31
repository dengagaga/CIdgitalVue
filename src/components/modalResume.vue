<template>
  <div class="modal_resume">
    <div class="modal_resume-all">
      <img
        class="close"
        @click="modalStore.modalResumeToggle()"
        src="@/assets/img/plusSm.svg"
        alt=""
      />
      <img class="modal_resume-all-img" src="@/assets/img/person.jpg" alt="" />
      <div class="modal_resume-all-mid">
        <div class="modal_resume-all-mid-top">
          <h4 class="modal_resume-all-mid-top-h4">Frontend</h4>
          <h4 class="modal_resume-all-mid-top-h4">Backend</h4>
        </div>
        <h2 class="modal_resume-all-mid-h2">{{ modalStore.modalResumeName }}</h2>
        <h3 class="modal_resume-all-mid-h3">Senior разработчик на Vue</h3>
      </div>
      <div class="modal_resume-all-bot">
        <router-link to="/resume" class="modal_resume-all-bot-btn" >Открыть резюме</router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
</script>
<style scoped>
.modal_resume {
  backdrop-filter: blur(2px);
  background-color: #00000080;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9998;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}
.modal_resume-all {
  max-width: 600px;
  border-radius: 6px;
  width: 100%;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;

  background-color: #fff;
}
.modal_resume-all-img {
  border-radius: 6px 6px 0 0;
}
.modal_resume-all-mid {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.modal_resume-all-mid-top {
  display: flex;
  gap: 18px;
  align-items: center;
}
.modal_resume-all-mid-top-h4 {
  color: #696d73;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}
.modal_resume-all-mid-h2 {
  color: #101010;
  font-size: 28px;
  font-weight: 600;
}
.modal_resume-all-mid-h3 {
  font-size: 20px;
  color: #080808;
}
.modal_resume-all-bot-btn {
  display: block;
  text-align: center;
  width: 100%;
  background-color: #f8f7ff;
  border-radius: 0 0 6px 6px;
  font-size: 14px;
  font-weight: 600;
  color: #717171;
  padding: 12px;
}
.close {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -50px;
  cursor: pointer;
  top: 0px;
  padding: 10px;
  transform: rotate(45deg);
  border-radius: 50%;
  background-color: #fff;
}
</style>
