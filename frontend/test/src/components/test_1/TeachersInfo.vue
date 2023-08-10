<template>
    <div id="teachers" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="меры поддержки педагогических работников" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />
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