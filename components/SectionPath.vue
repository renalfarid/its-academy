<script setup>
  import { ref } from 'vue'

  const content = ref({
    'title': 'Jalur Pembelajaran',
    'sub': 'Jalur pembelajaran di atas dirancang untuk mempersiapkan Anda memasuki dunia kerja dengan keahlian yang dibutuhkan. '+ 
            'Temukan jalur pembelajaran yang tepat untuk Anda dan mulailah perjalanan Anda menuju karir digital yang sukses.'
  })

  const training = ref([
    {
      'nama': 'Web Developer',
      'deskripsi': 'Jadi ahli dalam mengembangkan dan merancang situs web yang responsif dan interaktif.'
    },
    {
      'nama': 'Cloud Admin',
      'deskripsi': 'Skill pengelolaan infrastruktur cloud dengan memahami layanan utama seperti AWS.'
    },
    {
      'nama': 'Software Engineer',
      'deskripsi': 'Bangun dan desain perangkat lunak yang inovatif dan handal.'
    },
    {
      'nama': 'Web Programmer',
      'deskripsi': 'Keterampilan pemrograman web pada lingkungan PHP, Javascript'
    },
    {
      'nama': 'IoT Engineer',
      'deskripsi': 'Memahami sensor, komunikasi nirkabel, dan pemrograman perangkat embedded.'
    },
    {
      'nama': 'Backend Engineer',
      'deskripsi': 'Mengembangkan layanan backend yang handal dan aman.'
    }
  ])
</script>
<template>
    <section>
      <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 class="text-3xl font-bold sm:text-4xl">{{ content.title }}</h2>
    
            <p class="mt-4 text-gray-600">
              {{ content.sub }}
            </p>
    
            <a
              href="/training"
              class="mt-8 inline-block rounded bg-emerald-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Mulai Aja Dulu
            </a>
          </div>
    
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
            v-for="(item, index) in training"
            :key="index"
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="#"
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
            <h2 class="mt-2 font-bold">{{ item.nama }}</h2>
            <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
              {{ item.deskripsi }}
            </p>
          </a>
          </div>
        </div>
      </div>
    </section>
  </template>