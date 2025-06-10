<template>
     <section class="connection">
        <div class="container">
            <div class="connection_all">
            <ConnectionItem title="hi@cidgital.ru" text="Написать на почту"></ConnectionItem>
            <ConnectionItem title="+7 981 997 50 00" text="Связаться по телефону"></ConnectionItem>
            </div>
        </div>
    </section>
</template>
<script setup>
import ConnectionItem from './ConnectionItem.vue';
</script>
<style>
.connection {
  /* padding-bottom: 105px; */
}
.connection_all {
  display: flex;
  gap: 18px;
}
@media(max-width: 1440px) {

}
@media(max-width: 1366px) {

}
@media(max-width: 1024px) {
 
}
@media(max-width:450px) {
    .connection_all {
      flex-direction: column;
      gap: 12px;
    }
    .connection_item-title {
      margin-top: 28px;
    }
    .connection_item {
    background-color: #FBFBFB;
    border-radius: 22px;
    padding: 45px 16px 20px;
    width: 100%;
}
.connection {
  /* padding-bottom: 70px; */
}
}
</style>
