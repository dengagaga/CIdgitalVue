<template>
    <div class="services_item">
        <div class="services_item-item">
            <div class="services_item-left">
                <img :src="item.imgGlav" alt="">
            </div>
            <div class="services_item-mid">
                <h3 class="services_item-mid-title">{{item.title}}<img class="services_item-mid-texts-img" :src="item.img" alt=""></h3>
                <p class="services_item-mid-text">{{ item.textGrey }}</p>
                <div class="services_item-mid-tegs" >
                    
                    <div class="services_item-mid-teg" :class="`services_item-mid-teg-${item.color}`" v-for="value in item.tegs" :key="value.id">{{ value.teg }}</div>
                </div>
            </div>
        </div>
        <div class="services_item-right">
            <button class="services_item-right-btn">
                <img src="@/assets/img/rightUp.svg" alt="">
            </button>
        </div>
    </div>
</template>
<script setup>
defineProps({
  item: Object,
})
</script>
<style scoped>
.services_item{
    /* border: 1px solid #0000001A; */
    padding: 24px;
    border-radius: 22px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
    transition: all .3s;
}
.services_item-item {
    display: flex;
    gap: 32px;
    
}
.services_item:hover {
    cursor: pointer;
    background-color: #FDFDFD;
}
.services_item-left img {
    max-width: 408px;
    width: 100%;
    border-radius: 22px;
}
.services_item-mid {
    display: flex;
    max-width: 1100px;
    flex-direction: column;
    gap: 25px;
}
.services_item-mid-texts {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 17px;
}
.services_item-mid-text {
    color: #080808;
    font-size: 20px;
}
.services_item-mid-texts-img {
    width: 22px;
    height: 22px;
}
.services_item-mid-title {
    font-size: 28px;
    font-weight: 500;
    display: flex;
    color: #696D73;
    align-items: center;
    gap: 12px;
}
.services_item-right-btn {
    background-color: #F4F4F4;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-radius: 50%;
}
.services_item-mid-tegs {
    display: flex;
    flex-wrap: wrap;
    gap:4px;
} 
.services_item-mid-teg {
    background-color: #FBFBFB;
    padding: 6px 12px;
    padding-right: 28px;
    border-radius: 15px;
    font-size: 15px;
    color: #080808;
    position: relative;
}
.services_item-mid-teg::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 11px;
    width: 6px;
    height: 6px;
    background-color: #FF0033;
    border-radius: 50%;
}
.services_item-mid-teg-blue::before {
    background-color: var(--blue-color);
}
.services_item-mid-teg-green::before {
    background-color: var(--green-color);
}
.services_item-mid-teg-sky::before {
    background-color: #0AD8FF;
}
.services_item-mid-teg-pink::before {
    background-color: var(--pink-color);
}
.services_item-mid-teg-orange::before {
    background-color: var(--yellow-color);
}
@media(max-width:1440px) {
    .services_item-mid-title {
        font-size: 22px;
    }
    .services_item-mid-teg {
        font-size: 12px;
    }
    .services_item-mid-text {
    font-size: 16px;
} 
}
</style>
