// src/composables/useFilters.js

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export interface FiltersObject {
  category?: string
  store?: string
  status?: string
  price?: string
  sortBy?: string
  sortDir?: string
}

export default function useFilters() {
  const route = useRoute()
  const router = useRouter()

  const filters = computed(() => ({
    category: route.query.category || '1',
    store: route.query.store || '1',
    status: route.query.status || 'available',
    price: route.query.price || '0-10',
    sortBy: route.query.sortBy || 'price',
    sortDir: route.query.sortDir || 'asc'
  }))

  // Function to update URL when filters are changed
  const setFilter = (key: string, value: string) => {
    const newQuery = { ...route.query, [key]: value }
    router.push({ query: newQuery })
  }

  // TODO add reset filters

  return { filters, setFilter }
}
