"use client"
import useCartStore from "@/app/stores/cart-store";
import { formatPrice } from "@/lib/formatPrice";
import { Product } from "@/types/products/products";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/types/products/cart-item";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({item}: CartItemCardProps) => {
  const { product, quantity } = item;
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  
  
const decreaseQuantity = () => {
  if (quantity <= 1) return;

  updateQuantity(product._id, quantity - 1);
};

const increaseQuantity = () => {
  if (quantity >= product.stock!) return;

  updateQuantity(product._id, quantity + 1);
};

 

  return (
    
    <div className="group relative bg-white rounded-lg border border-gray-50 items-center overflow-hidden transition-all duration-300 flex flex-row hover:shadow-lg">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.mainImage!}
          alt={product.name!}
          priority={true}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
          width={120}
          height={120}
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <span className="text-[9px] text-primary font-bold uppercase tracking-wider">
          {product.brand}
        </span>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-12 sm:h-14 w-44 shadow-sm bg-white">
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
              disabled={quantity >= product.stock!}
              onClick={increaseQuantity}
              className="w-12 sm:w-16 h-full border-l border-gray-100 flex items-center justify-center text-lg sm:text-xl font-bold transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:bg-gray-50 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:active:scale-100"
            >
              +
            </button>
          </div>
          <button 
            type="button"
            className="w-10 h-10 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center transition-all flex-shrink-0 border-gray-50 text-gray-300 hover:text-red-500 hover:border-red-500"
            onClick={()=> removeFromCart(product._id)}
          >  
            <Trash2 className="w-5 h-5"/>
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-primary">৳{formatPrice(product.price!)}</span>
          <span className="text-[10px] text-gray-400 line-through">
            ৳{formatPrice(product.regularPrice!)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
