<script setup>
import LoadingScreen from "~/components/LoadingScreen.vue";
</script>

<template>
  <nuxt-layout>
    <LoadingScreen />
    <NuxtPage />
  </nuxt-layout>

</template>

<style lang="scss">

@font-face {
  font-family: yellowtail;
  src: url("/fonts/Yellowtail-Regular.ttf") format('truetype');
}
@font-face {
  font-family: cairo;
  src: url("/fonts/Cairo-VariableFont_slnt,wght.ttf") format('truetype');
}

</style>