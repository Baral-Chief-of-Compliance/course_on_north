<template>
    <v-container class="mb-5">
        <div :class="[ width > 1000 ? 'title-for-page-corki' : 'title_for_page_corki_mobile' ]">АНКЕТА УЧАСТНИКА</div>
        <div :class="[ width > 1000 ? 'text-under-button' : 'text-under-button-mobile']">Чтобы принять участие в проекте необходимо заполнить анкету.</div>
        <!-- <v-btn @click="go_to_anketa_anketa_soiskatelya" class="my-3" color="#73C3F0" block><span class="text-under-button-send-soiskatelya">я соискатель</span></v-btn>
        <v-btn @click="go_to_anketa_anketa_employer" class="mt-3" color="#eb6635" block><span class="text-under-button-send-employer">я работодатель</span></v-btn> -->

        <v-row justify="center" class="mt-5" v-if="width > 860">
            <v-col cols="5" class="mr-5">
                <div>
                    <v-hover v-slot="{ isHovering, props }">
                    <v-card
                        class="mx-auto"
                        @click="go_to_anketa_anketa_soiskatelya"
                        v-bind="props"
                    >
                        <v-img src="../../assets/for_ankets/soiskatel.png"></v-img>

                        <v-card-text>
                        <div class="mb-10" :style="{fontSize: 50 + 'px', fontWeight: 'bold', color: '#2F5DA7', fontFamily: 'CorkiRegular'}">
                            Я соискатель
                        </div>
                        Меня заинтеросовала программа "Курс на север!", и я готов принять в ней участие
                        </v-card-text>

                        <v-overlay
                        :model-value="isHovering"
                        contained
                        scrim="#73C3F0"
                        class="align-center justify-center"
                        >
                        <v-btn @click="go_to_anketa_anketa_soiskatelya" variant="flat" color="#73C3F0"><span class="text-under-button-send-soiskatelya">Заполнить анкету соискателя</span></v-btn>
                        </v-overlay>
                    </v-card>
                    </v-hover>
                </div>
            </v-col>

            <v-col cols="5" class="ml-5">
                <div>
                    <v-hover v-slot="{ isHovering, props }">
                    <v-card
                        class="mx-auto"
                        @click="go_to_anketa_anketa_employer"
                        v-bind="props"
                    >
                        <v-img src="../../assets/for_ankets/new_employer.jpg"></v-img>

                        <v-card-text>
                        <div class="mb-10" :style="{fontSize: 50 + 'px', fontWeight: 'bold', color: '#eb6635', fontFamily: 'CorkiRegular'}">
                            Я работодатель
                        </div>
                        Я готов предоставить вакансии, чтобы помочь программе "Курс на север!"
                        </v-card-text>

                        <v-overlay
                        :model-value="isHovering"
                        contained
                        scrim="#EAA379"
                        class="align-center justify-center"
                        >
                        <v-btn @click="go_to_anketa_anketa_employer" variant="flat" color="#EAA379"><span class="text-under-button-send-employer">Заполнить анкету работадателя</span></v-btn>
                        </v-overlay>
                    </v-card>
                    </v-hover>
                </div>
            </v-col>

        </v-row>

        <v-btn v-if="width <= 860" @click="go_to_anketa_anketa_soiskatelya" class="my-3" color="#73C3F0" block><span class="text-under-button-send-soiskatelya">я соискатель</span></v-btn>
        <v-btn v-if="width <= 860" @click="go_to_anketa_anketa_employer" class="mt-3" color="#EAA379" block><span class="text-under-button-send-employer">я работодатель</span></v-btn>

    </v-container>
</template>

<style scoped>
.text-under-button-send-soiskatelya{
    color: #005a8c;
    font-family: "MontserratMedium";
    font-size: 13px;
    font-weight: bold;
}

.text-under-button-send-employer{
    color: #EA4D38;
    font-family: "MontserratMedium";
    font-size: 13px;
    font-weight: bold;
}

.text-under-button{
    font-family: "MontserratMedium";
    font-size: 20px;
    color: black;
}

.text-under-button-mobile{
    font-family: "MontserratMedium";
    font-size: 15px;
    color: black;
}

</style>

<script>

export default{

    props:{
        width: Number
    },

    data(){
        return{
            data_for_ankets: [
                {
                    title:'Я соискатель',
                    sub_title: 'Меня заинтеросовала программа "Курс на север!", и я готов принять в ней участие',
                    color_title: '#2F5DA7',
                    img_src: '../../assets/for_ankets/soiskatel.png'
                },
                {
                    title: 'Я работодатель',
                    sub_title: 'Я готов предоставить вакансии, чтобы помочь программе "Курс на север!"',
                    color_title: '#eb6635',
                    img_src: '../../assets/for_ankets/employer.jpg'
                }
            ]
        }
    },

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