<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="/">
              <span class="sr-only">Home</span>
              <img src="/img/logo-its.webp" width="80" height="80"/>
            </a>
          </div>
    
          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                </li>
    
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/services"> Services </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/training"> Program </a>
                </li>

                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/corporate"> Corporate Training </a>
                </li>
    
                <li>
                  <a class="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
                </li>
    
              </ul>
            </nav>
          </div>
    
          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
             
    
              <div class="hidden sm:flex">
               
              </div>
            </div>
    
            <div class="block md:hidden">
              <button @click="toggleMenu" class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMenuOpen" class="md:hidden">
      <nav aria-label="Global">
        <ul class="flex flex-col items-center gap-6 text-sm">
          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/">Home</a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/services">Services</a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/training">Program</a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/corporate">Corporate Training</a>
          </li>

          <li>
            <a class="text-gray-500 transition hover:text-gray-500/75" href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  </template>