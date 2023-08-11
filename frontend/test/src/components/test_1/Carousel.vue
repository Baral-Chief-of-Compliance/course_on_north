<template>
        <v-carousel ref="carousel"
            cycle
            :height="height-80"
            :width="width"
            hide-delimiter-background
            show-arrows="hover"
            :color="mainColor"
        > 
            <v-carousel-item v-for="img in imgs">
                <v-img  
                    :src="get_image_URL(img.name)" 
                    :height="height"
                    :width="width"
                    contain
                    cover
                />
            </v-carousel-item>

        </v-carousel>
</template>


<script>
import { inject } from 'vue';

export default{

    data(){
        return {
            one_img: 'logo.jpg',
            imgs: [
                {
                    name:'logo.jpg'
                },
                {
                    name:'murmansr_atumn.jpg'
                },
                {
                    name:'night_murmansk_2.jpg'
                },
                {
                    name:'night_murmansk.jpg'
                },
                {
                    name:'na_severe_live.jpg'
                }
            ]
        }
    },

    setup(){
        const width = inject('width')
        const height = inject('height')
        const mainColor = inject('mainColor')

        function get_image_URL(name){
            return new URL(`../../assets/jpg_for_carousel/${name}`, import.meta.url).href
        }

        return { width, height, mainColor, get_image_URL}
    }

}
</script>