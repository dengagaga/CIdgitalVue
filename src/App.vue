<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
.inputbox-content input{
    width: 100%!important;
    height: 30px!important;
    box-sizing: border-box!important;
    line-height: 30px!important;
    font-size:16px!important;
    border:0!important;
    background: none!important;
    border-bottom:1px solid #ccc!important;
    outline:none!important;
    border-radius: 0!important;
    box-shadow: none!important;
    -webkit-appearance: none!important;
    transition: all .3s;
    &:hover{
        border-bottom:1px solid #000;
    }
    &:focus,&:valid{
    &~label{
        color: #1010104D;
        transform: translateY(-20px);
        font-size:10px;
        cursor:default;
    }
    }
    &:focus{
    &~.underline{
        width: 100%;
    }
} 

}
.underline {
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 2px;
    background:  #2962ff;
    transition: all 200ms ease-out;
}


</style>
