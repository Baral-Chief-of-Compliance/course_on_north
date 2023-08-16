<template>
    <v-container>
        <div :class="[ width > 1280 ? 'text_style': 'text_style_mobile']">{{ props.text }}</div>
    </v-container>
</template>

<script setup>
import {inject, defineProps} from 'vue';


const width = inject('width');

const props = defineProps({
    text: String
})
</script>

<style scoped>

    .text_style{
        font-family: "MontserratMedium";
        font-size: 20px;
        line-height: 2; 
    }

    
    .text_style_mobile{
        font-family: "MontserratMedium";
        font-size: 16px;
        line-height: 2;
    }
</style>