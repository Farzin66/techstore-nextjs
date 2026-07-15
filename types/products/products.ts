import { Category } from "../category";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  image: string;
  category: Category;
  stock: number;
  avgRating: number;
  numReviews: number;
}
