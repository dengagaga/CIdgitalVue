<template>
  <div class="modal" @click.self="handleClickOutside">
    <div class="modal_all">
      <ModalZakaz v-if="modalStore.modalActive" />
      <img
        class="close"
        @click="modalStore.projectModalClose()"
        src="../assets/img/plusSm.svg"
        alt=""
      />
      <modalResume v-if="modalStore.modalResume" />
      <Transition name="cook-fade">
        <CookModal />
      </Transition>

      <main class="main" v-if="project.length > 0">
        <div class="container_project">
          <div class="project_all">
            <section class="project_cover">
              <img :src="project[0].img" alt="" class="project_cover-img" />
            </section>
            <div class="project">
              <projectTop :project="project[0]" />
              <projectCommand :project="project[0]" />
              <ProjectDescription :project="project[0]" />
              <ul v-if="project[0].list" class="project_list-prodiction mt-33">
                <li v-for="item in project[0].list" :key="item">{{ item }}</li>
              </ul>
              <p
                v-if="project[0].descTwo"
                class="project_text-prodiction mt-33"
              >
                {{ project[0].descTwo[0] }}
              </p>
              <p
                v-if="project[0].descThree"
                class="project_text-prodiction mt-33"
              >
                <span>01</span> {{ project[0].descThree[0] }}
              </p>
              <div class="container_sw">
                <img
                  class="project_img-dop"
                  v-if="project[0].imgGlavDop"
                  :src="project[0].imgGlavDop"
                  alt=""
                />
                <p
                  v-if="project[0].descFour"
                  class="project_text-prodiction mobil"
                >
                  <span class="mobil_span">02</span>
                  {{ project[0].descFour[0] }}
                </p>
                <img
                  class="project_img-dop"
                  v-if="project[0].imgGlavDopTwo"
                  :src="project[0].imgGlavDopTwo"
                  alt=""
                />
                <img
                  class="project_img-dop"
                  v-if="project[0].imgGlavDopThree"
                  :src="project[0].imgGlavDopThree"
                  alt=""
                />
                <p
                  v-if="project[0].descFive"
                  class="project_text-prodiction mobil"
                >
                  <span class="mobil_span">03</span>
                  {{ project[0].descFive[0] }}
                </p>
                <swiper :project="project[0]" v-if="project[0].swiper" />
                <img
                  class="project_img"
                  v-if="project[0].imgGlav"
                  :src="project[0].imgGlav"
                  alt=""
                />
                <p
                  v-if="project[0].title == 'План Production'"
                  class="project_text-prodiction mobil"
                >
                  <span class="mobil_span">03</span>Структурированное
                  представление услуг. Детализировали пошаговую схему
                  сотрудничества, показывая этапы поддержки психологов и
                  перспективы развития личного бренда и финансовых доходов.
                  <br />
                  <br />
                  Используя аналитику, наши дизайнеры разработали сайт, который
                  выглядел профессионально и привлекательно. Благодаря удобной
                  навигации пользователи могут легко находить нужную информацию
                  и понимать ценность предложений агентства.
                  <br />
                  <br />
                  Благодаря такому подходу новый сайт обеспечивал клиентам
                  агентства полное понимание предлагаемой программы продвижения,
                  создавал чувство комфорта и уверенности в сотрудничестве с
                  командой экспертов Plan Production.
                </p>
                <p
                  v-if="project[0].descSix"
                  class="project_text-prodiction mobil"
                >
                  <span class="mobil_span">04</span> {{ project[0].descSix[0] }}
                </p>
              </div>
              <a
                target="_blank"
                :href="project[0].behance"
                v-if="project[0].behance"
                class="project_link"
                ><img src="@/assets/img/bh.png" alt="" />Смотреть проект на
                Behance<img src="@/assets/img/arrowRight.svg" alt=""
              /></a>
              <ProjectWorked :project="project[0]" />
              <div class="project_footer-container">
                <ProjectFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import CookModal from '@/components/CookModal.vue'

import projectTop from '@/components/projectTop.vue'
import projectCommand from '@/components/projectCommand.vue'
import { useRoute } from 'vue-router'
import { ref, watch, computed, onMounted } from 'vue'
import { useProjectStore } from '../stores/project'
import ProjectDescription from '@/components/projectDescription.vue'
import modalResume from '@/components/modalResume.vue'
import ProjectWorked from '@/components/projectWorked.vue'
import ProjectFooter from '@/components/projectFooter.vue'
import ModalZakaz from '@/components/modalZakaz.vue'
import swiper from '@/components/swiper.vue'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
const projectStore = useProjectStore()

const route = useRoute()
const idProject = computed(() => modalStore.idProject)
const project = ref([])
onMounted(() => {
  project.value = projectStore.projectItemArray.filter(
    item => item.id == idProject.value
  )
})
const handleClickOutside = () => {
  modalStore.projectModalClose()
}
</script>

<style scoped>
.modal {
  backdrop-filter: blur(2px);
  background-color: #00000080;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 9998;
  overflow-y: auto;
  max-height: 100vh;
  display: flex;
  justify-content: center;
}
.close {
  position: absolute;
  width: 40px;
  height: 40px;
  right: 25px;
  cursor: pointer;
  top: 90px;
  padding: 10px;
  transform: rotate(45deg);
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #000000;
}
.modal_all {
  max-width: 1000px;
  border-radius: 22px;
  width: 100%;
  position: relative;
  margin-top: 30px;
  margin-bottom: auto;
  
  padding-bottom: 30px;
}
.container_project {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
.project_footer-container {
  padding: 0 27px;
}
.project_all {
  padding-bottom: 36px;
  margin-top: 40px;

  border-radius: 30px;
  background-color: #fff;
}
.project_cover {
  width: 100%;
}
.project_link {
  color: black;
  font-size: 18px;
  font-weight: 400;
  text-decoration: underline !important;
  gap: 12px;
  display: flex;
  margin-left: 26px;
  margin-top: 80px;
  margin-bottom: 80px;
  align-items: center;
}
.project_cover img {
  width: 100%;
  max-height: 721px;
  border-radius: 30px 30px 0 0;
}
.project {
  margin-top: -200px;
  padding: 15px;
  background: #fff;
  backdrop-filter: blur(100px);
  border-radius: 22px 22px 0 0;
}
.mt-33 {
  margin-top: 33px;
}
.project_text-prodiction {
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  max-width: 503px;
  padding: 0 27px;
}
.project_list-prodiction {
  font-style: italic;
  font-size: 14px;
  font-weight: 300;
  position: relative;
  max-width: 503px;
  padding: 0 27px;

  margin-left: auto;
}
.project_list-prodiction li {
  margin-left: 27px;
  list-style: disc !important;
}
.project_text-prodiction span {
  color: #696d73;
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  left: -1px;
}
.project_img {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 80px;
  border-radius: 32px;
  border: 1px solid #0000001a;
}
.project_img-dop {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 32px;
  border: 1px solid #0000001a;
}

@media (max-width: 1440px) {
  .container_project {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
}
@media (max-width: 450px) {
  .project_link {
    margin-top: 20px;
    margin-bottom: 60px;
    margin-left: 12px;
    font-size: 14px;
  }

  .project_text-prodiction {
    padding: 0 27px;
  }
  .project_text-prodiction span {
    left: 5px;
  }
  .project_list-prodiction {
    padding: 0 16px;
  }
  .project_list-prodiction li {
    margin-left: 12px;
    list-style: disc !important;
  }
  .project {
    padding: 0;
    margin-top: -40px;
  }
  .project_footer-container {
    padding: 0 12px;
  }
  .project_img {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .mobil {
    padding: 0 16px;
  }
  .mobil_span {
    left: -8px !important;
  }
  .project_img-dop {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .container_sw {
    padding: 0 12px;
  }
}
</style>
