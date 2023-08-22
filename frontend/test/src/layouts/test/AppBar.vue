<template>
    <v-app-bar color="#eb6635" height="80">
        <v-img
            max-height="100"
            max-width="115"
            width="100%"
            src="../../assets/logo/logo-for-header-on-gray.svg"
            @click="go_to_menu_punkt('carousel')"
            class="logo"
        />

        <!-- <v-btn @click="go_to_main"><div class="title-site">КУРС НА СЕВЕР!</div></v-btn>  -->
        <template v-slot:append>
            <v-app-bar-nav-icon class="mr-10" v-if="width <= 1555" color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <burger-menu /> -->
        </template>
        <v-spacer v-if="width > 1555"></v-spacer>
        <div class="mr-11" v-if="width > 1555">
 
            <v-row justify="center" no-gutters v-if="width > 1555">
                <nav-option-button label="о проекте" @go-to="go_to_menu_punkt('about_project')" />
                <nav-option-button label="помощь" @go-to="go_to_menu_punkt('help')" />
                <nav-option-button label="мурманская область" @go-to="go_to_menu_punkt('murman_region')" />
                <nav-option-button label="соискателю" @go-to="go_to_other_punkt('AnketaSoiskatelya')" />
                <nav-option-button label="работодателю" @go-to="go_to_other_punkt('AnketaEmployer')" />
                <nav-option-button label="медработникам" @go-to="go_to_menu_punkt('health_worker_info')" />
                <nav-option-button label="педагогам" @go-to="go_to_menu_punkt('teachers')" />
            </v-row>

        </div>
        <v-spacer v-if="width > 1555"></v-spacer>

    </v-app-bar>



    <v-navigation-drawer
        v-model="drawer"
        location="top"
        color="#eb6635"
        :width="360"
        temporary
        v-if="width <= 1555"
      >
        <v-list>
            <v-list-item @click="go_to_menu_punkt('about_project')"><span class="nav-option-mobile">О ПРОЕКТЕ</span></v-list-item>
            <v-list-item @click="go_to_menu_punkt('help')"><span class="nav-option-mobile">ПОМОЩЬ</span></v-list-item>
            <v-list-item @click="go_to_menu_punkt('murman_region')"><span class="nav-option-mobile">МУРМАНСКАЯ ОБЛАСТЬ</span></v-list-item>
            <v-list-item @click="go_to_other_punkt('AnketaSoiskatelya')"><span class="nav-option-mobile">СОИСКАТЕЛЮ</span></v-list-item>
            <v-list-item @click="go_to_other_punkt('AnketaEmployer')"><span class="nav-option-mobile">РАБОТОДАТЕЛЮ</span></v-list-item>
            <v-list-item @click="go_to_menu_punkt('health_worker_info')"><span class="nav-option-mobile">МЕДРАБОТНИКАМ</span></v-list-item>
            <v-list-item @click="go_to_menu_punkt('teachers')"><span class="nav-option-mobile">ПЕДАГОГАМ</span></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import { set_part_of_navbar, get_name_part_of_navbar } from "@/localstorage/storage_of_location_site.js";
import NavOptionButton from './../../components/test_1/details/NavOptionButton.vue';
import BurgerMenu from "@/components/BurgerMenu.vue";
import { inject } from "vue";


export default{


    data () {
        return {
            drawer: false
        }
    },

    setup(){
        const width = inject('width')
        const height = inject('height')
        return { width, height}
    },

    components: {
        NavOptionButton,
        BurgerMenu
    },

    created(){
        this.settings_local_storage()
    },

    methods: {

        settings_local_storage(){
            set_part_of_navbar("TestHome_1")
        },

        go_to_menu_punkt(refName){

            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                this.drawer = false;
                setTimeout(() => {
                    const element = document.getElementById(refName);
                    element.scrollIntoView({behavior: "smooth"});
                    set_part_of_navbar("TestHome_1")
                }, 100)

            } else{
                this.drawer = false;
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: "smooth"});
            }

            
        },

        go_to_other_punkt(refName){
            set_part_of_navbar(refName)
            this.$router.push({name: refName})
        },
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

.nav-option-mobile{
    color: white;
    font-family: "MontserratMedium";
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
}

</style>
