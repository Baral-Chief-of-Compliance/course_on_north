<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3">Анкета соискателя</div>
        <div class="text-h5 mt-5">Заполните анкету соискателя, указав, какая сфера деятельности, должность и профессия вам интересны.</div>

        <v-container>
            <v-text-field color="#2F5DA7" label="Фамилия" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Имя" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Отчество" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Полных лет" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Гражданство" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Место проживания в настоящее время" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Контактный телефон" variant="solo-filled"></v-text-field>
            <v-text-field color="#2F5DA7" label="Адрес электронной почты (при наличии)" variant="solo-filled"></v-text-field>
            <v-textarea color="#2F5DA7" label="Основное и дополнительное образование" variant="solo-filled"></v-textarea>
            <v-textarea color="#2F5DA7" label="Опыт работы (Период работы / Место работы / Должность / Обязанности )" variant="solo-filled"></v-textarea>

            <div>Занятость в настоящее время (работаете или не работаете)</div>
            <v-radio-group>
                <v-radio color="#2F5DA7" label="Работаю" value="1"></v-radio>
                <v-radio color="#2F5DA7" label="Не работаю" value="2"></v-radio>
                <v-radio color="#2F5DA7" label="Другое" value="3"></v-radio>
            </v-radio-group>

            <v-textarea color="#2F5DA7" label="Профессиональные и личные навыки" variant="solo-filled"></v-textarea>

            <v-text-field color="#2F5DA7" label='Откуда вы узнали о "Курс на Север"?' variant="solo-filled"></v-text-field>

            <div>Прикрепить фото не более10 МБ в формате jpg или png (по желанию)</div>
            <v-file-input class="mt-3" label="Прикрепить фото"></v-file-input>

            <div>Согласен/на на обработку персональных данных</div>
            <v-radio-group>
                <v-radio color="#2F5DA7" label="Да" value="1"></v-radio>
            </v-radio-group>

            <v-btn id="send-btn" color="#2F5DA7" block>Отправить анкету</v-btn>

        </v-container>
        
    </v-container>
</template>

<script>
export default{
    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        }
    }
}
</script>

<style>

#send-btn{
    color: white
}

</style>