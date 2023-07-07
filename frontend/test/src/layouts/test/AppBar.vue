<template>
    <v-app-bar color="#eb6635">
        <v-container>
            <v-row>
                 <v-col class="nav-option">
                    <router-link to="/test-1">О ПРОЕКТЕ</router-link> 
                 </v-col>
                 <v-col class="nav-option">
                    <router-link to="/">СТРУКТУРА</router-link>
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
