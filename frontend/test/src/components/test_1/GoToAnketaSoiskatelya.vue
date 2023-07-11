<template>
    <v-container>
        <div class="title-for-page-corki">АНКЕТА СОИКАТЕЛЯ</div>
        <span class="text-under-button">Чтобы принять участие в проекте необходимо заполнить анкету.</span>
        <v-btn @click="go_to_anketa_anketa_soiskatelya" class="mt-2" color="#73C3F0" block><span class="button-send">Заполнить анкету соискателя</span></v-btn>
    </v-container>
</template>

<style scoped>
.button-send{
    color: #005a8c
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
        }
    }
}
</script>