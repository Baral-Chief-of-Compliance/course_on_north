<template>

        <v-carousel id="carousel" ref="carousel"
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
                        <v-row class="mt-15 mx-15">
                            <v-col cols="2">
                                <v-img
                                    src="@/assets/gerb/gerb_murmansk_line.svg"
                                    :max-height="150/900 * height"
                                    :max-width="150/1900 * width"
                                    contain
                                >    
                                </v-img>
                            </v-col>

                            <v-col cols="8">

                            </v-col>

                            <v-col cols="2">
                                <div class="heshtag_title" :style="{ fontSize: 50/1920 * width + 'px'}">
                                    #насевережить
                                </div>
                            </v-col>
                        </v-row>

                            <div class="d-flex flex-column fill-height align-center text-white">
                                <div class="title_carousel" :style="{fontSize: width * 0.1042 + 'px'}">
                                    {{ img.title }}
                                </div>
                                <div :class="[ width > 1350 ? 'subtitle_carousel mx-15 text-center':  (width > 500) ? 'subtitle_carousel_mobile mx-15 text-center' :  'subtitle_carousel_mega_small mx-15 text-center' ]">
                                    {{ img.subtitle }}
                                </div>
                                
                            </div>
                            
                    </v-parallax>
            </v-carousel-item>

        </v-carousel>

</template>

"

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
            return new URL(`../../assets/jpg_for_carousel/compression/${name}`, import.meta.url).href
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
    text-align: center;
}

.subtitle_carousel_mobile{
    font-size: 14px;
    font-family: "MontserratMedium";
    text-align: center;
}


.subtitle_carousel_mega_small{
    font-size: 12px;
    font-family: "MontserratMedium";
    text-align: center;
}

.heshtag_title{
    font-family: "CorkiRegular";
    color: white;
    text-transform: uppercase;
}

</style>