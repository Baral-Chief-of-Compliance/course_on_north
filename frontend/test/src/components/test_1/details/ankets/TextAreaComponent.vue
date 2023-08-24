<template>
    <v-textarea
        class="text_field_label mb-2"
        variant="solo-filled"
        :color="mainColor"
        :label="props.title"
        v-model="valueField"
        readonly
    >
    </v-textarea>
</template>

<script setup>
import { defineProps, inject, defineEmits, computed } from 'vue';


const props = defineProps({
    title: String,
    modelValue: {
        required: true,
        type: String
    }
})

const mainColor = inject('mainColor')

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