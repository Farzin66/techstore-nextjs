import { Product } from "@/types/products/products";
import { ProductResponse } from "@/types/products/products-response";

export async function getProducts(search?: string, category?: string, minPrice?: string, maxPrice?: string) {
  const params = new URLSearchParams();
  if (search?.trim()) params.set("search", search);
  if (category?.trim()) params.set("category", category);
  if (minPrice?.trim()) params.set("minPrice", minPrice);
  if (maxPrice?.trim()) params.set("maxPrice", maxPrice);
  const url = `http://localhost:3000/api/products?${params.toString()}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error fetching data : ${response.status} ${response.statusText} `,
      );
    }
    const data: ProductResponse = await response.json();
    return data;
  } catch (error: unknown) {
    throw error;
  }
}

export async function getProductById(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching data : ${response.status} ${response.statusText} `,
      );
    }
    const product: Product = await response.json();
    return product;
  } catch (error: unknown) {
    throw error;
  }
}
