<template>
    <v-container>
        <v-row class="text_style" :style="textStyle" no-gutters justify="center">
            <v-col></v-col>
            <v-col cols="8">{{ textContent }}</v-col>
            <v-col></v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    props: {
        textContent: String,
        textStyle: Object
    }
}
</script>

<style>
    .text_style{
        font-family: "MontserratMedium";
        font-size: 18px;
        line-height: 2;
    }

</style>