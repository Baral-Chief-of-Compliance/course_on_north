<template>
    <v-card :width="(width) > 1280 ? (width / 2) : (width-50)">

        <template v-slot:prepend>
            <v-icon :color="mainColor" icon="mdi-mailbox" size="x-large"></v-icon>
        </template>

        <template v-slot:append>
            <v-btn @click="closeDialog" variant="text" color="red">
                <v-icon  size="x-large" color="red" icon="mdi-close"></v-icon>
            </v-btn>
        </template>
        
        <template v-slot:title>
            <div :class="width > 420 ? 'title' : 'title-mobile'" :style="{color: addColor}">
                {{ props.title }}
            </div>
        </template>

        <v-card-text class="mt-5">
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

        {{ str }}

        <v-card-actions>
            <v-btn color="green">
                <span class="btn-text" @click="props.savedData(modelValue, str)">Сохранить</span>
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn color="red" @click="props.closeDialog">
                <span class="btn-text">Закрыть</span>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { defineProps, defineEmits, computed, inject, ref } from 'vue';
import TextFieldComponentVue from './TextFieldComponent.vue';
import ComboboxComponent from './ComboboxComponent.vue';
import TextAreaComponent from './TextAreaComponent.vue';

const props = defineProps({
    title: String,
    closeDialog: Function,
    savedData: Function,
    modelValue: {
        required: true,
        type: Object
    }
});

const emit = defineEmits(['update:modelValue'])

const str = ref("ss")

const width = inject('width')
const addColor = inject('addColor')
const mainColor = inject('mainColor')

const cardInf = computed({

    get(){
        return props.modelValue
    },

    set(newInf){
        emit('update:modelValue', newInf)
    }
})



</script>

<style scoped>
 .title{
    font-family: "CorkiRegular";
    text-transform: uppercase;
    font-size: 32px;
 }

 .title-mobile{
    font-family: "CorkiRegular";
    text-transform: uppercase;
    font-size: 24px;
 }

 .btn-text{
    font-family: "MontserratMedium";
    font-weight: bold;
    font-size: 18px;
 }
</style>