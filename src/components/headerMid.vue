<template>
    <div class="header_mid">
        <h1 class="title_1">Цифровые сидхи</h1>
        <div class="header_mid-oneFon">
            <div class="header_mid-threeFon"></div>
            <div class="header_mid-oneFon-all">
                <img src="@/assets/img/logo.svg" alt="">
                <div class="header_mid-oneFon-right">
                    <h2 class="title_2">Разработка и дизайн
                        Онлайн-сервисов в России.</h2>
                    <p class="text">Наши услуги — это ключи к созданию неповторимого и успешного образа вашего бизнеса</p>
                    <div class="header_mid-oneFon-right-bot">
                        <div class="header_mid-oneFon-right-bot-item">
                            <h2>20+</h2>
                            <p>Проектов реализовано</p>
                        </div>
                        <div class="header_mid-oneFon-right-bot-item">
                            <h2>>5</h2>
                            <p>Лет разрабатываем сайты</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
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
}
.header_mid-oneFon {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    height: 700px;
    padding: 49px 45px;
    position: relative;
    z-index: 22;
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
    border: 1px solid #FFFFFF40;
}
.header_mid-oneFon::before {
    content: '';
    right: 40px;
    left: 40px;
    border: 1px solid #FFFFFF73;
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
    border: 1px solid #FFFFFF73;
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
    font-size: 30px;
    line-height: 130%;
    letter-spacing: -3%;
    max-width: 420px;
    margin-bottom: 18px;
}
.text {
    color: #696D73;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -3%;
    max-width: 639px;
}
.header_mid-oneFon-right {
}
.header_mid-oneFon-right-bot {
    margin-top: 50px;
    display: flex;
    gap: 20px;
    align-items: center;
}
.header_mid-oneFon-right-bot-item {
    max-width: 110px;
    width: 100%;
}
.header_mid-oneFon-right-bot-item h2{
    color: #080808;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    letter-spacing: -3%;

}
.header_mid-oneFon-right-bot-item p{
    color: #696D73;
    font-weight: 500;
    margin-top: 3px;
    font-size: 10px;
    line-height: 11px;
    letter-spacing: -3%;
    text-transform: uppercase;

}
</style>