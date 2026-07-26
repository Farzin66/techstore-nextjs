import { Category } from "./category";


export interface ProductFeature {
  title: string;
  value: string;
}

export interface Product {
  _id: string;

  name: string;
  slug: string;
  description: string;

  brand: string;
  code: string;
  category: Category;

  price: number;
  regularPrice: number;
  stock: number;

  avgRating: number;
  numReviews: number;

  mainImage: string;
  images: string[];

  keyFeatures: ProductFeature[];
  technicalSpecifications: ProductFeature[];
}

