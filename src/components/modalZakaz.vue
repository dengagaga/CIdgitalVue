<template>
    <div class="modal">
        <div class="modal_all">
            <div class="modal_top">

            </div>
            <div class="modal_main">
                <h2 class="title_2">
                    Расскажите о вашем проекте
                </h2>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style>
.modal {
    backdrop-filter: blur(2px);
    background-color: #00000080;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9998;
}
.modal_all {
    position: absolute;
    max-width: 1000px;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 22px;
    width: 100%;
}
.modal_top {
    background: url(../assets/img/fonModal.png);
    height: 149px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 22px 22px 0 0;
}
.modal_main {
    margin-top: -25px;
    background-color: #fff;
    padding: 40px 42px;
    border-radius: 22px 22px 0 0;
}
</style>
