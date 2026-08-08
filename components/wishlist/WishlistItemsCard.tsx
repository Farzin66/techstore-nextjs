"use client";
import { Product } from "@/types/products/products";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import Image from "next/image";
import Link from "next/link";
import useWishlistStore from "@/app/stores/wishlist-store";

interface WishlistItemCardProps{
  product: Product;
}


const WishlistItemCard = ({product}: WishlistItemCardProps) => {

  const removeFromWishlist = useWishlistStore((state)=> state.removeFromWishlist)


  return (
    <div className="group relative bg-white rounded-lg border border-gray-50 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-lg">
      <div className="p-3 flex justify-between flex-grow">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-current text-yellow-400"/>
          <span className="text-sm font-semibold">{product.avgRating}</span>
        </div>
        <button 
          onClick={()=>{removeFromWishlist(product._id)}}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm text-gray-300 hover:text-red-500">
          <Heart 
            className="w-4 h-4 text-red-500 fill-red-500"/>
        </button>
      </div>
      <Link
        href={`/products/${product._id}`}
        className="relative aspect-[5/4] overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center"
      >
        <Image
          src={product.mainImage}
          alt={product.name}
          priority={true}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-3 flex flex-col flex-grow">
        <div>
          <div className="flex justify-between">
            <span className="text-[14px] text-primary font-bold uppercase tracking-wider">
              {product._id}
            </span>
            <span className={`text-[14px] ${product.stock ? "text-primary" : "text-danger" } font-bold uppercase tracking-wider`}>
              {product.stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
          <Link
            href={`/products/${product._id}`}
            className="text-[13px] font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors line-clamp-2 leading-tight h-8"
          >
            {product.name}
          </Link>
        </div>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-[18px] text-black">
            ৳{formatPrice(product.price)}
          </span>
          <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItemCard;
