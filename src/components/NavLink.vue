<template>
  <router-link :href="link" class="befAll">
    <div class="nav_right-link-one">
      <p class="nav_right-link-text_rel">{{ title }}</p>
      <p class="nav_right-link-text_abs">{{ title }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  link: String,
})
</script>
<style>
.befAll {
  position: relative;
  height: 100%;
}
.befAll:nth-child(1)::after {
  content: '';
  transition: all 0.3s;
  /* opacity: 0; */
  width: 0px;
  height: 0px;
  border-radius: 50%;
  bottom: 19px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 2;
  position: absolute;
  background-color: var(--blue-color);
}
.befAll:nth-child(2)::after {
  content: '';
  transition: all 0.3s;
  /* opacity: 0; */
  width: 0px;
  height: 0px;
  border-radius: 3px;
  /* bottom: 5px; */
  transform: translateX(-50%);
  bottom: 19px;
  left: 50%;
  z-index: 2;
  position: absolute;
  background-color: var(--green-color);
}
.befAll:nth-child(3)::after {
  content: '';
  transition: all 0.3s;
  /* opacity: 0; */
  width: 0px;
  height: 0px;
  border-radius: 3px;
  /* bottom: 5px; */
  transform: translateX(-50%);
  bottom: 19px;
  left: 50%;
  z-index: 2;
  position: absolute;
  background-color: var(--yellow-color);
}
.befAll:nth-child(1):hover.befAll:nth-child(1)::after {
  width: 6px;
  height: 6px;
  /* opacity: 1; */
}
.befAll:nth-child(2):hover.befAll:nth-child(2)::after {
  width: 6px;
  height: 6px;
  /* opacity: 1; */
}
.befAll:nth-child(3):hover.befAll:nth-child(3)::after {
  width: 6px;
  height: 6px;
  /* opacity: 1; */
}
.nav_right-link-one {
  font-size: 15px;
  position: relative;
  color: var(--link-color);
  overflow: hidden;
}
.nav_right-link-one:hover .nav_right-link-text_rel {
  transform: translateY(-22px);
}
.nav_right-link-one:hover .nav_right-link-text_abs {
  transform: translateY(-21px);
}
.nav_right-link-text_rel {
  position: relative;
  transform: translateY(0px);
  transition: all 0.3s;
}
.nav_right-link-text_abs {
  position: absolute;
  transform: translateY(0px);
  transition: all 0.3s;
}
</style>
