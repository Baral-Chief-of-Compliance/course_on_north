<template>
    <v-app-bar color="#eb6635" height="80">
        <v-img
            max-height="100"
            max-width="115"
            contain
            src="../../assets/logo/logo-for-header-on-gray.svg"
            @click="go_to_main()"
            class="logo"
        />

        <v-app-bar-title class="title-site" v-if="width <= 1340">КУРС НА СЕВЕР!</v-app-bar-title>
        <template v-slot:append>
            <v-app-bar-nav-icon class="mr-5" v-if="width <= 1340" color="white" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <div class="nav-options" v-if="width > 1280">
            <v-row no-gutters justify="center" v-if="width > 1280">
                <v-col>
                    <v-btn @click="go_to_about_project"><span class="nav-option" :style="{color: projectColor}">О ПРОЕКТЕ</span></v-btn>
                </v-col >

                <v-col>
                    <v-btn @click="go_to_struct"><span class="nav-option" :style="{color: structColor}">СТРУКТУРА</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_clients"><span class="nav-option" :style="{color: clientsPartnersColor}">КЛИЕНТЫ И ПАРТНЕРЫ</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_news"><span class="nav-option" :style="{color: newsColor}">НОВОСТИ</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_anketa_soiskatelya"><span class="nav-option" :style="{color: clientsColor}">СОИСКАТЕЛЮ</span></v-btn>
                </v-col>

                <v-col>
                     <v-btn @click="go_to_anketa_employer"><span class="nav-option" :style="{color: employerColor}">РАБОТОДАТЕЛЮ</span></v-btn>
                </v-col>
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
            <v-list-item @click="go_to_clients"><span class="nav-option" :style="{color: clientsPartnersColor}">КЛИЕНТЫ И ПАРТНЕРЫ</span></v-list-item>
            <v-list-item @click="go_to_news"><span class="nav-option" :style="{color: newsColor}">НОВОСТИ</span></v-list-item>
            <v-list-item @click="go_to_anketa_soiskatelya"><span class="nav-option" :style="{color: clientsColor}">СОИСКАТЕЛЮ</span></v-list-item>
            <v-list-item @click="go_to_anketa_employer"><span class="nav-option" :style="{color: employerColor}">РАБОТОДАТЕЛЮ</span></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
import { set_part_of_navbar, get_name_part_of_navbar } from "@/localstorage/storage_of_location_site.js"
import { useWindowSize} from '@vueuse/core'


export default{


    data () {
        return {
            drawer: false,
            projectColor: 'white',
            structColor: 'white',
            clientsPartnersColor: 'white',
            newsColor: 'white',
            clientsColor: 'white',
            employerColor: 'white',

            items: [
                {
                    title: 'О ПРОЕКТЕ',
                    value: 'PROJECT',
                },
                {
                    title: 'СТРУКТУРА',
                    value: 'STRUCT',
                },
                {
                    title: 'КЛИЕНТЫ И ПАРТНЕРЫ',
                    value: 'CLIENTS_AND_PARTNERS',
                },
                {
                    title: 'НОВОСТИ',
                    value: 'NEWS',
                },
                {
                    title: 'СОИСКАТЕЛЮ',
                    value: 'CLIENTS',
                },
                {
                    title: 'РАБОТОДАТЕЛЮ',
                    value: 'EMPLOYER'
                }
            ]
        }
    },

    setup(){
        const { width, height } = useWindowSize()

        return { width, height}
    },

    methods: {

        go_to_main(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                set_part_of_navbar("TestHome_1")

                this.projectColor = 'white'
                this.structColor = 'white'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'
            } else {
                this.drawer=false
                window.scrollTo({ top: 0, behavior: 'smooth'})

                this.projectColor = 'white'
                this.structColor = 'white'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'
            }

        },
        go_to_about_project(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 1400, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")

                this.projectColor = '#FFDDC3'
                this.structColor = 'white'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'

            }   else{
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 1400, behavior: 'smooth'})

                this.projectColor = '#FFDDC3'
                this.structColor = 'white'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'
            }

        },

        go_to_struct(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 2200, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")

                this.projectColor = 'white'
                this.structColor = '#FFDDC3'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'

            }   else{
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 2200, behavior: 'smooth'})

                this.projectColor = 'white'
                this.structColor = '#FFDDC3'
                this.clientsPartnersColor = 'white'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'
            }

        },

        go_to_clients(){
            if (get_name_part_of_navbar() != "TestHome_1"){
                this.$router.push({name: "TestHome_1"})
                window.scrollTo({ top: 3000, behavior: 'smooth'})
                set_part_of_navbar("TestHome_1")

                this.projectColor = 'white'
                this.structColor = 'white'
                this.clientsPartnersColor = '#FFDDC3'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'

            }   else {
                this.drawer=false
                set_part_of_navbar("TestHome_1")
                window.scrollTo({ top: 3000, behavior: 'smooth'})

                this.projectColor = 'white'
                this.structColor = 'white'
                this.clientsPartnersColor = '#FFDDC3'
                this.newsColor = 'white'
                this.clientsColor = 'white'
                this.employerColor = 'white'

            }

        },

        go_to_anketa_soiskatelya(){
            set_part_of_navbar("AnketaSoiskatelya")
            this.$router.push({name: "AnketaSoiskatelya"})

            this.projectColor = 'white'
            this.structColor = 'white'
            this.clientsPartnersColor = 'white'
            this.newsColor = 'white'
            this.clientsColor = '#FFDDC3'
            this.employerColor = 'white'
        },

        go_to_anketa_employer(){
            set_part_of_navbar("AnketaEmployer")
            this.$router.push({name: "AnketaEmployer"})

            this.projectColor = 'white'
            this.structColor = 'white'
            this.clientsPartnersColor = 'white'
            this.newsColor = 'white'
            this.clientsColor = 'white'
            this.employerColor = '#FFDDC3'
        },

        go_to_news(){
            set_part_of_navbar("News")
            this.$router.push({name: "News"})

            this.projectColor = 'white'
            this.structColor = 'white'
            this.clientsPartnersColor = 'white'
            this.newsColor = '#FFDDC3'
            this.clientsColor = 'white'
            this.employerColor = 'white'
        }

    }
}
</script>

<style>
.nav-option{
    font-family: "MontserratMedium";
    font-size: 16px;
}


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

.nav-options{
    margin-left: auto;
    margin-right: auto;
}

.title-site{
    font-family: "CorkiRegular";
    color: white;
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
