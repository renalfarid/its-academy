<template>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold mb-4">{{ course.title }}</h2>
  
      <div class="mb-4">
        <h3 class="text-xl font-medium">Duration</h3>
        <p class="text-gray-700">{{ course.duration }}</p>
      </div>
  
      <div class="mb-4">
        <h3 class="text-xl font-medium">Sections</h3>
        <ul class="list-disc list-inside">
          <li v-for="section in course.sections" :key="section.id" class="mb-2">
            <div class="flex justify-between items-center">
              <span>{{ section.title }}</span>
              <span class="text-gray-500">{{ section.duration }}</span>
            </div>
          </li>
        </ul>
      </div>
  
      <div class="mb-4">
        <h3 class="text-xl font-medium">Price</h3>
        <p class="text-red-500 text-lg font-semibold">Rp. {{ course.price }}</p>
      </div>
  
      <button
        class="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
        @click="buyCourse"
      >
        Buy Now
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    course: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        duration: '',
        sections: [],
        price: 0,
      }),
    },
  })
  
  const buyCourse = () => {
    // Handle the buy action here, e.g., navigate to a checkout page or call an API
    console.log('Buying course:', props.course.title)
  }
  </script>
  
  <style scoped>
  /* Optional: Add any custom styles here */
  </style>
  