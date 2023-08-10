<template>
    <!-- <v-container id="about_murmansk" class="mt-10">
        <div  :class="[ width > 1000 ? 'title-for-page-corki' : 'title_for_page_corki_mobile' ]">НА СЕВЕРЕ ЖИТЬ!</div>

        <div class="video-on-page" :style="{ width: maxWidthVideo + 'px', height: maxHeightVideo + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        </div>
        
    </v-container> -->

    <div id="murman_region" :style="componentColor">
        <v-container  class="py-10" >
            <TitleComponent :typeStyle="typeStyle" title="мурманская область" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />

            <div class="video-on-page" :style="{ width: maxWidthVideo + 'px', height: maxHeightVideo + 'px'}">
                <video  controls autoplay muted>
                    <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
                </video>
            </div>
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';



    export default{
        props:{
            width: Number,
            typeStyle: String
        },

        data(){
            return{
                similarityFactorWidth: 0.67,
                similarityFactorHeight: 0.42,
                text: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение модели развития. Равным образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке модели развития.'
            }
        },

        computed: {
            maxWidthVideo(){
                return this.width * this.similarityFactorWidth
            },

            maxHeightVideo(){
                return this.width * this.similarityFactorHeight
            }
        },

        components: {
            TitleComponent,
            TextForInfBlock 
        },

        setup(props){
            const mainColor = inject('mainColor')

            const componentColor = {
                backgroundColor: 'white'
            }

            const textComponent = {
                color: 'black'
            }


            if (props.typeStyle === 'reverse'){
                componentColor.backgroundColor = mainColor
                textComponent.color = 'white'
            }

            return { mainColor, componentColor, textComponent }  
        }
    }
</script>

<style scoped>
.video-on-page{
    /* width: 1000px;
    height: 500px; */
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
}
</style>