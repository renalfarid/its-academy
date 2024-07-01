<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s',
  meta: [
    { property: 'og:title', content: `Raih Karir Impian bersama ITS Academy` },
    { property: 'og:site_name', content: `https://its-academy.vercel.app` },
    { property: 'og:description', content: 'ITS Academy hadir untuk membantu Anda mengasah keterampilan IT melalui program-program pelatihan yang komprehensif dan praktis.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://its-academy.vercel.app' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:image', content: 'https://its-academy.vercel.app/img/computer-class.png' },
    { property: 'twitter:title', content: `Raih Karir Impian bersama ITS Academy` },
    { property: 'twitter:card', content: `summary_large_image` },
    { property: 'twitter:description', content: 'ITS Academy hadir untuk membantu Anda mengasah keterampilan IT melalui program-program pelatihan yang komprehensif dan praktis.' },
    { property: 'twitter:image', content: 'https://its-academy.vercel.app/img/computer-class.png' },

  ]

})

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<template>
 <div class="h-screen">
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    ></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>   
</template>
