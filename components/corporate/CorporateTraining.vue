<script setup>
  import { ref } from 'vue'

  const training = ref([
    {
      'nama': 'Backend Training',
      'deskripsi': 'Pelajari cara membangun dan memelihara server yang efisien dan aman. Program ini mencakup teknik pengembangan backend modern, penggunaan database, dan integrasi API.',
      'icon': 'laptop-code'
    },
    {
      'nama': 'Frontend Training',
      'deskripsi': 'Tingkatkan keterampilan Anda dalam menciptakan antarmuka pengguna yang menarik dan responsif. Pelatihan ini mencakup teknologi terbaru seperti HTML, CSS, JavaScript, dan framework populer lainnya.',
      'icon': 'window-restore'
    },
    {
      'nama': 'UI/UX Design',
      'deskripsi': 'Program ini mengajarkan prinsip desain, alat desain terkini, dan metode untuk memahami kebutuhan pengguna agar dapat menghasilkan produk yang user-friendly.',
      'icon': 'code-branch'
    },
    {
      'nama': 'Cloud Computing',
      'deskripsi': 'Siapkan diri Anda untuk masa depan dengan memahami teknologi cloud. Program ini mencakup konsep dasar hingga lanjutan dari cloud computing, penyedia layanan cloud utama, dan cara mengelola serta mengoptimalkan sumber daya cloud untuk efisiensi dan skalabilitas.',
      'icon': 'cubes'
    },
    {
      'nama': 'Fullstack Programming',
      'deskripsi': 'Menjadi pengembang serba bisa dengan kemampuan fullstack. Pelatihan ini mengajarkan Anda untuk bekerja di frontend dan backend, memahami database, dan mengintegrasikan semuanya menjadi aplikasi web yang berfungsi penuh.',
      'icon': 'cubes'
    },
    {
      'nama': 'Data Engineer',
      'deskripsi': 'Pelajari cara mengumpulkan, menyimpan, dan memproses data dalam skala besar. Program ini mencakup teknik ETL, manajemen data, dan alat-alat analitik untuk membantu Anda mengubah data mentah menjadi wawasan yang berguna.',
      'icon': 'microchip'
    },
  ])
</script>
<template>
    <section class="bg-white text-black">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Pelatihan yang tersedia</h2>
    
          <p class="mt-4">
            Setiap program dirancang dengan hati-hati oleh para ahli untuk memastikan Anda mendapatkan pengetahuan dan keterampilan terbaru yang relevan dengan industri saat ini.
          </p>
        </div>
    
        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="item in training" 
            :key="item.nama"
            class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <span style="font-size: 1em; color: Magenta;">
                <font-awesome-icon :icon="item.icon" />
            </span>
    
            <h2 class="mt-4 text-xl font-bold">{{ item.nama }}</h2>
    
            <p class="mt-1 text-sm text-gray-800">
                {{ item.deskripsi }}
            </p>
          </a>
        </div>
    
        <div class="mt-12 text-center">
          <a
            href="/corporate/registration"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  </template>