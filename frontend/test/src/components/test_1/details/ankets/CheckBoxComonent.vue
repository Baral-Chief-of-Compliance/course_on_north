<template>
    <v-checkbox
        :color="props.color"
        :rules="props.rules"
        v-model="checked"
    >
        <template v-slot:label>

            <div class="title">
                {{ props.title }}
            </div>
        </template>
    </v-checkbox>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue';


const props = defineProps({
    color: {
        type: String,
        default: ""
    },
    title: String,
    modelValue: {
        required: true,
        type: Boolean
    },
    rules: {
        type: Array
    }
})

const emit = defineEmits(['update:modelValue']);

const checked = computed ({
    get(){
        return props.modelValue
    },

    set(newCheked){
        emit('update:modelValue', newCheked)
    }
})

</script>

<style scoped>

    .title{
        font-family: "MontserratMedium"; 
    }
</style>