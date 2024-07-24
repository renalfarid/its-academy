<script setup>
  import { ref } from 'vue'

  const kelas = ref([
    {
      'nama': 'Kelas Backend',
      'deskripsi': 'Pelatihan ini mencakup pemrograman dengan bahasa seperti Golang, PHP, atau Node.js serta memahami basis data, autentikasi, dan pengelolaan API. Dapatkan keahlian untuk menciptakan aplikasi web yang kuat dan scalable.',
      'icon': 'laptop-code'
    },
    {
      'nama': 'Kelas Frontend',
      'deskripsi': 'Pelatihan ini mencakup HTML, CSS, dan JavaScript, serta framework populer seperti Vue atau Nuxt. Anda akan belajar bagaimana membuat antarmuka pengguna yang responsif dan interaktif.',
      'icon': 'window-restore'
    },
    {
      'nama': 'Kelas Devops',
      'deskripsi': 'Pelatihan ini mengajarkan bagaimana mengintegrasikan dan mengotomatiskan proses pengembangan dan operasi. Anda akan belajar tentang Continuous Integration, Continuous Deployment, serta tools seperti Docker, Kubernetes.',
      'icon': 'code-branch'
    },
    {
      'nama': 'Kelas Fullstack',
      'deskripsi': 'Menjadi developer serba bisa dengan memahami kedua sisi pengembangan web, baik frontend maupun backend. Pelatihan ini mencakup pengetahuan menyeluruh dari HTML, CSS, JavaScript, hingga basis data dan server-side programming, memungkinkan Anda untuk membangun aplikasi web lengkap dari awal hingga akhir.',
      'icon': 'cubes'
    },
    {
      'nama': 'Kelas Network',
      'deskripsi': 'Mempelajari dasar-dasar jaringan komputer, konfigurasi perangkat jaringan, dan keamanan jaringan. Pelatihan ini mencakup pemahaman tentang protokol jaringan, perancangan topologi jaringan, serta troubleshooting jaringan untuk memastikan kelancaran komunikasi data.',
      'icon': 'network-wired'
    },
    {
      'nama': 'Kelas IoT',
      'deskripsi': 'Memahami teknologi Internet of Things (IoT) dan bagaimana menghubungkan perangkat ke internet. Pelatihan ini mencakup pemrograman sensor dan aktuator, pengumpulan dan analisis data, serta pengelolaan perangkat IoT.',
      'icon': 'microchip'
    },
  ])
</script>
<template>
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Program Training</h2>
    
          <p class="mt-4">
            Program Training kami, yang dirancang untuk meningkatkan keterampilan dan pengetahuan Anda di berbagai bidang teknologi. Kami menawarkan berbagai pelatihan yang mendalam dan komprehensif, masing-masing difokuskan pada kebutuhan industri saat ini. 
          </p>
        </div>
    
        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="item in kelas" 
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
            href="/training/registration"
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Daftar disini
          </a>
        </div>
      </div>
    </section>
  </template>