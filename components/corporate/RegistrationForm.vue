<script setup>
import { onMounted } from 'vue'
import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'

onMounted(() => {
  createWidget('NEtUtzmA', { container: document.querySelector('#form') })
})
</script>

<template>
  <div id="form" data-tf-widget="NEtUtzmA" class="h-screen w-full"></div>
</template>
