<script setup>
import { useRoute } from 'vue-router';

const route = useRoute(); 

const isHome = () => {
  return route.path === '/'; 
}
</script>

<template lang="pug">
  .top-section
    .top-section-content(class="d-flex flex-column align-center justify-center mt-5")
      .top-star(class="position-absolute top-0 left-0 mt-3 mx-3")
        v-icon(color="orange-lighten-1") mdi-star
      NuxtLink(:to="'/'")
        v-avatar(size="90" class="mx-auto" color="#222222ff" :to="'/'")
          NuxtImg(src="https://bgtsamrwtvtohxnkjugx.supabase.co/storage/v1/object/public/images/logo.png" loading="lazy" densities="x1 x2" format="webp" alt="Logo" width="80" )
      NuxtLink(:to="'/'" class="text-decoration-none")  
        v-card-title(class="pb-0") Shahad_Hairstylest
      .location
        v-icon(color="#333" size="18") mdi-map-marker
        span جدة، السعودية
      .social
        .actions(class="d-flex justify-center align-center ga-1")
          v-btn(href="https://api.whatsapp.com/send?phone=966561932041" target="_blank" icon color="transparent" elevation="0" size="x-small")
            svg(
              width="25.4px"
              height="25.4px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xml:space="preserve"
              fill="transparent"
            )
              g(id="SVGRepo_bgCarrier" stroke-width="0")
              g(id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round")
              g(id="SVGRepo_iconCarrier")
                path(style="fill:#e2c089;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z")
                path(style="fill:#82796f;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z")
                path(style="fill:#fff;" d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945")
          v-btn(href="https://www.tiktok.com/@shahad_hairstylest" target="_blank" icon color="transparent" elevation="0" size="x-small")
            svg(
              width="31px"
              height="31px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            )
              g(id="SVGRepo_bgCarrier" stroke-width="0")
              g(id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round")
              g(id="SVGRepo_iconCarrier")
                path(
                  d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                  stroke="#e2c089"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                )
                path(
                  d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                )
          v-btn(href="https://www.instagram.com/shahad_hairstylest" target="_blank" icon color="transparent" elevation="0" size="x-small")
            svg(
              width="27px"
              height="27px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            )
              g(id="SVGRepo_bgCarrier" stroke-width="0")
              g(id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round")
              g(id="SVGRepo_iconCarrier")
                path(
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#fff"
                )
                path(
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#fff"
                )
                path(
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#e2c089"
                )
          v-btn(href="https://www.snapchat.com/@shahad_stylist" target="_blank" icon color="transparent" elevation="0" size="x-small")
            svg(
              fill="#fff"
              width="30px"
              height="30px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="jam jam-snapchat-square"
            )
              g(id="SVGRepo_bgCarrier" stroke-width="0")
              g(id="SVGRepo_tracerCarrier" 
              stroke-linecap="round" 
              stroke-linejoin="round")
              g(id="SVGRepo_iconCarrier")
                path(
                  d="M14.804 12.292c-1.337-.22-1.94-1.59-1.964-1.647-.074-.15-.09-.265-.052-.352.073-.171.353-.26.538-.318a2.47 2.47 0 0 0 .146-.05c.183-.072.313-.15.399-.238a.379.379 0 0 0 .121-.273c-.003-.16-.126-.302-.321-.371A.58.58 0 0 0 13.453 9a.484.484 0 0 0-.202.042 1.137 1.137 0 0 1-.417.118.383.383 0 0 1-.138-.03l.012-.193.002-.029c.043-.676.096-1.518-.128-2.018a2.716 2.716 0 0 0-.612-.876 2.559 2.559 0 0 0-.732-.483 2.892 2.892 0 0 0-1.142-.24l-.197.001c-.222 0-.666.031-1.143.241-.273.12-.518.282-.73.482a2.725 2.725 0 0 0-.609.874c-.223.5-.17 1.341-.128 2.018l.014.223a.4.4 0 0 1-.164.03c-.126 0-.276-.04-.445-.119a.4.4 0 0 0-.17-.035c-.1 0-.207.03-.3.084a.414.414 0 0 0-.211.27c-.013.07-.013.21.142.351.086.077.211.15.373.213.042.017.093.033.146.05.185.058.466.147.539.318.037.087.02.202-.048.34-.022.052-.181.41-.508.79-.186.216-.39.397-.608.537a2.236 2.236 0 0 1-.853.331.233.233 0 0 0-.196.244c.002.035.01.069.025.102.048.113.159.207.339.29.22.102.548.188.978.255.022.04.044.144.06.215.016.075.033.152.057.234.026.089.094.195.268.195.067 0 .142-.015.23-.032.13-.025.305-.06.525-.06.122 0 .248.011.375.033.245.04.456.189.7.361.358.253.763.539 1.382.539l.05-.002.072.002c.619 0 1.024-.286 1.382-.538.245-.172.456-.321.7-.362.128-.021.254-.032.376-.032.21 0 .376.027.524.056.097.019.172.028.23.028.139 0 .233-.07.268-.192.024-.08.041-.155.058-.232.014-.067.038-.173.06-.214.429-.068.757-.153.977-.254.18-.084.29-.178.339-.29a.297.297 0 0 0 .025-.102.233.233 0 0 0-.196-.243z"
                )
                path(
                  style="fill:#e2c089"
                  d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                )
        NuxtLink(v-if="isHome()" :to="'/booking'")  
          .menu(class="position-absolute top-0 right-0 mt-3 mx-3")
            v-btn 
              | إحجزي
              br
              | موعد
        NuxtLink(:to="'/'" v-else)
          .menu(class="position-absolute top-0 right-0 mt-3 mx-3")
              v-btn الصفحة
                br
                | الرئيسية


</template>

<style lang="scss" scoped>
.v-avatar {
  border: 2px solid #4a4a4aff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 1s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    border-color: #e2dfdbff;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.v-card-title {
  color: #fff;
  text-align: center;
  font-family: yellowtail;
  display: block;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.36);
  margin-bottom: -6px;
}
.location{
  padding: 0;
  .v-icon {
    color: #333
  }
  span {
    display: inline-block;
    margin-top: -10px;
    font-family: cairo;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.36);
  }
}
.menu {
  margin-top: 10px;
  .v-btn {
    background-color: transparent;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    font-family: cairo; 
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: background-color 0.3s ease, color 0.3s ease;
    white-space: pre-wrap;
    &:hover {
      background-color: #ffffff12;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }
  }
}
</style>