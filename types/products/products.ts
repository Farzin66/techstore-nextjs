import { Category } from "../featured-category";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  regularPrice: number;
  images: string[];
  mainImage: string;
  category: Category;
  stock: number;
  avgRating: number;
  numReviews: number;
}
