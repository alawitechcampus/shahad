<script setup>
import { ref, onMounted } from "vue";
const dialog = ref(false);

setTimeout(() => {
  dialog.value = true  
}, 2200);
</script>

<template lang="pug">
  <main-card>
    template(#cardHead)
      <topSection/>
      <bookingSection/>
      //- v-dialog(v-model="dialog" width="340px" max-height="640px")
      //-   v-card(color="#fff" flat class="pa-4 ma-0 position-relative" rounded="lg")
      //-     v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/dia1.jpg" width="100%" height="100%" loading="lazy")
      //-   v-btn(class="position-absolute mt-1 ml-1 top-0 left-0" @click="dialog = false" icon) 
      //-     v-icon(size="25") mdi-close
  </main-card>
  <copyRights/>

</template>
