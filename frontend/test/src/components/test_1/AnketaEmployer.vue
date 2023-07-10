<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3">Анкета работодателя</div>
    </v-container>
</template>

<script>
export default{
    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>