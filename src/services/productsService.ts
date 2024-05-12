import { Product } from "@/data/data";
import { getProducts } from "@/data/data";

export interface ProductsResponse {
  data: Product[]
}



/* 
simulating a request to the server to get the products
add a delay of 1 second to simulate the request

considerations:
  - otherwise similar methods for sale view and regular view
  - should accept request parameters as arguments (filterRequest)
  - should return a promise
  - should return the products as an array of Product objects
  - should respect sorting and filtering parameters

 */
// sale
export const fetchSaleProducts = async (): Promise<ProductsResponse> => {
  // TODO: implement this function
}
// regular
export const fetchRegularProducts = async (): Promise<ProductsResponse> => {
  // TODO: implement this function
}
