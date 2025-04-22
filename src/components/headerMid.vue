<template>
    <div class="header_mid">
        <h1 class="title_1">Цифровые сидхи</h1>
        <div class="header_mid-oneFon">
            <div class="header_mid-threeFon"></div>
        </div>
        <!-- <div class="header_mid-twoFon"></div>
        <div class="header_mid-threeFon"></div> -->
    </div>
</template>
<script setup></script>
<style>

.header_mid {
    padding: 0 40px;
}
.title_1 {
    font-size: 180px;
    font-weight: 800;
    margin-bottom: 140px;
    margin-top: 250px;
    text-transform: uppercase;
    color: #fff;
}
.header_mid-oneFon {
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    height: 700px;
    position: relative;
}   
.header_mid-oneFon::after {
    content: '';
    right: 20px;
    left: 20px;
    top: -15px;
    position: absolute;
    background-color: #fff;
    opacity: 0.45;
    border-radius: 20px 20px 0 0;
    height: 200px;
    border: 1px solid #FFFFFF40;
}
.header_mid-oneFon::before {
    content: '';
    right: 40px;
    left: 40px;
    border: 1px solid #FFFFFF73;
    top: -30px;
    position: absolute;
    background-color: #fff;
    opacity: 0.25;
    border-radius: 20px 20px 0 0;
    height: 200px;
}

.header_mid-threeFon {
    content: '';
    right: 60px;
    left: 60px;
    border: 1px solid #FFFFFF73;
    top: -45px;
    position: absolute;
    background-color: #fff;
    opacity: 0.05;
    border-radius: 20px 20px 0 0;
    height: 200px;
}
</style>