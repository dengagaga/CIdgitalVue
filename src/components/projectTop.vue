<template>
    <section class="project_top">
            <div class="project_top-left">
                <img src="" alt="">
                <h3 class="project_top-title">{{ project.title }}</h3>
            </div>
            <div class="project_top-rigth">
                <h2 class="project_top-rigth-title">{{ project.name }}</h2>
                <p class="project_top-rigth-text">{{ project.text }}</p>
                <a :href="project.link" class="project_top-rigth-link">
                    <img src="@/assets/img/link.svg" alt="">
                    {{ project.linkTitle }}
                    <img src="@/assets/img/arrowRight.svg" alt="">
                </a>
            </div>
    </section>
</template>
<script setup>
defineProps({
    project: Object
})
</script>
<style scoped>
.project_top {
    padding: 17px 28px;
    padding-bottom: 0px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.project_top-left {
    display: flex;
    gap: 12px;
}
.project_top-title {
    font-size: 28px;
    font-weight: 600;
}
.project_top-rigth {
    max-width: 452px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.project_top-rigth-title {
    font-size: 42px;
    font-weight: 500;
}
.project_top-rigth-text {
    font-size: 16px;
}
.project_top-rigth-link {
    border-radius: 29px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: #000;
}
</style>
