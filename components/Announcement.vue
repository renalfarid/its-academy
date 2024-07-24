<script setup>
  import { ref } from 'vue'

  const announcement = ref({
    'title': 'Pelatihan Web Programming ?',
    'content': 'Daftar disini',
    'url': '/training/registration'
  })
</script>
<template>
    <div class="bg-lime-600 mt-5 px-4 py-3 text-white">
      <p class="text-center text-sm font-medium">
        {{ announcement.title }}
        <a :href="announcement.url" class="inline-block underline">{{ announcement.content }}</a>
      </p>
    </div>
  </template>