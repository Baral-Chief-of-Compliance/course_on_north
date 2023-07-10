<template>
    <v-footer
      class="text-center d-flex flex-column"
      color="#2F5DA7"
    >
        <v-container class="my-15">
            <v-row>
                <v-col>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="220"
                        max-width="220"
                        contain
                        class="ml-15 mb-15"
                    ></v-img>    
                    <div class="rights">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col>
                    <v-row><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></v-row>

                    <v-row id="address" class="text-left mt-15 mr-15">Мурманская область. ГОБУ Центр занятости населения г.Мурманска. Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col>
                    <v-row><div id="docs">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-6">персональных данных</div></row>
                </v-col>
            </v-row>
        </v-container>

    </v-footer>
</template>

<script>
export default{
    methods: {
        go_on_map(){
            this.$router.push({name: 'map-czn'})
        }
    }
}
</script>


<style>


.rights{
    color: white;
    font-family: "MontserratMedium";
    font-size: 12px;
    margin-top: 70px;
}

#phone_number{
    color: white;
    font-family: "CorkiRegular";
    font-size: 25px
}

#mail{
    color: white;
    font-family: "CorkiRegular";
    font-size: 25px 
}

#mail:hover{
    color: #D1E0E6;
}

#vk{
    color: white;
    font-family: "CorkiRegular";
    font-size: 25px  
}

#vk:hover{
    color: #D1E0E6;
}

a{
    text-decoration: none;
}

#address{
    color: white;
    font-family: "MontserratMedium";
    font-size: 12px;
}

#btn-send-anket{
    color: #2F5DA7
}


#personal-data-fir-part{
    color: white;
    font-family: "MontserratMedium"; 
}
#personal-data-sec-part{
    color: white;
    font-family: "MontserratMedium";
}

#docs{
    color: white;
    font-family: "MontserratMedium";
    font-size: 20px;
    font-weight: bold;
}

@font-face { 
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
    url("../../assets/Montserrat/Montserrat-Regulart.woff") format("woff"),
    url("../../assets/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
}
</style>