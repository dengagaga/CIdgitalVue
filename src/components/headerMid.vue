<template>
  <div class="header_mid-oneFon-all">
    <img src="@/assets/img/logoMin.svg" alt="" />
    <div class="header_mid-oneFon-right">
      <h2 class="title_2">{{ title }}</h2>
      <p class="text">{{ text }}</p>
      <div class="header_mid-oneFon-right-bot" v-if="title !== 'Проекты'">
        <div class="header_mid-oneFon-right-bot-item">
          <h2 class="header_mid-oneFon-right-bot-item-title"><span>+</span></h2>
          <p>Проектов реализовано</p>
        </div>
        <div class="header_mid-oneFon-right-bot-item">
          <h2 class="header_mid-oneFon-right-bot-item-title-2">
            <span>></span>
          </h2>
          <p>Лет разрабатываем сайты</p>
        </div>
      </div>
      <div class="header_mid-oneFon-right-bot-proj" v-else>
        <SelectWrapper />
      </div>
    </div>
  </div>
</template>
<script setup>
import SelectWrapper from './SelectWrapper.vue'
defineProps({
  title: String,
  text: String,
})
</script>
<style>
.header_mid {
  padding: 0 40px;
}
.title_1 {
  font-size: 180px;
  font-weight: 800;
  margin-bottom: 140px;
  margin-top: 250px;
  text-transform: uppercase;
  color: #fff;
  position: relative;
  z-index: 1;
}
.header_mid-oneFon {
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  padding: 60px 40px;
  position: relative;
  z-index: 1;
}
.header_mid-oneFon::after {
  content: '';
  right: 20px;
  left: 20px;
  top: -15px;
  position: absolute;
  z-index: -1;
  background-color: #fff;
  opacity: 0.45;
  border-radius: 20px 20px 0 0;
  height: 200px;
  border: 1px solid #ffffff40;
}
.header_mid-oneFon::before {
  content: '';
  right: 40px;
  left: 40px;
  border: 1px solid #ffffff73;
  top: -30px;
  position: absolute;
  z-index: -1;

  background-color: #fff;
  opacity: 0.25;
  border-radius: 20px 20px 0 0;
  height: 200px;
}

.header_mid-threeFon {
  content: '';
  right: 60px;
  left: 60px;
  border: 1px solid #ffffff73;
  top: -45px;
  position: absolute;
  z-index: -1;

  background-color: #fff;
  opacity: 0.05;
  border-radius: 20px 20px 0 0;
  height: 200px;
}
.header_mid-oneFon-all {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.title_2 {
  color: #080808;
  font-weight: 600;
  font-size: 42px;
  line-height: 130%;
  letter-spacing: -3%;
  max-width: 600px;
  margin-bottom: 18px;
}
.title_4 {
  color: #ffffff;
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -3%;
  margin-bottom: 18px;
  max-width: 639px;
}
.text {
  color: #696d73;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  letter-spacing: -3%;
  max-width: 854px;
}

.header_mid-oneFon-right-bot {
  margin-top: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
}
.header_mid-oneFon-right-bot-proj {
  margin-top: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
}
.header_mid-oneFon-right-bot-item {
  max-width: 150px;
  width: 100%;
}
.header_mid-oneFon-right-bot-item h2 {
  color: #080808;
  font-weight: 500;
  font-size: 44px;
  line-height: 130%;
  letter-spacing: -3%;
}

.header_mid-oneFon-right-bot-item-title::after {
  content: '0';
  animation: countUp 3s ease-out forwards;
}

.header_mid-oneFon-right-bot-item-title-2::after {
  content: '0';
  animation: countUp2 3.5s ease-out forwards;
}

@keyframes countUp {
  0% {
    content: '0';
  }
  5% {
    content: '1';
  } /* Добавлено */
  10% {
    content: '2';
  }
  15% {
    content: '3';
  } /* Добавлено */
  20% {
    content: '4';
  }
  25% {
    content: '5';
  } /* Добавлено */
  30% {
    content: '6';
  }
  35% {
    content: '7';
  } /* Добавлено */
  40% {
    content: '8';
  }
  45% {
    content: '9';
  } /* Добавлено */
  50% {
    content: '10';
  }
  55% {
    content: '11';
  } /* Добавлено */
  60% {
    content: '12';
  }
  65% {
    content: '13';
  } /* Добавлено */
  70% {
    content: '14';
  }
  75% {
    content: '15';
  } /* Добавлено */
  80% {
    content: '16';
  }
  85% {
    content: '17';
  } /* Добавлено */
  90% {
    content: '18';
  }
  95% {
    content: '19';
  } /* Добавлено */
  100% {
    content: '20';
  }
}

@keyframes countUp2 {
  0% {
    content: '0';
  }
  20% {
    content: '1';
  }
  40% {
    content: '2';
  }
  60% {
    content: '3';
  }
  80% {
    content: '4';
  }
  100% {
    content: '5';
  }
}
.header_mid-oneFon-right-bot-item p {
  color: #696d73;
  font-weight: 500;
  margin-top: 3px;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -3%;
  text-transform: uppercase;
}

@media (max-width: 1440px) {
  .header_mid {
    padding: 0 20px;
  }
  .header_mid-oneFon {
    padding: 49px 40px;
  }
  .title_1 {
    font-size: 120px;
    margin-top: 180px;
  }
  .title_2 {
    font-size: 30px;
    max-width: 430px;
  }
  .text {
    font-size: 18px;
    max-width: 639px;
  }
  .header_mid-oneFon-right-bot {
    gap: 20px;
  }
  .header_mid-oneFon-right-bot-item {
    max-width: 110px;
  }
  .header_mid-oneFon-right-bot-item h2 {
    font-size: 30px;
  }
  .header_mid-oneFon-right-bot-item p {
    font-size: 10px;
  }
  .nav_right-link {
    font-size: 14px;
    padding: 5px 13px;
  }
  .nav_right-all {
    padding: 8.5px 13px;
  }
  .nav_right-link-one {
    font-size: 14px;
  }
}
@media (max-width: 1366px) {
  .text {
    font-size: 18px;
    max-width: 598px;
  }
}
@media (max-width: 1024px) {
  .title_1 {
    font-size: 100px;
    margin-top: 180px;
  }
  .title_2 {
    font-size: 26px;
  }
  .text {
    font-size: 16px;
    max-width: 500px;
  }
}
@media (max-width: 450px) {
  .header_mid {
    padding: 0 4px;
  }
  .title_1 {
    font-size: 60px;
    margin-top: 100px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 60px;
  }
  .header_mid-oneFon {
    padding: 34px 14px;
  }
  .header_mid-oneFon-all {
    flex-direction: column;
    gap: 55px;
  }
  .header_mid-oneFon-all img {
    max-width: 27px;
  }
  .title_2 {
    font-size: 22px;
    /* max-width: 258px; */
  }
  .header_mid-oneFon-right-bot-proj {
    margin-top: 18px;
    gap: 9px;
  }
  .text {
    font-size: 14px;
    max-width: 350px;
  }
  .header_mid-oneFon-right-bot-item h2 {
    font-size: 22px;
  }
}
</style>
