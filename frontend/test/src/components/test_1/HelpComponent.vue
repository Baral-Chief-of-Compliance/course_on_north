<template>
    <div id="help" :style="componentColor">
        <v-container class="py-10">
            <TitleComponent  :typeStyle="typeStyle" title="чем мы можем помочь?" />
            <TextForInfBlock :textContent="text_1" :textStyle="textComponent" />
            <TextForInfBlock :textContent="text_2" :textStyle="textComponent" />
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
            text_1: 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Равным образом дальнейшее развитие различных форм деятельности способствует подготовки и реализации существенных финансовых и административных условий. Таким образом укрепление и развитие структуры способствует подготовки и реализации модели развития. Не следует, однако забывать, что рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.',
            text_2: 'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют определения и уточнения новых предложений. Товарищи! начало повседневной работы по формированию позиции играет важную роль в формировании соответствующий условий активизации. Задача организации, в особенности же консультация с широким активом требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.'
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