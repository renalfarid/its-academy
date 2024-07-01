<script setup>
  import SectionCulture from './about/SectionCulture.vue'
</script>
<template>
<section class="bg-white dark:bg-gray-900">
  <div class="bg-white gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
        <p class="mb-4">Berdirinya IT Techno Solutindo guna menjawab tantangan globalisasi serta media industri kreatif dan mengambil peran secara khusus di wilayah timur indonesia dalam bidang Teknologi Informasi dan Komunikasi.</p>
        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-8">
        <img class="w-full rounded-lg" src="/img/digital-team-1.webp" width="334" height="487" alt="office content 1">
        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/img/digital-team-2.webp" width="336" height="504" alt="office content 2">
    </div>
  </div>
</section>
<section>
    <SectionCulture />
</section>
</template>