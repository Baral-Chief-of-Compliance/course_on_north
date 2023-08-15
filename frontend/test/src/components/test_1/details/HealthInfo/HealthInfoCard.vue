<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
        <template v-slot:activator="{ props }">
            <v-card 
                v-bind="props"
                @click=""
                max-width="600"
                class="mx-auto"
            >

                <v-img 
                    :src="imageUrl"
                    height="320px"
                    contain
                >

                </v-img>

                <v-card-text :style="{color: mainColor}" class="card_title">
                    <p style="line-height: 1;">{{ title }}</p>  
                </v-card-text>

                <v-card-actions>
                    <v-btn :color="mainColor" variant="outlined" block>
                        <span class="btn_title">подробнее</span> 
                    </v-btn>
                </v-card-actions>

            </v-card>

        </template>


        <v-card>
            <div :class="[width > 800 ? 'card_title my-5 text-center' : 'card_title_mobile my-5 text-center' ]" :style="{color: mainColor}">
                <p style="line-height: 1;">{{ title }}</p>
            </div>
            <v-card-text>
                <v-img
                    :src="imageUrl"
                    width="1300"
                    contain
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
import { inject } from 'vue';

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
        const imageUrl = new URL(`../../../../assets/health_worker/${props.path}`, import.meta.url).href
        const width = inject('width')

        return { mainColor, imageUrl, width  }
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
    }

    .card_title_mobile{
        margin-left: auto;
        margin-right: auto;
        font-family: "CorkiRegular";
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        word-break: normal;
    }

    .btn_title{
        font-family: "MontserratMedium";
        color: "white";
        font-size: 16px;
        font-weight: bold;
    }
</style>