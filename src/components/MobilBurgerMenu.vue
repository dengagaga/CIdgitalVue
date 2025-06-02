<template>
    <div class="mobil_header_burger">
        <h4 class="header_mobburger_right-title">меню</h4>
        <div class="mobil_header_burger_list">
            <div class="header_burger_left-item">
                <img src="@/assets/icon.svg" alt="" />
                <div class="header_burger_left-item-texts">
                    <LinkNav class="befAll-two" title="Проекты" />
                    <p>Наши работы</p>
                </div>
            </div>
             <div class="header_burger_left-item befAll-two-uslugi">
                <img src="@/assets/img/icon2.svg" alt="" />

                <div class="header_burger_left-item-texts">
                    <LinkNav class="befAll-two" title="Услуги" />
                    <p>Доверьтесь нам</p>
                </div>
            </div>
                 <div class="header_burger_left-item">
                    <img src="@/assets/img/icon3.png" alt="" />
                    <div class="header_burger_left-item-texts">
                        <LinkNav class="befAll-two" title="Блог" />

                        <p>Интересные истории</p>
                    </div>
                </div>
                <div class="header_burger_left-item befAll-two-agenstvo">
                    <img src="@/assets/img/icon4.png" alt="" />
                    <div class="header_burger_left-item-texts">
                        <LinkNav class="befAll-two" title="Агентство" />
                        <p>Подробнее о нас</p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>
import LinkNav from './LinkNav.vue'
</script>
<style>
.mobil_header_burger {
    display: none;
}
@media(max-width: 450px) {
    
.mobil_header_burger {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 34px 16px;
    background-color: #fff;
    height: 100vh;
    width: 100%;
}
.header_mobburger_right-title {
    color: #97A3B7;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    font-size: 14px;
    width: 100%;
    padding-right: 60px;
    margin-top: 7px;
}
.mobil_header_burger_list {
    margin-top: 45px;
}
}


</style>