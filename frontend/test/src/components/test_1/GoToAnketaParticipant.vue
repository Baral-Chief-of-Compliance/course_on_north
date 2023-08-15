<template>
    <div id="ankets">
        <v-container class="py-10">            
            <TitleComponent :typeStyle="typeStyle" title="анкета участника" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />
            <v-row>
                <v-col v-if="width > 1280" cols=1></v-col>
                <v-col :cols="( width > 1280) ? 5: 12" v-for="anket in data_for_ankets">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card
                            class="mx-auto"
                            @click="go_to_anketa(anket.name)"
                            v-bind="props"
                            max-width="600"
                        >
                            <v-img :src="get_image_URL(anket.img_src)" cover height="300px"></v-img>

                            <v-card-text>
                                <div class="mb-10" :style="{fontSize: 50 + 'px', color: anket.color_title, fontFamily: 'CorkiRegular'}">
                                    <p style="line-height: 1; text-transform: uppercase; word-break: normal; ">{{ anket.title }}</p>
                                </div>
                                <div :style="{fontFamily: 'MontserratMedium', fontSize: 16}">
                                    {{ anket.sub_title }}
                                </div>
                            </v-card-text>

                            <v-overlay
                                :model-value="isHovering"
                                contained
                                :scrim="anket.color_overlay"
                                class="align-center justify-center"
                            >
                                <v-btn @click="go_to_anketa(anket.name)" variant="flat" :color="anket.color_title">
                                    <span class="text-under-button">
                                        {{ anket.btn_title }}
                                    </span>
                                </v-btn>
                            </v-overlay>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col v-if="width > 1280" cols=1></v-col>
            </v-row>
        </v-container>

    </div>
</template>


<style scoped>


.text-under-button{
    font-family: "MontserratMedium";
    font-size: 15px;
    font-weight: bold;
    color: white
}

</style>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';


export default{
    components: {
        TitleComponent,
        TextForInfBlock
    },


    props:{
        typeStyle: String
    },

    data(){
        return{
            data_for_ankets: [
                {
                    title:'Я соискатель',
                    sub_title: 'Меня заинтеросовала программа "Курс на север!", и я готов принять в ней участие',
                    color_title: '#2F5DA7',
                    img_src: 'soiskatel.png',
                    name: 'AnketaSoiskatelya',
                    btn_title: 'Заполнить анкету соискателя',
                    color_overlay: '#73C3F0'
                },
                {
                    title: 'Я работодатель',
                    sub_title: 'Я готов предоставить вакансии, чтобы помочь программе "Курс на север!"',
                    color_title: '#eb6635',
                    img_src: 'new_employer.jpg',
                    name: 'AnketaEmployer',
                    btn_title: 'Заполнить анкету работадателя',
                    color_overlay: '#EAA379'
                }
            ],
            text: 'Чтобы принять участие в проекте необходимо заполнить анкету.'
        }
    },

    methods:{

        go_to_anketa(name){
            this.$router.push({name: name})
        }
    },

    setup(props){
        const mainColor = inject('mainColor')
        const width = inject('width')
        const height = inject('height')

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

        function get_image_URL(name){
            return new URL(`../../assets/for_ankets/${name}`, import.meta.url).href
        }

        return { mainColor, componentColor, textComponent, width, get_image_URL, height }
    }
}
</script>