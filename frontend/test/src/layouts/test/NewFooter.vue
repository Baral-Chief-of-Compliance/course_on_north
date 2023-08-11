<template>
    <v-footer
        :color="mainColor"
    >
        <v-container class="py-15">
            <v-row v-if="width > 846">
                <v-col>
                    <gerb />
                </v-col>
                
                <v-col :cols="(width > 1280) ? 2: 1"></v-col>
                
                <v-col :cols="(width > 1280) ? 2: 3">
                    <contacts />
                </v-col>

                <v-col :cols="(width > 1280) ? 2: 1"></v-col>

                <v-col :cols="(width > 1280) ? 3: 4">
                    <documents />
                </v-col>
            </v-row>

            <v-col v-if="width <= 846" cols="12">
                <v-row>
                    <v-col cols="12">
                        <gerb />
                    </v-col>
                </v-row>

                <v-row class="mt-15">
                    <v-col v-if="width > 259"></v-col>
                    <v-col :cols="(width < 294) ? 12 : (width < 328) ? 10 : (width < 401) ? 9 : (width < 456) ? 7 : (width < 541) ? 6 : (width < 645 ) ? 5: 4">
                        <contacts /> 
                    </v-col>
                    <v-col v-if="width > 259"></v-col>
                </v-row>
                 
                <v-row class="mt-15">
                    <v-col v-if="width > 259"></v-col>
                    <v-col :cols="(width < 294) ? 12 : (width < 328) ? 10 : (width < 401) ? 9 : (width < 456) ? 7 : (width < 541) ? 6 :  (width < 645 ) ? 5: 4">
                        <documents />
                    </v-col>
                    <v-col v-if="width > 259"></v-col>
                </v-row>
            </v-col>



        </v-container>

    </v-footer>

</template>

<script>
import { inject } from 'vue'
import Gerb from '@/components/test_1/footer/Gerb.vue'
import Contacts from '@/components/test_1/footer/Contacts.vue'
import Documents from '@/components/test_1/footer/Documents.vue'


export default{

    components: {
        Gerb,
        Contacts,
        Documents
    },
    setup(){
        const mainColor = inject('mainColor')
        const width = inject('width')
        const height = inject('height')

        return { mainColor, width, height}
    }
}
</script>