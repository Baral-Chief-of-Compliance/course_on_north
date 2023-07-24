<template>
    <v-footer
      class="d-flex flex-column"
      color="#2F5DA7"
    >
        <v-container class="my-15">
            <v-row v-if="width > 1279">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="220"
                        max-width="220"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 ">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-6">персональных данных</div></row>
                </v-col>
            </v-row>


            <v-row v-if="width > 798 && width <= 1279">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="220"
                        max-width="220"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 ">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></v-row>
                    <v-row><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15" :style="{fontSize: 10 +'px'}">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part" :style="{fontSize: 12 +'px'}">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-6" :style="{fontSize: 12 +'px'}">персональных данных</div></row>
                </v-col>
            </v-row>


            <v-row v-if="width > 746 && width <= 798">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="220"
                        max-width="220"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 ">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number" :style="{fontSize: 17 + 'px'}">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" :style="{fontSize: 17 + 'px'}" >@czn_murman</a></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk" :style="{fontSize: 17 + 'px'}">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15" :style="{fontSize: 9 +'px'}">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part" :style="{fontSize: 11 +'px'}">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-6" :style="{fontSize: 11 +'px'}">персональных данных</div></row>
                </v-col>
            </v-row>

            <v-row v-if="width > 666 && width <= 746">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="220"
                        max-width="220"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 ">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number" :style="{fontSize: 17 + 'px'}">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" :style="{fontSize: 17 + 'px'}" >@czn_murman</a></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk" :style="{fontSize: 17 + 'px'}">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15" :style="{fontSize: 9 +'px'}">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs" :style="{fontSize: 17 + 'px'}">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-1" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part" :style="{fontSize: 10 +'px'}">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-4" :style="{fontSize: 10 +'px'}">персональных данных</div></row>
                </v-col>
            </v-row>


            <v-row v-if="width > 612 && width <= 666">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="180"
                        max-width="180"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 " :style="{fontSize: 11 + 'px'}">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number" :style="{fontSize: 15 + 'px'}">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" :style="{fontSize: 15 + 'px'}" >@czn_murman</a></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk" :style="{fontSize: 15 + 'px'}">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15" :style="{fontSize: 8 +'px'}">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn width="150" :style="{fontSize: 10 + 'px'}" @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs" :style="{fontSize: 16 + 'px'}">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-1" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part" :style="{fontSize: 9 +'px'}">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-4" :style="{fontSize: 9 +'px'}">персональных данных</div></row>
                </v-col>
            </v-row>


            <v-row v-if="width > 558 && width <= 612">
                <v-col cols=4>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="180"
                        max-width="180"
                        contain
                        class="mb-15"
                    ></v-img>    
                    <div class="rights ml-6 " :style="{fontSize: 11 + 'px'}">© 2023 «Курс на Север»</div>
                </v-col>
                <v-col cols=4>
                    <v-row><v-icon color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number" :style="{fontSize: 15 + 'px'}">8 (8152) 56-67-07</div></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" :style="{fontSize: 15 + 'px'}" >@czn_murman</a></v-row>
                    <v-row><v-icon color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk" :style="{fontSize: 15 + 'px'}">vk.com/czn_murman</a></v-row>

                    <v-row class="address text-left mt-15 mr-15" :style="{fontSize: 8 +'px'}">Мурманская область.<br> ГОБУ Центр занятости населения <br>г.Мурманска.<br> Улица Книповича 48</v-row>

                    <v-row class="mt-10">
                        <v-btn width="150" :style="{fontSize: 10 + 'px'}" @click="go_on_map" id="btn-send-anket">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    </v-row>
                    
                </v-col>
                <v-col cols=4>
                    <v-row><div id="docs" :style="{fontSize: 15 + 'px'}">ДОКУМЕНТЫ:</div></v-row>

                    <v-row class="mt-5"><v-icon color="white" class="mr-1" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part" :style="{fontSize: 8 +'px'}">Политика в отношении обработки</div></v-row>
                    <row><div id="personal-data-sec-part" class="text-left mt-3 ml-4" :style="{fontSize: 8 +'px'}">персональных данных</div></row>
                </v-col>
            </v-row>

            


            <v-col class="mx-15" v-if="width > 500 && width <= 558">
                <v-container class="mx-15">
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="200"
                        max-width="200"
                        contain
                    ></v-img>  
                    <div class="rights mb-15">© 2023 «Курс на Север»</div>


                    <div class="block-inf-row"><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></div>
                            
                    <div class="block-inf-row"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></div>
                                        
                    <div class="block-inf-row mb-15"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></div>
                    
                    <span class="address">Мурманская область. <br> ГОБУ Центр занятости населения <br> г.Мурманска.<br> Улица Книповича 48 <br></span>

                    <v-btn width="200" @click="go_on_map" id="btn-send-anket" class="my-15">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    
                        
                    <div id="docs">ДОКУМЕНТЫ:</div>

                    <div class="documents-row"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении</div></div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">обработки персональных</div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">данных</div>
                </v-container>
            </v-col>

            <v-col class="mx-10" v-if="width > 450 && width <= 500">
                <v-container class="mx-10">
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="200"
                        max-width="200"
                        contain
                    ></v-img>  
                    <div class="rights mb-15">© 2023 «Курс на Север»</div>


                    <div class="block-inf-row"><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></div>
                            
                    <div class="block-inf-row"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></div>
                                        
                    <div class="block-inf-row mb-15"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></div>
                    
                    <span class="address">Мурманская область. <br> ГОБУ Центр занятости населения <br> г.Мурманска.<br> Улица Книповича 48 <br></span>

                    <v-btn width="200" @click="go_on_map" id="btn-send-anket" class="my-15">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    
                        
                    <div id="docs">ДОКУМЕНТЫ:</div>

                    <div class="documents-row"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении</div></div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">обработки персональных</div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">данных</div>
                </v-container>
            </v-col>

            <v-col class="ml-10" v-if="width > 410 && width <= 450">
                <v-container>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="200"
                        max-width="200"
                        contain
                    ></v-img>  
                    <div class="rights mb-15">© 2023 «Курс на Север»</div>


                    <div class="block-inf-row"><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></div>
                            
                    <div class="block-inf-row"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></div>
                                        
                    <div class="block-inf-row mb-15"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></div>
                    
                    <span class="address">Мурманская область. <br> ГОБУ Центр занятости населения <br> г.Мурманска.<br> Улица Книповича 48 <br></span>

                    <v-btn width="200" @click="go_on_map" id="btn-send-anket" class="my-15">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    
                        
                    <div id="docs">ДОКУМЕНТЫ:</div>

                    <div class="documents-row"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении</div></div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">обработки персональных</div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">данных</div>
                </v-container>
            </v-col>

            <v-col v-if="width <= 410">
                <v-container>
                    <v-img
                        src="../../assets/logo/white_logo.svg"
                        max-height="200"
                        max-width="200"
                        contain
                    ></v-img>  
                    <div class="rights mb-15">© 2023 «Курс на Север»</div>


                    <div class="block-inf-row"><v-icon class="mt-1" color="white" icon="mdi-phone"></v-icon> <div class="ml-3" id="phone_number">8 (8152) 56-67-07</div></div>
                            
                    <div class="block-inf-row"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="mailto:@murman_zan.ru" class="ml-3" id="mail" >@czn_murman</a></div>
                                        
                    <div class="block-inf-row mb-15"><v-icon class="mt-2" color="white" icon="mdi-email"></v-icon> <a href="https://vk.com/czn_murman" class="ml-3" id="vk">vk.com/czn_murman</a></div>
                    
                    <span class="address">Мурманская область. <br> ГОБУ Центр занятости населения <br> г.Мурманска.<br> Улица Книповича 48 <br></span>

                    <v-btn width="200" @click="go_on_map" id="btn-send-anket" class="my-15">НАЙДИТЕ НАС НА КАРТЕ</v-btn>
                    
                        
                    <div id="docs">ДОКУМЕНТЫ:</div>

                    <div class="documents-row"><v-icon color="white" class="mr-3" icon="mdi-bookmark"></v-icon><div id="personal-data-fir-part">Политика в отношении</div></div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">обработки персональных</div>
                    <div id="personal-data-sec-part" class="text-left mt-3 ml-10">данных</div>
                </v-container>
            </v-col>
        </v-container>

        

    </v-footer>
</template>

<script>
import { useWindowSize} from '@vueuse/core'


export default{
    methods: {
        go_on_map(){
            this.$router.push({name: 'map-czn'})
        }
    },

    data(){
        return {

        }
    },

    setup(){
        const { width, height } = useWindowSize()

        return { width, height}
    }
}
</script>


<style>

.footer-logo{
    margin-left: auto;
    margin-right: auto;
}


.rights{
    color: white;
    font-family: "MontserratMedium";
    font-size: 12px;
    margin-top: 20px;
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

.address{
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


.block-address{
    display: flex;
    justify-content: center;
    margin-left: 22%;
}

.block-inf-row{
    display: flex;
    flex-direction: row;
}

.documents-row{
    display: flex;
    flex-direction: row; 
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