<template>
    <div class="solutions">
        <div class="container">
            <h3 class="title_3">Решения</h3>
            <div class="solutions_all">
                <SolutionsItem />
            </div>
        </div>
    </div>
</template>
<script setup>
import SolutionsItem from './SolutionsItem.vue';
</script>
<style>
.solutions {
    margin-top: 80px;
}
.solutions_all {
    margin-top: 50px;
}
@media(max-width: 450px) { 
    .solutions_all {
        margin-top: 40px;
    }
}
</style>