<template>
    <v-btn 
        class="mt-5" 
        :color="props.color" 
        block
        @click="$emit('btn-funk')"
        :type="props.type"
    >
        <div class="title" :style="{color: colorText}" >
            {{ props.title }}
        </div>
    </v-btn>
</template>

<script setup>
import { inject, defineProps } from 'vue';

const props = defineProps({
    title: String,
    color: String,
    colorText: String,
    type: String
});


const width = inject("width")

</script>

<style scoped>

    .title{
        font-family: "MontserratMedium";
    }
</style>