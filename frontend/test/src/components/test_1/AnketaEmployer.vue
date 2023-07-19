<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3">Анкета работодателя</div>
        <div class="text-h5 mt-5">Заполните анкету работодателя.</div>

        <v-container>
            <v-text-field color="#2F5DA7" label="Полное наименование" variant="solo-filled"></v-text-field>
            <v-textarea
                @click="dialogEntityAddress = true"
                label="Юридический адрес"
                color="#2F5DA7"
                variant="solo-filled"
            >
            </v-textarea>

            
            <v-dialog
            v-model="dialogEntityAddress"
            width="auto"
            
            >
            <v-card width="700px">
                <v-card-title>
                    Юридический адрес
                </v-card-title>
                <v-card-text>
                    <v-text-field variant="solo-filled" color="#2F5DA7" label="Страна"></v-text-field>
                    <v-combobox variant="solo-filled" color="#2F5DA7" label="Субъект РФ" :items="subjects_RF"></v-combobox>
                    <v-combobox variant="solo-filled" color="#2F5DA7" label="Район, город, населённый пункт"></v-combobox>
                    <v-text-field variant="solo-filled" color="#2F5DA7" label="Если не нашли населённый пункт в справочнике, введите здесь"></v-text-field>
                    <v-combobox variant="solo-filled" color="#2F5DA7" label="Улица"></v-combobox>
                    <v-text-field variant="solo-filled" color="#2F5DA7" label="Если не нашли улицу в справочнике, введите здесь"></v-text-field>
                    <v-combobox variant="solo-filled" color="#2F5DA7" label="Здание/Сооружение"></v-combobox>
                    <v-combobox variant="solo-filled" color="#2F5DA7" label="Квартира/Офис/Помещение"></v-combobox>
                    <v-text-field variant="solo-filled" color="#2F5DA7" label="Индекс"></v-text-field>
                    <v-textarea variant="solo-filled" color="#2F5DA7" label="Дополнительная информация"></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="elevated" color="success" @click="dialogEntityAddress = false">Сохранить</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn variant="elevated" color="error" @click="dialogEntityAddress = false">Закрыть</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-btn color="success" @click="dialogSendVacancies = true" block>Прикрепить вакансии</v-btn>

            <v-dialog
                v-model="dialogSendVacancies"
                width="auto"
            >
                <v-card width="700px">
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
                </v-card>
            </v-dialog>
            <v-text-field class="mt-5" variant="solo-filled" color="#2F5DA7" label="ФИО контактного лица"></v-text-field>
            <v-text-field variant="solo-filled" color="#2F5DA7" label="Номер телефона"></v-text-field>
            <v-text-field variant="solo-filled" color="#2F5DA7" label="Электронная почта"></v-text-field>
            <v-file-input color="#2F5DA7" variant="solo-filled" label="Карточка предприятия"></v-file-input>

            <v-btn @click="send_anketa()" id="send-btn" color="#2F5DA7" block>Отправить анкету</v-btn>


        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios'

export default{


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

<style>

#send-btn{
    color: white
}

</style>