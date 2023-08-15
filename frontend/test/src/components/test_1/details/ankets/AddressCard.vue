<template>
    <v-card>
        <v-card-title>
            {{ props.title }}
        </v-card-title>

        <v-card-text>
            <TextFieldComponentVue title="Страна" />
            <ComboboxComponent 
                title="Субъект РФ"
                :items="[]"
            />
            <ComboboxComponent 
                title="Район, город, населённый пункт"
                :items="[]"
            />
            <TextFieldComponentVue title="Если не нашли населённый пункт в справочнике, введите здесь" />
            <ComboboxComponent 
                title="Улица"
                :items="[]"
            />
            <TextFieldComponentVue title="Если не нашли улицу в справочнике, введите здесь" />
            <ComboboxComponent 
                title="Здание/Сооружение"
                :items="[]"
            />
            <ComboboxComponent 
                title="Квартира/Офис/Помещение"
                :items="[]"
            />
            <TextFieldComponentVue title="Индекс" />
            <ComboboxComponent 
                title="Дополнительная информация"
                :items="[]"
            />
        </v-card-text>

        <v-card-actions>
            <v-btn>Сохранить</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Закрыть</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { defineProps } from 'vue';
import TextFieldComponentVue from './TextFieldComponent.vue';
import ComboboxComponent from './ComboboxComponent.vue';

const props = defineProps({
    title: String
});


</script>