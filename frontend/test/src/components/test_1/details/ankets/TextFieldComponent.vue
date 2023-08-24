<template>
    <v-text-field 
        class="text_field_label mb-2"  
        variant="solo-filled"
        :color="mainColor" 
        v-model="valueField"
        :type="props.type"
        :rules="props.rules"
    >
        <template v-slot:label>
            <span class="d-inline-block text-truncate" style="max-width: 600px;">
                {{  props.title }}   
            </span>
        </template>
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
    },

    rules:{
        type: Array,
    }
})


const emit = defineEmits(['update:modelValue'])

const width = inject('width')


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