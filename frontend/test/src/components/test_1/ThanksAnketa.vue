<template>
    <v-container class="my-15">
        <title-components title="Спасибо за отправленную анкету!" />

        <text-for-inf-block textContent="Вы автоматически вернетесь на главную страницу через:" />

        <v-container>
            <v-progress-circular
                :rotate="360"
                :size="200"
                :width="30"
                :model-value="loading_value"
                :color="mainColor"
                class="progress-circular"

            >
               <span class="left-seconds-circular" :style="{color: addColor}">
                    {{ seconds_left }}
                </span> 
            </v-progress-circular>
        </v-container>

        <v-container>
            <!-- <v-btn block @click="go_main_page()" variant="outlined">
                <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>На главную
            </v-btn> -->

            <ButtonAnket 
                title="На главную" 
                :color="mainColor"
                colorText="white"
                @click="go_main_page"
            />
        </v-container>
    </v-container>

</template>

<script>
import TitleComponents from './details/TitleComponents.vue';
import TextForInfBlock from './details/TextForInfBlock.vue';
import ButtonAnket from './details/ankets/ButtonAnket.vue';
import { set_part_of_navbar, get_name_part_of_navbar } from "@/localstorage/storage_of_location_site.js";
import { inject } from 'vue';

export default{

    components: {
        TitleComponents,
        TextForInfBlock,
        ButtonAnket
    },

    setup(){
        const mainColor = inject("mainColor")
        const addColor = inject('addColor')

        return { mainColor, addColor }
    },

    data(){
        return{
            seconds_left: 10,
            loading_value: 0,
            interval: {}
        }
    },

    methods:{
        go_main_page(){
            set_part_of_navbar("TestHome_1")
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'}) 
        }
    },

    mounted(){
        this.get_start()
        set_part_of_navbar("thanks_for_anket")
        this.interval = setInterval(() => {
            if (this.loading_value === 100){
                const page = get_name_part_of_navbar()

                if (page === 'thanks_for_anket') this.go_main_page(); 
            }
            this.loading_value += 10
            this.seconds_left -= 1
        }, 1000)
    }
}
</script>


<style scoped>
.left-seconds-circular{
    font-weight: bold;
    font-family: "CorkiRegular";
    font-size: 40px;
}

.progress-circular{
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
</style>