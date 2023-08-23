<template>
    <v-alert 
        :type="props.type"
        border="start"
        variant="tonal"
    >
        <template v-slot:title>
            <div class="title">
                {{ props.title  }}
            </div>
        </template>

        <div class="text mt-5">
            {{ props.text }}
        </div>


        <CheckBoxComonent 
            v-model="checkboxValue"
            :title="props.checkboxLabel"
            :rules="props.rules"
        />
    </v-alert>
    
</template>

<script setup>
import { inject, defineProps, ref, defineEmits, computed } from 'vue';
import CheckBoxComonent from './CheckBoxComonent.vue';


const width = inject('width')

const props = defineProps({
    title: String,
    text: String,
    type: String,
    checkboxLabel: String,

    modelValue: {
        required: true,
        type: Boolean
    },

    rules: {
        type: Array
    }
});

const emit = defineEmits(['update:modelValue'])

const checkboxValue = computed({
    get(){
        return props.modelValue
    },

    set(checkBoxValue){
        emit('update:modelValue', checkBoxValue)
    }
})

</script>

<style scoped>
    .text{
        font-family: "MontserratMedium";
    }

    .title{
        font-family: "MontserratMedium";
        font-weight: bold;
    }
</style>