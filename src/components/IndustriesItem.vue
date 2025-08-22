<template>
  <div
    class="industries_item"
    v-for="item in industriesStore.industries"
    :key="item.id"
  >
    <button class="solutions_item-btn industries_item-btn-abs">
      <img src="@/assets/img/arrowSolution.svg" alt="" />
    </button>
    <div class="industries_item-top">
      <h4 class="industries_item-top-title">{{ item.name }}</h4>
      <p class="industries_item-top-text">{{ item.text }}</p>
    </div>
    <div class="industries_item-bot">
      <button class="industries_item-btn">
        <div class="industries_item-btn-left">
          <div class="industries_item-btn-left-images">
            <img src="@/assets/img/lzLogo.png" alt="" />
            <img src="@/assets/img/lzLogo.png" alt="" />
            <img src="@/assets/img/lzLogo.png" alt="" />
          </div>
          <p class="industries_item-btn-left-projects">
            {{ item.projects }} проектов
          </p>
        </div>
        <div class="industries_item-btn-right">
          <img src="@/assets/img/greyArrow.png" alt="" />
        </div>
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useIndustriesStore } from '@/stores/industries'
const industriesStore = useIndustriesStore()
</script>
<style>
.industries_item {
  /* background-color: #F4F4F4; */
  border-radius: 22px;
  position: relative;
  border: 1px solid #0000001a;
}
.industries_item-btn-abs {
  display: none;
}
.industries_item-top {
  padding: 24px;

  margin-bottom: 50px;
}
.industries_item-top-title {
  font-weight: 500;
  font-size: 31px;
  margin-bottom: 15px;
}
.industries_item-top-text {
  font-size: 18px;
  color: #696d73;
}
.industries_item-btn {
  background-color: #f8f7ff;
  border-radius: 22px;
  padding: 17px 24px;
  position: relative;
  width: 100%;
  font-size: 18px;
  color: #696d73;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  justify-content: space-between;
}

.industries_item-btn::after {
  content: '';
  right: 39px;
  left: 39px;
  top: -18px;
  position: absolute;
  background-color: #f8f7ff40;
  border: 1px solid #f8f7ff40;
  border-radius: 22px;
  height: 100%;
  z-index: -2;
}
.industries_item-btn::before {
  content: '';
  right: 13px;
  left: 13px;
  top: -8px;
  position: absolute;
  border: 1px solid #f8f7ff73;
  background-color: #f8f7ff73;
  border-radius: 22px;
  height: 100%;
  z-index: -1;
}
.industries_item-btn-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.industries_item-btn-left-images {
  display: flex;
}
.industries_item-btn-left-images img {
  border: 1px solid #ffffff;
  margin-right: -5px;
  border-radius: 50%;
}
.industries_item-btn-right {
  background-color: #f4f4f4;
  border-radius: 40px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

.industries_item-btn:hover .industries_item-btn-right {
  transform: translateX(5px);
}
@media (max-width: 1440px) {
  .industries_item-top-title {
    font-size: 21px;
  }
  .industries_item-top-text {
    font-size: 14px;
  }
  .industries_item-btn {
    font-size: 14px;
  }
}
@media (max-width: 1366px) {
  .industries_item-top-title {
    font-size: 20px;
  }
}
@media (max-width: 1024px) {
  .industries_item-top-title {
    font-size: 18px;
  }
  .industries_item-top {
    padding: 18px;
  }
  .industries_item-btn {
    padding: 15px 20px;
  }
}
@media (max-width: 450px) {
  .industries_item-bot {
    display: none;
  }
  .industries_item-top {
    padding: 24px;
    margin-bottom: 0;
  }
  .industries_item-btn-abs {
    display: flex;
    right: 24px;
    width: 28px;
    height: 28px;
    min-width: 28px;
  }
}
</style>
