// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shahad Hairstylest',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: 'خبيرة تجميل وتسريحات شعر، أقدم لكِ أجمل الإطلالات التي تناسب جميع المناسبات. احجزي موعدك الآن لتحصلي على إطلالة ساحرة وجذابة. '},
        { name: 'keywords', content: 'شهد,تجميل,منصة,خدمات,تسريحات,مكياج,شعر,مناكير,باديكير' },
        { name: 'author', content: 'Shahd Team' },
        { name: 'robots', content: 'index, follow' },
      ],
    }
  },
  runtimeConfig: {
    public: {
      // optional override
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },
  supabase: {
    redirect: false, // disable redirect handling
  },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
    "swiper/css/autoplay",
    'leaflet/dist/leaflet.css',
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/supabase'
  ],
})