<template>
    <v-card>
        <v-card-title>
            {{ props.title }}
        </v-card-title>

        <v-card-text>
            <TextFieldComponentVue 
                title="Страна"
                v-model="modelValue.country"  />
            <ComboboxComponent 
                v-model="modelValue.subjectRF"
                title="Субъект РФ"
                :items="[]"
            />
            <ComboboxComponent 
                v-model="modelValue.town"
                title="Район, город, населённый пункт"
                :items="[]"
            />
            <TextFieldComponentVue  
                title="Если не нашли населённый пункт в справочнике, введите здесь" 
                v-model="modelValue.town"
            />
            <ComboboxComponent 
                v-model="modelValue.street"
                title="Улица"
                :items="[]"
            />
            <TextFieldComponentVue 
                title="Если не нашли улицу в справочнике, введите здесь" 
                v-model="modelValue.street"
            />
            <ComboboxComponent 
                title="Здание/Сооружение"
                v-model="modelValue.building"
                :items="[]"
            />
            <ComboboxComponent 
                title="Квартира/Офис/Помещение"
                v-model="modelValue.apartment"
                :items="[]"
            />
            <TextFieldComponentVue 
                title="Индекс" 
                v-model="modelValue.index"
            />

            <TextAreaComponent 
                title="Дополнительная информация"
                v-model="modelValue.additionalInfo"
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
import { defineProps, defineEmits, computed } from 'vue';
import TextFieldComponentVue from './TextFieldComponent.vue';
import ComboboxComponent from './ComboboxComponent.vue';
import TextAreaComponent from './TextAreaComponent.vue';

const props = defineProps({
    title: String,
    modelValue: {
        required: true,
        type: Object
    }
});

const emit = defineEmits(['update:modelValue'])

const cardInf = computed({

    get(){
        return props.modelValue
    },

    set(newInf){
        emit('update:modelValue', newInf)
    }
})


</script>