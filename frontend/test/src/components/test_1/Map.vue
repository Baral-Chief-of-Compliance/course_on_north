<template>
    <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3 mb-5">Наше местоположение</div>
        <yandex-map
            :coords="[68.959745, 33.100978]"
            :zoom="17"
        >
            <ymap-marker
                market-id="1"
                :icon="{ color: 'red' }"
                :coords="[68.959745, 33.100978]" 
            />

        </yandex-map>
    </v-container>
</template>

<script>
export default{
    data: () => ({
        scrolllevel: 0
    }),
    methods:{
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        }
    }
}
</script>
<style scoped>
.ymap-container {
    width: 1200px;
    height: 500px;
}

</style>