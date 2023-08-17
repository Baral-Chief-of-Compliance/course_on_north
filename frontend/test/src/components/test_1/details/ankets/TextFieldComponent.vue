<template>
    <v-text-field 
        class="text_field_label"  
        variant="solo-filled"
        :color="mainColor" 
        :label="props.title"
        v-model="valueField"
        :type="props.type"
    >
    </v-text-field>
</template>

<script setup>
import { defineProps, inject, computed, defineEmits } from 'vue';

const mainColor = inject('mainColor')

const props = defineProps({
    title: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        required: true,
        type: String
    }
})


const emit = defineEmits(['update:modelValue'])


const valueField = computed({
    get(){
        return props.modelValue
    },

    set(newValue){
        emit('update:modelValue', newValue)
    }
})



</script>

<style>
    .text_field_label{
        font-family: "MontserratMedium";
    }
</style>