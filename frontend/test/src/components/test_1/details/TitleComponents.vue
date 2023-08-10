<template>
    <v-row>
        <v-col cols="1"></v-col>
        <v-col>
            <div class="nav-title" :style="titleStyle">{{ title }}</div>
        </v-col>
        <v-col cols="1"></v-col>
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

        const titleStyle = {
            color: addColor 
        }

        if (props.typeStyle === 'reverse'){
            titleStyle.color = 'white'
        }
        return { addColor, titleStyle }
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

</style>