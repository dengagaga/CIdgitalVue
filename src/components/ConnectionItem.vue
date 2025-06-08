<template>
      <a :href="text == 'Связаться по телефону' ? 'tel:+79819975000' : 'mailto:hi@cidgital.ru'" class="connection_item">
            <p class="connection_item-text">{{ text }}</p>
            <h6 class="connection_item-title">{{ title }}</h6>
      </a>

</template>
<script setup>
defineProps({
  title: String,
  text: String
})

</script>
<style>
.connection_item {
  background-color: #FBFBFB;
  border-radius: 22px;
  padding: 45px 42px 20px;
  width: 100%;
  color: #000000;
}
.connection_item-text {
  font-weight: 500;
  font-size: 16px;
}
.connection_item-title {
  font-size: 22px;
  font-weight: 600;
  margin-top: 50px;
}
@media(max-width: 1440px) {

}
@media(max-width: 1366px) {

}
@media(max-width: 1024px) {
 
}
@media(max-width:450px) {
 
}
</style>