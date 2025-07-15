<template>
  <div class="services">
    <h3 class="title_3">Услуги</h3>
    <div class="services_item-list">
      <ServicesItem v-for="item in servicesArray" :item="item" :key="item" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ServicesItem from './ServicesItem.vue'
import analitika from '@/assets/img/analitika.png'
import stylus from '@/assets/img/stylus.png'
import development from '@/assets/img/development.png'
import rocket from '@/assets/img/rocket.png'
import crm from '@/assets/img/crm.png'

const servicesArray = ref([
  {
    id: '01',
    title: 'Аналитика',
    text: 'Изучаем бизнес клиента, поведение пользователей, подбираем метрики и способы продвижения',
    tegs: [
      {
        id: 1,
        teg: 'UX-аналитика',
      },
      {
        id: 2,
        teg: 'Веб-аналитика',
      },
      {
        id: 3,
        teg: 'Исследования',
      },
    ],
    img: analitika,
  },
  {
    id: '02',
    title: 'Дизайн',
    text: 'Привлекательный веб-дизайн, объединённый с уникальным пользовательским опытом.',
    tegs: [
      {
        id: 1,
        teg: 'UX/UI дизайн',
      },
      {
        id: 2,
        teg: 'Брендинг',
      },
      {
        id: 3,
        teg: 'Исследования',
      },
      {
        id: 4,
        teg: '3D-визуализация',
      },
      {
        id: 5,
        teg: 'Key Visual',
      },
      {
        id: 6,
        teg: 'Графический дизайн',
      },
      {
        id: 7,
        teg: 'Дизайн-поддержка',
      },
      {
        id: 8,
        teg: 'Брендинг',
      },
    ],
    img: stylus,
  },
  {
    id: '03',
    title: 'Разработка',
    text: 'Инновационные продукты, созданные с использованием передовых технологий',
    img: development,
    tegs: [
      {
        id: 1,
        teg: 'Корпоративные сайты',
      },
      {
        id: 2,
        teg: 'Онлайн-сервисы',
      },
      {
        id: 3,
        teg: 'E-commerce',
      },
      {
        id: 4,
        teg: 'Порталы',
      },
      {
        id: 5,
        teg: 'Карьерные сайты',
      },
      {
        id: 6,
        teg: 'Системы сайтов',
      },
      {
        id: 7,
        teg: 'Продуктовые каталоги',
      },
      {
        id: 8,
        teg: 'Промо-сайты',
      },
      {
        id: 9,
        teg: 'No-code',
      },
    ],
  },
  {
    id: '04',
    title: 'Продвижение',
    text: 'Улучшение видимости бренда в поисковых результатах для привлечения целевой аудитории',
    tegs: [
      {
        id: 1,
        teg: 'SEO на этапе разработки сайта',
      },
      {
        id: 2,
        teg: 'SEO-продвижение',
      },
      {
        id: 3,
        teg: 'SEO-поддержка',
      },
      {
        id: 4,
        teg: 'Вконтакте',
      },
      {
        id: 5,
        teg: 'Яндекс',
      },
      {
        id: 6,
        teg: 'Твиттер',
      },
    ],
    img: rocket,
  },
  {
    id: '05',
    title: 'CRM',
    text: 'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    tegs: [
      {
        id: 1,
        teg: 'Wordpress',
      },
      {
        id: 2,
        teg: 'OpenCart',
      },
      {
        id: 3,
        teg: 'Control Place',
      },
    ],
    img: crm,
  },
])
</script>
<style>
.services {
  margin-top: 80px;
  margin-bottom: 50px;
}
.services_item-list {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
@media (max-width: 450px) {
  .services_item-list {
    padding-top: 20px;
  }
  .services {
    margin-bottom: 20px;
  }
}
</style>
