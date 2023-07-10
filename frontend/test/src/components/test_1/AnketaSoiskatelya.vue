`<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3">Анкета соискателя</div>
        <div class="text-h5 mt-5">Заполните анкету соискателя, указав, какая сфера деятельности, должность и профессия вам интересны.</div>

        <v-container>
            <v-text-field color="#2F5DA7" label="Фамилия" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Имя" variant="solo-filled"></v-text-field>
            <v-checkbox color="#2F5DA7" label="Отчество отсутствует" value="Hiden" v-model="selected"></v-checkbox>
            <v-text-field v-if="'Hiden' != selected[0]" color="#2F5DA7" label="Отчество" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Возраст" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Электронный адрес" variant="solo-filled"></v-text-field>

         
            <v-textarea
                @click="dialogAddress = true"
                label="Почтовый адрес"
                color="#2F5DA7"
                variant="solo-filled"
            >
            </v-textarea>

            
            <v-dialog
            v-model="dialogAddress"
            width="auto"
            
            >
            <v-card width="500px">
                <v-card-title>
                    Почтовый адрес
                </v-card-title>
                <v-card-text>
                <v-text-field label="Страна"></v-text-field>
                <v-combobox label="Субъект РФ" :items="subjects_RF"></v-combobox>
                </v-card-text>
                <v-card-actions>
                <v-btn color="red" block @click="dialogAddress = false">Закрыть</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-textarea
                @click="dialogRegister = true"
                label="Адрес регистрации"
                color="#2F5DA7"
                variant="solo-filled"
            >
            </v-textarea>

            
            <v-dialog
            v-model="dialogRegister"
            width="auto"
            >
            <v-card width="500px">
                <v-card-title>
                    Почтовый адрес
                </v-card-title>
                <v-card-text>
                <v-text-field label="Страна"></v-text-field>
                <v-combobox label="Субъект РФ" :items="subjects_RF"></v-combobox>
                </v-card-text>
                <v-card-actions>
                <v-btn color="red" block @click="dialogRegister = false">Закрыть</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-text-field color="#2F5DA7" label="Номер телефона" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Желаемая профессия" variant="solo-filled"></v-text-field>
            <v-combobox color="#2F5DA7" label="Семейное положение" variant="solo-filled" :items="['не замужем', 'замужем', 'холост', 'женат']"></v-combobox>
            <v-combobox color="#2F5DA7" label="Дети" variant="solo-filled" :items="['есть', 'нет']"></v-combobox>
            <v-combobox color="#2F5DA7" label="Образование" variant="solo-filled" :items="['среднее', 'среднее профессиональное', 'высшее, высшее - бакалавриат', 'высшее - магистратура']"></v-combobox>
            <v-text-field color="#2F5DA7" label="Наименование учебного заведения" variant="solo-filled"></v-text-field>
            <v-combobox color="#2F5DA7" label="Возможность переезда в Мурманскую область" variant="solo-filled" :items="['да', 'нет']"></v-combobox>
            <v-combobox color="#2F5DA7" label="Необходимость жилья" variant="solo-filled" :items="['да', 'нет']"></v-combobox>
            <v-text-field color="#2F5DA7" label="Желаемый уровень заработной платы" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Общий стаж" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Должность на последнем месте работы" variant="solo-filled"></v-text-field>


            <v-btn id="send-btn" color="#2F5DA7" block>Отправить анкету</v-btn>

        </v-container>
        
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            selected: [],
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

</style>`