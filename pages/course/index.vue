<script setup>
  import ListCourse from "../../components/program/ListCourse.vue"
  import ListCategories from "../components/program/ListCategories.vue"

  useHead({
   title: 'Course'
  })
</script>
<template>
    <ListCategories />
    <ListCourse />
</template>