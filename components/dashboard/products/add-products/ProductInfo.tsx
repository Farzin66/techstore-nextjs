import React from 'react';
import { Info } from 'lucide-react';

const ProductInfo: React.FC = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Title */}
      <h3 className="mb-8 flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
        <Info className="h-4 w-4" />
        Product Information
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Product Name */}
        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">PRODUCT NAME</label>
          <input
            type="text"
            placeholder="e.g. MacBook Pro 14"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 px-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
        
        {/* Brand */}
        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">BRAND</label>
          <input
            type="text"
            placeholder="e.g. Apple"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 py-3 px-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <label className="mb-2 block text-xs font-black uppercase text-gray-400">DESCRIPTION</label>
        <textarea
          rows={4}
          placeholder="Detailed product overview..."
          className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
