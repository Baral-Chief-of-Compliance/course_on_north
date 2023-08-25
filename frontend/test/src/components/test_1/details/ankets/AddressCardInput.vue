<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">

            <v-card 
                v-bind="props"
                :color="isHovering ? colorHoverCard : colorCard" 
                class="elevation-2 mb-2" 
                height="175"
                @click="$emit('onOpenDialog')"
            >
                <template v-slot:title>
                    <div class="title" :style="{color: colorTitleCard}">
                        {{ Props.title }} 
                    </div>
                </template>

                <v-card-text>
                    <div class="text" :style="{color: colorTitleCard}">
                        {{ Props.modelValue }}
                    </div>
                </v-card-text>
            </v-card>

        </template>
    </v-hover>

</template>

<script setup>
import { computed, defineEmits, defineProps } from 'vue';

    const Props = defineProps({
        title: String,
        modelValue: {
            type: String,
            required: true
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const colorCard = 'grey-lighten-4';
    const colorHoverCard = 'grey-lighten-3';
    const colorTitleCard = '#757575';


    const addressValue = computed({
        get(){
            return Props.modelValue
        },

        set(newValue){
            emit('update:modelValue', newValue)
        }
    });

</script>

<style scoped>
    .title{
        font-family: "MontserratMedium";
        font-size: 16px;
    }

    .text{
        font-family: "MontserratMedium";
        font-size: 16px;
    }
</style>