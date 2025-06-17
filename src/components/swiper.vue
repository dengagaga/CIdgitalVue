<template>
    <div class="swiper_container">
        <swiper
            :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }"
            
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="main-swiper"
        >
            <swiper-slide>
                <img src="@/assets/img/ImgGlavLZ.png" alt="Main image 1" />
            </swiper-slide>
            
            <swiper-slide>
                <img src="@/assets/img/oblLzTwo.png" alt="Main image 2" />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/img/oblLZ.png" alt="Main image 2" />
            </swiper-slide>
        </swiper>
        
        <swiper
            @swiper="setThumbsSwiper"
            
            :space-between="10"
            :slides-per-view="4"
            :free-mode="true"
            :watch-slides-progress="true"
            :modules="modules"
            class="thumbs-swiper"
        >
            <swiper-slide>
                <img src="@/assets/img/ImgGlavLZ.png" alt="Thumbnail 1" />
            </swiper-slide>
           
             <swiper-slide>
                <img src="@/assets/img/oblLzTwo.png" alt="Main image 2" />
            </swiper-slide>
             <swiper-slide>
                <img src="@/assets/img/oblLZ.png" alt="Thumbnail 2" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const modules = [FreeMode, Navigation, Thumbs];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
</script>
<style scoped>
/* Основной контейнер */
.swiper_container {
    margin-top: 50px;
    
}

/* Стили для слайдов */
.swiper-slide {
    /* background: #444; */
    display: flex;
    justify-content: center;
    align-items: center;
    
}

/* Стили для изображений в слайдах */
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
}
.main-swiper .swiper-slide img{
    border-radius: 32px;
        
}
.main-swiper .swiper-slide {
    border-radius: 32px;
}
/* Стили для основного слайдера */
.main-swiper {
    height: 780px;
    width: 100%;
     border-radius: 32px;
     border: 1px solid #0000001A;
}

/* Стили для слайдера миниатюр */
.thumbs-swiper {
    height: 100px!important;
    box-sizing: border-box;
    padding: 0 30px;
    margin-top: 20px;
     border-radius: 8px;
}

/* Стили для миниатюр */
.thumbs-swiper .swiper-slide {
    width: 100px!important;
    height: 100%;
    height: 80px!important;
    opacity: 0.4;
    cursor: pointer;  /* Курсор в виде указателя */
    transition: opacity 0.3s ease; /* Плавное изменение прозрачности */
    
}
.thumbs-swiper .swiper-slide img{
    border-radius: 8px;
    border: 1px solid #0000001A;
    
}
.thumbs-swiper .swiper-slide {
    border-radius: 8px;
}

/* Стиль для активной миниатюры */
.thumbs-swiper .swiper-slide-thumb-active {
    opacity: 1;
}
@media(max-width: 1440px) {
    .main-swiper {
    height: 580px;
}

/* Стили для слайдера миниатюр */
.thumbs-swiper {
    height: 80px!important;
    padding: 0 20px;
    margin-top: 20px;
}
.thumbs-swiper .swiper-slide {
    width: 80px!important;
    height: 60px!important;
    
}

}
@media(max-width: 1024px) {
.main-swiper {
    height: 560px;
}

}
@media(max-width: 450px) {
.main-swiper {
    height: 240px;
}
.thumbs-swiper {
    height: 70px!important;
    padding: 0 10px;
    margin-top: 10px;
}
.thumbs-swiper .swiper-slide {
    width: 70px!important;
    height: 50px!important;
    
}
}
</style>