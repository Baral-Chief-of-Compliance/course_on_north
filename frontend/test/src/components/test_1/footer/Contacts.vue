<template>
    <v-row class="d-flex justify-start">
        <v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> 
        <div class="ml-3 phone_number">8 (8152) 56-67-07</div>
    </v-row>

    <v-row class="d-flex justify-start">
        <v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> 
        <a href="mailto:KursNaSever@murman-zan.ru>" class="ml-3 vk" >KursNaSever@murman-zan.ru</a>
    </v-row>

    <!-- <v-row class="d-flex justify-start">
        <v-icon class="mt-2" color="white" icon="mdi-email"></v-icon>
         <a href="mailto:@murman_zan.ru" class="ml-3 mail" >@czn_murman</a>
    </v-row> -->

    <v-row class="d-flex justify-start">
        <v-img  class="mt-1" src="@/assets/logo/vk_white_2.svg" max-width="23"></v-img> 
        <a href="https://vk.com/czn_murman" class="ml-3 vk">vk.com/czn_murman</a>
    </v-row>

    <v-row class="d-flex justify-start rights">
        Мурманская область.<br>
        ГОБУ Центр занятости населения<br>
        Мурманской области<br>
        Улица Книповича 48
    </v-row>
    
    <v-row class="d-flex justify-start mt-10">
        <v-btn @click="go_to_map" :style="{color: mainColor}">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
    </v-row>

</template>

<script>
import { inject } from 'vue'


export default{
    setup(){
        const mainColor = inject('mainColor')

        return { mainColor }
    },

    methods: {
        go_to_map(){
            this.$router.push({name: 'map-czn'})
        }
    }
}
</script>

<style>
    .phone_number{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px
    }

    .vk{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px  
    }

    .vk:hover{
        color: #D1E0E6;
    }

    a{
        text-decoration: none;
    }   

    .mail{
        color: white;
        font-family: "CorkiRegular";
        font-size: 25px 
    }

    .mail:hover{
        color: #D1E0E6;
    }
</style>