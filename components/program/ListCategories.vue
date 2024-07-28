<script setup>
  import {ref} from "vue"

  const listCategories = ref([
    {
        "id": 0,
        "name": "Backend"
    },
    {
        "id": 1,
        "name": "Frontend"
    },
    {
        "id": 3,
        "name": "Programming"
    }
  ])
</script>
<template>
  <section>
    <div class="mt-10 flex justify-center items-center">
    <ul class="flex space-x-4 list-none p-0 m-0">
      <li
        v-for="category in listCategories"
        :key="category.id"
        class="py-2 px-4 bg-emerald-500 text-white rounded-lg cursor-pointer hover:bg-emerald-600"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
  </section>
</template>