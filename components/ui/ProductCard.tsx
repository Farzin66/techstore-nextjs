import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/products/products";
import {Heart, Star, ShoppingCart} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps{
  product: Product;
  view: "list" | "grid";
}

const ProductCard = ({product, view}: ProductCardProps) => {
  const isGrid = view === "grid";

  const cardClass = isGrid
    ? "group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg"
    : "group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-row hover:shadow-lg";

  const imageWrapperClass = isGrid
    ? "relative aspect-[5/4] overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center"
    : "relative w-64 min-w-64 aspect-[5/4] overflow-hidden bg-white border-r border-gray-50 flex items-center justify-center";

  const contentClass = isGrid
    ? "p-3 flex flex-col flex-grow"
    : "flex-1 p-6 flex flex-col justify-between";

  const titleClass = isGrid
    ? "text-[13px] font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight h-8"
    : "text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors";

  const priceSectionClass = isGrid
    ? "mt-auto pt-2 flex items-center justify-between"
    : "mt-6 flex items-center justify-between";

  const buttonClass = isGrid
    ? "p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary hover:text-white transition-all"
    : "p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-primary hover:text-white transition-all";


  return (
    <div className={cardClass}>
        <div className="absolute top-2 left-2 z-20 pointer-events-none">
            <div className="bg-discount text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                Save: ৳{formatPrice(product.regularPrice - product.price)}
            </div>
        </div>
        <div className="absolute top-2 right-2 z-20">
                <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm text-gray-300 hover:text-red-500">
                    <Heart className="w-[18px] h-[18px]"/>
                </button>
        </div>
        <Link href={`/products/${product._id}`} className={imageWrapperClass}>
                  <Image
                    src= {product.mainImage}
                    alt={product.name}
                    priority={true} 
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"/>
        </Link>
        <div className={contentClass}>
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">{product.name}</span>
                    <div className="flex items-center gap-1">
                        <Star className="w-[9px] h-[9px] fill-yellow-400 text-yellow-400"/>
                        <span className="text-[10px] text-gray-600 font-bold">{product.avgRating}</span>
                    </div>
                </div>
                <Link href={`/products/${product._id}`} className={titleClass}>
                    {product.name}
                </Link>
                <div className={priceSectionClass}>
                    <div className="flex flex-col">
                        <span className="text-base font-bold text-danger">৳{formatPrice(product.price)}</span>
                        <span className="text-[10px] text-gray-400 line-through">৳{formatPrice(product.regularPrice)}</span>
                    </div>
                    <button className={buttonClass}>
                        <ShoppingCart className="w-4 h-4"/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default ProductCard