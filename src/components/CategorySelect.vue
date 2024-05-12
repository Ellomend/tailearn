<!-- select category dropdown (typescript + TailwindCSS) -->
<template>
  <div class="relative">
    <select v-model="selectedCategory" @change="onCategoryChange"
      class="block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option value="" disabled>Select a category</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.name }}
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd"
          d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedCategory = ref('');
    const categories = [
      { id: 1, name: 'Category 1' },
      { id: 2, name: 'Category 2' },
      { id: 3, name: 'Category 3' },
    ];

    const onCategoryChange = () => {
      console.log(selectedCategory.value);
    };

    return {
      selectedCategory,
      categories,
      onCategoryChange,
    };
  },
});



</script>