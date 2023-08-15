<template>
    <div :class="[ width > 1280 ? 'title' : 'title_mobile']" :style="{color: addColor}">
        {{ props.title }}
    </div>
</template>

<script setup>
import { defineProps, inject } from 'vue';

const props = defineProps({
    title: String
});

const addColor = inject("addColor");
const width = inject('width');

</script>

<style scoped>
    .title{
        font-size: 70px;
        font-weight: 400;
        line-height: 76px;
        font-family: "CorkiRegular";
        text-transform: uppercase;
    }

    .title_mobile{
        font-size: 36px;
        font-weight: 400;
        line-height: 76px;
        font-family: "CorkiRegular";
        text-transform: uppercase;
        line-height: 1.2;  
    }
</style>