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
const servicesArray = ref([
    {
        id:'01',
        title:'Аналитика',
        text:'Изучаем бизнес клиента, поведение пользователей, подбираем метрики и способы продвижения',
    },
    {
        id:'02',
        title:'Дизайн',
        text:'Привлекательный веб-дизайн, объединённый с уникальным пользовательским опытом.',
    },
    {
        id:'03',
        title:'Разработка',
        text:'Инновационные продукты, созданные с использованием передовых технологий',
    },
    {
        id:'04',
        title:'Продвижение',
        text:'Улучшение видимости бренда в поисковых результатах для привлечения целевой аудитории',
    },
    {
        id:'05',
        title:'CRM',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
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

</style>