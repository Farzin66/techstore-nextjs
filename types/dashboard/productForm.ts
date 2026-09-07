
export interface ProductFormData {
  name: string;
  brand: string;
  description: string;
  mainImage: string;
  images: string[];
  price: string;
  regularPrice: string;
  category: string;
  stock: string;
  code: string;
  keyFeatures: {
    title: string;
    value: string;
  }[];
  technicalSpecifications: {
    title: string;
    value: string;
  }[];
}

