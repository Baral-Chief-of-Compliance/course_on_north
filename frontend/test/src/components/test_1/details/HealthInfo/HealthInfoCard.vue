<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
        <template v-slot:activator="{ props }">
            <v-card 
                v-bind="props"
                @click=""
            >

                <v-img 
                    :src="path"
                    contain
                    width="100%"
                    cover
                >

                </v-img>

                <v-card-text :style="{color: mainColor}" class="card_title">
                    {{ title }}   
                </v-card-text>

                <v-card-actions>
                    <v-btn :color="mainColor" variant="outlined" block>
                        <span class="btn_title">подробнее</span> 
                    </v-btn>
                </v-card-actions>

            </v-card>

        </template>


        <v-card>
            <v-card-title class="card_title my-5" :style="{color: mainColor}">
                {{ title }}
            </v-card-title>
            <v-card-text>
                <v-img
                    :src="path"
                    width="1300"
                >    
                </v-img>
            </v-card-text>
            <v-card-actions>
            <v-btn variant="outlined" :color="mainColor" block @click="dialog = false">
               <span class="btn_title">закрыть</span> 
            </v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>

<script>
import { inject } from 'vue'

export default{
    props:{
        title: String,
        path: String
    },

    data(){
        return{
            dialog: false,
        }
    },

    setup(props){
        const mainColor = inject('mainColor')

        function getImageUrl() {
            // This path must be correct for your file
            return new URL(`../../../../assets/for_ankets/${props.path}`, import.meta.url)
        }

        return { mainColor, getImageUrl }
    }

}

</script>

<style>
    .card_title{
        margin-left: auto;
        margin-right: auto;
        font-family: "CorkiRegular";
        font-size: 28px;
        font-weight: 500;
        text-transform: uppercase;
        word-break: normal;
        line-height: 1.2;
    }

    .btn_title{
        font-family: "MontserratMedium";
        color: "white";
        font-size: 16px;
        font-weight: bold;
    }
</style>