"use client";
import { Product } from "@/types/products/products";
import { Heart } from "lucide-react";
import { useState } from "react";


interface ProductInfoProps {
  product: Product;
}

const ProductActions = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
        return 1;
      }
      return prev - 1;
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev >= product.stock) {
        return product.stock;
      }
      return prev + 1;
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const BuyNow = () => {};

  const AddToCart = () => {};

  return (
    <div className="pt-4 sm:pt-8 flex flex-col xl:flex-row items-stretch xl:items-center gap-4 sm:gap-6">
      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-12 sm:h-14 w-full xl:w-auto shadow-sm bg-white">
        <button
          disabled={quantity <= 1}
          onClick={decreaseQuantity}
          className="w-12 sm:w-16 h-full border-r border-gray-100 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:active:scale-100"
        >
          -
        </button>
        <span className="flex-1 xl:flex-none px-4 sm:px-10 font-bold text-slate-800 text-sm sm:text-lg min-w-[50px] sm:min-w-[80px] text-center flex items-center justify-center bg-white">
          {quantity}
        </span>
        <button
          disabled={quantity >= product.stock}
          onClick={increaseQuantity}
          className="w-12 sm:w-16 h-full border-l border-gray-100 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:active:scale-100"
        >
          +
        </button>
      </div>
      <div className="flex gap-2 sm:gap-3 w-full">
        <button
          onClick={BuyNow}
          className="flex-[3] h-12 sm:h-14 bg-primary text-white rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary-dark transition-all shadow-md active:scale-95 uppercase tracking-wider"
        >
          Buy Now
        </button>
        <button
          onClick={AddToCart}
          className="flex-[3] h-12 sm:h-14 bg-white text-primary border-2 border-primary rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 uppercase tracking-wider"
        >
          Add to Cart
        </button>
        <button
          onClick={toggleWishlist}
          className={`w-12 h-12 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center transition-all flex-shrink-0 border-gray-200 text-gray-300 hover:text-red-500 hover:border-red-500 ${isWishlisted && "bg-red-500"} `}
        >
          <Heart
            className={`w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] ${
              isWishlisted ? "fill-white text-white" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
