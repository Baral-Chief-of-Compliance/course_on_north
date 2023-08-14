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
                    <v-parallax 
                            :src="get_image_URL(img.name)" 
                            :height="height"
                            :width="width"
                            contain
                            cover
                        >
                            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                                <div class="title_carousel" :style="{fontSize: width * 0.1042 + 'px'}">
                                    {{ img.title }}
                                </div>
                                <div :class="[ width > 1350 ? subtitle_carousel : subtitle_carousel_mobile]">
                                    {{ img.subtitle }}
                                </div>
                            </div>
                    </v-parallax>
            </v-carousel-item>

        </v-carousel>

</template>


<script>
import { inject } from 'vue';

export default{

    data(){
        return {
            imgs: [
                {
                    name:'1_overlay.jpg',
                    title: 'курс на север',
                    subtitle: 'Товарищи! сложившаяся структура организации играет важную роль в формировании новых предложений.'
                },
                {
                    name:'2_overlay.jpg',
                    title: 'курс на север',
                    subtitle: 'Товарищи! сложившаяся структура организации играет важную роль в формировании новых предложений.'
                },
                {
                    name:'3_overlay.jpg',
                    title: 'курс на север',
                    subtitle: 'Товарищи! сложившаяся структура организации играет важную роль в формировании новых предложений.'
                },
                {
                    name:'4_overlay.jpg',
                    title: 'курс на север',
                    subtitle: 'Товарищи! сложившаяся структура организации играет важную роль в формировании новых предложений.'
                },
                {
                    name:'5_overlay.jpg',
                    title: 'на севере - жить!',
                    subtitle: 'Товарищи! сложившаяся структура организации играет важную роль в формировании новых предложений.'
                }
            ],
            overlay: false
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


<style>

.title_carousel{
    font-size: 200px;
    font-family: "CorkiRegular";
    text-transform: uppercase;
}

.subtitle_carousel{
    font-size: 20px;
    font-family: "MontserratMedium";
}

.subtitle_carousel_mobile{
    font-size: 14px;
    font-family: "MontserratMedium";
    text-align: center;
}
</style>