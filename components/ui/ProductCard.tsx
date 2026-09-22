"use client";

import useCartStore from "@/app/stores/cart-store";
import useWishlistStore from "@/app/stores/wishlist-store";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/products/products";
import { Heart, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  view: "list" | "grid";
}

const ProductCard = ({ product, view }: ProductCardProps) => {
  const isGrid = view === "grid";

  const cardClass = isGrid
    ? "group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-50 bg-white transition-all duration-300 hover:shadow-lg"
    : "group relative flex flex-row overflow-hidden rounded-lg border border-gray-50 bg-white transition-all duration-300 hover:shadow-lg";

  const imageWrapperClass = isGrid
    ? "relative flex aspect-[5/4] items-center justify-center overflow-hidden border-b border-gray-50 bg-white"
    : "relative flex aspect-[5/4] w-64 min-w-64 items-center justify-center overflow-hidden border-r border-gray-50 bg-white";

  const contentClass = isGrid
    ? "flex flex-grow flex-col p-3"
    : "flex flex-1 flex-col justify-between p-6";

  const titleClass = isGrid
    ? "mb-2 h-8 line-clamp-2 text-[13px] font-bold leading-tight text-slate-800 transition-colors group-hover:text-primary"
    : "mb-3 text-xl font-bold text-slate-800 transition-colors group-hover:text-primary";

  const priceSectionClass = isGrid
    ? "mt-auto flex items-center justify-between pt-2"
    : "mt-6 flex items-center justify-between";

  const buttonClass = isGrid
    ? "rounded-lg bg-gray-100 p-2 text-gray-600 transition-all hover:bg-primary hover:text-white"
    : "rounded-xl bg-gray-100 p-3 text-gray-600 transition-all hover:bg-primary hover:text-white";

  const wishlist = useWishlistStore((state) => state.wishlist);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = wishlist.some((item) => item._id === product._id);

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={cardClass}>
      <div className="pointer-events-none absolute left-2 top-2 z-20">
        <div className="rounded-full bg-discount px-3 py-1 text-[10px] font-bold text-white shadow-sm">
          Save: ৳{formatPrice(product.regularPrice - product.price)}
        </div>
      </div>

      <div className="absolute right-2 top-2 z-20">
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white/90 text-gray-300 shadow-sm backdrop-blur-sm transition-all hover:text-red-500"
        >
          <Heart
            className={`h-[18px] w-[18px] ${
              isInWishlist ? "fill-red-500 text-red-500" : "text-gray-300"
            }`}
          />
        </button>
      </div>

      <Link href={`/products/${product._id}`} className={imageWrapperClass}>
        <Image
          src={product.mainImage}
          alt={product.name}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className={contentClass}>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
            {product.name}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-[9px] w-[9px] fill-yellow-400 text-yellow-400" />

            <span className="text-[10px] font-bold text-gray-600">
              {product.avgRating}
            </span>
          </div>
        </div>

        <Link href={`/products/${product._id}`} className={titleClass}>
          {product.name}
        </Link>

        <div className={priceSectionClass}>
          <div className="flex flex-col">
            <span className="text-base font-bold text-danger">
              ৳{formatPrice(product.price)}
            </span>

            <span className="text-[10px] text-gray-400 line-through">
              ৳{formatPrice(product.regularPrice)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className={buttonClass}
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
