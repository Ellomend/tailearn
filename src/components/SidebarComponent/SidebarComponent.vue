<template>
  <aside class="w-64 h-full bg-gray-200 p-4">
    <ul>
      <li class="font-bold mb-4">Categories</li>
      <li v-for="category in categories" :key="category.id" class="mb-2 px-2 py-1 hover:bg-gray-300 rounded">
        {{ category.name }}
      </li>
    </ul>
  </aside>
</template>

<script setup>

// make up some ecommerce categories
const categories = [
  { id: 1, name: 'Fruits and Vegetables' },
  { id: 2, name: 'Meat and Fish' },
  { id: 3, name: 'Dairy and Eggs' },
  { id: 4, name: 'Bakery and Pastry' },
  { id: 5, name: 'Drinks' },
]
</script>
