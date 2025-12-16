<template>
    <button class="btn">
        {{ title }}
        <slot></slot>
    </button>
</template>
<script setup>
defineProps({
    title: String,
})
</script>
<style>
.btn {
    
}
</style>
