<template>

        <v-carousel
            cycle
            height="690"
            hide-delimiter-background
            show-arrows="hover"
            color="#2F5DA7"
        > 

            <v-carousel-item
            >
                <img  class="img_carousel" src="../../assets/images_for_carousel/logo_course.jpg"/>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/images_for_carousel/target_project.jpg"
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <v-img
                    src="../../assets/images_for_carousel/recruting.jpg"
                ></v-img>
            </v-carousel-item>

            <v-carousel-item
            >
                <img  class="img_carousel" src="../../assets/images_for_carousel/client_route.jpg" />
            </v-carousel-item>

            <v-carousel-item
            >  
                <img  class="img_carousel" src="../../assets/images_for_carousel/naseverezhit.jpg" />
            </v-carousel-item>

        </v-carousel>

        
        <about-project />
    <v-container>
        <div class="test-Montserrat">
В связи с современным запросом общества на защиту суверенитета государства создание центров гражданско-патриотического воспитания является важным, целесообразным и актуальным</div>
        <div class="title-for-page-corki">ГРАЖДАНСКО-ПАТРИОТИЧЕСКОЕ ВОСПИТАНИЕ МОЛОДЁЖИ</div>
        <div class="text-h3 mt-10">Заполните заявку</div>
        <v-text-field class="mt-5" color="#EB6635" label="Фамилия"></v-text-field>
        <v-text-field color="#EB6635" label="Имя"></v-text-field>
        <v-text-field class="mb-5" color="#EB6635" label="Отчетсво"></v-text-field>
        <v-btn color="#2994d1" block>Оставить заявку</v-btn>
    </v-container>

</template>


<script>
import axios from 'axios';
import AboutProject from './AboutProject.vue';


export default{
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        images: [
            {url: "@/../assets/images_for_carousel/logo_course.jpg", alt: "logo_course"},
            {url: "../../assets/images_for_carousel/target_project.jpg", alt: "target_project"},
            {url: "../../assets/images_for_carousel/recruting.jpg", alt: "recruting"},
            {url: "../../assets/images_for_carousel/client_route.jpg", alt: "client_route"},
            {url: "../../assets/images_for_carousel/naseverezhit.jpg", alt: "naseverezhit"}
        ]
      }
    },

    components: {
        AboutProject
    }
}
</script>

<style>
.img_carousel{
    width: 100%;
    height: 690px;
}

.title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635
}

.test-Montserrat{
    font-family: "MontserratMedium";
    font-size: 14px;
    line-height: 24px;
    color: black
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