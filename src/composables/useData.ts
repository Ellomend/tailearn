import { ref } from 'vue'
import { categories, products } from '@/data/data.ts'

export const useData = () => {
  const productsData = ref(categories)
  const categoriesData = ref(products)

  return { products: productsData, categories: categoriesData }
}
