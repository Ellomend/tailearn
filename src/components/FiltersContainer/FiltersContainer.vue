<!-- Component container for filters, for fields by which products are filtered: categoryId: dropdown, price: input, status:dropdown (TailwindCSS) -->
<template>
  <div class="flex flex-col w-1/6 bg-gray-100 p-4 rounded-lg shadow-lg">
    <div class="flex flex-col space-y-4">
      <div>
        <label for="category" class="text-sm">Category</label>
        <select id="category" class="w-full p-2 border border-gray-300 rounded-lg">
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
      </div>
      <div>
        <label for="price" class="text-sm">Price</label>
        <input type="number" id="price" class="w-full p-2 border border-gray-300 rounded-lg" />
      </div>
      <div>
        <label for="status" class="text-sm">Status</label>
        <select id="status" class="w-full p-2 border border-gray-300 rounded-lg">
          <option value="1">Active</option>
          <option value="2">Inactive</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const filters = ref({
  categoryId: null,
  price: null,
  status: null,
});

const updateFilters = (key, value) => {
  filters.value[key] = value;
};

const resetFilters = () => {
  filters.value = {
    categoryId: null,
    price: null,
    status: null,
  };
};



</script>