import {
ArrowUpDown,
LayoutGrid,
ChevronDown
} from "lucide-react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {

  const products = [
    {
        id:1,
        name:"apple watch",
        price: "50 $"
    },
    {
        id:2,
        name:"headphones",
        price: "20 $"
    },
    {
        id:3,
        name:"iphone 17",
        price: "1200 $"
    },
    {
        id:4,
        name:"ءmacbook air",
        price: "1400 $"
    },
    {
        id:5,
        name:"speaker",
        price: "30 $"
    },
  ];
  return (
    <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 md:gap-0">
            <div>
                <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
                    Featured
                    <span className="text-primary italic">Products</span>
                </h2>
                <p className="text-gray-400 text-xs mt-1">Check & Select Your Desired Product!</p>
            </div>
            <div className="flex items-center gap-6 text-gray-500 text-sm font-bold md:border-l border-gray-100 md:pl-8">
                <div className="flex items-center gap-2">
                    <LayoutGrid className="text-primary"/>
                    <span>2 Items</span>
                </div>
                <div className="flex items-center gap-2 group relative">
                    <ArrowUpDown className="text-primary"/>
                    <select className="bg-transparent border-none focus:ring-0 text-sm font-bold text-gray-500 cursor-pointer hover:text-primary transition-colors appearance-none pr-4">
                        <option value="newest">Latest First</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-des">Price: High to Low</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6">
                {
                    // products.map((product) =>( <ProductCard key={product.id}/>))
                }
           
        </div>
    </div>
  )
}

export default FeaturedProducts