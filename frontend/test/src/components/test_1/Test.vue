<template>
        <carousel />
        <video-info />
        <about-project />
        <structure />
        <clients-info />
        <go-to-anketa-participant />

</template>


<script>
import axios from 'axios';
import AboutProject from './AboutProject.vue';
import Carousel from './Carousel.vue';
import Structure from './Structure.vue';
import ClientsInfo from './ClientsInfo.vue';
import VideoInfo from './VideoInfo.vue';
import GoToAnketaParticipant from './GoToAnketaParticipant.vue';



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
        AboutProject,
        Carousel,
        Structure,
        ClientsInfo,
        VideoInfo,
        GoToAnketaParticipant
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
    url("../../assets/Montserrat/Montserrat-Regular.woff") format("woff"),
    url("../../assets/Montserrat/Montserrat-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
}
</style>