<script setup>
  import CourseDetail from '../../components/program/CourseDetail.vue'
  useHead({
  title: 'Course Detail'
})
  const route = useRoute()
  console.log(route.params) // { id: '123' }
  
  const course = ref({
  title: 'Node JS Dasar',
  duration: '10 hours',
  previewImage: 'https://example.com/course-preview.jpg',
  price: 50000,
  requirements: [
    'Basic knowledge of JavaScript',
    'Understanding of web development',
    'Willingness to learn new things'
  ],
  sections: [
    {
      id: 1,
      title: 'Introduction',
      contents: [
        { id: 1, title: 'Welcome', duration: '5 minutes' },
        { id: 2, title: 'Course Overview', duration: '10 minutes' }
      ]
    },
    {
      id: 2,
      title: 'Basics',
      contents: [
        { id: 1, title: 'Node.js Environment Setup', duration: '20 minutes' },
        { id: 2, title: 'Basic Syntax', duration: '30 minutes' }
      ]
    }
    // More sections...
  ]
})

const buyCourse = () => {
  console.log('Buying course:', course.value.title)
  // Implement buy course logic here
}
</script>

<template>
    <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left Column: Course Details -->
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold mb-4">{{ course.title }}</h2>
        
        <div class="mb-6">
          <h3 class="text-xl font-medium">Duration</h3>
          <p class="text-gray-700">{{ course.duration }}</p>
        </div>
  
        <div class="mb-6">
          <h3 class="text-xl font-medium">Requirements</h3>
          <ul class="list-disc list-inside">
            <li v-for="(requirement, index) in course.requirements" :key="index" class="mb-2">
              {{ requirement }}
            </li>
          </ul>
        </div>
  
        <div>
          <h3 class="text-xl font-medium">Sections</h3>
          <div v-for="section in course.sections" :key="section.id" class="mb-4">
            <h4 class="text-lg font-semibold">{{ section.title }}</h4>
            <ul class="list-disc list-inside ml-4">
              <li v-for="content in section.contents" :key="content.id" class="flex justify-between">
                <span>{{ content.title }}</span>
                <span class="text-gray-500">{{ content.duration }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Right Column: Video Preview, Price, Buy Button -->
      <div class="space-y-6">
        <div class="aspect-w-16 aspect-h-9 bg-gray-200">
        <video controls class="w-full h-full rounded-lg object-cover shadow-sm">
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
  
        <div class="text-xl font-semibold text-red-500">
          Rp. {{ course.price.toLocaleString() }}
        </div>
        <div class="mt-10">
          <NuxtLink :to="`/course/${route.params.id}/order`" class="w-full mt-10 py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Beli Kursus</NuxtLink>
        </div>
        
  
      </div>
    </div>
  </template>
