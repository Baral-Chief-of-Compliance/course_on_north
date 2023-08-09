<template>
        <div class="title-for-page-corki">{{ title }}</div>
</template>

<script>
import { inject } from 'vue'


export default{
    props:{
        title: String
    },

    setup(){
        const addColor = inject('addColor')

        return { addColor}
    }
}
</script>

<style scoped>

.title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635
}

</style>