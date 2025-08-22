<template>
  <div
    class="select_wrapper"
    v-for="item in projectStore.selectProject"
    :key="item.id"
  >
    <button
      class="select_wrapper-btn"
      @click="toggleSelect(item, projectStore.selectProject)"
    >
      <p class="select_wrapper-title">
        {{ item.title
        }}<span class="select_wrapper-count">{{ item.select.length }}</span>
      </p>
      <img src="@/assets/img/arrow.png" alt="" />
    </button>

    <transition>
      <div class="select_dropList" v-if="item.active">
        <ul class="select_list">
          <li
            class="select_list-item"
            @click="toggleSelectItem(select)"
            :class="{ 'select_list-item--active': select.active }"
            v-for="select in item.select"
            :key="select.id"
          >
            {{ select.title }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
  <div v-if="projectStore.selectedProject">
    <ul>
      <li
        class="select_wrapper-item"
        v-for="item in projectStore.selectedProject"
        :key="item"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useProjectStore } from '@/stores/project'
const projectStore = useProjectStore()
const toggleSelect = (item, array) => {
  const wasActive = item.active
  array.forEach(el => (el.active = false))
  item.active = !wasActive
}

// const toggleSelectItem = (item) => {
//     // Переключаем активное состояние элемента
//     item.active = !item.active;

//     // Добавляем или удаляем элемент из selectedProject
//     if (projectStore.selectedProject.includes(item)) {
//         projectStore.selectedProject.splice(projectStore.selectedProject.indexOf(item), 1);
//     } else {
//         projectStore.selectedProject.push(item);
//     }

//     console.log('Selected projects:', projectStore.selectedProject);

//     // Пересчитываем projectItemArraySelect на основе всех выбранных проектов
//     if (projectStore.selectedProject.length === 0) {
//         // Если ничего не выбрано, очищаем массив
//         projectStore.projectItemArraySelect = [];
//     } else {
//         // Иначе фильтруем projectItemArray по всем выбранным тегам
//         const selectedTags = projectStore.selectedProject.map(project => project.title);

//         projectStore.projectItemArraySelect = projectStore.projectItemArray.filter(item => {
//             // Проверяем, содержит ли item хотя бы один из выбранных тегов
//             return selectedTags.some(tag => item.tags.includes(tag));
//         });
//     }

//     console.log('Filtered items:', projectStore.projectItemArraySelect);
// };

const toggleSelectItem = item => {
  // Переключаем активное состояние элемента
  item.active = !item.active

  // Добавляем или удаляем элемент из selectedProject
  const itemIndex = projectStore.selectedProject.indexOf(item)
  if (itemIndex !== -1) {
    projectStore.selectedProject.splice(itemIndex, 1)
  } else {
    projectStore.selectedProject.push(item)
  }

  console.log('Selected projects:', projectStore.selectedProject)

  // Пересчитываем projectItemArraySelect на основе всех выбранных проектов
  if (projectStore.selectedProject.length === 0) {
    // Если ничего не выбрано, очищаем массив
    projectStore.projectItemArraySelect = []
  } else {
    // Получаем все выбранные теги
    const selectedTags = projectStore.selectedProject.map(
      project => project.title
    )

    // Фильтруем элементы, которые содержат ВСЕ выбранные теги
    projectStore.projectItemArraySelect = projectStore.projectItemArray.filter(
      item => {
        return selectedTags.every(tag => item.tags.includes(tag))
      }
    )
  }

  console.log(
    'Filtered items (must match ALL tags):',
    projectStore.projectItemArraySelect
  )
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.select_wrapper {
}
.select_wrapper-title {
  font-size: 14px;
  display: flex;
  align-items: start;
}
.select_wrapper-btn {
  display: flex;
  gap: 9px;
  border: 2px solid #0000001a;
  border-radius: 50px;
  padding: 11px 14px;
  cursor: pointer;
}
.select_wrapper-count {
  font-size: 9px;
  font-weight: 600;
  margin-left: 4px;
  color: #717171;
}
.select_dropList {
  background-color: #fff;
  z-index: 2;
  padding: 15px 10px;

  position: absolute;
  right: 0;
  left: 35px;
}
.select_list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.select_list-item {
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #0000001a;
  padding: 10px 14px;
  border-radius: 50px;
}
.select_list-item--active {
  background-color: #f5f5f5;
}
.select_wrapper-item {
  font-size: 14px;
}
@media (max-width: 450px) {
  .select_wrapper-title {
    font-size: 11px;
  }
  .select_wrapper-count {
    margin-left: 3px;
  }
  .select_wrapper-btn {
    gap: 6px;
    padding: 9px 9px;
  }
  .header_mid-oneFon-all img {
    max-width: 14px;
  }
}
</style>
