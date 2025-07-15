<template>
  <div
    data-aos="fade-right"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
  >
    <div
      :class="servicesItemActive ? 'services_item services_item--active' : 'services_item'"
      @click="servicesItemActive = !servicesItemActive"
    >
      <div class="services_item-top">
        <div class="services_item-left">
          <img :src="item.img" alt="" />
          <h4 class="services_item-top-title">{{ item.title }}</h4>
        </div>
        <div class="services_item-rigth">
          <p class="text-grey">
            {{ item.text }}
          </p>
          <div class="services_item-rigth-plus">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V8M8 8V12M8 8H12M8 8L4 8"
                stroke="black"
                stroke-opacity="0.301961"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="services_item-bot">
        <div class="services_item-bot-left"></div>
        <div class="services_item-bot-right">
          <div class="services_item-bot-all">
            <button class="services_item-bot_btn" v-for="item in item.tegs" :key="item">
              {{ item.teg }}
            </button>
          </div>
          <div class="services_item-bot-links">
            <a href="Brief.html" class="blog-btn blog-btn-link">Заполнить бриф</a>
            <a href="portfolio.html" class="services_item-bot-link case"
              >Смотреть кейс<svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M12.9277 9.91125C12.2374 9.91125 11.6777 10.4709 11.6777 11.1613C11.6777 11.8516 12.2374 12.4113 12.9277 12.4113H25.82L10.2763 27.9549C9.78812 28.4431 9.78812 29.2346 10.2763 29.7227C10.7644 30.2109 11.5559 30.2109 12.044 29.7227L27.5876 14.1791V27.0712C27.5876 27.7615 28.1473 28.3212 28.8376 28.3212C29.528 28.3212 30.0876 27.7615 30.0876 27.0712V11.1613C30.0876 10.4709 29.528 9.91125 28.8376 9.91125H12.9277Z"
                  fill="#101010"
                ></path></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const servicesItemActive = ref(false)
defineProps({
  item: Object,
})
</script>
<style>
.services_item {
  padding: 44px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
  transition: all 0.3s;
}
.services_item-top {
  display: flex;
  width: 100%;

  align-items: center;
}
.services_item-top-title {
  font-size: 26px;
  font-weight: 500;
  color: #101010;
}
.services_item-left {
  transition: 0.4s;
  display: flex;
  gap: 24px;
  align-items: center;
  max-width: 500px;
  width: 100%;
}
.services_item-rigth {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
}
.services_item-rigth-plus {
  background: #f4f4f4;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #0000001a;
  transition: all 0.3s;
}
.services_item-rigth-plus:hover {
  background-color: #0000000d;
}
.services_item-rigth-plus svg {
  transition: all 0.3s;
}
.text-grey {
  color: #717171;
  font-family: 'Manrope';
  line-height: 28px;
  max-width: 650px;
  transition: 0.4s;
  font-size: 20px;
}
.services_item-bot {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  display: flex;

  transition: all 0.4s ease-in-out;
}
.services_item-bot-left {
  max-width: 500px;
  width: 100%;
}
.services_item--active .services_item-bot {
  opacity: 1;
  max-height: 500px;
  margin-top: 44px;
}
.services_item--active .services_item-rigth-plus {
  background-color: #015ef91a;
  border-bottom: 1px solid #015ef9;
}
.services_item--active .services_item-rigth-plus svg {
  transform: rotate(45deg);
  position: relative;
  z-index: 2;
}
.services_item--active .services_item-rigth-plus svg path {
  stroke: #015ef9;
  stroke-opacity: 1;
}
.services_item-bot-all {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 40px;
  max-width: 442px;
}
.services_item-bot_btn {
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #080808;
  border: 2px solid #f4f4f4;
  padding-top: 10px;
  padding-right: 14px;
  padding-bottom: 10px;
  padding-left: 14px;
  border-radius: 50px;
}
.blog-btn {
  padding: 0px 24px;
  background-color: #003ebb;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  border-radius: 16px;
  border: 1px solid #003ebb;
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  transition: all 0.3s;
}
.blog-btn:hover {
  background-color: #101010;
  border: 1px solid #101010;
  color: #fff;
}
.services_item-bot-links {
  display: flex;
  gap: 24px;
}
.services_item-bot-link {
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
  padding: 0px 24px;
  border-radius: 16px;
  font-size: 18px;
  color: #101010;
  font-weight: 700;
  transition: all 0.3s;
}
.case:hover {
  background: #0000000d;
}
.case svg {
  transition: all 0.3s;
}
.case:hover svg {
  transform: rotate(45deg);
}
.services_item-bot-link svg {
  width: 25px;
}
@media (max-width: 1440px) {
  .services_item-top-title {
    font-size: 22px;
    font-weight: 500;
    color: #101010;
  }
  .services_item-left {
    max-width: 335px;
    width: 100%;
  }
  .services_item-bot-left {
    max-width: 335px;
    width: 100%;
  }
  .text-grey {
    color: #717171;
    font-family: 'Manrope';
    line-height: 28px;
    max-width: 555px;
    transition: 0.4s;
    font-size: 16px;
  }
  .services_item-rigth span {
    font-weight: 300;
    font-style: italic;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0%;
  }
}
@media (max-width: 1024px) {
  .services_item-top-title {
    font-size: 20px;
  }
  .services_item-left,
  .services_item-bot-left {
    max-width: 265px;
  }
  .text-grey {
    font-size: 15px;
  }
}
@media (max-width: 450px) {
  .services_item-top-title {
    font-size: 18px;
  }
  .services_item {
    padding: 24px 0;
    border: none;
  }
  .services_item-left img {
    width: 24px;
  }
  .services_item-left {
    gap: 16px;
  }
  .services_item-bot-left {
    display: none;
  }
  .services_item-top {
    gap: 20px;
    position: relative;
    align-items: start;
    flex-direction: column;
  }
  .text-grey {
    font-size: 14px;
    line-height: 120%;
    margin-left: 40px;
  }
  .services_item-rigth {
  }
  .services_item-bot {
    margin-top: 24px !important;
  }
  .services_item-bot-all {
    flex-wrap: wrap;
  }
  .services_item-rigth-plus {
    position: absolute;
    right: 0;
    top: 0;
  }
  .services_item-bot-links {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .services_item--active .services_item-bot {
    height: auto;
  }
  .blog-btn {
    font-size: 16px;
    justify-content: center;
    height: 48px;
    width: 100%;
  }
  .services_item-bot-link {
    font-size: 16px;
    width: 100%;
    justify-content: center;
    height: 48px;
  }
  .services_item-bot-right {
    width: 100%;
  }
}
</style>
