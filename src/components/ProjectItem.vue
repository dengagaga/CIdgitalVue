<template>
    <div class="project" :class="!item.tags ? 'project--none_tags'  : ''">
        <div class="project_top">
            <img class="project_img" src="../assets/img/keus.png" alt="">
            <video class="project_video" :src="item.video"></video>
            <div class="project_plus">
                <img class="project_plus-img" src="../assets/img/plusSm.svg" alt="">
            </div>
        </div>
        <div class="tags" v-if="item.tags">
            <div class="tag" v-for="tag in item.tags" :key="tag">
                {{ tag }}
            </div>
        </div>
        <img class="project_logo" src="../assets/img/logoProj.png" alt="" v-else>
        <h4 class="services_item-top-title">{{ item.name }}</h4>
    </div>
</template>
<script setup>
defineProps({
    item:Object
})
</script>
<style>
.project {
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
}
.project_top {
    position: relative;
}
.project_img {
    width: 100%;
    height: 500px;
    border-radius: 6px;
}
.project_video {
    display: none;
    border-radius: 6px;

}
.tags {
    display: flex;
    font-size: 10px;
    font-weight: 600;
    gap: 6px;
}
.tag {
    color: white;
    padding: 5px;
    border-radius: 4px;
    word-spacing: 3px;
}
.tag:nth-child(1) {
    background-color: #FF9900;
}
.tag:nth-child(2) {
    background-color: #015EF9;
}
.tag:nth-child(3) {
    background-color: #696D73;
}
.project_logo {
    max-width: 95px;
}
.project_plus {
    bottom: 20px;
    left: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0;
    transition: all .3s;
}
.project_plus-img {
    width: 20px;
}
.project_top:hover .project_plus {
    opacity: 1;
}
.project_plus:hover {
    background-color: #FBFBFB;
}
.project--none_tags {
    justify-content: space-between;
}
@media(max-width:1440px) {
    .project_img {
    width: 100%;
    height: 400px;
    border-radius: 6px;
}
.project_logo {
    max-width: 91px;
    width: 100%;
}
.project_plus {
    bottom: 20px;
    left: 20px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
.project_plus-img {
    width: 16px;
}
}
</style>