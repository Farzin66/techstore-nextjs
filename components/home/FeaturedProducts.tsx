import {
ArrowUpDown,
LayoutGrid,
ChevronDown
} from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { getProducts } from "@/app/services/productService";

const FeaturedProducts = async () => {
    const data = await getProducts(undefined, undefined, undefined, undefined, undefined, 1, 10);
    const products = data.products;
    

  return (
    <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 md:gap-0">
            <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
                    Featured{" "}
                    <span className="text-primary italic">Products</span>
                </h2>
                <p className="text-gray-400 text-xs mt-1">Check & Select Your Desired Product!</p>
            </div>
            <div className="flex items-center gap-6 text-gray-500 text-sm font-bold md:border-l border-gray-100 md:pl-8">
                <div className="flex items-center gap-2">
                    <LayoutGrid className="text-primary"/>
                    <span className="mr-10">{products.length}</span>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
                {
                     products.map((product) =>( <ProductCard key={product._id} product={product} view="grid"  />))
                }
           
        </div>
    </div>
  )
}

export default FeaturedProducts