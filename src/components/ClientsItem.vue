<template>
    <div class="clients_bot-list-item">
        <img :src="item.img" alt="">
    </div>
</template>
<script setup>
defineProps({
    item: Object
})
</script>
<style>
.clients_bot-list-item {
    border: 2px solid #0000001A;
    background: transparent;
    border-radius: 103px;
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media(max-width: 1440px) {
    .clients_bot-list-item {
        height: 160px;
        border-radius: 83px;
    }
}
</style>