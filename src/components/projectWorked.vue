<template>
  <section class="project_worked">
    <h3 class="project_worked-title">Над проектом работали</h3>
    <div class="project_worked-one-all" v-if="project.art || project.tilda || project.osn || project.artUx || project.kurator">
      <projectWorkedOne v-if="project.art" title="Арт-директор" :text="project.art" />
      <projectWorkedOne v-if="project.tilda" title="Дизайнер на Tilda" :text="project.tilda" />
      <projectWorkedOne v-if="project.osn" title="Основатель рекламного агентства Pofit Advance" :text="project.osn" />
      <projectWorkedOne v-if="project.artUx" title="Арт-директор UX-UI" :text="project.artUx" />
      <projectWorkedOne v-if="project.kurator" title="Куратор проекта" :text="project.kurator" />
    </div>
    <div class="project_worked-one-all" v-if="project.producers || project.designers || project.ThreeD">
      <projectWorkedOne v-if="project.producers" title="Продюсеры" :text="project.producers" />
      <projectWorkedOne v-if="project.designers" title="Графические дизайнеры" :text="project.designers" />
      <projectWorkedOne v-if="project.ThreeD" title="3D и моушен-дизайнер" :text="project.ThreeD" />
    </div>
    <div class="project_worked-one-all" v-if="project.designerUx || project.kurators || project.analUx">
      <projectWorkedOne v-if="project.designerUx" title="UX-UI-дизайнер" :text="project.designerUx" />
      <projectWorkedOne v-if="project.kurators" title="Куратор" :text="project.kurators" />
      <projectWorkedOne v-if="project.analUx" title="UX-аналитик" :text="project.analUx" />
    </div>
    <div class="project_worked-one-all" v-if="project.frontend">
      <projectWorkedOne v-if="project.frontend" title="Frontend" :text="project.frontend" />
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
  /* justify-content: space-between; */
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
