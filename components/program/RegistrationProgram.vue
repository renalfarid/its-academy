<script setup>
</script>
<template>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Program Training</h2>
    
          <p class="mt-4">
            Isi formulir ini untuk mengikuti program pelatihan yang kami sediakan 
          </p>
        </div>
    </div>
    <label
      for="FullName"
      class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span class="text-xs font-medium text-gray-700"> Nama Lengkap * </span>
      
    
      <input
        type="text"
        id="FullName"
        placeholder="John Doe"
        required
        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
    </label>
    <label
      for="UserEmail"
      class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span class="text-xs font-medium text-gray-700"> Email * </span>
    
      <input
        type="email"
        id="UserEmail"
        placeholder="anthony@rhcp.com"
        required
        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
    </label>
    <label
      for="NoWa"
      class="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span class="text-xs font-medium text-gray-700"> No WA * </span>
    
      <input
        type="text"
        id="NoWa"
        placeholder="081123456"
        aria-required="true"
        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />
    </label>

    <div class="mt-4 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm">
      <label for="SelectTraining" class="block text-sm font-medium text-gray-900"> Pilihan training </label>
  
      <select
        name="SelectTraining"
        id="SelectTraining"
        required
        class="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      >
        <option value="">Please select</option>
        <option value="BE">Backend Training</option>
        <option value="FE">Frontend Training</option>
        <option value="DO">Devops Training</option>
      </select>
    </div>
    <div class="mt-8 col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Kirim
              </button>
    </div>
  </template>