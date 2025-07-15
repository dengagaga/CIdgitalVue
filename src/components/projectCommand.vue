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
        <p class="project_command-two-text" v-for="item in project.service" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
    <div class="project_command-three">
      <span class="project_command-one-span">Стек:</span>
      <div class="project_command-two-texts">
        <div class="project_command-two-text" v-for="item in project.stack" :key="item">
          {{ item }}
          <div class="project_command-two-text-imgs" v-if="item === 'Frontend'">
            <img src="@/assets/img/react.svg" alt="" />
            <img src="@/assets/img/vue.svg" alt="" />
          </div>
          <div class="project_command-two-text-imgs" v-if="item === 'Design'">
            <img src="@/assets/img/figma.svg" alt="" />
            <img src="@/assets/img/ai.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="project_command-four">
      <span class="project_command-one-span">Отрасли:</span>
      <div class="project_command-two-texts">
        <p class="project_command-two-text" v-for="item in project.industries" :key="item">
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
