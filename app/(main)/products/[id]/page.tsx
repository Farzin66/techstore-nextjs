

import { getProductById } from "@/app/services/productService";
import ProductGallery from "@/components/product-details/ProductGallery";
import ProductInfo from "@/components/product-details/ProductInfo";
import ProductTabs from "@/components/product-details/ProductTabs";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

  interface ParamsID{
    params: Promise<{
      id: string;
    }>;
  }

const page = async ({params}:ParamsID) => {

  const {id} = await params;
  const goalProduct = await getProductById(id)

  

  return (
    <div className="bg-[#F2F4F8] min-h-screen pb-20">
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap py-3 no-scrollbar border-b border-gray-100 sm:border-0 px-2 sm:px-0">
          <Link href="/" className="hover:text-primary transition-colors flex-shrink-0">Home</Link>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <Link href="/" className="hover:text-primary transition-colors flex-shrink-0">Products</Link>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <span className="text-gray-400 flex-shrink-0">{goalProduct.category.name}</span>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <span className="font-bold text-slate-800 truncate">{goalProduct.name}</span>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-10 mb-10"> 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ProductGallery product={goalProduct}/>
            <ProductInfo product={goalProduct}/>
          </div>
        </div>
        <ProductTabs product={goalProduct}/>
      </div>
    </div>
  )
}

export default page