<template>
    <div class="form-input">
        <label :for="name" v-if="label">{{ label }}</label>
        <input type="text" class="input-text" :type="type" :name="name" :id="name" :placeholder="placeholder" :value="value" @input="updateValue">
        <erorNotice :error="error" />
    </div>
</template>
<script setup>
import erorNotice from './erorNotice.vue'
defineProps({
    type:String,
    error:Array,
    label:Boolean,
    name:String,
    placeholder:String,
    value:String,
})
const emit = defineEmits(['update:value'])
const updateValue = (e) => emit('update:value', e.target.value)
</script>
<style scoped>
.autorization-input input{
    border: 1px solid #3D3D3D;
    width: 100%;
    margin-top: 6px;
    font-size: 14px;
    width: 100%;
    height: 48px;
    border-radius: 10px;
    padding-left: 10px;
    background-color: #FFFFFF0D;
}
</style>