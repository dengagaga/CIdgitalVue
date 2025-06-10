<template>
    <div class="industries">
        <div class="container">
            <h3 class="title_3">Отрасли</h3>
            <div class="industries_all">
                <IndustriesItem />
            </div>
        </div>
    </div>
</template>
<script setup>
import IndustriesItem from './IndustriesItem.vue';
</script>
<style>
.industries_all {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 50px;
}

@media(max-width: 1024px) {
     .industries_all {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media(max-width: 450px) { 
    .industries_all {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
