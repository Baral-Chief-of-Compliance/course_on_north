<template>
    <v-text-field 
        class="text_field_label"  
        variant="solo-filled"
        :color="mainColor" 
        :label="props.title"
    >
    </v-text-field>
</template>

<script setup>
import { defineProps, inject } from 'vue';

const props = defineProps({
    title: String
})

const mainColor = inject('mainColor')

</script>

<style>
    .text_field_label{
        font-family: "MontserratMedium";
    }
</style>