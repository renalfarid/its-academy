<script setup lang="ts">
import CardCourse from "../components/program/CardCourse.vue"
import CardNewCourse from "../components/program/CardNewCourse.vue"
useHead({
    title: 'Sqile Academy - Langkah menuju karir digital impian',
    meta: [
      {
        name: 'description',
        content: 'Sqile Academy hadir untuk membantu Anda mengasah keterampilan tersebut melalui program-program pelatihan yang komprehensif dan praktis.' 
      },
    ],
  });
</script>
<template>
    <Banner />
    <CardCourse />
    <CardNewCourse />
    <Statistic />
    <SectionPath />
    <CustomerReview />
</template>