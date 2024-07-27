<script setup>
  import { ref } from "vue"

  const upcomingCourse = ref([
    {
        "id": "01",
        "title": "Node JS Dasar",
        "category": "Backend",
        "thumbnail": "https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Belajar NodeJS Dasar",
        "duration": "1 hours",
        "published_at": "Segera", 
        "price": 25000
    },
    {
        "id": "02",
        "title": "Web Design Dasar",
        "category": "Frontend",
        "thumbnail": "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Belajar HTML, CSS, Javascript",
        "duration": "1 hours",
        "published_at": "Segera", 
        "price": 25000
    },
    {
        "id": "03",
        "title": "Golang Dasar",
        "category": "Programming",
        "thumbnail": "https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Belajar pemrograman golang",
        "duration": "1 hours",
        "published_at": "Segera", 
        "price": 25000
    }
  ])

  const imgUrl = ref("https://source.unsplash.com/")
  
</script>
<template>
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header class="flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-xl">Kursus yang Segera Hadir</h2>
          <a href="/#" class="text-blue-500 hover:text-blue-700">Lihat semua</a>
        </header>
    
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          <li v-for="item in upcomingCourse">
            <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
              <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
  
              <div class="sm:flex sm:justify-between sm:gap-4">
                <div>
                  <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                    {{ item.title }} 
                  </h3>
        
                  <p class="mt-1 text-xs font-medium text-gray-600">{{ item.category }}</p>
                </div>
        
               <div class="hidden sm:block sm:shrink-0">
                  <img
                   alt=""
                   :src="item.thumbnail"
                   class="size-16 rounded-lg object-cover shadow-sm"
                  />
                </div>
              </div>
        
              <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                  {{ item.description }}
                </p>
              </div>
  
              <dl class="mt-6 flex gap-2 sm:gap-6">
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Publikasi</dt>
                  <dd class="text-xs text-gray-500">{{ item.published_at }}</dd>
                </div>
        
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Durasi</dt>
                  <dd class="text-xs text-gray-500">{{ item.duration }}</dd>
                </div>
                <div class="flex flex-col-reverse">
                  <dt class="text-sm font-medium text-gray-600">Harga</dt>
                  <dd class="font-semibold text-sm text-red-500">Rp. {{ item.price }}</dd>
                </div>
              </dl>
            </a>
          </li>
    
        </ul>
      </div>
    </section>
  </template>