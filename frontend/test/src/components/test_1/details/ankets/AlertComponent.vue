<template>
    <v-alert 
        :type="props.type"
        border="start"
        variant="tonal"
    >
        <template v-slot:title>
            <div >
                {{ props.title  }}
            </div>
        </template>

        <div class="text mt-5">
            {{ props.text }}
        </div>


        <CheckBoxComonent 
            v-model="checkboxValue"
            :title="props.checkboxLabel"
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
</style>