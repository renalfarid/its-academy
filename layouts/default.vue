<script setup>
  import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>
<template>
    <SpeedInsights />
    <TopMenu />
    <Announcement />
    <div class="mx-auto max-w-screen-xl py-6 px-4 sm:px-6 lg:px-8">
        <slot />
    </div>
    <UseFooter />
</template>