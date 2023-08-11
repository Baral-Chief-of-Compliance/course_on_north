<template>
    <v-app>
      <test-bar />
  
      <view-test />

      <NewFooter />
    </v-app>
  </template>
  
  <script setup>
    import TestBar from './AppBar.vue'
    import ViewTest from './ViewTest.vue'
    import NewFooter from './NewFooter.vue';
  </script>