<script setup>
  import { ref } from 'vue'

  const content = ref({
    'title': 'Langkah Menuju karir digital',
    'sub': 'kami hadir untuk membantu Anda mengasah keterampilan tersebut melalui program-program pelatihan yang komprehensif dan praktis.'
  })
</script>
<template>
    
    <section class="overflow-hidden bg-white sm:grid sm:grid-cols-2">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
            {{ content.title }}
          </h2>
    
          <p class="hidden text-gray-500 md:mt-4 md:block">
            {{ content.sub }}
          </p>
    
          <div class="mt-4 md:mt-8">
            <a
              href="/training"
              class="inline-block rounded bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Mulai Aja Dulu
            </a>
          </div>
        </div>
      </div>
    
      <img
        alt=""
        src="/img/front-banner.webp"
        class="h-56 w-full object-cover sm:h-full"
      />
    </section>
  </template>