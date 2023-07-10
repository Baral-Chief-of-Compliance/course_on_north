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
                <v-col class="nav-option">
                    <router-link to="/">КЛИЕНТЫ</router-link>
                </v-col>
                <v-col class="nav-option">
                    <router-link to="/">ПАРТНЕРЫ</router-link>
                </v-col>
                <v-col class="nav-option">
                    <router-link :to="{ name: 'AnketaSoiskatelya' }">СОИСКАТЕЛЮ</router-link>
                </v-col>
                <v-col class="nav-option">
                    <router-link to="/">РАБОТОДАТЕЛЮ</router-link>
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
            window.scrollTo({ top: 400, behavior: 'smooth'})
        }
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
