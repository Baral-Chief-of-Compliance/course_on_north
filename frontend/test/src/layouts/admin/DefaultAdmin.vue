<template>
    <v-app>
        <admin-bar />

        <admin-view />

        <admin-footer />
    </v-app>
</template>

<script setup>
    import AdminBar from './AppBarAdmin.vue'
    import AdminView from './ViewAdmin.vue'
    import AdminFooter from './FooterAdmin.vue'
</script>