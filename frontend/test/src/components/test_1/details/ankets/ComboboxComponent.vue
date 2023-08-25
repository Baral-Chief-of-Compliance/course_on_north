<template>
    <v-combobox 
        variant="solo-filled" 
        :color="mainColor"
        :label="props.title"
        :items="props.items"
        v-model="valueComobox"
        class="text_field_label mb-2"
    >
        <template v-slot:item="{ index, item}">
            <v-list>
                <v-list-item @click="modelValue = item">
                    <span class="text_field_label">{{ item.title }}</span>
                </v-list-item>
            </v-list>
        </template>
    </v-combobox>
</template>

<script setup>
import { inject, defineProps, computed, defineEmits } from 'vue';

const mainColor = inject('mainColor')
const props = defineProps({
    title: String,
    items: Array,
    modelValue: {
        required: true,
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const valueComobox = computed({
    get(){
        return props.modelValue
    },

    set(newValue){
        emit('update:modelValue', newValue)
    }
})

</script>

<style scoped>
    .text_field_label{
        font-family: "MontserratMedium";
    }
</style>