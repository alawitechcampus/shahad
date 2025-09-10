<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const modules = [Navigation, Pagination, Autoplay];

const tabs = ref("one");
const dialog = ref(false);
const selectedItem = ref("");
const isVideo = ref(false);

const openImage = (src) => {
  selectedItem.value = src;
  isVideo.value = src.endsWith(".mp4") || src.includes("video");
  dialog.value = true;
};
</script>

<template lang="pug">
  .img-taps
    v-card(color="transparent" flat)
      v-tabs(v-model="tabs" bg-color="transparent" color="#000" slider-color="#000"  align-tabs="center")
        v-tab(value="protofolio")
          v-icon(size="23") mdi-account-box-multiple-outline
        v-tab(value="testimonials")
          v-icon(size="23") mdi-receipt-text-check-outline
        v-tab(value="pricing")
          v-icon(size="23") mdi-account-cash-outline
        v-tab(value="four")
          v-icon(size="23") mdi-badge-account-outline

    v-tabs-window(v-model="tabs")
      v-tabs-window-item(value="protofolio")
        v-card(color="#ffffff66" flat class="pa-1 ma-1 mb-2  d-flex flex-wrap" rounded="lg")
          .img-box(class="d-flex flex-wrap" style="gap: 3.3px;")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/thamp1.png" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/vid-1.mp4')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-2.jpg" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-2.jpg')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/thamp2.png" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/vid-2.mp4')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-4.jpg" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-4.jpg')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-5.jpg" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-5.jpg')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/thamp3.png" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/videos/vid-3.mp4')")
            .box
              NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-6.jpg" width="contain" height="150" densities="x1" format="webp" @click="openImage('https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/box-img-6.jpg')")
            .box
              NuxtImg(src="/video/thamp4.png" width="86" height="150" densities="x1" format="webp" @click="openImage('/video/vid-4.mp4')")
      v-dialog(v-model="dialog" width="340px" max-height="640px")
        v-card(color="#fff" flat class="pa-4 ma-0" rounded="lg")
          ClientOnly(v-if="isVideo")
            video(width="100%" height="100%" preload="metadata" muted autoplay loop controls playsinline)
              source(:src="selectedItem" type="video/mp4")
          NuxtImg(v-else :src="selectedItem" width="100%" height="100%" format="webp" loading="lazy")
        v-card-actions
          v-btn(text @click="dialog = false" icon) 
            v-icon(size="25") mdi-close
      v-tabs-window-item(value="testimonials")
        v-card(color="transparent" flat class="d-flex align-center justify-center pa-4 ma-2")
          ClientOnly
            Swiper(
              :modules="modules"
              :slides-per-view="1"
              :space-between="10"
              :loop="true"
              :autoplay="{ delay: 4000, pauseOnMouseEnter: true, disableOnInteraction: false }"
              class="mySwiper rounded-xl overflow-hidden "
            )
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/noon.jpg" width="100" height="100")
                .text-box
                  h3.mb-0.font-weight-bold نور بالألف
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="4.8" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | شغل مرتب ورهيب وجربت اكثر من لوك وكلها تجنن وان شاءلله مو اخر مرة
                v-icon(color="pink") mdi-heart
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" width="100" height="100" )
                .text-box
                  h3.mb-0.font-weight-bold أفنان
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="4.5" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | الف الف شكر على الشغل الي يبيض الوجه ياقلبي بناتنا كانو مرا مبسوطات على شغلكم وصراحه شي روعه تبارك الله والله يفتحلكم أبواب الرزق
                v-icon(color="pink") mdi-heart
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" width="100" height="100")
                .text-box
                  h3.mb-0.font-weight-bold دعاء
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="5" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | ماشاء الله تبارك الله شغل مرتب وراقي 
                v-icon(color="yellow") mdi-heart
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" width="100" height="100")
                .text-box
                  h3.mb-0.font-weight-bold أسماء
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="5" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | مره شكرا على شغلك الرائع ماشاءلله تبارك الرحمن شعورنا ثابتة لاخر السهر
                v-icon(color="yellow") mdi-heart
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" width="100" height="100")
                .text-box
                  h3.mb-0.font-weight-bold ياسمين
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="5" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | الفنانة يلي فضل الشعر من يدها ثابت لاخر السهرة تسلم يدك شهد
                v-icon(color="yellow") mdi-heart
              SwiperSlide(class="d-flex align-center justify-center flex-column")
                v-avatar(size="70" class="ma-2" )
                  v-img(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/1chat.jpg" width="contain" height="contain")
                .text-box
                  h3.mb-0.font-weight-bold أروى
                .rating
                  v-rating(
                    half-increments 
                    readonly 
                    :length="5" 
                    :model-value="5" 
                    size="x-small"
                    density="compact"
                    active-color="#ffb400")
                v-card-text(class="text-center pa-0 ma-0 mt-1 comment")
                  | قلبي انا عروستك يوم 19 جون في قاعة الامبارطورة حقيقي مررة شكرا على كل شي اولا اهلاقك الحلوة وروحك الي تجنن حقيقي حسيتك وحدة من صحباتي وطبعا شغلك والتسريحة طلعت تجنن مرة الكل عجبتو حقيقي شكرا
                v-icon(color="red") mdi-heart
      v-tabs-window-item(value="pricing")
        v-card(color="#ffffff66" rounded="xl" flat class="d-flex align-center justify-center flex-column pa-4 ma-2")
          .pric(class="d-flex flex-column align-center justify-center")
            h4(class="text-center font-weight-bold mb-4" style="font-family: cairo") الأسعار
          .table-wrapper
            v-table(
              dense
              fixed-header
              height="250px"
              class="elevation-0"
            )
              thead
                tr
                  th.text-center السعر
                  th.text-center الخدمة
              tbody
                tr
                  td.text-center 150 ريال
                  td.text-center تسريحة شعر عادي
                tr
                  td.text-center 200 ريال
                  td.text-center تسريحة شعر مع مكياج خفيف
                tr
                  td.text-center 300 ريال
                  td.text-center تسريحة شعر مع مكياج كامل
                tr
                  td.text-center 400 ريال
                  td.text-center تسريحة شعر مع مكياج كامل + رموش + أظافر 
                tr
                  td.text-center 500 ريال
                  td.text-center تسريحة عروس كاملة (شعر + مكياج + رموش + أظافر + جلسة تصوير)
      v-tabs-window-item(value="four")
        v-card(color="#ffffff66" rounded="xl"  flat class="d-flex align-center justify-center flex-column pa-4 ma-2 about")
          h3(style="font-family: cairo") شهد الحبشي
          .text-box(class="text-center mt-2" style="font-family: cairo; font-size: 17px; color: #000000; font-weight: 600;")
            | خبيرة تجميل وتسريحات شعر، أقدم لكِ أجمل الإطلالات التي تناسب جميع المناسبات. احجزي موعدك الآن لتحصلي على إطلالة ساحرة وجذابة.
          button(color="#eee" class="mt-4 btn bok-button" @click="$router.push('/booking')") إحجزي موعد
</template>

<style lang="scss" scoped>
.v-tabs-window-item {
  .img-box {
    .box {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 86px;
      height: 150px;
      border-radius: 12px;
      overflow: hidden;
      img {
        border-radius: 12px;
        padding: 1px;
      }
    }
  }
}
.v-tabs .v-tab {
  color: white; /* اللون الافتراضي للتاب الغير مفعل */
}

.v-tabs .v-tab--active {
  color: black; /* اللون للتاب المفعل */
}
.v-card-actions {
  .v-btn {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #333;
    background-color: rgba(165, 165, 165, 0.704);
  }
}
.text-box {
  font-family: cairo;
}
.v-table__wrapper {
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #eaeaea;
  }
  &::-webkit-scrollbar-track {
    width: 2px;
    background-color: #f4f4f4;
  }
}
.swiper-slide {
  .v-avatar {
    border: 2px solid #6c6c6c87;
    img {
      border-radius: 50%;
    }
  }
}
.rating {
  margin-bottom: -11px;
}
.comment {
  font-family: cairo;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
}
.table-wrapper {
  .v-table {
    background-color: #ffffff66;
    th {
      background-color: #f5f5f562;
      font-family: cairo;
      font-size: 16px;
      font-weight: 700;
      color: #000000;
    }
    td {
      font-family: cairo;
      font-size: 14px;
      font-weight: 600;
      color: #000000;
    }
  }
}
.about {
  height: 300px
}
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
}
.bok-button {
  position: relative;
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #383838;
  font-family: cairo;
  transition: all 0.2s ease;
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }
  .active {
    transform: scale(0.96);
  }
}
.bok-button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
  background-position: 50% 120%;
  animation: greentopBubbles 0.6s ease;
}
.bok-button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
  background-position: 50% 0%;
  animation: greenbottomBubbles 0.6s ease;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
</style>
