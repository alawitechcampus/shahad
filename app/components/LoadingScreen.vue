<script setup>
import { ref, onMounted } from "vue";

const show = ref(true);
onMounted(() => {
  setTimeout(() => {
    show.value = false;
  }, 2000);
});
</script>

<template lang="pug">
  .background(v-if="show")
    .loading
      NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" loading="lazy" densities="x1 x2" format="webp" alt="Logo" width="120" )
      .loading-text
        h1 Shahed_Hairstylest
        span Loading...

</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  inset: 0;
  background: rgb(0, 0, 0); /* غيّر اللون حسب ثيمك */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* تأكد إنها فوق أي عنصر ثاني */
  transition: opacity 0.5s ease-in-out;
  .loading {
    position: fixed;
    inset: 0;
    background: rgb(0, 0, 0); /* غيّر اللون حسب ثيمك */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2000; /* تأكد إنها فوق أي عنصر ثاني */
    .loading-text::before {
      content: "";
      width: 100px;
      height: 100%;
      background-color: white;
      position: absolute;
      left: 0;
      top: 0;
      animation: move 4s linear infinite;
      z-index: -1;
    }
    h1 {
      font-family: yellowtail;
      font-weight: bold;
      font-size: 4rem;
      color: rgb(255, 255, 255); /* غيّر اللون حسب ثيمك */
      margin-top: 1rem;
      mix-blend-mode: difference;
      @media (max-width: 991px) {
        font-size: 2.5rem;
      }
    }
    span {
      display: inline-block;
      font-family: cairo;
      font-size: 1.2rem;
      color: rgb(200, 200, 200); /* غيّر اللون حسب ثيمك */
      margin-top: 0.5rem;
    }
  }
}

@keyframes move {
    0%, 100% {
        left: 0;
    }
    50% {
        left: calc(100% - 100px);
    }
}
</style>
