<script setup>
import { computed } from 'vue'
const slots = defineSlots()

// بإمكانك التحقق من وجود الـ slot مباشرة باستخدام شرط:
const hasCardHead = computed(() => !!slots.cardHead)
</script>

<template lang="pug">
  v-container(max-width="1370px" class="d-flex justify-center align-center")
    .parent
      v-card(
        elevation="10"
        rounded="xl"  
        width="370px" min-height="660px" 
        color="transparent"
        class="position-relative"
      )
        template(v-if="hasCardHead")
          slot(name="cardHead" class="card-head")  
        template(v-else)
          h4 No Card Head Slot Provided



</template>

<style lang="scss" scoped>
.v-card {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/card-back.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(0.5);
    opacity: 0.8;
    border-radius: 20px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    z-index: -2;
  }
}
.v-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .card-img {
    position: relative;
    width: 50%;
    height: 50%;
  }
  .content {
    .ar {
      text-align: right;
    }
  }
  .card-head {
    position: absolute;
    top: 2%;
    left: calc(50% - 30px);
    transform: translateX(-50%);
    @media (max-width: 768px) {
      top: 5%
    }
    .v-btn {
      color: #fff;
      font-weight: bold;
      background-color: #000;
    }
  }
}

</style>
