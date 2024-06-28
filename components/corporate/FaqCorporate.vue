<script setup>
   import { ref } from 'vue';
   
   const faq = ref([
      {
        'question': 'Bagaimana prosedur untuk melakukan Training dengan ITS?',
        'answer' : '1. Pembuatan teknikal proposal; 2. Tanda tangan kontrak; 3. Persiapan program; 4. Pelaksanaan program'
      },
      {
        'question': 'Apakah Training dapat di customize sesuai dengan kebutuhan?',
        'answer' : 'Kami dapat menyediakan fasilitator yang berpengalaman yang sesuai dengan kebutuhan industri/company Anda'
      },
      {
        'question': 'Berapa hari kami dapat menerima Post Training Report setelah training selesai?',
        'answer' : 'Post Training Report akan diterima 7 hari kerja setelah training selesai'
      },
      {
        'question': 'Bagaimana cara untuk mendapatkan konsultasi gratis?',
        'answer' : 'Anda dapat mengisi data di section form yang tertera di halaman ini ya. Setelah mengisi data, Anda akan dihubungi langsung oleh team kami maksimal 5 hari untuk melakukan konsultasi gratis.'
      },
      {
        'question': 'Bagaimana cara untuk mendapatkan informasi soal harga pelatihan?',
        'answer' : 'Untuk mendapatkan informasi harga pelatihan, Anda dapat mengisi data di section form untuk mendapatkan informasi dan konsultasi gratis.'
      },
      {
        'question': 'Apakah ada batas minimal karyawan yang diikutsertakan dalam pelatihan dan apakah bisa mengadakan pelatihan hanya untuk <10 orang?',
        'answer' : 'Untuk workshop minimal 25 peserta, sedangkan untuk Bootcamp minimal 20 peserta.'
      },
   ]);
</script>

<template>
  <div class="space-y-1">
    <div class="mx-auto max-w-3xl text-center">
      <p class="mt-4 mb-5 text-gray-500 text-2xl font-bold sm:text-xl">
        FAQ In House Training Corporate
      </p>
    </div>
    
    <div>
      <template v-for="(item, index) in faq" :key="index">
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">{{ item.question }}</h2>
            <svg
              class="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            {{ item.answer }}
          </p>
        </details>
      </template>
    </div>
  </div>
</template>
