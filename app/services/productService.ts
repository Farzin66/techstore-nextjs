import { Product } from "@/types/products/products";
import { ProductResponse } from "@/types/products/productsResponse";

export async function getProducts(search?: string){
    const url = (search?.trim())
        ? `http://localhost:3000/api/products?search=${encodeURIComponent(search)}` 
        : "http://localhost:3000/api/products";
    try{
        const response = await fetch (url);
        if (!response.ok){
             throw new Error(`Error fetching data : ${response.status} ${response.statusText} `);  
        }
        const data: ProductResponse = await response.json();
        return data;
    } catch(error: unknown){
         throw error;
    }

} 



export async function getProductById(id: string){
    try{
        const response = await fetch (`http://localhost:3000/api/products/${id}`);
        if (!response.ok){
             throw new Error(`Error fetching data : ${response.status} ${response.statusText} `);  
        }
        const product: Product = await response.json();
        return product;
    } catch(error: unknown){
         throw error;
    }

} 