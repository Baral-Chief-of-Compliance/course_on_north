<template>
        <v-carousel ref="carousel"
            cycle
            :height="maxHeightCarousel"
            hide-delimiter-background
            show-arrows="hover"
            color="#2F5DA7"
        > 



            <v-carousel-item
            >
                <v-img 
                    src="../../assets/jpg_for_carousel/logo.jpg"
                    width="100%"
                    contain
                    cover
                >
                </v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/jpg_for_carousel/murmansr_atumn.jpg"
                    width="100%"
                    contain
                    cover
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/jpg_for_carousel/night_murmansk_2.jpg"
                    width="100%"
                    contain
                    cover
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img  
                    src="../../assets/jpg_for_carousel/night_murmansk.jpg" 
                    width="100%"
                    contain
                    cover
                />
            </v-carousel-item>

            <v-carousel-item
            >  
                <v-img  
                    src="../../assets/jpg_for_carousel/na_severe_live.jpg" 
                    width="100%"
                    contain
                    cover
                />
            </v-carousel-item>

        </v-carousel>
</template>


<script>

export default{

    props:{
        width: Number
    },
    data(){
        return{
            similarityFactor: 0.460
        }
    },

    computed: {
        maxHeightCarousel(){
            return this.width * this.similarityFactor
        }
    }

}
</script>