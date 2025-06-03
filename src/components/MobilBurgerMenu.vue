<template>
    <div class="mobil_header_burger">
        <h4 class="header_mobburger_right-title">меню</h4>
        <div class="mobil_header_burger_list">
            <div class="header_burger_left-item" v-for="item in burgerStore.mobileBurger" :key="item.id">
                <img :src="item.img" alt="" />
                <div class="header_burger_left-item-texts">
                    <LinkNav class="befAll-two" :title="item.title" />
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="mobil_header_burger-bgc">
            <h3 class="mobil_header_burger-bgc-title">
                Денис Горин
            </h3>
            <p class="mobil_header_burger-bgc-text">Ответственный за ваш проект</p>
            <a class="mobil_header_burger-bgc-button">
                <div class="mobil_header_burger-bgc-button-left">
                    <img src="@/assets/img/person.png" alt="">
                    <p>Написать в Telegram</p>
                </div>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-inspector="src/views/HomeView.vue:66:29"><path d="M1 11L11 1M11 1V10.82M11 1H1.15275" stroke="black" stroke-opacity="0.301961" stroke-width="1.6" data-v-inspector="src/views/HomeView.vue:67:31"></path></svg>
            </a>
            <a class="mobil_header_burger-bgc-button-2">
                <p>Заказать проект</p>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1V10.82M11 1H1.15275" stroke="#717171" stroke-width="1.1"/>
                </svg>
            </a>
        </div>
        <h5 class="mobil_header_burger-our_services-title">Наши веб сервисы</h5>
        <div class="mobil_header_burger-our_services">
            <LinkNav class="befAll-two" title="CMS сайта" />
            <LinkNav class="befAll-two" title="CPlace Templates" />
            <LinkNav class="befAll-two" title="Digame" />
        </div>
        <div class="mobil_header_burger_bot">
            <div class="mobil_header_burger_bot-top">
                 <LinkNav class="befAll-two" title="Документы" />
            </div>
            <div class="mobil_header_burger_bot-mid">
                <LinkNav class="befAll-two" title="m: hi@cidgital.ru" />
                <LinkNav class="befAll-two" title="p: 8 (981) 997-50-00" />

            </div>
            <div class="mobil_header_burger_bot-bot">
               <LinkNav class="befAll-two" title="Vkontakte" />
                <LinkNav class="befAll-two" title="Behance" />
                <LinkNav class="befAll-two" title="Telegram" />
                <LinkNav class="befAll-two" title="Dprofile" />
                <LinkNav class="befAll-two" title="Dribbble" />
            </div>
        </div>
       
    </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'
import { useBurgerStore } from '@/stores/burger';
const burgerStore = useBurgerStore()
</script>
<style>
.mobil_header_burger {
    display: none;
}
@media(max-width: 450px) {
    
.mobil_header_burger {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 34px 16px;
    background-color: #FBFBFB;
    z-index: 2;
    overflow-y: auto;
    max-height: 100vh;
}
.header_mobburger_right-title {
    position: fixed;
    top: 40px;
    right: 75px;
    color: #97A3B7;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
}
.mobil_header_burger_list {
    margin-top: 65px;
    margin-bottom: 32px;
}
.mobil_header_burger-bgc {
    padding: 29px 23px;
    background-color: #fff;
    border-radius: 11px;
    margin-bottom: 32px;
}
.mobil_header_burger-bgc-title {
    font-size: 20px;
    margin-bottom: 10px;
}
.mobil_header_burger-bgc-text {
    font-size: 16px;
    margin-bottom: 32px;
}
.mobil_header_burger-bgc-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #0000001A;
    border-radius: 11px;
    width: 100%;
    padding: 7px 10px;
    cursor: pointer;
    margin-bottom: 10px;
}
.mobil_header_burger-bgc-button-left {
    display: flex;
    gap: 19px;
    align-items: center;
}
.mobil_header_burger-bgc-button-left img{
    max-width: 46px;
}
.mobil_header_burger-bgc-button-left p{
    font-size: 14px;
    font-weight: 500;
    color: #696D73;

}
.mobil_header_burger-bgc-button-2 {
    background: #FBFBFB;
    padding: 23px 10px;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: #6F737C;
    font-size: 14px;
    width: 100%;
}
.mobil_header_burger-our_services {
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.mobil_header_burger-our_services-title {
    margin-bottom: 16px;
    color: #97A3B7;
    font-size: 12px;
    font-weight: 400;
}
.mobil_header_burger_bot {
    background-color: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.mobil_header_burger_bot-top .befAll-two .nav_right-link-one,
.mobil_header_burger_bot-mid .befAll-two .nav_right-link-one,
.mobil_header_burger_bot-bot .befAll-two .nav_right-link-one {
    font-size: 14px;
}
.mobil_header_burger_bot-top {
}
.mobil_header_burger_bot-mid {
    display: flex;
    justify-content: space-between;
}
.mobil_header_burger_bot-bot {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
}
</style>