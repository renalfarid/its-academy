<script setup lang="ts">
useHead({
  // as a string,
  // where `%s` is replaced with the title
  titleTemplate: '%s',
  meta: [
    { property: 'og:title', content: `Raih Karir Impian bersama ITS Academy` },
    { property: 'og:description', content: 'ITS Academy hadir untuk membantu Anda mengasah keterampilan IT melalui program-program pelatihan yang komprehensif dan praktis.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://its-academy.com' },
    { property: 'og:locale', content: 'id_ID' },
    { property: 'og:image', content: 'https://its-academy.vercel.app/img/computer-class.png' },
  ]

})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
    
</template>
