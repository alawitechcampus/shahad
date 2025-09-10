<script setup lang="ts">
import AppDrawer from '~/components/global/AppDrawer.vue';

</script>

<template lang="pug">
    <v-app>
      //- <AppDrawer />
      <v-main>
        <VideoBanner />
        <slot></slot>  
      </v-main>
    </v-app>
</template>
