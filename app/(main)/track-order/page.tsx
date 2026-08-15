"use client";
import { PackageSearch } from 'lucide-react';
import { useRouter } from 'next/navigation';

const page = () => {
const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-center max-w-lg w-full">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
            <PackageSearch className='w-10 h-10'/>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">Follow your delivery</h1>
        <p className="text-gray-400 mb-6">Your order is being processed.</p>

        <div className='mt-20'>
          <button 
            onClick={() => router.push('/products')}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 rounded-xl transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default page