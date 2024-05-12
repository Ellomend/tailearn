export const stores = [
  {
    id: 1,
    name: 'Carrefour',
    address: '123 Main St'
  },
  {
    id: 2,
    name: 'Lulu',
    address: '456 Main St'
  },
  {
    id: 3,
    name: 'Union Coop',
    address: '789 Main St'
  }
]

export const categories = [
  {
    id: 1,
    name: 'Fruits & Vegetables'
  },
  {
    id: 2,
    name: 'Meat & Fish'
  },
  {
    id: 3,
    name: 'Dairy'
  },
  {
    id: 4,
    name: 'Beverages'
  }
]

// add status to the products
export const fruitsAndVegetablesProducts = [
  {
    id: 1,
    categoryId: 1,
    name: 'Apple',
    price: 2.5,
    status: 'available',
    storeId: 1
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Banana',
    price: 1.5,
    status: 'available',
    storeId: 2
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Carrot',
    price: 1.2,
    status: 'unavailable',
    storeId: 3
  }
]

export const meatAndFishProducts = [
  {
    id: 4,
    categoryId: 2,
    name: 'Chicken',
    price: 5.0,
    status: 'available',
    storeId: 1
  },
  {
    id: 5,
    categoryId: 2,
    name: 'Fish',
    price: 7.0,
    status: 'available',
    storeId: 2
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Pork',
    price: 6.0,
    status: 'unavailable',
    storeId: 3
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Beef',
    price: 8.0,
    status: 'available',
    storeId: 1
  }
]

export const dairyProducts = [
  {
    id: 8,
    categoryId: 3,
    name: 'Milk',
    price: 2.0,
    status: 'available',
    storeId: 1
  },
  {
    id: 9,
    categoryId: 3,
    name: 'Cheese',
    price: 3.0,
    status: 'available',
    storeId: 2
  },
  {
    id: 10,
    categoryId: 3,
    name: 'Butter',
    price: 1.5,
    status: 'unavailable',
    storeId: 3
  }
]

export const beveragesProducts = [
  {
    id: 11,
    categoryId: 4,
    name: 'Water',
    price: 1.0,
    status: 'available',
    storeId: 1
  },
  {
    id: 12,
    categoryId: 4,
    name: 'Juice',
    price: 2.5,
    status: 'available',
    storeId: 2
  },
  {
    id: 13,
    categoryId: 4,
    name: 'Soda',
    price: 1.5,
    status: 'unavailable',
    storeId: 3
  }
]

export const products = [
  ...fruitsAndVegetablesProducts,
  ...meatAndFishProducts,
  ...dairyProducts,
  ...beveragesProducts
]
