<template>
  <router-view />
</template>

<script setup>
import { provide } from 'vue';
import { useWindowSize} from '@vueuse/core'

const { width, height } = useWindowSize()
provide('width', width)
provide('height', height)
provide('mainColor', '#2F5DA7');
provide('addColor', '#eb6635');
provide('navOptionColor', 'white')
</script>

<style>
* {
  scroll-margin-top: 75px;
}
</style>
