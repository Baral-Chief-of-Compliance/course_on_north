<template>
    <div id="health_worker_info" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="меры поддержки для медецинских работников" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />

            <v-row>
                <v-col cols="1"></v-col>

                <v-col cols="3">
                    <HealthInfoCard title="потребность в медицинских кадрах" />
                </v-col>
                <v-col cols="3">
                    <HealthInfoCard title="ФЕДЕРАЛЬНЫЕ И РЕГИОНАЛЬНЫЕ ВЫПЛАТЫ" />
                </v-col>
                <v-col cols="3">
                    <HealthInfoCard title="потребность в " />
                </v-col>

                <v-col cols="1"></v-col>
            </v-row>
            <v-row>
                <v-col cols="1"></v-col>

                <v-col cols="3">
                    <HealthInfoCard title="потребность в медицинских кадрах" />
                </v-col>
                <v-col cols="3">
                    <HealthInfoCard title="ФЕДЕРАЛЬНЫЕ И РЕГИОНАЛЬНЫЕ ВЫПЛАТЫ" />
                </v-col>
                <v-col cols="3">
                    <HealthInfoCard title="потребность в " />
                </v-col>

                <v-col cols="1"></v-col>
            </v-row>

            <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="3"></v-col>
                <v-col cols="3">
                    <HealthInfoCard title="потребность в " />
                </v-col>
                <v-col cols="3"></v-col>
                <v-col cols="1"></v-col>
            </v-row>
            
        </v-container>
    </div>
</template>

<script>
import TitleComponent from './../test_1/details/TitleComponents.vue'
import TextForInfBlock from './../test_1/details/TextForInfBlock.vue';
import HealthInfoCard from './../test_1/details/HealthInfo/HealthInfoCard.vue'
import { inject } from 'vue';

export default{

    data(){
        return{
            text: 'Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения дальнейших направлений развития. Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения соответствующий условий активизации. Равным образом сложившаяся структура организации влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Разнообразный и богатый опыт консультация с широким активом в значительной степени обуславливает создание систем массового участия. Идейные соображения высшего порядка, а также сложившаяся структура организации требуют от нас анализа форм развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке систем массового участия.',
        }
    },

    components: {
        TitleComponent,
        TextForInfBlock,
        HealthInfoCard
    },

    props: {
        typeStyle: String
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