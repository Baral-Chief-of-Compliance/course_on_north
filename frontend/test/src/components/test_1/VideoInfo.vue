<template>
    <v-container class="mt-10">
        <div  class="title-for-page-corki">НА СЕВЕРЕ ЖИТЬ</div>

        <div v-if="width > 1700" class="video-on-page" :style="{ width: 1400 + 'px', height: 800 + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        
        </div>

        <div v-if="width > 1200 && width <= 1700" class="video-on-page" :style="{ width: 1000 + 'px', height: 500 + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        
        </div>

        <div v-if="width > 700 && width <= 1200" class="video-on-page" :style="{ width: 600 + 'px', height: 400 + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        
        </div>


        <div v-if="width <= 700" class="video-on-page" :style="{ width: 300 + 'px', height: 250 + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        
        </div>
        
    </v-container>
</template>

<script>
import { useWindowSize } from '@vueuse/core'


    export default{

        setup(){
            const { width, height} = useWindowSize()

            return { width, height}
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

.width_text{
    color: red
}
</style>