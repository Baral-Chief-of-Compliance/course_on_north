<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div :class="[width > 1000 ? 'text-h3 mb-5' : 'text-h5 mb-5 mx-5']" >Наше местоположение</div>
        <v-row justify="center" class="mt-5 mb-5">
            <yandex-map
                :coords="[68.959745, 33.100978]"
                :zoom="17"
            >
                <ymap-marker
                    market-id="1"
                    :icon="{ color: 'red' }"
                    :coords="[68.959745, 33.100978]" 
                />

            </yandex-map>
        </v-row >

    </v-container>
</template>

<script>

import { useWindowSize } from '@vueuse/core'

export default{

    setup(){
        const { width, height} = useWindowSize()

        return { width, height }
    },

    data: () => ({
        scrolllevel: 0,

        widthMap: 1200,
        heightMap: 550
    }),
    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>
<style scoped>

.ymap-container {
        width: 1200px;
        height: 550px;
}


@media (max-width: 1700px){
    .ymap-container {
        width: 1330;
        height: 610px;
    } 
}


@media (max-width: 1500px){
    .ymap-container {
        width: 1200px;
        height: 550px;
    }
}


@media (max-width: 1300px){
    .ymap-container {
        width: 1015px;
        height: 465px;
    }
}


@media (max-width: 1200px){
    .ymap-container {
        width: 935px;
        height: 430px;
    }
}

@media (max-width: 1000px){
    .ymap-container {
        width: 780px;
        height: 358px;
    }
}


@media (max-width: 800px){
    .ymap-container {
        width: 625px;
        height: 287px;
    }
}

@media (max-width: 650px){
    .ymap-container {
        width: 500px;
        height: 230px;
    }
}

@media (max-width: 600px){
    .ymap-container {
        width: 421x;
        height: 194px;
    }
}

@media (max-width: 550px){
    .ymap-container {
        width: 380x;
        height: 180px;
    }
}


@media (max-width: 440px){
    .ymap-container {
        width: 300px;
        height: 170px;
    }
}


</style>