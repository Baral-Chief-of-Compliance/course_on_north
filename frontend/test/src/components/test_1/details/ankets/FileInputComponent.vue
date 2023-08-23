<template>
    <v-file-input 
        variant="solo-filled"
        :label="title"
        :color="mainColor"
        class="text_field_label"
    >
    </v-file-input>
</template>

<script setup>
import { defineProps, inject, defineEmits, computed } from 'vue';

const mainColor = inject('mainColor')

const props = defineProps({
    title: String
})


</script>

<style scoped>
    .text_field_label{
        font-family: "MontserratMedium";
    }
</style>