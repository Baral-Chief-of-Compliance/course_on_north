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
                    src="../../assets/svg_for_carousel/logo_course.svg"
                    width="100%"
                    contain
                    cover
                >
                </v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/svg_for_carousel/target_project.svg"
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/svg_for_carousel/recruting.svg"
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img  
                    src="../../assets/svg_from_czn_site/route.svg" 
                    width="100%"
                    contain
                />
            </v-carousel-item>

            <v-carousel-item
            >  
                <v-img  
                    src="../../assets/svg_for_carousel/naseverezhit.svg" 
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
            similarityFactor: 0.443
        }
    },

    computed: {
        maxHeightCarousel(){
            return this.width * this.similarityFactor
        }
    }

}
</script>