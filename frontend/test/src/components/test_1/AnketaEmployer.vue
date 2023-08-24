<template>
    <v-container>

        <button-back label="на главную" @my-event="go_back" />

        <anket-title title="Анкета работодателя" />
        <anket-text 
            text="Заполните анкету работодателя."
        />

        <v-container>
            <text-field-component v-model="nameCompany" title="Полное наименование" />
            <text-area-component v-model="lawMail" title="Юридический адрес" @click="dialogEntityAddress = true" />
            
            <v-dialog
                v-model="dialogEntityAddress"
                width="auto" 
            >
                <address-card :close-dialog="() => dialogEntityAddress = false" title="Юридический адрес" v-model="lawMail" />
            </v-dialog>

            <button-anket 
                @click="dialogSendVacancies = true"
                title="Прикрепить вакансии"
                color-text="white"
                :color="excelColor"
            />

            <v-dialog
                v-model="dialogSendVacancies"
                width="auto"
            >
                <vacancies-card :close-dialog="() => dialogSendVacancies = false" title="Прикрепить вакансии" />
            </v-dialog>


            <!-- <v-card width="700px">
                    <v-card-title>
                        Прикрепить вакансии
                    </v-card-title> 

                    <v-card-text>
                        <v-alert
                            type="warning"
                            title="Пример оформления вакансий"
                        >
                            Для примера оформления вакансий необходимо скачать таблицу.
                            <a href="http://127.0.0.1:5000/send-table">
                                <v-btn class="mt-2" color="#02723b"><v-icon color="white"  icon="mdi-file-excel-box">
                                    </v-icon><span class="ml-2">
                                        Скачать таблицу
                                    </span>
                                </v-btn>
                            </a>
                            
                        </v-alert>

                        <v-file-input color="#2F5DA7" variant="solo-filled" class="mt-5" label="Прикрепить таблицу с вакансиями"></v-file-input>

                    </v-card-text>
                    <v-card-actions>
                        <v-btn variant="elevated" color="success" @click="dialogSendVacancies = false">Сохранить</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn variant="elevated" color="error" @click="dialogSendVacancies = false">Закрыть</v-btn>
                    </v-card-actions>
                </v-card> -->

            <text-field-component v-model="contact" title="ФИО контактного лица" />
            <text-field-component v-model="phoneNumber" title="Номер телефона" />
            <text-field-component v-model="email" title="Электронная почта" />
            
            <v-file-input color="#2F5DA7" variant="solo-filled" label="Карточка предприятия"></v-file-input>
            
            <button-anket
                type="submit"
                title="Отправить анкету"
                color-text="white"
                :color="mainColor"
            />

        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';
import ButtonBack from './../../components/test_1/details/ButtonBack.vue';
import TextFieldComponent from './details/ankets/TextFieldComponent.vue';
import TextAreaComponent from './details/ankets/TextAreaComponent.vue';
import AnketTitle from './details/ankets/AnketTitle.vue';
import AnketText from './details/ankets/AnketText.vue';
import ComboboxComponent from './details/ankets/ComboboxComponent.vue';
import AlertComponent from './details/ankets/AlertComponent.vue';
import AddressCard from './details/ankets/AddressCard.vue';
import VacanciesCard from './details/ankets/VacanciesCard.vue';
import ButtonAnket from './details/ankets/ButtonAnket.vue';
import { ref, inject } from 'vue';


export default{


    components:{
        ButtonBack,
        TextFieldComponent,
        TextAreaComponent,
        AnketTitle,
        AnketText,
        ComboboxComponent,
        AlertComponent,
        AddressCard,
        VacanciesCard,
        ButtonAnket
    },

    setup(){
        let nameCompany = ref("")

        const lawMail = ref({
            country: null,
            subjectRF: null,
            town: null,
            street: null,
            building: null,
            apartment: null,
            index: null,
            additionalInfo: null,

            toString: function(){
                let value = "";

                value = `${(this.country === null)? "" : this.country }` +
                        `${(this.subjectRF === null) ? "" : ", " + this.subjectRF }` +
                        `${(this.town === null) ? "" : ", " + this.town }` +
                        `${(this.street === null) ? "" : ", " + this.street }` +
                        `${(this.building === null) ? "" : ", " + this.building }` +
                        `${(this.apartment === null) ? "" : ", " + this.apartment }` +
                        `${(this.index === null) ? "" : ", " + this.index }` +
                        `${(this.additionalInfo === null) ? "" : ", " + this.additionalInfo }` 
                return value
            }
        })

        let contact = ref("")

        let phoneNumber = ref("")

        let email = ref("")

        
        let excelColor = ref("#217346")

        let mainColor = inject("mainColor")

        return {
            nameCompany,
            lawMail,
            contact,
            phoneNumber,
            email,
            excelColor,
            mainColor
        }

    },

    data(){
        return{
            dialogEntityAddress: false,
            dialogSendVacancies: false,
        }
    },

    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
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