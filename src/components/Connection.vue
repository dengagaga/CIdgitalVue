<template>
     <section class="connection">
        <div class="container">
            <div class="connection_all">
            <ConnectionItem title="hi@cidgital.ru" text="Написать на почту "></ConnectionItem>
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
  padding-bottom: 105px;
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
 
}
</style>
