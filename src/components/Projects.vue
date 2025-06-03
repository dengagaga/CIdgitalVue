<template>
     <section class="projects">
        <div class="container">
          <div class="main_projects">
            <projectItem v-for="item in projectStore.projectItemArray" :item="item" :key="item"></projectItem>
          </div>
        </div>
    </section>
</template>
<script setup>
import projectItem from '@/components/ProjectItem.vue';
import { useProjectStore } from '@/stores/project'
const projectStore =  useProjectStore()
</script>
<style>
.main_projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding-bottom: 100px;
}
@media(max-width: 450px) {
  .main_projects {
  display: flex;
  flex-direction: column;
  gap: 23px;
}
  }
</style>
