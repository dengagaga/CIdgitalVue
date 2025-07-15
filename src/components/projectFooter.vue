<template>
  <section class="project_footer">
    <h3 class="project_footer-title">Хотите обсудить проект?</h3>
    <div class="project_footer-all">
      <a href="https://t.me/realgorin" target="_blank" class="project_footer-btn">
        <div class="project_footer-btn-left">
          <div class="nav_right-link-img-video">
            <video
              class="nav_right-link-video"
              autoplay
              loop
              muted
              src="@/assets/img/ava.gif.mp4"
            ></video>
          </div>
          <p>Написать в Telegram</p>
        </div>
        <img class="project_footer-btn-img" src="@/assets/arrow.svg" alt="" />
      </a>
      <button class="project_footer-btn" @click="modalStore.modalZakazToggle()">
        <p>Заказать проект</p>
        <img class="project_footer-btn-img" src="@/assets/arrow.svg" alt="" />
      </button>
    </div>
  </section>
</template>
<script setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
</script>
<style>
.project_footer {
  padding: 29px 23px;
  margin-top: 80px;
  border-radius: 11px;
  background-color: #f8f7ff;
}
.nav_right-link-video {
  max-width: 46px;
  height: 46px;
  width: 100%;
  border-radius: 50%;
}
.project_footer-title {
  font-size: 28px;
  margin-bottom: 32px;
}
.project_footer-all {
  display: flex;
  gap: 10px;
  align-items: center;
}
.project_footer-btn {
  border: 1px solid #0000001a;
  backdrop-filter: blur(4px);
  background-color: #fff;
  height: 100%;
  height: 68px;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 7px 10px;
  align-items: center;
  width: 100%;
  color: #6f737c;
  font-size: 16px;
}
.project_footer-btn-left {
  display: flex;
  justify-content: space-between;
  gap: 19px;
  color: #696d73;
  font-size: 16px;
  align-items: center;
}
.project_footer-btn-img {
  max-width: 10px;
}
@media (max-width: 1440px) {
  .project_footer-btn {
    font-size: 14px;
  }
  .project_footer-btn-left {
    font-size: 14px;
  }
}
@media (max-width: 450px) {
  .project_footer-title {
    font-size: 18px;
    margin-bottom: 32px;
  }
  .project_footer-all {
    flex-direction: column;
  }
}
</style>
