<template>
    <div class="header_mid">
        <div class="header_mid-left">
            <img src="@/assets/headerFon.png" alt="">
        </div>
        <div class="header_mid-right">
            <h1 class="title-1">Разработка и дизайн <br>
                <div class="spans">
                    <span class="span_black">для </span>
                    <div class="span_blue">
                        <div id="flip">
                            <div>
                                <div class="flip_one">Интернет-магазинов</div>
                            </div>
                            <div>
                                <div class="flip_two">E–commerce</div>
                            </div>
                            <div>
                                <div class="flip_three">Быстрых решений</div>
                            </div>
                            <!--<div>
                                <div>Приложений</div>
                            </div>
                            <div>
                                <div>Сервисов</div>
                            </div>
                            <div>
                                <div>Крупных компаний</div>
                            </div> -->
                        </div>
                    </div>
                </div>
               
            </h1>
            <div class="header_mid-right-btns">
                <BtnHeader v-for="item in BtnHeaderArray" :key="item.title" :title="item.title" :imgPath="item.img">
                    
                </BtnHeader>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import BtnHeader from './BtnHeader.vue';
const BtnHeaderArray = [
    {
        title: 'Аналитика',
        img:'analytics'
    },
    {
        title: 'Дизайн',
        img:'stylus'
    },
    {
        title: 'Разработка',
        img:'development'
    },
    {
        title: 'CRM',
        img:'crm'
        
    },
    {
        title: 'Продвижение',
        img:'rocket'
    },
]
</script>

<style>
.header_mid {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 31px;
}
.header_mid-left {
	position: relative;
	transition: .3s;
	animation: movingArrow 4s infinite;
	animation-delay: 0.5s;
  width: 28%;

}
.spans {
    display: flex;
    gap: 10px;
    align-items: center;
}
.header_mid-left img {
  width: 100%;
}

@keyframes movingArrow {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.header_mid-right {
  padding: 33px 44px 33px 33px;

}
.header_mid-right-btns {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 32px;
    max-width: 700px;
}

.span_blue {
  position: relative;
  width: 700px;
  color: var(--color-text);
  font-weight: 600;
  display: inline  ;
  
}
.span_black {
    font-weight: 300;
}
#flip {
  height:71px;
  overflow:hidden;
  position: relative;
  
}
#flip > div > div {
  display:inline-block;

}
.flip_one {
    position: absolute;
    animation: show 8s linear infinite;
    
    /* width: 700px; */
}
.flip_two {
    position: absolute;
    animation: show-2 8s linear infinite;
    /* width: 700px; */
}
.flip_three {
    position: absolute;
    animation: show-3 8s linear infinite;
    /* width: 700px; */
}
@keyframes show {
    0%   {top: -8px;}
    10%  {top: -8px;}
    20%  {top: -8px;}
    30%  {top: 100px;}
    40%  {top: 100px;}
    50%  {top: 100px;}
    60%  {top: 100px;}
    70%  {top: 100px;}
    80%  {top: 100px;}
    90%  {top: 100px;}
    100% {top: -8px;}
}
@keyframes show-2 {
    0%   {top: 100px;}
    10%  {top: 100px;}
    20%  {top: 100px;}
    30%  {top: -8px;}
    40%  {top: -8px;}
    50%  {top: -8px;}
    60%  {top: 100px;}
    70%  {top: 100px;}
    80%  {top: 100px;}
    90%  {top: 100px;}
    100% {top: 100px;}
}

@keyframes show-3 {
    0%   {top: 100px;}
    10%  {top: 100px;}
    20%  {top: 100px;}
    30%  {top: 100px;}
    40%  {top: 100px;}
    50%  {top: 100px;}
    60%  {top: -8px;}
    70%  {top: -8px;}
    80%  {top: -8px;}
    90%  {top: 100px;}
    100% {top: 100px;}
}
</style>