<template>
    <div class="mobil_menu">
        <div class="mobil_menu--titles">
            <img class="mobil_menu--img" @click="$emit('closeMobilmenu')" src="@/assets/img/RightUp.png" alt="">
            <h3 class="mobil_menu--title">{{ mobilMenuTitle }}</h3>
        </div>
        <ul class="mobil_menu--list">
            <li class="mobil_menu--item" v-for="item in menu" :key="item.id">
                <router-link class="mobil_menu--link" to="">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { useBurgerStore } from '@/stores/burger';
import { onMounted, ref } from 'vue';
const burgerStore = useBurgerStore()
const props = defineProps({
    mobilMenuTitle: String
})
defineEmits(['closeMobilmenu'])
const menu = ref([])
onMounted(() => {
    burgerStore.mobileBurger.forEach(item => {
        if (item.title == props.mobilMenuTitle) {
            menu.value = []
            if (item.links) {
                  if (item.links.length > 0) {
                        menu.value = item.links
                    }
            }
          
        }
    })
})
</script>
<style>
.mobil_menu {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -16px;
    width: 115%;
    background-color: #fff;
    padding: 20px 16px;
}
.mobil_menu--titles {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
}
.mobil_menu--title {
    font-size: 16px;
    color: #97A3B7;
}
.mobil_menu--list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.mobil_menu--item {
}
.mobil_menu--link {
    color: #111B29;
    font-size: 16px;
}
</style>