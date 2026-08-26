import React from 'react';
import { Sliders } from 'lucide-react';

const Specifications: React.FC = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      {/* Title */}
      <h3 className="mb-8 flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
        <Sliders className="h-4 w-4" />
        Specifications
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Model Reference */}
        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">
            MODEL REFERENCE
          </label>
          <input
            type="text"
            placeholder="e.g. MKGP3LL/A"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* Warranty */}
        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">
            WARRANTY
          </label>
          <input
            type="text"
            placeholder="e.g. 1-Year Limited"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      {/* Technical Details */}
      <div className="mt-8">
        <label className="mb-2 block text-xs font-black uppercase text-gray-400">
          TECHNICAL DETAILS
        </label>
        <textarea
          rows={3}
          placeholder="Key specs (CPU, RAM, Storage...)"
          className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>
    </div>
  );
};

export default Specifications;
