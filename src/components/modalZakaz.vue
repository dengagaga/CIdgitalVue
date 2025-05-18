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
                        <div :class="item.active ? 'modal_main-type-item active' : 'modal_main-type-item'" @click="selectType(item, arrayType)" v-for="item in arrayType" :key="item.id">
                            {{ item.title }} 
                        </div>
                    </div>
                </div>
                <div class="modal_main-task">
                    <h4 class="title_4">Задача</h4>
                    <textarea v-model="task" class="modal_main-task-inp" type="text"></textarea>
                    <p class="modal_main-task-text">В чем заключается задача? Какие сроки? Сфера деятельности компании?</p>
                </div>
                <div class="modal_main-contact">
                    <h4 class="title_4">Контактные данные</h4>
                    <div class="modal_main-contact-list">
                        <dd class="inputbox-content">
                            <input id="input0" v-model="name" type="text" required/>
                            <label for="input0">Имя и фамилия *</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <ProximaPhone id="input1" v-model="number" type="text" required/>
                            <label for="input1" >Телефон *</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input2" v-model="email" type="text" required/>
                            <label for="input2">Контактный e-mail</label>
                            <span class="underline"></span>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input3" v-model="company" type="text" required/>
                            <label for="input3">Название компании</label>
                            <span class="underline"></span>
                        </dd>
                    </div>
                   
                </div>
                <div class="modal_main-connection">
                    <h4 class="title_4">Способ связи</h4>
                    <div class="modal_main-type-list">
                        <div :class="item.active ? 'modal_main-type-item active' : 'modal_main-type-item'" @click="selectConnection(item, arrayСonnection)" v-for="item in arrayСonnection" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
                <div class="modal_main-btns">
                    <button class="modal_main-btn" @click="sendToTelegram()">Отправить</button>
                    <p class="modal_main-btn-text">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
                </div>
            </div>
            <div class="modal_bot">
                <p class="modal_bot-text">Защита от спама Yandex SmartCaptcha. 
                    Условия обработки данных</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ProximaPhone from 'proxima-vue/field/phone';
const selectType = (item, array) => {
    const wasActive = item.active; 
    array.forEach((el) => (el.active = false)); 
    item.active = !wasActive; 
    type.value = item.title
}
const selectConnection = (item, array) => {
    const wasActive = item.active; 
    array.forEach((el) => (el.active = false)); 
    item.active = !wasActive; 
    connection.value = item.title
}
const emit = defineEmits(['modalZakazToggle'])
const arrayType = ref([
    {
        id:'1',
        title:'Корпоративный сайт',
        active: false,
    },
    {
        id:'2',
        title:'Лендинг',
        active: false,
    },
    {
        id:'3',
        title:'Мобильное приложение',
        active: false,
    },
    {
        id:'4',
        title:'Доработки и техподдержка',
        active: false,
    },
    {
        id:'5',
        title:'eCommerce / b2b',
        active: false,
    },
    {
        id:'6',
        title:'Аутстаф',
        active: false,
    },
    {
        id:'7',
        title:'Личный кабинет',
        active: false,
    },
    {
        id:'8',
        title:'Внедрение 1С',
        active: false,
    },
    {
        id:'9',
        title:'Другое',
        active: false,
    },
])
const arrayСonnection = ref([
    {
        id:'1',
        title:'Телеграм',
        active: false,
    },
    {
        id:'2',
        title:'Whats App',
        active: false,
    
    },
    {
        id:'3',
        title:'По телефону',
        active: false,
       
    },
    {
        id:'4',
        title:'e-mail',
        active: false,
    },
 
])

const name = ref('')
const email = ref('')
const type = ref('')
const number = ref('')
const task = ref('')
const company = ref('')
const connection = ref('')
 const sendToTelegram = async () => {
    const botToken = "7431266742:AAFZ2csa4LTw8gZvgAIk_rGpIlYp_2jzfXw";
    const chatId = "-4566691787"; // Ваш chat_id
    const text = `Новая заявка:\nИмя: ${name.value}\nEmail: ${email.value}\nТип: ${type.value}\nНомер телефона: ${number.value}\nЗадача: ${task.value}\nКомпания: ${company.value}\nСпособ связи: ${connection.value}`;
    console.log(text);
    
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
      alert("Сообщение отправлено в Telegram!");
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }


</script>
<style scoped>
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
    cursor: pointer;
    border: 2px solid #F4F4F4;
    border-radius: 50px;
    height: 32px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 9px;
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
    width: 100%!important;
    height: 30px!important;
    box-sizing: border-box!important;
    line-height: 30px!important;
    font-size:16px!important;
    border:0!important;
    background: none!important;
    border-bottom:1px solid #ccc!important;
    outline:none!important;
    border-radius: 0!important;
    -webkit-appearance: none!important;
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

.modal_main-btns {
    display: flex;
    align-items: center;
    gap: 27px;
}
.modal_main-btn {
    border: 1px solid #003EBB;
    background-color: #003EBB;
    border-radius: 16px;
    padding: 19px 24px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
}
.modal_main-btn-text {
    color: #717171;
    font-size: 14px;
    max-width: 500px;
    font-weight: 600;
}
.modal_bot {
    background-color: #F8F7FF;
    height: 107px;
    padding-top: 44px;
    padding-left: 42px;
    margin-top: -20px;
    position: relative;
    z-index: -1;
    border-radius: 0 0 22px 22px;
}
.modal_bot-text {
    color: #717171;
    font-weight: 600;
    font-size: 14px;
    max-width: 400px;
}
.active {
    background: #F8F7FF;
    border: 2px solid #F4F4F4;
}
.modal_main-type-item-close {
    height: 14px;
    width: 14px;
    margin-top: 2px;
    transform: rotate(45deg);
}
</style>
