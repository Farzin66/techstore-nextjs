import { Product } from "./products";

export interface ProductResponse{
    
  products: Product[];
  totalPages: number;
  currentPage: number;
  totalProducts: number;

}