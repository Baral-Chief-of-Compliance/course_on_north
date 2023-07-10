<template>
    <v-app-bar color="#eb6635">
        <v-container>
            <v-row>
                 <v-col class="nav-option">
                    <v-btn @click="go_to_about_project">О ПРОЕКТЕ</v-btn>
                 </v-col>
                 <v-col class="nav-option">
                    <v-btn @click="go_to_struct">СТРУКТУРА</v-btn>
                </v-col>
                <v-col class="nav-option mr-10">
                    <v-btn @click="go_to_clients">КЛИЕНТЫ И ПАРТНЕРЫ</v-btn>
                </v-col>
                <v-col class="nav-option">
                    <v-btn @click="go_to_anketa_soiskatelya">СОИСКАТЕЛЮ</v-btn>
                </v-col>
                <v-col class="nav-option">
                     <v-btn @click="go_to_anketa_employer">РАБОТОДАТЕЛЮ</v-btn>
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
            window.scrollTo({ top: 700, behavior: 'smooth'})
        },

        go_to_struct(){
            window.scrollTo({ top: 1500, behavior: 'smooth'})
        },

        go_to_clients(){
            window.scrollTo({ top: 2300, behavior: 'smooth'})
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
}

.nav-option a{
    text-decoration: none;
    font-family: "MontserratMedium";
    color: white;
}

.nav-option a:hover{
    color: #FFDDC3
}
</style>
