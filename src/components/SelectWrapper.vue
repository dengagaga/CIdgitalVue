<template>
    <div class="select_wrapper" v-for="item in projectStore.selectProject" :key="item.id">
        <button class="select_wrapper-btn" @click="toggleSelect(item, projectStore.selectProject)">
            <p class="select_wrapper-title" >{{ item.title }}<span class="select_wrapper-count">{{ item.select.length }}</span></p>
            <img src="@/assets/img/arrow.png" alt="">
        </button>
       
        <transition>
            <div class="select_dropList" v-if="item.active"> 
                <ul class="select_list" >
                    <li class="select_list-item" @click="toggleSelectItem(select)" :class="{'select_list-item--active': select.active}" v-for="select in item.select" :key="select.id">{{ select.title }}</li>
                </ul>
            </div>
        </transition>
        
    </div>
     <div v-if="projectStore.selectedProject">
            <ul>
                <li class="select_wrapper-item" v-for="item in projectStore.selectedProject" :key="item">{{ item.title }}</li>
            </ul>
    </div>
</template>
<script setup>
import { useProjectStore } from '@/stores/project';
const projectStore = useProjectStore()
const toggleSelect = (item, array) => {
  const wasActive = item.active;
  array.forEach((el) => (el.active = false));
  item.active = !wasActive;   
}

const toggleSelectItem = (item) => {
    item.active = !item.active
    projectStore.selectedProject.push(item)
    console.log(projectStore.selectedProject);
    if (item.active) {
        projectStore.projectItemArraySelect = []
        projectStore.selectedProject.forEach((el) => {
            projectStore.projectItemArray.forEach((item) => {
                if (item.tags.includes(el.title)) {
                    projectStore.projectItemArraySelect.push(item)
                }
            })
        })
        console.log(projectStore.projectItemArraySelect);
    } else {
        projectStore.projectItemArraySelect = []
        projectStore.selectedProject = []
    }
  
    
}

// const toggleSelectItem = (item) => {
//     item.active = !item.active;
    
//     if (item.active) {
//         if (!projectStore.selectedProject.some(el => el === item)) {
//             projectStore.selectedProject.push(item);
//         }
//     } else {
//         projectStore.selectedProject = projectStore.selectedProject.filter(el => el !== item);
//     }

//     console.log(projectStore.selectedProject);
//     if (item.active) {
//         projectStore.projectItemArraySelect = [];
//         projectStore.selectedProject.forEach((el) => {
//             projectStore.projectItemArray.forEach((projectItem) => {
//                 if (projectItem.tags.includes(el.title)) {
//                     if (!projectStore.projectItemArraySelect.some(x => x === projectItem)) {
//                         projectStore.projectItemArraySelect.push(projectItem);
//                     }
//                 }
//             });
//         });
//         console.log(projectStore.projectItemArraySelect);
//     } else {
//         if (projectStore.selectedProject.length === 0) {
//             projectStore.projectItemArraySelect = [];
//         }
//     }
// };

</script>
<style>
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
    border: 2px solid #0000001A;
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
    border: 1px solid #0000001A;
    padding: 10px 14px;
    border-radius: 50px;
}
.select_list-item--active {
    background-color: #F5F5F5;
}
.select_wrapper-item {
    font-size: 14px;
}
</style>
