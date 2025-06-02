<template>
  <div class="header_burger">
    <span class="menu">меню</span>
    <div class="header_burger-all">
      <div class="header_burger_left">
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
        <div class="header_burger_left-item befAll-two-agenstvo">
          <img src="@/assets/img/icon4.png" alt="" />
          <div class="header_burger_left-item-texts">
            <LinkNav class="befAll-two" title="Агентство" />
            <p>Подробнее о нас</p>
          </div>
        </div>
        <div class="header_burger_right header_burger_right-three">
          <h4 class="header_burger_right-title">Агентство</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in NavAgenstvo"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <div class="header_burger_right header_burger_right-two">
          <h4 class="header_burger_right-title">Услуги</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in NavServises"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <div class="header_burger_right header_burger_right-one">
          <h4 class="header_burger_right-title">Наши веб сервисы</h4>
          <LinkNav
            class="befAll-two"
            v-for="item in NavProject"
            :title="item.title"
            :key="item.title"
          />
        </div>
        <div class="header_burger_left-item">
          <img src="@/assets/img/icon3.png" alt="" />
          <div class="header_burger_left-item-texts">
            <LinkNav class="befAll-two" title="Блог" />

            <p>Интересные истории</p>
          </div>
        </div>
      </div>
    </div>
    <div class="header_burger-bottom">
      <div class="header_burger-bottom-top">
        <div class="header_burger-bottom-top_left">
          <LinkNav class="befAll-two" title="Документы" />
          <LinkNav class="befAll-two" title="m: hi@cidgital.ru" />
        </div>
        <LinkNav class="befAll-two" title="p: 8 (981) 997-50-00" />
      </div>
      <div class="header_burger-bottom-bot">
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
import { ref } from 'vue'
import LinkNav from './LinkNav.vue'
const NavServises = ref([
  {
    title: 'Аналитика',
  },
  {
    title: 'Дизайн',
  },
  {
    title: 'Разработка',
  },
  {
    title: 'Продвижение',
  },
  {
    title: 'CRM',
  },
])
const NavAgenstvo = ref([
  {
    title: 'Сертификаты',
  },
  {
    title: 'Команда',
  },
  {
    title: 'Достижения',
  },
  {
    title: 'Отзывы',
  },
])
const NavProject = ref([
  {
    title: 'CMS сайта',
  },
  {
    title: 'CPlace Templates',
  },
  {
    title: 'Digame',
  },
])
</script>
<style>

.header_burger {
  background-color: var(--frame-color);
  position: absolute;
  right: 0;
  top: 0px;
  z-index: 4444;
  height: 90vh;
  width: 100%;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s;
  border-radius: 11px;
  border: var(--border);
}
.header_burger::after {
  content: '';
  position: absolute;
  width: 98%;
  height: 98.8%;
  border-radius: 11px;
  top: 5px;
  left: 5px;
  right: 5px;
  z-index: 2;
  bottom: 5px;
  background-color: var(--bgc-btn);
}
.header_burger::before {
  content: '';
  position: absolute;
  width: 42px;
  height: 42px;
  border-radius: 11px 0px 11px 0;
  top: 5px;
  left: 5px;
  z-index: 3;
  right: 5px;
  bottom: 5px;
  background-color: var(--frame-color);
}

.menu {
  position: relative;
  z-index: 3;
  padding-left: 61px;
  color: var(--color-menu);
  font-size: 16px;
  top: 10px;
  text-transform: uppercase;
  font-weight: 600;
}
.header_burger-all {
  position: relative;
  z-index: 3;
  top: 82px;
  padding-left: 32px;
}

.header_burger_left-item {
  display: flex;
  align-items: start;
  gap: 16px;
  max-width: 180px;
  margin-bottom: 20px;
}
.header_burger_left-item img {
  padding-top: 4px;
}
.header_burger_left-item-texts {
  color: #677489;
  font-size: 14px;
  font-weight: 500;
}
.header_burger_right {
  position: absolute;
  top: 0;
  display: flex;
  text-align: start;
  align-items: end;
  flex-direction: column;
  gap: 20px;
  right: 72px;
}

.header_burger_right-one {
  transition: all 0.3s;
}
.header_burger_right-two {
  transition: all 0.3s;
  opacity: 0;
  max-width: 420px;
  width: 100%;
  visibility: hidden;
}
.header_burger_right-three {
  transition: all 0.3s;
  opacity: 0;
  max-width: 420px;
  width: 100%;
  visibility: hidden;
}
.header_burger_right-two:hover {
  opacity: 1;
  visibility: visible;
}
.header_burger_right-two:hover + .header_burger_right-one {
  opacity: 0;
  visibility: hidden;
}
@media (max-width: 450px) {

  .header_burger {
    display: none;
  }
}
</style>