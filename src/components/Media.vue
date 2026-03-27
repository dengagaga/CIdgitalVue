<template>
    <section class="medias">
        <div class="container">
            <h3 class="title_3">Медиа</h3>
            <div class="medias_all">
                <div class="medias_item" v-for="value in mediaStore.media" :key="value.id">
                    <div class="medias_all-top">
                        <p class="medias_all-top-date">{{ value.date }}</p>
                        <p class="medias_all-top-tema">{{ value.tema }}</p>
                    </div>
                    <p class="medias_all-text">{{ value.text }}</p>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script setup>
import { useMediaStore } from '@/stores/mediaStore';
const mediaStore = useMediaStore()
</script>
<style scoped>
.medias {
    margin-top: 80px;
}    
.medias_all {
    display: flex;
    justify-content: space-between;
}
.medias_item {
}
.medias_all-top {
    color: #757575;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 16px;
}
.medias_all-top-date {
}
.medias_all-top-tema {
}
.medias_all-text {
    font-size: 18px;
    color: #080808;
}

@media(max-width:1440px) {
.medias_all-top {
    font-size: 14px;
}
.medias_all-text {
    font-size: 16px;
}
}
</style>