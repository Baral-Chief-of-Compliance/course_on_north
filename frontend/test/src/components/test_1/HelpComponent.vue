<template>
    <v-container class="bg-surface-variant">
        <TitleComponent title="помощь" />

        <v-row justify="center">
        <v-col
            v-for="k in 2"
            :key="k"
            cols="4"
        >
            <v-sheet class="pa-2 ma-2">
            .justify-center
            </v-sheet>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue'

export default{
    components: {
        TitleComponent
    }
}
</script>