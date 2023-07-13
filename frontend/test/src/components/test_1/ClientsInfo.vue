<template>
    <v-container class="mt-10">
        <div class="title-for-page-corki">КЛИЕНТЫ И ПАРТНЕРЫ</div>
        <v-img width="1168" height="657"
            src="../../assets/svg_from_czn_site/clients.svg"
        >     
        </v-img>
    </v-container>
</template>

<script>
export default{
    updated () {
        console.log('ClientsInfo.vue is load updated')
    },

    mounted (){
        console.log('ClientsInfo.vue is load mounted')
    }
}
</script>