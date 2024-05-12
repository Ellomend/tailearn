// src/composables/useFilters.js

import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useFilters(defaults) {
  const route = useRoute()
  const router = useRouter()

  const filters = ref({})

  // Initialize filters from URL or use defaults
  const initializeFilters = () => {
    filters.value = {
      category: route.query.category || defaults.category,
      store: route.query.store || defaults.store,
      status: route.query.status || defaults.status,
      price: route.query.price || defaults.price
    }
  }

  // Watch route changes to update filters
  watchEffect(() => {
    initializeFilters()
  })

  // Method to update individual filter and reflect changes in the URL
  const setFilter = (key, value) => {
    const newFilters = { ...filters.value, [key]: value }
    router.push({ path: route.path, query: newFilters }).catch((err) => {})
  }

  // Reset all filters to default
  const resetFilters = () => {
    router.push({ path: route.path, query: defaults }).catch((err) => {})
  }

  return { filters, setFilter, resetFilters }
}
