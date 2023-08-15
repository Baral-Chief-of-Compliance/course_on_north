<template>
    <v-combobox 
        variant="solo-filled" 
        color="mainColor"
        :label="props.title"
        :items="props.items"
        class="text_field_label"
    >
    </v-combobox>
</template>

<script setup>
import { inject, defineProps } from 'vue';

const mainColor = inject('mainColor')
const props = defineProps({
    title: String,
    items: Array
})


</script>