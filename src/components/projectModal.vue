<template>
    <div class="project_modal">
        <iframe id="modalIframe" src="https://vayx.ru/" style="width: 100%; height: 100%; border: none;"></iframe>
    </div>
</template>
<script setup></script>
<style>
.project_modal {
    position: fixed;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 740px;
    max-width: 840px;
    width: 100%;
}
#modalIframe {
}
</style>