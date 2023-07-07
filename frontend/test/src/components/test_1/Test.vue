<template>

        <v-carousel
            cycle
            height="650"
            hide-delimiter-background
            show-arrows="hover"
        > 

            <v-carousel-item
                v-for="(slide, i) in slides"
            :key="i"
            >

                <v-sheet
                    :color="colors[i]"
                    height="100%"
                >

                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                            {{ slide }} Slide
                        </div>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>



    <v-container>
        <div id="test-Montserrat">
В связи с современным запросом общества на защиту суверенитета государства создание центров гражданско-патриотического воспитания является важным, целесообразным и актуальным</div>
        <div id="title-for-page-corki">ГРАЖДАНСКО-ПАТРИОТИЧЕСКОЕ ВОСПИТАНИЕ МОЛОДЁЖИ</div>
        <div class="text-h3 mt-10">Заполните заявку</div>
        <v-text-field class="mt-5" color="#EB6635" label="Фамилия"></v-text-field>
        <v-text-field color="#EB6635" label="Имя"></v-text-field>
        <v-text-field class="mb-5" color="#EB6635" label="Отчетсво"></v-text-field>
        <v-btn color="#2994d1" block>Оставить заявку</v-btn>
    </v-container>

</template>


<script>
import axios from 'axios';

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
      }
    },
}
</script>

<style scoped>



#title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635
}

#test-Montserrat{
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