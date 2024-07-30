<script setup>
  import SideMenu from '../components/sqadmin/SideMenu.vue'
  
  useHead({
   title: 'Sqile Admin'
  })
</script>

<template>
  <div class="flex min-h-screen">
    <SideMenu class="w-56 bg-gray-800 text-white" />
    <div class="flex-1 p-6">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
