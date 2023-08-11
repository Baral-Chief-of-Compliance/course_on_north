<template>
    <v-container>
        <v-row :class="[ width > 1280 ? 'text_style' : 'text_style_mobile' ]" :style="textStyle" no-gutters justify="center">
            <v-col v-if="width > 1280"></v-col>
            <v-col :cols="[ width > 1280 ? 8 : 12 ]">{{ textContent }}</v-col>
            <v-col v-if="width > 1280"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import { inject } from 'vue'

export default{
    props: {
        textContent: String,
        textStyle: Object
    },

    setup(){
        const width = inject('width');
        const height = inject('height');
        

        return { width, height }
    }
}
</script>

<style>
    .text_style{
        font-family: "MontserratMedium";
        font-size: 18px;
        line-height: 2;
    }

    .text_style_mobile{
        font-family: "MontserratMedium";
        font-size: 16px;
        line-height: 2;
    }

</style>