import { Product } from "@/types/products/products";
import {Heart, Star, ShoppingCart} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps{
  product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg">
        <div className="absolute top-2 left-2 z-20 pointer-events-none">
            <div className="bg-discount text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                Save: ৳{product.price/10}
            </div>
        </div>
        <div className="absolute top-2 right-2 z-20">
                <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm text-gray-300 hover:text-red-500">
                    <Heart className="w-[18px] h-[18px]"/>
                </button>
        </div>
        <Link href="/" className="relative aspect-[5/4] overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center">
                  <Image
                    src= {product.image}
                    alt={product.name}
                    priority={true} 
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"/>
        </Link>
        <div className="p-3 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{product.name}</span>
                    <div className="flex items-center gap-1">
                        <Star className="w-[9px] h-[9px] fill-yellow-400 text-yellow-400"/>
                        <span className="text-[10px] text-gray-600 font-bold">{product.avgRating}</span>
                    </div>
                </div>
                <Link href={`/products/${product._id}`} className="text-[13px] font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight h-8">
                    {product.name}
                </Link>
                <div className="mt-auto pt-2 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-danger">৳{product.price}</span>
                        <span className="text-[10px] text-gray-400 line-through">৳{product.price}</span>
                    </div>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all">
                        <ShoppingCart className="w-4 h-4"/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default ProductCard