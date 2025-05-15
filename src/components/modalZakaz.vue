<template>
    <div class="modal">
        <div class="modal_all">
            <img class="close" @click="$emit('modalZakazToggle')" src="../assets/img/plusSm.svg" alt="">
            <div class="modal_top">

            </div>
            <div class="modal_main">
                <div class="modal_main-top">
                    <h2 class="title_2 modal_main-title">
                        Расскажите о вашем проекте
                    </h2>
                    <p class="modal_main-top-text">
                        Кратко опишите свою задачу, и мы свяжемся с вами в ближайшее время.
                    </p>
                </div>
                <div class="modal_main-type">
                    <h4 class="title_4">Тип проекта</h4>
                    <div class="modal_main-type-list">
                        <div class="modal_main-type-item" v-for="item in arrayType" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
                <div class="modal_main-task">
                    <h4 class="title_4">Задача</h4>
                    <textarea class="modal_main-task-inp" type="text"></textarea>
                    <p class="modal_main-task-text">В чем заключается задача? Какие сроки? Сфера деятельности компании?</p>
                </div>
                <div class="modal_main-contact">
                    <h4 class="title_4">Контактные данные</h4>
                    <div class="modal_main-contact-list">
                        <dd class="inputbox-content">
                            <input id="input0" type="text" required/>
                            <label for="input0">Имя и фамилия *</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input1" type="text" required/>
                            <label for="input1">Телефон *</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input2" type="text" required/>
                            <label for="input2">Контактный e-mail</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input3" type="text" required/>
                            <label for="input3">Название компании</label>
                            <span class="underline"></span>
                        </dd>
                    </div>
                   
                </div>
                <div class="modal_main-connection">
                    <h4 class="title_4">Способ связи</h4>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const emit = defineEmits(['modalZakazToggle'])
const arrayType = ref([
    {
        id:'1',
        title:'Корпоративный сайт',
        text:'Изучаем бизнес клиента, поведение пользователей, подбираем метрики и способы продвижения',
    },
    {
        id:'2',
        title:'Лендинг',
        text:'Привлекательный веб-дизайн, объединённый с уникальным пользовательским опытом.',
    },
    {
        id:'3',
        title:'Мобильное приложение',
        text:'Инновационные продукты, созданные с использованием передовых технологий',
    },
    {
        id:'4',
        title:'Доработки и техподдержка',
        text:'Улучшение видимости бренда в поисковых результатах для привлечения целевой аудитории',
    },
    {
        id:'5',
        title:'eCommerce / b2b',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    },
    {
        id:'6',
        title:'Аутстаф',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    },
    {
        id:'7',
        title:'Личный кабинет',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    },
    {
        id:'8',
        title:'Внедрение 1С',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    },
    {
        id:'9',
        title:'Другое',
        text:'Эффективное взаимодействие с клиентами через интегрированные CRM-решения',
    },
])
</script>
<style>
.modal {
    backdrop-filter: blur(2px);
    background-color: #00000080;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9998;
}
.modal_all {
    position: absolute;
    max-width: 1000px;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 22px;
    width: 100%;
}
.close {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 25px;
    cursor: pointer;
    top: 25px;
    padding: 10px;
    transform: rotate(45deg);
    border-radius: 50%;
    background-color: #fff;
}
.modal_top {
    background: url(../assets/img/fonModal.png);
    height: 149px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 22px 22px 0 0;
}
.modal_main {
    margin-top: -25px;
    background-color: #fff;
    padding: 40px 42px;
    border-radius: 22px;
}
.modal_main-title {
    max-width: 411px!important;
    font-weight: 500!important;
    margin-bottom: 50px!important;
}
.modal_main-top {
    padding-bottom: 80px;
}
.modal_main-top-text {
    color: #696D73;
    font-size: 16px;
    max-width: 452px;
}
.modal_main-type {
    padding-bottom: 80px;
}
.title_4 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 30px;


}
.modal_main-type-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
.modal_main-type-item {
    font-weight: 400;
    font-size: 14px;
    border: 2px solid #F4F4F4;
    border-radius: 50px;
    height: 32px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #080808;
}
.modal_main-task {
    padding-bottom: 80px;
}

.modal_main-task-inp {
    margin-bottom: 16px;
    border: 1px solid #DCDCDC;
    border-radius: 16px;
    height: 151px;
    width: 100%;
}
.modal_main-task-text {
    color: #696D73;
    font-size: 14px;
}

.modal_main-contact {
    padding-bottom: 80px;
}
.modal_main-contact-list {
    display: grid;
    margin-top: 38px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 66px;
}
.inputbox-content {
    position: relative;
    width: 100%;
}
.inputbox-content label{
    position: absolute;
    top:0;
    left:0;
    height: 30px;
    line-height: 30px;
    font-size:16px;
    color:#080808;
    cursor:text;
    transition: all 200ms ease-out;
    z-index:10;
}
.inputbox-content input{
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    font-size:16px;
    border:0;
    background: none;
    border-bottom:1px solid #ccc;
    outline:none;
    border-radius: 0;
    -webkit-appearance: none;
    transition: all .3s;
    &:hover{
        border-bottom:1px solid #000;
    }
    &:focus,&:valid{
    &~label{
        color: #1010104D;
        transform: translateY(-20px);
        font-size:10px;
        cursor:default;
    }
    }
    &:focus{
    &~.underline{
        width: 100%;
    }
} 
}
.underline {
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 2px;
    background:  #2962ff;
    transition: all 200ms ease-out;
}
.modal_main-connection {
    padding-bottom: 118px;
}
</style>
