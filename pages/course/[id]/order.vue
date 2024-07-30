<script setup>
  import { ref } from 'vue';
</script>
  
<template>
    <section class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 class="text-2xl font-semibold mb-6">Keranjang Belanja</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Left Column: Course Details -->
        <div class="md:col-span-2">
          <h2 class="text-lg font-medium">1 Course in Cart</h2>
          <div class="mt-4 flex gap-4 border-b pb-4">
            <img
              class="w-24 h-24 object-cover rounded"
              src="https://via.placeholder.com/150"
              alt="Course Thumbnail"
            />
            <div>
              <h3 class="text-lg font-semibold">The Complete Python Bootcamp From Zero to Hero in Python</h3>
              <p class="text-sm text-gray-600">By Jose Portilla and 1 other</p>
              <div class="flex items-center mt-2">
                <span class="text-yellow-500">★★★★☆</span>
                <span class="ml-2 text-gray-600 text-sm">(512,638 ratings)</span>
              </div>
              <div class="text-sm text-gray-600 mt-2">22 total hours • 156 lectures • All Levels</div>
              <div class="mt-2 flex items-center text-sm text-gray-600">
                <a href="#" class="text-blue-500 hover:text-blue-700">Remove</a>
                <span class="mx-2">•</span>
                <a href="#" class="text-blue-500 hover:text-blue-700">Save for Later</a>
              </div>
            </div>
            <div class="ml-auto text-right">
              <p class="text-lg font-bold">Rp549,000</p>
            </div>
          </div>
        </div>
        <!-- Right Column: Order Summary -->
        <div class="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold">Total:</h2>
          <p class="text-2xl font-bold mt-2">Rp549,000</p>
          <button class="mt-4 w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700">
            Checkout
          </button>
          <div class="mt-6">
            <label for="coupon" class="block text-sm font-medium text-gray-700">Promotions</label>
            <div class="mt-1 flex">
              <input
                type="text"
                id="coupon"
                class="block w-full border-gray-300 rounded-l-lg shadow-sm focus:ring-purple-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Enter Coupon"
              />
              <button
                class="bg-emerald-600 text-white px-4 rounded-r-lg hover:bg-emerald-700"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style>
  /* You can add custom styles here */
  </style>
  