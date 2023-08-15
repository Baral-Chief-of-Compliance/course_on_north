<template >
  <transition name="fade">
    <div v-if="scrollValue > 50" @click="go_top" class="control-scroll">
      <v-img class="img-arrow-up"
            max-height="30"
            max-width="30"
            contain
            src="../../assets/for_manipulation/arrow-ap.svg"
        />
    </div>
  </transition>
  <carousel/>
  <about-project typeStyle="reverse" />
  <help-component />
  <video-info :width="width" typeStyle="reverse" />
  <go-to-anketa-participant :width="width" />

  <health-worker-info typeStyle="reverse" />
  <teachers-info />
</template>


<script>
import axios from 'axios';
import AboutProject from './AboutProject.vue';
import Carousel from './Carousel.vue';
import Structure from './Structure.vue';
import ClientsInfo from './ClientsInfo.vue';
import VideoInfo from './VideoInfo.vue';
import HelpComponent from './HelpComponent.vue';
import GoToAnketaParticipant from './GoToAnketaParticipant.vue';
import HealthWorkerInfo from './HealthWorkerInfo.vue'; 
import TeachersInfo from './TeachersInfo.vue';


import { registerPlugins } from '@/plugins';
import { useWindowSize} from '@vueuse/core';



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
        ],
        x: 0,
        scrollValue: 0,
      }
    },

    components: {
        AboutProject,
        Carousel,
        Structure,
        ClientsInfo,
        VideoInfo,
        GoToAnketaParticipant,
        HelpComponent,
        HealthWorkerInfo,
        TeachersInfo
    },

    methods: {
      go_top(){
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    created(){
      const onScroll = () => this.scrollValue = window.scrollY;
      window.addEventListener('scroll', onScroll)
    },

    setup(){
      const { width, height} = useWindowSize()

      return { width, height }
    }
}
</script>

<style>

.movearea{
  transition: 0.2s background-color ease;
}


.img_carousel{
    width: 100%;
    height: 690px;
}

.title-for-page-corki{
    font-size: 70px;
    font-weight: 400;
    line-height: 76px;
    font-family: "CorkiRegular";
    color: #eb6635;
}

.title_for_page_corki_mobile{
  font-size: 40px;
  font-weight: 400;
  line-height: 76px;
  font-family: "CorkiRegular";
  color: #eb6635;
}

.test-Montserrat{
    font-family: "MontserratMedium";
    font-size: 14px;
    line-height: 24px;
    color: black
}

.control-scroll {
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #194996;
  color: white;
  position: fixed;
  margin-top: 72vh;
  margin-left: 5vw;
  z-index: 1000;
}

.control-scroll:hover {
  background: #2F5DA7;
  transition: all 400ms;
  cursor: pointer;
  
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s ease;;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}

.img-arrow-up{
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
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