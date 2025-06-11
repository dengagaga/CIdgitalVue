<template>
      <div class="cliets_view-all-top">
                  <div class="cliets_view-top">
                      <img :src="project[0].ava" alt="">
                      <div class="cliets_view-top-right">
                        <h4 class="cliets_view-top-right-title">{{ project[0].name }}</h4>
                        <div class="cliets_view-top-right-texts">
                            <p>{{ project[0].cooperat }}</p>
                            <p>{{ project[0].projects }}</p>
                            <p>{{ project[0].task }}</p>
                        </div>
                      </div>
                  </div>
                  <div class="cliets_view-about">
                      <p class="cliets_view-about-text">О клиенте</p>
                      <p class="cliets_view-about-text-big">{{ project[0].desc }}</p>
                  </div>  
            </div>
</template>
<script setup>
defineProps({
  project: Array
})

</script>
<style>
.cliets_view-top {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 120px;
}
.cliets_view-top-right-title {
  font-size: 44px;
  font-weight: 600;
}
.cliets_view-top-right-texts {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 24px;
  color: #696D73;
}

.cliets_view-about {
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;
}
.cliets_view-about-text {
  font-size: 18px;
  font-weight: 600;
}
.cliets_view-about-text-big {
   font-size: 24px;
  font-weight: 600;
  max-width: 861px;
}

</style>