<template>
  <v-app>
    <v-container class="fill-height d-flex flex-column justify-center align-center text-center">
      <v-icon color="error" size="100">mdi-alert-circle</v-icon>
      <h1 class="display-1 mt-5">للأسف!</h1>
      <h2 class="subtitle-1 mb-5">{{ errorMessage }}</h2>
      <v-btn color="primary" @click="goHome">العودة للرئيسية</v-btn>
    </v-container>
  </v-app>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useError } from '#app'

const router = useRouter()
const route = useRoute()
const error = useError()

const errorMessage = error.value?.message || "الصفحة غير موجودة"

const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
h1, h2 {
  color: #333;
  font-family: cairo;
}
.v-btn {
  font-family: cairo;
}
</style>
