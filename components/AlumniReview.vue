<script setup>
  import { ref } from 'vue';
  
  const reviews = ref([
    {
      image: '/img/alumni-1.jpg', // Change to your image path
      name: 'Nal Farid',
      program: 'Tech Lead',
      testimonial: 'Kami belajar secara teori dan praktik dalam mengembangkan aplikasi...',
      logo: '/img/company-logo.jpg' // Change to your logo path
    },
    {
      image: '/img/alumni-1.jpg', // Change to your image path
      name: 'Client 2',
      program: 'Another Program',
      testimonial: 'Another testimonial...',
      logo: '/img/loka-logo.jpeg' // Change to your logo path
    },
    // Add more reviews as needed
  ]);
  
  const currentIndex = ref(0);
  
  const nextReview = () => {
    currentIndex.value = (currentIndex.value + 1) % reviews.value.length;
  };
  
  const prevReview = () => {
    currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length;
  };
  </script>
  
<template>
    <div class="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 class="text-2xl font-semibold mb-8">Review alumni kami</h2>
      <div class="flex items-center justify-center gap-4">
        <button @click="prevReview" class="text-gray-500 hover:text-gray-700">
          &lt;
        </button>
        <div class="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <img :src="reviews[currentIndex].image" alt="Client Image" class="w-20 h-20 rounded-full mb-4" />
          <div class="text-center">
            <h3 class="text-lg font-medium">{{ reviews[currentIndex].name }}</h3>
            <p class="text-sm text-gray-500">{{ reviews[currentIndex].program }}</p>
            <p class="mt-4 text-gray-700">{{ reviews[currentIndex].testimonial }}</p>
          </div>
          <img :src="reviews[currentIndex].logo" alt="Company Logo" class="w-24 mt-4" />
        </div>
        <button @click="nextReview" class="text-gray-500 hover:text-gray-700">
          &gt;
        </button>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  /* You can add any additional scoped styles if needed */
  </style>
  