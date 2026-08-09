"use client";

import { ShieldCheck } from "lucide-react";
import useCartStore from "@/app/stores/cart-store";
import { formatPrice } from "@/lib/formatPrice";

const CartSummary = () => {
  const cart = useCartStore((state) => state.cart);
  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 p-8 sticky top-28">
      <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
        Order Summary
      </h3>

      <div className="space-y-5">
        <div className="flex items-center justify-between text-[15px]">
          <span className="text-gray-500 font-medium">Items</span>

          <span className="font-bold text-slate-900">{totalItems}</span>
          <span className="text-gray-500 font-medium">Subtotal</span>

          <span className="font-bold text-slate-900">
            ৳{formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between text-[15px]">
          <span className="text-gray-500 font-medium">Standard Shipping</span>

          <span className="font-bold text-emerald-500">Free</span>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-8" />

      <div className="flex items-center justify-between">
        <span className="text-xs tracking-[2px] uppercase font-black text-gray-400">
          Total Amount
        </span>

        <span className="text-3xl font-black text-primary">
          {" "}
          ৳{formatPrice(subtotal)}
        </span>
      </div>

      <button className="w-full mt-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark transition-colors text-white font-black uppercase tracking-[2px] shadow-xl shadow-primary/20">
        Checkout Now
      </button>

      <div className="mt-8 flex items-center justify-center gap-3 text-gray-500">
        <ShieldCheck className="w-5 h-5 text-emerald-500" />

        <span className="text-xs font-bold tracking-[1px] uppercase">
          Secure 256-Bit SSL Checkout
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
