<script setup>
  import { ref } from 'vue'

  const services = ref([
  {
      'nama': 'Programming Academy',
      'deskripsi': 'Perkuat keterampilan pemrograman tim Anda dengan kursus pemrograman kami. Dari dasar hingga lanjutan, kursus ini mencakup berbagai bahasa pemrograman dan kerangka kerja populer. Kami memastikan peserta memahami konsep inti serta praktik terbaik dalam pengembangan perangkat lunak.',
      'icon': 'code'
    },
    {
      'nama': 'IT Consultant',
      'deskripsi': 'Dapatkan saran ahli dari konsultan teknologi kami untuk mengatasi tantangan teknis dan mengoptimalkan operasional bisnis Anda. Kami menawarkan layanan konsultasi yang mencakup evaluasi teknologi, strategi digital, dan implementasi solusi yang sesuai dengan kebutuhan perusahaan Anda.',
      'icon': 'code'
    },
    {
      'nama': 'CTO as Services',
      'deskripsi': 'Dapatkan keahlian tingkat C tanpa harus mempekerjakan CTO penuh waktu melalui layanan CTO As Service kami. Kami menyediakan kepemimpinan teknologi strategis untuk membantu Anda mengarahkan dan mengelola inisiatif teknologi, memastikan bahwa bisnis Anda tetap kompetitif dan inovatif.',
      'icon': 'code'
    },
    {
      'nama': 'Digital Talent Pool',
      'deskripsi': 'Temukan bakat digital terbaik dengan layanan Digital Talent Pool kami. Kami menyediakan akses ke jaringan profesional teknologi yang terampil dan siap untuk memenuhi kebutuhan proyek Anda. Hemat waktu dan biaya dalam proses rekrutmen dengan memilih dari kumpulan talenta terbaik kami.',
      'icon': 'code'
    },
    {
      'nama': 'AWS Cloud Partner',
      'deskripsi': 'Manfaatkan kekuatan cloud dengan layanan AWS Cloud Partner kami. Kami membantu Anda merancang, mengimplementasikan, dan mengelola solusi berbasis AWS yang aman dan skalabel. Optimalkan biaya dan sumber daya dengan solusi cloud yang disesuaikan untuk kebutuhan spesifik Anda.',
      'icon': 'code'
    },
  ])
</script>
<template>
    <section class="bg-white">
      <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Layanan yang kami sediakan</h2>
    
          <p class="mt-4">
            Kami menawarkan berbagai layanan yang dirancang untuk membantu perusahaan Anda mencapai tujuan teknologi dan bisnis. Setiap layanan disesuaikan untuk memenuhi kebutuhan spesifik dan memberikan solusi yang efektif dan efisien.
          </p>
        </div>
    
        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div v-for="service in services" :key="service.nama" class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-white p-4">
                <font-awesome-icon :icon="service.icon" />
            </span>
    
            <div>
              <h2 class="text-lg font-bold">{{ service.nama }}</h2>
    
              <p class="mt-1 text-sm">
                {{ service.deskripsi }}
              </p>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  </template>