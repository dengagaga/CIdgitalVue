<template>
    <div class="services_item">
        <div class="services_item-left">
            <img src="" alt="">
        </div>
        <div class="services_item-mid">
            <p class="services_item-mid-texts"><img class="services_item-mid-texts-img" :src="item.img" alt=""><span>{{item.text}}</span></p>
            <h3 class="services_item-mid-title">{{item.title}}</h3>
        </div>
        <div class="services_item-right">
            <button class="services_item-right-btn">
                <img src="" alt="">
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
    border: 1px solid #0000001A;
    padding: 24px;
    border-radius: 22px;
    display: flex;
    gap: 32px;
    justify-content: space-between;
}
.services_item-left {
}
.services_item-mid {
}
.services_item-mid-texts {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 15px;
}
.services_item-mid-texts-img {
    width: 22px;
    height: 22px;
}
.services_item-mid-title {
}
.services_item-right {
}
.services_item-right-btn {
    background-color: #F4F4F4;
    width: 35px;
    height: 35px;
    border-radius: 50%;
}
</style>
