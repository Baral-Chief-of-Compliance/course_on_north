<template>
    <v-btn @click="$emit('my-event')" variant="outlined" class="my-5">
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
