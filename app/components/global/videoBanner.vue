<template lang="pug">
  .video-banner
    ClientOnly
      video(width="100%" height="100%" autoplay loop muted playsinline)
        source(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/shahed.mp4" type="video/mp4")
          //- Your browser does not support the video tag.
    
</template>

<style lang="scss">
.video-banner {
  width: 100%;
  height: calc(100vh + 60px);
  overflow: hidden;
  position: relative;
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
