<template>
    <v-col>
        <v-btn @click="$emit('go-to')"><span class="nav-options" :style="{color: navOptionColor}">{{ label }}</span></v-btn>
    </v-col>
</template>

<style>
    .nav-options{
        margin-left: auto;
        margin-right: auto;
        font-family: "MontserratMedium";
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
    }
</style>

<script>
import { inject } from 'vue'


export default{
    props:{
        label: String
    },

    setup(){
        const navOptionColor = inject('navOptionColor')

        return { navOptionColor }
    }
}

</script>