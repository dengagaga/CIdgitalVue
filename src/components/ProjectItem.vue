<template>
  <div
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
  >
    <div class="project" v-if="item" :class="!item.tags ? 'project--none_tags' : ''">
      <div class="project_top" :class="active ? 'project_top--active' : ''">
        <img
          v-if="item.img != 'нет'"
          class="project_img"
          @click="item.img == 'нет' ? '' : modalStore.toggleProjectModal(item.id)"
          :src="item.img"
          alt=""
        />
        <div v-else class="projectitem_top">
            <img class="projectitem_top-img" src="../assets/img/sat.png" alt="">
            <h3 class="projectitem_top-title">Изображение не загружено.</h3>
            <p class="projectitem_top-text">В настоящее время переносим наше портфолио, поэтому все проекты пока недоступны для просмотра онлайн.</p>
        </div>
        <video class="project_video" :src="item.video"></video>
        <div class="drop_list" v-if="active">
          <button v-for="stack in item.stack" :key="stack" class="drop_list-btn">{{ stack }}</button>
          <!-- <button class="drop_list-btn"></button> -->
          <!-- <button class="drop_list-btn">UX/UI дизайн</button>
          <button class="drop_list-btn">Аналитика</button> -->
        </div>
        <div class="drop_list-right" v-if="active">
          <a href="https://www.laserzon.ru/" target="_blank" class="drop_list-right-link"
            ><img :src="item.ava" alt="" />{{ item.title }}</a
          >
          <div class="drop_list-right-developers">
            <img src="../assets/img/elips2.png" alt="" />
            <img src="../assets/img/elips1.png" alt="" />
            <img src="../assets/img/elips3.png" alt="" />
          </div>
        </div>
        <div v-if="item.img != 'нет'" class="project_plus" @click="active = !active">
          <img
            class="project_plus-img"
            :class="active ? 'project_plus-img--active' : ''"
            src="../assets/img/plusSm.svg"
            alt=""
          />
        </div>
      </div>
      <div class="tags" v-if="item.tags">
        <div class="tag" v-for="tag in item.tags" :key="tag">
          {{ tag }}
        </div>
      </div>
      <img class="project_logo" src="../assets/img/logoProj.png" alt="" v-else />
      <h4 @click="item.img == 'нет' ? '' : modalStore.toggleProjectModal(item.id)" class="services_item-top-title">
        {{ item.name }}
      </h4>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/modal'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
const modalStore = useModalStore()
const active = ref(false)
defineProps({
  item: Object,
})
</script>
<style scoped>
.project {
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
}
.project_top {
  position: relative;
}
.project_top--active::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: linear-gradient(69.72deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 99.38%);
  transition: all 0.3s;
}
.project_top:hover.project_top--active::after {
  opacity: 1;
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
  background-color: #ff9900;
}
.tag:nth-child(2) {
  background-color: #015ef9;
}
.tag:nth-child(3) {
  background-color: #696d73;
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
  z-index: 2;
  opacity: 0;
  transition: all 0.3s;
}
.project_plus-img {
  width: 20px;
  transition: all 0.3s;
}
.project_top:hover .project_plus {
  opacity: 1;
}
.project_plus:hover {
  background-color: #f5f5f5;
}
.project--none_tags {
  justify-content: space-between;
}
.project_plus-img--active {
  transform: rotate(45deg);
}
.drop_list {
  position: absolute;
  z-index: 2;
  bottom: 82px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  transition: all 0.3s;
}
.project_top:hover .drop_list {
  opacity: 1;
}
.drop_list-btn {
  font-size: 16px;
  font-weight: 400;
  /* max-width: 94px; */
  width: 100%;
  padding: 0 12px;
  height: 35px;
  border-radius: 16px;
  background-color: #fff;
}
/* .drop_list-btn:nth-child(3) {
  max-width: 126px;
  width: 126px;
} */
/* .drop_list-btn:nth-child(4) {
  max-width: 126px;
  width: 105px;
} */
.drop_list-right {
  position: absolute;
  bottom: 20px;
  left: 82px;
  display: flex;
  gap: 30px;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  z-index: 2;
}
.project_top:hover .drop_list-right {
  opacity: 1;
}
.drop_list-right-link {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  /* max-width: 154px; */
  /* width: 154px; */
  padding-right: 12px;
  padding-left: 12px;
  height: 40px;
  background-color: #fff;
  color: #000;
  border-radius: 20px;
}
.drop_list-right-link img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.drop_list-right-developers img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 1px 0px 0px 0px #000000;
}
.drop_list-right-developers img:nth-child(1) {
  position: relative;
  z-index: 3;
}
.drop_list-right-developers img:nth-child(2) {
  margin-left: -12px;
  position: relative;
  z-index: 2;
}
.drop_list-right-developers img:nth-child(3) {
  margin-left: -12px;
}


.projectitem_top {
  height: 500px;
  padding: 50px;
  background-color: #FFFFFFCC;
}
.projectitem_top-img {
}
.projectitem_top-title {
  margin-bottom: 40px;
  margin-top: 50px;
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  max-width: 326px;
}
.projectitem_top-text {
  color: #696D73;
  font-size: 14px;
  font-weight: 500;
  max-width: 346px;
}
@media (max-width: 1440px) {
  .project_img {
    width: 100%;
    height: 380px;
    border-radius: 6px;
  }
  .projectitem_top-title {
  margin-bottom: 40px;
  margin-top: 50px;
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  max-width: 286px;
}
.projectitem_top-text {
  color: #696D73;
  font-size: 12px;
  font-weight: 500;
  max-width: 286px;
}
  .projectitem_top {
  height: 380px;
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

  .drop_list {
    gap: 4px;
  }
  .drop_list-btn {
    font-size: 14px;
    /* max-width: 84px; */
    width: 100%;
    height: 32px;
  }
  /* .drop_list-btn:nth-child(3) {
    max-width: 116px;
    width: 116px;
  }
  .drop_list-btn:nth-child(4) {
    max-width: 116px;
    width: 99px;
  } */

  .drop_list-right {
    position: absolute;
    bottom: 20px;
    left: 82px;
  }
  .drop_list-right-link {
    font-size: 14px;
    gap: 8px;
    /* max-width: 124px;
    width: 124px; */
    border-radius: 16px;
    height: 32px;
  }
  .drop_list-right-developers img {
    width: 32px;
    height: 32px;
  }
}
@media (max-width: 450px) {
  .project_img {
    width: 100%;
    height: 220px;
    border-radius: 6px;
  }
  .projectitem_top {
  height: 220px;
  padding: 20px;
  padding-left: 0px;
}
.projectitem_top-img {
    max-width: 40px;
}
.projectitem_top-title {
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 200px;
}
  .project_plus {
    opacity: 1;
    background-color: #ffffff4b;
  }
  .drop_list-right {
    opacity: 1;
    left: 62px;
    gap: 15px;
  }
  .drop_list-right-link {
    font-size: 12px;
  }
  .drop_list {
    opacity: 1;
    bottom: 62px;
  }
  .drop_list-btn {
    font-size: 12px;
    height: 25px;
    /* max-width: 68px; */
  }
  /* .drop_list-btn:nth-child(3) {
    max-width: 100px;
    width: 100px;
  }
  .drop_list-btn:nth-child(4) {
    max-width: 100px;
    width: 90px;
  } */
}
</style>
