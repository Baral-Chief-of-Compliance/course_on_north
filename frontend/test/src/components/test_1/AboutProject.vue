<template >
    <div id="about_project" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="о проекте" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue';
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import { inject } from 'vue';

export default{

    data(){
        return{
            text: 'С другой стороны начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Товарищи! новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.'
        }
    },

    props: {
        typeStyle: String
    },

    components:{
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
