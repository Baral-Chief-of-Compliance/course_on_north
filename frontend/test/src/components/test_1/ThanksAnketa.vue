<template>
    <v-container class="my-15">
        <div class="text-h3 mb-5">Спасибо за отправленную анкету!</div>
        <v-container>
            <div class="text-h5 mb-5">Вы автоматически вернетесь на главную страницу через:</div>

            <v-progress-circular
                :rotate="360"
                :size="100"
                :width="15"
                :model-value="loading_value"
                color="#2F5DA7"
                class="progress-circular"

            >
               <span class="left-seconds-circular">{{ seconds_left }}</span> 
            </v-progress-circular>
        </v-container>
        <v-container>
            <v-btn block @click="go_main_page()" variant="outlined">
                <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>На главную
            </v-btn>
        </v-container>
    </v-container>

</template>

<script>
export default{
    data(){
        return{
            seconds_left: 10,
            loading_value: 0,
            interval: {}
        }
    },

    methods:{
        go_main_page(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'}) 
        }
    },

    mounted(){
        this.get_start()
        this.interval = setInterval(() => {
            if (this.loading_value === 100){
                this.go_main_page()
            }
            this.loading_value += 10
            this.seconds_left -= 1
        }, 1000)
    }
}
</script>


<style scoped>
.left-seconds-circular{
    color: black;
    font-weight: bold;
}

.progress-circular{
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
</style>