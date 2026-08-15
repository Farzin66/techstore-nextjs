"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";
import useCartStore from "@/app/stores/cart-store";
import { ShieldCheck, Truck } from "lucide-react";

const OrderSummary = () => {
  const cart = useCartStore((state) => state.cart);
  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <aside className="bg-white rounded-[28px] border border-gray-100 p-7 sticky top-28">
      <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-7">
        Order Summary
      </h2>

      <div className="h-px bg-gray-100 mb-6" />

      {/* Products */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.product.mainImage}
                  alt={item.product.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.product.name}
                </h3>

                <p className="text-[14px] text-gray-400 uppercase tracking-wider mt-1">
                  QUANTITY: {item.quantity}
                </p>
              </div>
            </div>

            <span className="text-sm font-bold text-slate-900">
              ৳{formatPrice(item.product.price)}
            </span>
          </div>
        ))}
      </div>

      <div className="h-px bg-gray-100 mb-6" />

      {/* Price Details */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Subtotal</span>

          <span className="text-sm font-bold text-slate-900">
            ৳{formatPrice(subtotal)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Shipping</span>

          <span className="text-xs font-bold text-slate-900">Free</span>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-6" />

      {/* Total */}
      <div>
        <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
          TOTAL PAYABLE
        </span>

        <span className="text-2xl font-black text-primary">
          ৳{formatPrice(subtotal)}
        </span>
      </div>

      <div className="h-px bg-gray-100 my-6" />
      
      {/* Trust Information */}
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span>Encrypted</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span>Reliable Delivery</span>
          <Truck className="w-4 h-4 text-primary" />
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
