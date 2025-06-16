<template>
    <section class="project_footer">
        <h3 class="project_footer-title">Хотите обсудить проект?</h3>
        <div class="project_footer-all">
            <a href="" class="project_footer-btn">
                <div class="project_footer-btn-left">
                    <img  src="@/assets/img/person.png" alt="">
                    <p>Написать в Telegram</p>
                </div>
                
                <img class="project_footer-btn-img" src="@/assets/arrow.svg" alt="">
            </a>
            <button class="project_footer-btn" @click="modalStore.modalZakazToggle()">
                <p>Заказать проект</p>
                <img class="project_footer-btn-img" src="@/assets/arrow.svg" alt="">
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
    background-color: #F8F7FF;
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
    border: 1px solid #0000001A;
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
    color: #6F737C;
    font-size: 16px;
}
.project_footer-btn-left {
    display: flex;
    justify-content: space-between;
    gap: 19px;
    color: #696D73;
    font-size: 16px;
    align-items: center;
}
.project_footer-btn-img {
    max-width: 10px;
}
@media(max-width: 1440px) {
.project_footer-btn {
  font-size: 14px;
}
.project_footer-btn-left {
    font-size: 14px;
}
}
@media(max-width: 450px) {

  .project_footer-title {
    font-size: 18px;
    margin-bottom: 32px;
}
.project_footer-all {
    flex-direction: column;
}
}
</style>