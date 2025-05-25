<template>
    <div class="clients_bot-list-item">
        <img src="" alt="">
    </div>
</template>
<script setup>
defineProps({
    img: Object
})
</script>
<style>
.clients_bot-list-item {
    border: 2px solid #F3F3F3;
    background: #FBFBFB4D;
    border-radius: 83px;
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media(max-width: 1440px) {
    .clients_bot-list-item {
        height: 160px;
    }
}
</style>