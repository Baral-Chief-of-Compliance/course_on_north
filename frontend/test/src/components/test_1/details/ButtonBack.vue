<template>
    <v-btn @click="$emit('my-event')" variant="outlined" class="button_title my-5">
        <v-icon :color="mainColor" icon="mdi-arrow-collapse-left" class="mr-2"></v-icon>{{ label }}
    </v-btn>
</template>

<script>
import { inject } from 'vue'


export default{
    props: {
        label: String
    },

    setup(){
        const mainColor = inject('mainColor')

        return { mainColor }
    }

}
</script>

<style scoped>

    .button_title{
        font-family: 'MontserratMedium';
        font-weight: bold;
        font-size: 16px;
    }
</style>
