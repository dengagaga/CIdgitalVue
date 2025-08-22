<template>
  <div
    class="solutions_item"
    v-for="item in solutionStore.solution"
    :key="item.id"
  >
    <h4 class="solutions_item-title">{{ item.title }}</h4>
    <div class="solutions_item-right">
      <p class="solutions_item-text">{{ item.text }}</p>
      <button class="solutions_item-btn">
        <img src="@/assets/img/arrowSolution.svg" alt="" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { useSolutionStore } from '@/stores/solution'
const solutionStore = useSolutionStore()
</script>
<style>
.solutions_item {
  border-bottom: 1px solid #0000001a;
  padding: 40px 0;
  display: flex;
  align-items: center;
  max-height: 128px;
  cursor: pointer;
  transition: all 0.3s;
}
.solutions_item:hover {
  transform: translateX(10px);
}
.solutions_item img {
  transition: all 0.3s;
}
.solutions_item:hover.solutions_item img {
  transform: rotate(45deg);
}
.solutions_item-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.solutions_item-title {
  font-size: 32px;
  font-weight: 500;
  color: #101010;
  max-width: 500px;
  width: 100%;
}
.solutions_item-text {
  color: #717171;
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
  width: 100%;
}
.solutions_item-btn {
  background-color: #f4f4f4;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  min-width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0000001a;
  cursor: pointer;
}

@media (max-width: 1440px) {
  .solutions_item-title {
    font-size: 22px;
    max-width: 365px;
    width: 100%;
  }
  .solutions_item-text {
    font-size: 16px;
    max-width: 555px;
    width: 100%;
  }
}
@media (max-width: 1366px) {
}
@media (max-width: 1024px) {
  .solutions_item-title {
    font-size: 18px;
    max-width: 250px;
    width: 100%;
  }
  .solutions_item-text {
    font-size: 14px;
    max-width: 500px;
    width: 100%;
  }
  .solutions_item-right {
    gap: 30px;
  }
}
@media (max-width: 450px) {
  .solutions_item {
    flex-direction: column;
    gap: 20px;
    max-height: 200px;
    padding: 24px 0;
    align-items: start;
    position: relative;
  }
  .solutions_item-text {
    max-width: 310px;
  }
  .solutions_item-btn {
    top: 24px;
    right: 0;
    position: absolute;
  }
  .solutions_item:hover {
    transform: none;
  }
}
</style>
