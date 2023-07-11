<template>
    <v-app-bar color="#eb6635" height="80">
        <v-img 
            max-height="100"
            max-width="122"
            contain
            src="../../assets/logo/logo-for-header-on-gray.svg"
        />
        <v-container>
            <v-row>
                <v-col>
                    <v-btn @click="go_to_about_project"><span class="nav-option">О ПРОЕКТЕ</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_struct"><span class="nav-option">СТРУКТУРА</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_clients"><span class="nav-option">КЛИЕНТЫ И ПАРТНЕРЫ</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_clients"><span class="nav-option">НОВОСТИ</span></v-btn>
                </v-col>

                <v-col>
                    <v-btn @click="go_to_anketa_soiskatelya"><span class="nav-option">СОИСКАТЕЛЮ</span></v-btn>
                </v-col>

                <v-col>
                     <v-btn @click="go_to_anketa_employer"><span class="nav-option">РАБОТОДАТЕЛЮ</span></v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>

export default{
    data () {
        return {

        }
    },

    methods: {
        go_to_about_project(){
            window.scrollTo({ top: 1100, behavior: 'smooth'})
        },

        go_to_struct(){
            window.scrollTo({ top: 1900, behavior: 'smooth'})
        },

        go_to_clients(){
            window.scrollTo({ top: 2700, behavior: 'smooth'})
        },

        go_to_anketa_soiskatelya(){
            this.$router.push({name: "AnketaSoiskatelya"})
        },

        go_to_anketa_employer(){
            this.$router.push({name: "AnketaEmployer"})
        }

    },

    mounted(){

    }
}
</script>

<style>
.nav-option{
    font-family: "MontserratMedium";
    color: white;
    font-size: 16px;
}


.title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635
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
