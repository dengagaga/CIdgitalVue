<template>
    <div class="modal">
        <div class="modal_all">
            <img class="close" @click="modalStore.modalZakazClose" src="../assets/img/plusSm.svg" alt="">
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
                    <h4 class="modal_title_4">Тип проекта</h4>
                    <div class="modal_main-type-list">
                        <div :class="item.active ? 'modal_main-type-item active' : 'modal_main-type-item'" @click="selectType(item, modalStore.arrayType)" v-for="item in modalStore.arrayType" :key="item.id">
                            {{ item.title }} 
                        </div>
                    </div>
                </div>
                <div class="modal_main-task">
                    <h4 class="modal_title_4">Задача</h4>
                    <textarea v-model="task" class="modal_main-task-inp" type="text"></textarea>
                    <p class="modal_main-task-text">В чем заключается задача? Какие сроки? Сфера деятельности компании?</p>
                </div>
                <div class="modal_main-contact">
                    <h4 class="modal_title_4">Контактные данные</h4>
                    <div class="modal_main-contact-list">
                        <dd class="inputbox-content">
                            <input id="input0" v-model="name" type="text" :class="erorName ? 'eror' : ''" required/>
                            <label for="input0" :class="erorName ? 'eror' : ''">Имя и фамилия *</label>
                            <span :class="erorName ? 'underlane--active underline' : 'underline'"></span>
                            <p class="eror_modal" v-if="erorName">Поле необходимо заполнить</p>
                        </dd>
                        <dd class="inputbox-content">
                            <input id="input1" v-model="number"  @input="handlePhoneInput" 
                             type="tel" :class="erorNumber ? 'eror' : ''" required/>
                            <label for="input1" :class="erorNumber ? 'eror' : ''">Телефон *</label>
                            <span :class="erorNumber ? 'underlane--active underline' : 'underline'"></span>
                            <p class="eror_modal" v-if="erorNumber">Поле необходимо заполнить</p>
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
                    <h4 class="modal_title_4">Способ связи</h4>
                    <div class="modal_main-type-list">
                        <div :class="item.active ? 'modal_main-type-item active' : 'modal_main-type-item'" @click="selectConnection(item, modalStore.arrayСonnection)" v-for="item in modalStore.arrayСonnection" :key="item.id">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
                <div 
                    style="height: 100px"
                    id="captcha-container"
                    class="smart-captcha"
                    data-sitekey="ysc1_c50mkeZfZGNW5oSYbdcWpqm0LYs4VRiawvda6Onff025fc54"
                    >
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
import { ref, watch } from 'vue';
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()

const name = ref('')
const email = ref('')
const type = ref('')
const number = ref('')
const task = ref('')
const company = ref('')
const connection = ref('')
const erorName = ref(false)
const erorNumber = ref(false)

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
const formatPhone = () => {
  const digits = number.value.replace(/\D/g, '');
  if (!digits.length) {
    number.value = '';
    return;
  }
  const match = digits.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  if (match[1] === '8') match[1] = '7'; 
  if (!match[1]) match[1] = '7'; 
  number.value = !match[3] 
    ? '+7 (' + match[2] 
    : '+7 (' + match[2] + ') ' + match[3] + (match[4] ? '-' + match[4] : '') + (match[5] ? '-' + match[5] : '');
}
const handlePhoneInput = (e) => {
  if (e.inputType === 'deleteContentBackward' && number.value.replace(/\D/g, '').length <= 1) {
    number.value = '';
    return;
  }
  formatPhone();
}
const sendToTelegram = async () => {
const botToken = "7431266742:AAFZ2csa4LTw8gZvgAIk_rGpIlYp_2jzfXw";
const chatId = "-4566691787"; // Ваш chat_id
if (!name.value && !number.value) {
    erorName.value = true
    erorNumber.value = true
} else {
    if (!name.value) {
    erorName.value = true
} else {
    if (!number.value ) {
        erorNumber.value = true
    } else {
        const text = `Новая заявка:\nИмя: ${name.value}\nEmail: ${email.value}\nТип: ${type.value}\nНомер телефона: ${number.value}\nЗадача: ${task.value}\nКомпания: ${company.value}\nСпособ связи: ${connection.value}`;
        
        modalStore.modalZakazClose()
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
}
}
}

watch(name, () => {
    erorName.value = false
})
watch(number, () => {
    erorNumber.value = false
})

</script>
<style scoped>
.modal {
    backdrop-filter: blur(2px);
    background-color: #00000080;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9998;
    overflow-y: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
}
.modal_all {
    max-width: 1000px;
    border-radius: 22px;
    width: 100%;
    position: relative; 
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 30px;
    padding-bottom: 30px;
}
.close {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 25px;
    cursor: pointer;
    top: 55px;
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
.modal_title_4 {
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
    padding: 10px;
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
    height: max-content;
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
    padding-bottom: 18px;
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
.eror_modal {
    color: #FF0033;
    font-size: 13px;
    margin-top: 5px;
    position: absolute;
}
.eror {
    color: #FF0033!important;
    border-color:#FF0033!important ;
}
/* .underlane--active {
    bottom: 23px;
} */
@media(max-width: 1024px) {
    .modal_all {
        max-width: 800px;
    }
}   
@media(max-width: 450px) {
.modal_all {
    /* width: auto;
        left: 4px;
    right: 4px; */
    
    width: 98%;
    top: 5px;

    transform: none;
}
.modal_main {
    padding:  36px 12px;
}
.modal_main-title {
    max-width: 258px!important;
    margin-bottom: 30px!important;
}
.modal_main-top-text {
    font-size: 14px;
}
.modal_main-top, .modal_main-type, .modal_main-task, .modal_main-contact {
    padding-bottom: 40px;
}
.modal_title_4 {
    font-size: 18px;
}
.modal_main-contact-list {
    display: flex;
    flex-direction: column;
}
/* .modal_main-connection {
    padding-bottom: 60px;
} */
.modal_main-btns {
    flex-direction: column;
    align-items: start;
}
.modal_main-btn {
    padding: 16px;
    font-size: 16px;
}
.modal_main-btn-text {
    font-size: 12px;
}
.modal_bot {
    padding: 24px 12px;
    padding-top: 44px;
}
.modal_top {
    height: 103px;
}
.close {
    width: 32px;
    height: 32px;
    top: 10px;
    right: 10px;
}
.modal_all {
    padding-top: 0;
    padding-bottom: 4px;
}
}
</style>
