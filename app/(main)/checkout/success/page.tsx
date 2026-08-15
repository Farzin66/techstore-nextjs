"use client";

import { CircleCheck } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';


const page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-center max-w-lg w-full">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
            <CircleCheck className='w-10 h-10'/>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Order Confirmed!</h1>
        <p className="text-gray-400 mb-6">Thank you for your purchase. We've received your order.</p>

        <div className="bg-gray-50 py-3 px-4 rounded-lg mb-8 inline-block">
          <span className="text-sm text-gray-500">Order ID: </span>
          <span className="font-mono font-semibold text-gray-900">{orderId}</span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push('/track-order')}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-xl transition-all"
          >
            Track My Order
          </button>
          
          <button
            onClick={() => router.push('/products')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default page