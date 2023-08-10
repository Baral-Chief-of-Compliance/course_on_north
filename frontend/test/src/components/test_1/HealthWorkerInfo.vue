<template>
    <div id="health_worker_info" :style="componentColor">
        <v-container  class="py-10">
            <TitleComponent :typeStyle="typeStyle" title="меры поддержки для медецинских работников" />
            <TextForInfBlock :textContent="text" :textStyle="textComponent" />

            <v-row v-if="width > 962">
                <v-col cols="1"></v-col>

                <v-col cols="5">
                    <HealthInfoCard 
                        title="ПОТРЕБНОСТЬ В МЕДИЦИНСКИХ КАДРАХ"
                        path="1.jpg"
                     />
                </v-col>
                <v-col cols="5">
                    <HealthInfoCard 
                        title="ФЕДЕРАЛЬНЫЕ И РЕГИОНАЛЬНЫЕ ВЫПЛАТЫ" 
                        path="2.jpg"
                    />
                </v-col>

                <v-col cols="1"></v-col>
            </v-row>

            <v-row v-if="width > 962">
                <v-col cols="1"></v-col>

                <v-col cols="5">
                    <HealthInfoCard 
                        title="ОБЕСПЕЧЕНИЕ ЖИЛЬЕМ" 
                        path="3.jpg"
                    />
                </v-col>
                <v-col cols="5">
                    <HealthInfoCard 
                        title="ЗАРАБОТНАЯ ПЛАТА И ВЫПЛАТЫ" 
                        path="4.jpg"
                    />
                </v-col>

                <v-col cols="1"></v-col>
            </v-row>

            <v-row v-if="width > 962">
                <v-col cols="1"></v-col>
                <v-col cols="5">
                    <HealthInfoCard 
                        title="ПОМОЩЬ ПРЕДПРИЯТИЙ И МУНИЦИПАЛЬНЫХ ОБРАЗОВАНИЙ" 
                        path="5.jpg"
                    />
                </v-col>
                <v-col cols="5">
                    <HealthInfoCard 
                        title="ПОДДЕРЖКА БУДУЩИХ МЕДИЦИНСКИХ РАБОТНИКОВ" 
                        path="6.jpg"
                    />
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>

            <v-row v-if="width > 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="СОЦИАЛЬНАЯ ПОДДЕРЖКА" 
                        path="7.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>


            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ПОТРЕБНОСТЬ В МЕДИЦИНСКИХ КАДРАХ"
                        path="http://localhost:3000/src/assets/health_worker/1.jpg"
                     />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ФЕДЕРАЛЬНЫЕ И РЕГИОНАЛЬНЫЕ ВЫПЛАТЫ" 
                        path="http://localhost:3000/src/assets/health_worker/2.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ОБЕСПЕЧЕНИЕ ЖИЛЬЕМ" 
                        path="http://localhost:3000/src/assets/health_worker/3.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ЗАРАБОТНАЯ ПЛАТА И ВЫПЛАТЫ" 
                        path="http://localhost:3000/src/assets/health_worker/4.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ПОМОЩЬ ПРЕДПРИЯТИЙ И МУНИЦИПАЛЬНЫХ ОБРАЗОВАНИЙ" 
                        path="http://localhost:3000/src/assets/health_worker/5.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="ПОДДЕРЖКА БУДУЩИХ МЕДИЦИНСКИХ РАБОТНИКОВ" 
                        path="http://localhost:3000/src/assets/health_worker/6.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
            </v-row>

            <v-row v-if="width <= 962">
                <v-col cols="3"></v-col>
                <v-col cols="6">
                    <HealthInfoCard 
                        title="СОЦИАЛЬНАЯ ПОДДЕРЖКА" 
                        path="http://localhost:3000/src/assets/health_worker/7.jpg"
                    />
                </v-col>
                <v-col cols="3"></v-col>
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

        return { mainColor, componentColor, textComponent,  width, height }
    }
}
</script>