<template>
    <v-container>
        <button-back label="на главную" @my-event="go_back" />

        <anket-title title="Анкета соискателя" />

        <anket-text 
            text="Заполните анкету соискателя, указав, какая сфера деятельности, должность и профессия вам интересны."
        />

        <v-container>
            <text-field-component title="Фамилия" v-model="surname"/>
            <text-field-component title="Имя" v-model="name" />
            <CheckBoxComonent :color="mainColor" title="Отчество отсутствует" v-model="selected" />
            <text-field-component v-if="selected"  title="Отчество" v-model="patronymic" />
            <text-field-component title="Возраст" type="number" v-model="age" />
            <text-field-component title="Электронный адрес" v-model="email"  />

            <text-area-component title="Почтовый адрес" @click="dialogAddress = true" />
            <v-dialog
                v-model="dialogAddress"
                width="auto"
            >
                <address-card title="Почтовый адрес" v-model="mail" />
            </v-dialog>


            <text-area-component title="Адрес регистрации" @click="dialogRegister = true" />
            <v-dialog
                v-model="dialogRegister"
                width="auto"
            >
                <address-card title="Адрес регистрации" />
            </v-dialog>

            <text-field-component title="Номер телефона" />
            <text-field-component title="Желаемая профессия" />

            <combobox-component title="Семейное положение" :items="['не замужем', 'замужем', 'холост', 'женат']" />
            <combobox-component title="Дети" :items="['есть', 'нет']" />
            <combobox-component title="Образование" :items="['среднее', 'среднее профессиональное', 'высшее, высшее - бакалавриат', 'высшее - магистратура']" />

            <text-field-component title="Наименование учебного заведения" />
            <combobox-component title="Возможность переезда в Мурманскую область" :items="['да', 'нет']" />
            <combobox-component title="Необходимость жилья" :items="['да', 'нет']" />


            <text-field-component title="Желаемый уровень заработной платы" />
            <text-field-component title="Общий стаж" />
            <text-field-component title="Должность на последнем месте работы" />
            <text-field-component title="Дополнительная информация" />
            
            <alert-component
                title="Предупреждение" 
                text="Настоящим подтверждаю, что являюсь гражданином, обратившимся в рамках реализации проекта «Курс на Север» и прошу оказать содействие в поиске подходящей работы в рамках Постановления Правительства Мурманской области от 28.04.2023 г. № 329-ПП “О службе сопровождения “Курс на Север”"
                type="info"
                checkbox-label="Подтверждаю"
            />

            <v-file-input color="#2F5DA7" variant="solo-filled" class="mt-5" label="Прикрепить резюме"></v-file-input>
            
            <alert-component
                title="Согласие на обработку персональных данных"
                text="Я подтверждаю свое согласие на обработку персональных данных. Я проинформирован о том, что направление данного обращения в государственный орган, орган местного самоуправления или должностному лицу, в компетенцию которых входит решение поставленных в обращении вопросов, не является разглашением сведений, содержащихся в обращении."
                type="warning"
                checkbox-label="Подтверждаю"
            />


            <button-anket 
                title="Отправить анкету" 
                color-text="white" 
                :color="mainColor"
                @btn-funk="send_anketa"
            />

        </v-container>
        
    </v-container>
</template>

<script>
import ButtonBack from './../../components/test_1/details/ButtonBack.vue';
import TextFieldComponent from '@/components/test_1/details/ankets/TextFieldComponent.vue';
import AddressCard from './details/ankets/AddressCard.vue';
import ComboboxComponent from './details/ankets/ComboboxComponent.vue';
import TextAreaComponent from './details/ankets/TextAreaComponent.vue';
import AnketTitle from './details/ankets/AnketTitle.vue';
import AnketText from './details/ankets/AnketText.vue';
import AlertComponent from './details/ankets/AlertComponent.vue';
import ButtonAnket from './details/ankets/ButtonAnket.vue';
import CheckBoxComonent from './details/ankets/CheckBoxComonent.vue';
import { inject, ref } from 'vue';


export default{

    components: {
        ButtonBack,
        TextFieldComponent,
        AddressCard,
        ComboboxComponent,
        TextAreaComponent,
        AnketTitle,
        AnketText,
        AlertComponent,
        ButtonAnket,
        CheckBoxComonent
    },

    setup(){
        const mainColor = inject('mainColor')
        let surname = ref("")
        let name = ref("")
        let patronymic = ref("")
        let age = ref("")
        let email = ref("")
        const mail = ref({
            country: "",
            subjectRF: "",
            town: "",
            street: "",
            building: "",
            apartment: "",
            index: "",
            additionalInfo: ""
        })

        return { 
                    mainColor, 
                    surname, 
                    name,
                    patronymic,
                    age,
                    email,
                    mail
                }
    },

    data(){
        return{
            selected: false,
            dialogAddress: false,
            dialogRegister: false,
            subjects_RF: ['Республика Адыгея (Адыгея)', 'Республика Алтай', 'Республика Башкортостан', 'Республика Бурятия', 'Республика Дагестан', 'Республика Ингушетия', 'Кабардино-Балкарская Республика', 'Республика Калмыкия', 'Карачаево-Черкесская Республика', 'Республика Карелия', 'Республика Коми', 'Республика Крым', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Саха (Якутия)', 'Республика Северная Осетия – Алания', 'Республика Татарстан (Татарстан)', 'Республика Тыва', 'Удмуртская Республика', 'Республика Хакасия', 'Чеченская Республика', 'Чувашская Республика – Чувашия', 'Алтайский край', 'Забайкальский край', 'Камчатский край', 'Краснодарский край', 'Красноярский край', 'Пермский край', 'Приморский край', 'Ставропольский край', 'Хабаровский край', 'Амурская область', 'Архангельская область', 'Астраханская область', 'Белгородская область', 'Брянская область', 'Владимирская область', 'Волгоградская область', 'Вологодская область', 'Воронежская область', 'Ивановская область', 'Иркутская область', 'Калининградская область', 'Калужская область', 'Кемеровская область', 'Кировская область', 'Костромская область', 'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область', 'Магаданская область', 'Московская область', 'Мурманская область', 'Нижегородская область', 'Новгородская область', 'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область', 'Пензенская область', 'Псковская область', 'Ростовская область', 'Рязанская область', 'Самарская область', 'Саратовская область', 'Сахалинская область', 'Свердловская область', 'Смоленская область', 'Тамбовская область', 'Тверская область', 'Томская область', 'Тульская область', 'Тюменская область', 'Ульяновская область', 'Челябинская область', 'Ярославская область', 'Город Москва', 'Город Санкт-Петербург', 'Город Севастополь', 'Еврейская автономная область', 'Ненецкий автономный округ', 'Ханты-Мансийский автономный округ – Югра', 'Чукотский автономный округ', 'Ямало-Ненецкий автономный окр']
        }
    },

    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        },

        check(){
            alert("тест")
        },

        send_anketa(){
            this.$router.push({name: 'ThanksAnketa'})
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>

<style>

#send-btn{
    color: white
}

</style>