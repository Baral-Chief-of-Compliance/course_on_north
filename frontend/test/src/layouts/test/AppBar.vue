<template>
    <v-app-bar color="#eb6635" height="80">
        <v-img
            max-height="100"
            max-width="115"
            contain
            src="../../assets/logo/logo-for-header-on-gray.svg"
            @click="go_to_main"
            class="logo"
        />

        <!-- <v-btn @click="go_to_main"><div class="title-site">КУРС НА СЕВЕР!</div></v-btn>  -->
        <template v-slot:append>
            <v-app-bar-nav-icon class="mr-10" v-if="width <= 1280" color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <div class="mr-11" v-if="width > 1280">
            <v-row no-gutters justify="center" v-if="width > 1280">
                <nav-option-button label="о проекте" @go-to="go_to_about_project" />
                <nav-option-button label="помощь" @go-to="go_to_about_project" />
                <nav-option-button label="мурманская область" @go-to="go_to_about_project" />
                <nav-option-button label="соискателю" @go-to="go_to_anketa_soiskatelya" />
                <nav-option-button label="работодателю" @go-to="go_to_anketa_employer" />
                <nav-option-button label="медработникам" @go-to="go_to_anketa_employer" />
                <nav-option-button label="педагогам" @go-to="go_to_anketa_employer" />
            </v-row>
        </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        location="top"
        color="#eb6635"
        temporary
        v-if="width <= 1340"
      >
        <v-list>
            <v-list-item @click="go_to_about_project"><span class="nav-option" :style="{color: projectColor}">О ПРОЕКТЕ</span></v-list-item>
            <v-list-item @click="go_to_struct"><span class="nav-option" :style="{color: structColor}">СТРУКТУРА</span></v-list-item>
            <!-- <v-list-item @click="go_to_clients"><span class="nav-option" :style="{color: clientsPartnersColor}">КЛИЕНТЫ И ПАРТНЕРЫ</span></v-list-item> -->
            <!-- <v-list-item @click="go_to_news"><span class="nav-option" :style="{color: newsColor}">НОВОСТИ</span></v-list-item> -->
            <v-list-item @click="go_to_anketa_soiskatelya"><span class="nav-option" :style="{color: clientsColor}">СОИСКАТЕЛЮ</span></v-list-item>
            <v-list-item @click="go_to_anketa_employer"><span class="nav-option" :style="{color: employerColor}">РАБОТОДАТЕЛЮ</span></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import { set_part_of_navbar, get_name_part_of_navbar } from "@/localstorage/storage_of_location_site.js"
import { useWindowSize} from '@vueuse/core'
import NavOptionButton from './../../components/test_1/details/NavOptionButton.vue'


export default{


    data () {
        return {
            drawer: false
        }
    },

    setup(){
        const { width, height } = useWindowSize()

        return { width, height}
    },

    components: {
        NavOptionButton
    },

    methods: {

        go_to_main(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 0, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")
            } else {
                this.drawer=false
                window.scrollTo({ top: 0, behavior: 'smooth'})
            }

        },
        go_to_about_project(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 1400, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")
            }   else{
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 1400, behavior: 'smooth'})
            }

        },

        go_to_struct(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 2200, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")

            }   else{
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 2200, behavior: 'smooth'})
            }

        },

        go_to_clients(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 3000, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")

            }   else {
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 3000, behavior: 'smooth'})
            }

        },

        go_to_anketa_soiskatelya(){
            set_part_of_navbar("AnketaSoiskatelya")
            this.$router.push({name: "AnketaSoiskatelya"})
        },

        go_to_anketa_employer(){
            set_part_of_navbar("AnketaEmployer")
            this.$router.push({name: "AnketaEmployer"})
        },

        go_to_news(){
            set_part_of_navbar("News")
            this.$router.push({name: "News"})
        }

    }
}
</script>

<style>

.title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635
}

.logo:hover{
    cursor: pointer
}



.title-site{
    font-family: "CorkiRegular";
    color: white;
    font-size: 30px;
}


/* @font-face { 
    font-family: "CorkiRegular";
    src: url("../../assets/CorkiRegular/CorkiRegular.eot");
    src: url("../../assets/CorkiRegular/CorkiRegular.eot?#iefix")format("embedded-opentype"),
    url("../../assets/CorkiRegular/CorkiRegular.woff") format("woff"),
    url("../../assets/CorkiRegular/CorkiRegular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
}


@font-face {
    font-family: "MontserratMedium";
    src: url("../../assets/Montserrat/Montserrat-Regular.eot");
    src: url("../../assets/Montserrat/Montserrat-Regular.eot?#iefix")format("embedded-opentype"),
    url("../../assets/Montserrat/Montserrat-Regular.woff") format("woff"),
    url("../../assets/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
} */
</style>
