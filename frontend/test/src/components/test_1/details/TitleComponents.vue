<template>
    <v-row>
        <v-col v-if="width > 1280" cols="1"></v-col>
        <v-col>
            <div :class="[ width > 1280 ? 'nav-title' : 'nav_title_mobile']" :style="titleStyle">{{ title }}</div>
        </v-col>
        <v-col v-if="width > 1280" cols="1"></v-col>
    </v-row>

</template>

<script>
import { inject, reactive, defineProps, ref } from 'vue'


export default{
    props:{
        title: String,
        typeStyle: String
    },

    setup(props){
        const addColor = inject('addColor')
        const width = inject('width');
        const height = inject('height');

        const titleStyle = {
            color: addColor 
        }

        if (props.typeStyle === 'reverse'){
            titleStyle.color = 'white'
        }
        return { addColor, titleStyle, width, height }
    }
}
</script>

<style scoped>

.nav-title{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    text-transform: uppercase;
}

.nav_title_mobile{
    font-size: 36px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    text-transform: uppercase;
    line-height: 1.2;
}

</style>