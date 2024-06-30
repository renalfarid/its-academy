<script setup>
  import { ref } from 'vue'
  const content = ref({
    'title': 'Dipercaya oleh pelaku bisnis digital',
    'sub' : 'Kami bangga dapat bekerja sama dengan perusahaan-perusahaan terkemuka dalam memberikan pelatihan berkualitas yang relevan dengan kebutuhan industri. ' + 
    'Bergabunglah dengan komunitas belajar kami dan dapatkan keahlian yang diakui oleh para pemimpin industri digital.'
  })

  const dataStats = ref({
    'batch': '5+',
    'alumni': '100+',
    'student': '86+'
  })
</script>
<template>
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">{{ content.title }}</h2>
    
          <p class="mt-4 text-gray-500 sm:text-xl">
            {{ content.sub }}
          </p>
        </div>
    
        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Total Batch</dt>
    
              <dd class="text-4xl font-extrabold text-red-300 md:text-5xl">{{ dataStats.batch }}</dd>
            </div>
    
            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Alumni</dt>
    
              <dd class="text-4xl font-extrabold text-red-300 md:text-5xl">{{ dataStats.alumni }}</dd>
            </div>
    
            <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Student</dt>
    
              <dd class="text-4xl font-extrabold text-red-300 md:text-5xl">{{ dataStats.student }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </template>