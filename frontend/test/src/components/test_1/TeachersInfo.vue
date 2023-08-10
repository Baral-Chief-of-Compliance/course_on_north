<template>
    <div id="teachers" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="меры поддержки педагогических работников" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />

            <v-row>
                <v-col cols="3"></v-col>

                <v-col cols="6">
                    <v-dialog
                        v-model="dialog"
                        width="auto"
                    >
                        <template v-slot:activator="{ props }">
                            <v-card 
                                v-bind="props"
                                @click=""
                            >
                            <v-img 
                                    src="@/assets/teachers/1.jpg"
                                    contain
                                    width="100%"
                                    cover
                                >

                            </v-img>

                            <v-card-text :style="{color: addColor}" class="card_title">
                                НОВЫЕ МЕРЫ ПОДДЕРЖКИ ПЕДАГОГИЧЕСКИХ РАБОТНИКОВ
                            </v-card-text>

                            <v-card-actions>
                                <v-btn :color="addColor" variant="outlined" block>
                                    <span class="btn_title">подробнее</span> 
                                </v-btn>
                            </v-card-actions>
                            </v-card>
                        </template>

                        <v-card>
                            <v-card-title class="card_title my-5" :style="{color: addColor}">
                                НОВЫЕ МЕРЫ ПОДДЕРЖКИ ПЕДАГОГИЧЕСКИХ РАБОТНИКОВ
                            </v-card-title>

                            <v-card-text>
                                <v-img
                                    src="@/assets/teachers/2.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/3.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/4.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/5.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/6.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/7.jpg"
                                    width="1300"
                                >    
                                </v-img>
                                <v-img
                                    src="@/assets/teachers/8.jpg"
                                    width="1300"
                                >    
                                </v-img>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn variant="outlined" :color="addColor" block @click="dialog = false">
                                <span class="btn_title">закрыть</span> 
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-col>

                <v-col cols="3"></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue'
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';


export default{

    data(){
        return{
            text: 'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции требуют от нас анализа форм развития. Задача организации, в особенности же консультация с широким активом позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Товарищи! новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании форм развития.',
            dialog: false,
        }
    },

    props: {
        typeStyle: String
    },

    components: {
        TitleComponent,
        TextForInfBlock
    },


    setup(props){
        const mainColor = inject('mainColor')
        const addColor = inject('addColor')

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

        return { mainColor, componentColor, textComponent, addColor }
    }
}
</script>