<template>
    <v-textarea
        class="text_field_label"
        variant="solo-filled"
        :color="mainColor"
        :label="props.title"
    >
    </v-textarea>
</template>

<script setup>
import { defineProps, inject } from 'vue';


const props = defineProps({
    title: String
})

const mainColor = inject('mainColor')

</script>