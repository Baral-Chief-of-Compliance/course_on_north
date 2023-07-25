<template>
    <v-container class="mt-10">
        <div  class="title-for-page-corki">НА СЕВЕРЕ ЖИТЬ</div>

        <div class="video-on-page" :style="{ width: maxWidthVideo + 'px', height: maxHeightVideo + 'px'}">
            <video  controls autoplay muted>
                <source src="../../assets/videos/video-choose-yours-kolsky-3.mp4">
            </video>
        </div>
        
    </v-container>
</template>

<script>


    export default{
        props:{
            width: Number
        },

        data(){
            return{
                similarityFactorWidth: 0.67,
                similarityFactorHeight: 0.42
            }
        },

        computed: {
            maxWidthVideo(){
                return this.width * this.similarityFactorWidth
            },

            maxHeightVideo(){
                return this.width * this.similarityFactorHeight
            }
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