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
import ServicesItem from './ServicesItem.vue';
import analitika from '@/assets/img/analitika.png'
import stylus from '@/assets/img/stylus.png'
import development from '@/assets/img/development.png'
import rocket from '@/assets/img/rocket.png'
import crm from '@/assets/img/crm.png'

const servicesArray = ref([
    {
        id:'01',
        title:'Аналитика',
        text:'Изучаем бизнес клиента, поведение пользователей, подбираем метрики и способы продвижения',
        img:analitika
    },
    {
        id:'02',
        title:'Дизайн',
        text:'Привлекательный веб-дизайн, объединённый с уникальным пользовательским опытом.',
        img:stylus
    },
    {
        id:'03',
        title:'Разработка',
        text:'Инновационные продукты, созданные с использованием передовых технологий',
        img:development
    },
    {
        id:'04',
        title:'Продвижение',
        text:'Улучшение видимости бренда в поисковых результатах для привлечения целевой аудитории',
        img:rocket
    },
    {
        id:'05',
        title:'CRM',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
        img:crm
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