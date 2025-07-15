<template>
  <section class="project_worked">
    <h3 class="project_worked-title">Над проектом работали</h3>
    <div class="project_worked-one-all">
      <projectWorkedOne title="Арт-директор" :text="project.art" />
      <projectWorkedOne title="Арт-директор UX-UI" :text="project.artUx" />
      <projectWorkedOne title="Куратор проекта" :text="project.kurator" />
    </div>
    <div class="project_worked-one-all">
      <projectWorkedOne title="Продюсеры" :text="project.producers" />
      <projectWorkedOne title="Графические дизайнеры" :text="project.designers" />
      <projectWorkedOne title="3D и моушен-дизайнер" :text="project.ThreeD" />
    </div>
    <div class="project_worked-one-all">
      <projectWorkedOne title="UX-UI-дизайнер" :text="project.designerUx" />
      <projectWorkedOne title="Куратор" :text="project.kurators" />
      <projectWorkedOne title="UX-аналитик" :text="project.analUx" />
    </div>
    <div class="project_worked-one-all">
      <projectWorkedOne title="Frontend" :text="project.frontend" />
    </div>
  </section>
</template>
<script setup>
import projectWorkedOne from './projectWorkedOne.vue'

defineProps({
  project: Object,
})
</script>
<style>
.project_worked {
  padding: 0 27px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.project_worked-title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 18px;
}
.project_worked-one-all {
  display: flex;
  gap: 32px;
  justify-content: space-between;
}
@media (max-width: 450px) {
  .project_worked {
    padding: 0 12px;
  }
  .project_worked-title {
    font-size: 18px;
  }
  .project_worked-one-all {
    flex-wrap: wrap;
  }
}
</style>
