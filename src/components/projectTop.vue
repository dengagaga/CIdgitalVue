<template>
    <section class="project_top">
            <div class="project_top-left">
                <img :src="project.ava" alt="">
                <h3 class="project_top-title">{{ project.title }}</h3>
            </div>
            <div class="project_top-rigth">
                <h2 class="project_top-rigth-title">{{ project.name }}</h2>
                <p class="project_top-rigth-text">{{ project.text }}</p>
                <a target="_blank" :href="project.link" class="project_top-rigth-link">
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
    align-items: center;
    gap: 12px;
    max-height: 68px;
}
.project_top-left img {
    width: 68px;
    border-radius: 22px;
    height: 68px;
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
@media(max-width: 450px) {
  .project_top {
    padding: 17px 12px;
    flex-direction: column;
    gap: 50px;

}
.project_top-rigth-title {
    font-size: 22px;
    font-weight: 500;
}
.project_top-rigth {
    max-width: 260px;
    gap: 30px;
}
.project_top-rigth-text {
    font-size: 14px;
    color: #696D73;
}
}
</style>
