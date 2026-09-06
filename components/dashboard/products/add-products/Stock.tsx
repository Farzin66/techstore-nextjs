"use client";

import React from "react";
import { Layers, Plus } from "lucide-react";
import { ProductFormData } from "@/types/dashboard/productForm";

interface StockProps {
  stock: string;
onChange: React.Dispatch<React.SetStateAction<ProductFormData>>;
  onSubmit?: () => void;
  isLoading?: boolean;
}

const Stock: React.FC<StockProps> = ({
  stock,
  onChange,
  onSubmit,
  isLoading = false,
}) => {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
          <Layers className="h-4 w-4" />
          Stock
        </h3>

        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">
            AVAILABLE UNITS
          </label>

          <input
            type="number"
            min="0"
            value={stock}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                stock: e.target.value,
              }))
            }
            placeholder="0"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isLoading}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] disabled:opacity-70"
      >
        <Plus className="h-4 w-4 stroke-[3]" />
        <span>{isLoading ? "Publishing..." : "Publish to Store"}</span>
      </button>
    </div>
  );
};

export default Stock;