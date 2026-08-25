
import React from 'react';
import { Tag } from 'lucide-react'; 

const Organization: React.FC = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-sm font-black uppercase tracking-[0.15em] text-primary flex items-center gap-2">
        <Tag className="h-4 w-4 text-primary" />
        Organization
      </h3>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Special Price */}
        <div>
          <label htmlFor="special-price" className="text-xs font-black text-gray-400 uppercase block mb-2">
            SPECIAL PRICE
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">৳</span>
            <input
              type="number"
              id="special-price"
              placeholder="0.0"
              className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>
        {/* Regular Price */}
        <div>
          <label htmlFor="regular-price" className="text-xs font-black text-gray-400 uppercase block mb-2">
            REGULAR PRICE
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">৳</span>
            <input
              type="number"
              id="regular-price"
              placeholder="0.0"
              className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>
      </div>
      {/* Category Selection */}
      <div className="mt-8 col-span-2">
        <label htmlFor="category" className="text-xs font-black text-gray-400 uppercase block mb-2">
          CATEGORY SELECTION
        </label>
        <div className="relative">
          <select
            id="category"
            className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-4 pr-10 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10 appearance-none"
          >
            <option value="">Choose category</option>
            {/* Add more category options here */}
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
