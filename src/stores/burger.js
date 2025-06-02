import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBurgerStore = defineStore('burger', () => {
    
  const mobilBurgerActive = ref(false)
  const toggleMobilBurger = () => {
    mobilBurgerActive.value = !mobilBurgerActive.value
  }
  return { mobilBurgerActive, toggleMobilBurger }
})
