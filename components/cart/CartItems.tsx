"use client";

import useCartStore from "@/app/stores/cart-store";
import CartItemCard from "./CartItemCard";

const CartItems = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col divide-y divide-gray-100">
        {cart.map((item) => (
          <CartItemCard key={item.product._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
