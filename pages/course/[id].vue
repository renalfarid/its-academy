<script setup>
  const route = useRoute()
  console.log(route.params) // { id: '123' }
  </script>
<template>
  <span>Kursus ID: {{ $route.params.id }}</span>
</template>
  