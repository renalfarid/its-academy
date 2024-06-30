<script setup>
  import { ref } from 'vue'

  const partners = ref([
    {
      'nama': 'Nusair',
      'review': 'Kami telah bekerja sama dengan ITS sejak tahun 2011, mulai dari pekerjaan Software Development, CCTV, Palang parkir, raised floor, jaringan LAN, fiber optik dan kebutuhan Teknologi Informasi usaha kami, didukung dengan pengalaman  dan sumber daya menjadi partner terpercaya',
      'perusahaan': 'PT. Pelindo',
      'img': '/img/pelindo.jpeg'
    },
    {
      'nama': 'Masrah Marang',
      'review': 'Saya menyambut gembira atas pencapaian perkembangan usaha ITS, kami telah bekerja sama dalam beberapa project di Makassar dan Bandung dalam memenuhi kebutuhan Teknologi Informasi usaha kami.  Sukses terus berkembang menjadi yang terbaik',
      'perusahaan': 'PT Marlip Indonesia',
      'img': '/img/marlip.jpeg'
    },
    {
      'nama': 'Hakmal Candra',
      'review': 'Kami telah bekerja sama dengan ITS untuk memenuhi kebutuhan Palang parkir kami dibeberapa cabang PT Semen Tonasa dibawah Group PT Semen Indonesia, lokasi pemasangan di Balikpapan, Samarinda, Pontianak dan Banjarmasin. Hasilnya sangat memuaskan, dan Profesional. Sukses selalu ITS.',
      'perusahaan': 'PT Semen Tonasa',
      'img': '/img/tonasa.png'
    }
  ])
</script>
<template>
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Review Partner & Alumni 
        </h2>
    
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div v-for="partner in partners" :key="partner.nama" class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
          <div class="flex items-center gap-4">
            <img :alt="partner.nama" :src="partner.img" class="size-14 rounded-full object-cover" />
            <div>
              <div class="flex justify-center gap-0.5 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p class="mt-1 text-lg font-medium text-gray-700">{{ partner.nama }}</p>
              <p class="text-gray-500 text-sm">{{ partner.perusahaan }}</p>
            </div>
          </div>
          <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">{{ partner.review }}</p>
          
        </div>
        </div>
      </div>
    </section>
  </template>