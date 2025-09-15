<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// يتحدث تلقائي إذا تغير المسار
const isBooking = computed(() => route.path === "/booking");

const isMobile = ref(false);

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  checkMobile(); // استدعاء عند التحميل
  window.addEventListener("resize", checkMobile); // تحديث عند تغيير الحجم
});
</script>

<template lang="pug">
  .video-banner(v-if="isBooking" :class="{ 'mobile-video': isMobile }")
    ClientOnly
      video(width="100%" height="100%" autoplay loop muted playsinline)
        source(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/shahad4.mp4" type="video/mp4")
  .video-banner(v-else)
    ClientOnly
      video(width="100%" height="100%" autoplay loop muted playsinline)
        source(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/shahad4.mp4" type="video/mp4")
</template>

<style lang="scss">
.video-banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 767px) {
    height: calc(100vh + 20px);
  }
  &.mobile-video {
    height: calc(100vh + 160px);
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
