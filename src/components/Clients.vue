<template>
     <section class="clients">
        <div class="container">
          <div class="clients_all">
              <div class="clients_top">
                <div class="clients_top-left">
                   <div class="circle-text">
                      <svg id="rotatingText" viewBox="0 0 200 200" width="354" height="354">
                        <defs>
                          <path id="circle" d="M 100, 100
                                  m -75, 0
                                  a 75, 75 0 1, 0 150, 0
                                  a 75, 75 0 1, 0 -150, 0
                                  ">
                          </path>
                        </defs>
                        <text width="400">
                          <textPath alignment-baseline="top" xlink:href="#circle">
                            Агентство полного цикла - cidgital -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  <img class="clients_top-left-logo" src="@/assets/img/logo.svg" alt="">
                </div>
               
                <div class="clients_top-right">
                   <h2>“В основе каждой нашей работы лежит стремление создать что‑то большее, чем просто типовой сайт. Это и объединяет нас. <br>
                    Мы хотим создавать и видеть проект, который сможет принести максимальную пользу своему заказчику”</h2>
                    <hr class="hr">
                    <a href="#" class="clients_top-right-link">
                        <div class="clients_top-right-link-left">
                            <img src="@/assets/img/person.png" alt="">
                            <div class="clients_top-right-link-left-texts">
                                <p class="clients_top-right-link-left-text1">Денис Горин </p>
                                <p class="clients_top-right-link-left-text2">Ответственный за ваш проект</p>
                            </div>
                        </div>
                        <div class="clients_top-right-link-right">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L11 1M11 1V10.82M11 1H1.15275" stroke="black" stroke-opacity="0.301961" stroke-width="1.6"/>
                            </svg>
                        </div>
                    </a>
                </div>
              </div>
              <div class="clients_bot">
                  <h2>Наши клиенты</h2>
                  <div class="clients_bot-list">
                      <clientsItem v-for="item in projectStore.clientsItemArray" :item="item" :key="item"></clientsItem>
                  </div>
              </div>
          </div>
        </div>
    </section>
</template>
<script setup>
import { useProjectStore } from '@/stores/project'
import clientsItem from '@/components/ClientsItem.vue';
const projectStore =  useProjectStore()
</script>
<style>
.clients_all {
  padding: 94px 60px;
  background: url("@/assets/img/clients.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 22px;
  gap: 77px;
  margin-bottom: 12px;
}
.clients_top {
  display: flex;
  position: relative;
  justify-content: space-between;
}
.clients_bot h2{
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 70px;
}
.clients_top-left {
  position: relative;
}
.clients_top-right {
  max-width: 935px;
}
.clients_top-right h2{
  font-size: 32px;
  font-weight: 500;
}
.clients_top-right-link {
  border: 1px solid #FFFFFF33;
  background: #FFFFFF33;
  backdrop-filter: blur(4px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
}
.clients_top-right-link-left {
  display: flex;
  gap: 19px;
  align-items: center;
}
.hr {
  background-color: #0000001A;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 145px;
}
.clients_top-right-link-left-text1 {
  font-weight: 500;
  font-size: 22px;
  color: #080808;
}
.clients_top-right-link-left-text2 {
  color: #696D73;
    font-weight: 500;
  font-size: 18px;
}
.clients_bot-list {
  display: flex;
  gap: 24px;
  align-items: center;
}
.clients_top-left-logo {
  width: 100px;
  margin-top: 130px;
  margin-left: 130px;
}
.circle-text {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  letter-spacing:7px;
  width: 354px;
  height: 354px;
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  animation: rotate-circle 5s linear infinite;
}

@keyframes rotate-circle {
  to {
    transform: rotate(1turn);
  }
}

@media(max-width: 1440px) {
 .clients_top-right {
  max-width: 743px;
 }
 .clients_top-right h2 {
    font-size: 28px;
}
}
@media(max-width: 1366px) {
      .clients_top-right {
        max-width: 695px;
    }
    .circle-text {
    width: 300px;
    height: 231px;

}
.clients_top-left-logo {
    width: 93px;
    margin-top: 74px;
    margin-left: 106px;
}
}
@media(max-width: 1024px) {
  .clients_top {
    flex-direction: column;
  }
    .circle-text {
        width: 266px;
        height: 123px;
        left: -30px;
    }
    .clients_top-left-logo {
        width: 87px;
        margin-top: 24px;
        margin-left: 60px;
    }
    .clients_top-right {
      margin-top: 100px;
    }
    .clients_top-right h2 {
        font-size: 24px;
    }
    .clients_top-right {
      max-width: 800px;
    }
    .hr {
      margin-top: 100px;
}
.clients_top-right-link-left-text1 {
    font-weight: 500;
    font-size: 20px;
    color: #080808;
}
.clients_top-right-link-left-text2 {
    color: #696D73;
    font-weight: 500;
    font-size: 16px;
}
.clients_all {
      padding: 70px 50px;
      gap: 60px;
}
.clients_bot h2 {
    font-size: 24px;
    margin-bottom: 50px;
}
}
@media(max-width:450px) {
  .clients_all {
    padding: 30px 12px;
  }
  .clients_bot-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
      .clients_bot-list-item {
        height: 120px;
        border-radius: 73px;
    }
        .hr {
        margin-top: 90px;
    }
        .circle-text {
        width: 266px;
        height: 123px;
        left: -30px;
        top: 30px;
    }
        .clients_top-left-logo {
        width: 87px;
        margin-top: 55px;
        margin-left: 60px;
    }
}
</style>