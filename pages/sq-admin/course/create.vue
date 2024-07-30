<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

const initialCourse = {
  title: '',
  description: '',
  category: '',
  duration: '',
  price: 0,
  thumbnail: null
}

const course = ref({ ...initialCourse })

const categories = ref([
  { value: 'backend', text: 'Backend' },
  { value: 'frontend', text: 'Frontend' },
  { value: 'programming', text: 'Programming' },
  { value: 'design', text: 'Design' }
])

const handleSubmit = () => {
  // Handle form submission logic here, e.g., sending data to an API
  console.log('Course Data:', course.value)
}

const handleThumbnailChange = (event) => {
  const file = event.target.files[0]
  course.value.thumbnail = file
}

const resetForm = () => {
  course.value = { ...initialCourse }
}

</script>

<template>
  <section>
    <div class="w-full mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Buat kursus</h2>
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">Judul</label>
          <input
            v-model="course.title"
            id="title"
            type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Kategori</label>
          <select
            v-model="course.category"
            id="category"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="" disabled>Pilih kategori</option>
            <option v-for="cat in categories" :key="cat.value" :value="cat.value">
              {{ cat.text }}
            </option>
          </select>
        </div>

        <div class="sm:col-span-2">
          <label for="description" class="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            v-model="course.description"
            id="description"
            rows="4"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          ></textarea>
        </div>

        <div>
          <label for="duration" class="block text-sm font-medium text-gray-700">Durasi (jam)</label>
          <input
            v-model="course.duration"
            id="duration"
            type="text"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">Harga (Rp)</label>
          <input
            v-model.number="course.price"
            id="price"
            type="number"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div class="sm:col-span-2">
          <label for="thumbnail" class="block text-sm font-medium text-gray-700">Thumbnail</label>
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            @change="handleThumbnailChange"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>

        </div>

        <div class="sm:col-span-2">
          <div class="flex justify-end mt-4 gap-2">
            <button type="submit" class="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">
              Simpan
            </button>

            <button type="cancel" @click="resetForm" class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
              Batal
            </button>
          </div>
          
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional styling here */
</style>
