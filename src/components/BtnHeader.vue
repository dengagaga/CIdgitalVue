<template>
     <button class="header_mid-right-btn">
        <img v-if="imgPath == 'analytics'" src="@/assets/analytics.svg" alt="">
        <img v-if="imgPath == 'stylus'" src="@/assets/stylus.svg" alt="">
        <img v-if="imgPath == 'development'" src="@/assets/development.svg" alt="">
        <img v-if="imgPath == 'crm'" src="@/assets/crm.svg" alt="">
        <img v-if="imgPath == 'rocket'" src="@/assets/rocket.svg" alt="">
        {{ title }}
    </button>
</template>
<script setup>
defineProps({
    title: String,
    imgPath: String,
})
</script>
<style>
.header_mid-right-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px;
    color: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 50px;
    font-size: 20px;
    height: 44px;
    font-weight: 500;
}
</style>