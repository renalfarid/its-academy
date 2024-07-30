<script setup>
import { ref } from "vue"

const dashboard = ref([
{
    id: "01",
    title: "Total Sales",
    amount: 500,
  },
  {
    id: "02",
    title: "Total Pengguna",
    amount: 300,
  },
  {
    id: "03",
    title: "Total Course",
    amount: 100,
  }
])

const imgUrl = ref("https://source.unsplash.com/")
</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-900 sm:text-xl">Dashboard</h2>
      </header>
  
      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="item in dashboard" :key="item.id">
            <div class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                  {{ item.title }} 
                </h3>
      
              </div>
      
            </div>
      
            <div class="mt-4">
              <p class="text-pretty font-bold text-3xl text-gray-500">
                {{ item.amount }}
              </p>
            </div>

        </div>
        </li>
      </ul>
    </div>
  </section>
</template>
