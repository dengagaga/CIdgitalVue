<template>
    <section class="project_description">
        <h3 class="project_description-title_3">Описание проекта</h3>
        <div class="project_description-texts">
            <p class="project_description-text" v-for="item in project.desc" :key="item">{{item}}</p>
        </div>
    </section>
</template>
<script setup>
defineProps({
    project: Object
})
</script>
<style>
.project_description {
    margin-left: auto;
    margin-top: 50px;
    max-width: 503px;
    padding: 0 27px;
}
.project_description-title_3 {
     font-size: 28px;
    font-weight: 500;
    margin-bottom: 50px;
}
.project_description-texts {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.project_description-text {
    font-size: 16px;
}
@media(max-width: 450px) {
    .project_description {
        margin-top: 40px;
        padding: 0 12px;
        
    }
   .project_description-title_3 {
     font-size: 18px;
    margin-bottom: 20px;
}
.project_description-text {
    font-size: 14px;
}
}
</style>