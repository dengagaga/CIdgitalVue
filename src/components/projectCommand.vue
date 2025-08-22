<template>
  <section class="project_command">
    <div class="project_command-one">
      <div class="project_command-one-all">
        <span class="project_command-one-span">Команда</span>
        <p class="project_command-one-text">{{ project.team }}</p>
      </div>
      <div class="project_command-one-all">
        <span class="project_command-one-span">Год</span>
        <p class="project_command-one-text">{{ project.year }}</p>
      </div>
      <div class="project_command-one-all">
        <span class="project_command-one-span">Длительность</span>
        <p class="project_command-one-text">{{ project.duration }}</p>
      </div>
      <div class="project_command-one-all">
        <span class="project_command-one-span">Платформа</span>
        <p class="project_command-one-text">{{ project.platform }}</p>
      </div>
    </div>
    <div class="project_command-two">
      <span class="project_command-one-span">Услуга:</span>
      <div class="project_command-two-texts">
        <p
          class="project_command-two-text"
          v-for="item in project.service"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div class="project_command-three">
      <span class="project_command-one-span">Стек:</span>
      <div class="project_command-two-texts">
        <div
          class="project_command-two-text"
          v-for="item in project.stack"
          :key="item"
        >
          {{ item }}
          <div class="project_command-two-text-imgs" v-if="item === 'Frontend'">
            <div class="project_command-hover">
              <img
                src="@/assets/img/react.svg"
                class="project_command-hover-img"
                alt=""
              />
              <p class="project_command-hover-text">React</p>
            </div>
            <div class="project_command-hover">
              <img
                src="@/assets/img/vue.svg"
                class="project_command-hover-img"
                alt=""
              />
              <p class="project_command-hover-text">Vue</p>
            </div>
          </div>
          <div class="project_command-two-text-imgs" v-if="item === 'Design'">
            <div
              class="project_command-two-text-imgs"
              v-for="img in project.stackImg"
              :key="img"
            >
              <div
                class="project_command-hover"
                v-if="item === 'Design' && img === 'figma'"
              >
                <img
                  src="@/assets/img/figma.svg"
                  class="project_command-hover-img"
                  alt=""
                />
                <p class="project_command-hover-text">Figma</p>
              </div>
              <div
                class="project_command-hover"
                v-if="item === 'Design' && img === 'ai'"
              >
                <img
                  src="@/assets/img/ai.svg"
                  class="project_command-hover-img"
                  alt=""
                />
                <p class="project_command-hover-text">Ai</p>
              </div>
              <div
                class="project_command-hover"
                v-if="item === 'Design' && img === 'ph'"
              >
                <img
                  src="@/assets/img/ph.svg"
                  class="project_command-hover-img"
                  alt=""
                />
                <p
                  class="project_command-hover-text project_command-hover-text-2"
                >
                  Photoshop
                </p>
              </div>
              <!-- <img src="@/assets/img/figma.svg"   alt="" /> -->
              <!-- <img src="@/assets/img/ai.svg" v-if="item === 'Design' && img === 'ai'" alt="" />
              <img src="@/assets/img/ph.svg" v-if="item === 'Design' && img === 'ph'" alt="" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="project_command-four">
      <span class="project_command-one-span">Отрасли:</span>
      <div class="project_command-two-texts">
        <p
          class="project_command-two-text"
          v-for="item in project.industries"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  project: Object,
})
</script>
<style scoped>
.project_command {
  background-color: #f8f7ff;
  border-radius: 6px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.project_command-one {
  display: flex;
}
.project_command-one-all {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 2px solid #0000000a;
  padding-right: 37px;
  padding-left: 37px;
}
.project_command-one-all:nth-child(1) {
  padding-left: 0;
}
.project_command-one-all:last-child {
  border-right: none;
}
.project_command-one-span {
  font-size: 14px;
  color: #696d73;
}
.project_command-one-text {
  font-size: 18px;
}
.project_command-two-text {
  display: flex;
  gap: 15px;
  align-items: center;
}
.project_command-two-text-imgs {
  display: flex;
  align-items: center;
  gap: 2px;
}
.project_command-two-texts {
  display: flex;
  gap: 37px;
  margin-top: 10px;
  font-size: 18px;
  color: #080808;
}
.project_command-hover {
  position: relative;
  cursor: pointer;
}
.project_command-hover-img {
}
.project_command-hover-text {
  position: absolute;
  padding: 6px 7px;
  border-radius: 4px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  background: #2c2c2c;
  top: -40px;
  left: -8px;
  opacity: 0;
  transition: all 0.3s;
  min-width: 48px;
  text-align: center;
}
.project_command-hover-text-2 {
  left: -22px;
}
.project_command-hover:hover .project_command-hover-text {
  opacity: 1;
}
.project_command-hover-text::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #2c2c2c transparent transparent transparent;
}
@media (max-width: 450px) {
  .project_command-one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
  .project_command-one-all {
    padding: 0;
  }
  .project_command-one-all:nth-child(2) {
    border-right: none;
    padding-left: 37px;
  }
  .project_command-one-all:nth-child(4) {
    padding-left: 37px;
  }
  .project_command-two-texts {
    flex-wrap: wrap;
  }
}
</style>
