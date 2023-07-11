<template>
    <v-container>
        <div class="title-for-page-corki">АНКЕТА УЧАСТНИКА</div>
        <span class="text-under-button">Чтобы принять участие в проекте необходимо заполнить анкету.</span>
        <v-btn @click="go_to_anketa_anketa_soiskatelya" class="my-3" color="#73C3F0" block><span class="text-under-button-send-soiskatelya">я соискатель</span></v-btn>
        <v-btn @click="go_to_anketa_anketa_employer" class="mt-3" color="#eb6635" block><span class="text-under-button-send-employer">я работодатель</span></v-btn>
    </v-container>
</template>

<style scoped>
.text-under-button-send-soiskatelya{
    color: #005a8c
}

.text-under-button-send-employer{
    color: black
}

.text-under-button{
    font-family: "MontserratMedium";
    font-size: 20px;
    color: black;
}

</style>

<script>

export default{
    methods:{
        go_to_anketa_anketa_soiskatelya(){
            this.$router.push({name: "AnketaSoiskatelya"})
        },
        go_to_anketa_anketa_employer(){
            this.$router.push({name: "AnketaEmployer"})
        },
    }
}
</script>