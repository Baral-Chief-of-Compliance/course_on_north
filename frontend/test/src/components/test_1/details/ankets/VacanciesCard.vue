<template>
    <v-card :width="(width) > 1280 ? (width / 2) : (width-50)">
        <template v-slot:prepend>
            <v-icon :color="mainColor" icon="mdi-folder-account" size="x-large"></v-icon>
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
            <v-alert 
                type="warning"
                border="start"
                variant="tonal"
            >   
                <template v-slot:title>
                    <div class="alert-title">
                        Пример оформления вакансий
                    </div>
                </template>

                <div class="alert-text mt-5">
                    Для примера оформления вакансий необходимо скачать таблицу.
                </div>

                <ButtonAnket 
                    title="Скачать таблицу"
                    color-text="white"
                    :color="excelColor"
                />

            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script setup>
import AlertComponent from './AlertComponent.vue';
import ButtonAnket from './ButtonAnket.vue';
import FileInputComponent from './FileInputComponent.vue';
import { inject, defineProps, computed, ref} from 'vue';

const width = inject("width")
const addColor = inject("addColor")
const mainColor = inject("mainColor")
const excelColor = ref("#217346")


const props = defineProps({
    title:String,
    closeDialog: Function
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

 .alert-title{
    font-family: "MontserratMedium";
    font-weight: bold;
 }

 .alert-text{
    font-family: "MontserratMedium";
 }
</style>