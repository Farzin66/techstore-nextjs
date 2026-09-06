"use client";

import { ChevronDown, Tag } from "lucide-react";
import { Product } from "@/types/products/products";

interface EconomicsProps {
  product: Product;
}

const Economics = ({ product }: EconomicsProps) => {
  const inputClass =
    "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

  const labelClass =
    "mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400";

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Tag size={11} />
        </span>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
          Economics & Classification
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="special-price" className={labelClass}>
            Special Price
          </label>

          <input
            id="special-price"
            name="specialPrice"
            defaultValue={product.price}
            type="number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="regular-price" className={labelClass}>
            Regular Price
          </label>

          <input
            id="regular-price"
            name="regularPrice"
            defaultValue={product.regularPrice}
            type="number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="stock" className={labelClass}>
            Stock
          </label>

          <input
            id="stock"
            name="stock"
            defaultValue={product.stock}
            type="number"
            className={`${inputClass} font-semibold text-primary`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="category" className={labelClass}>
          Inventory Classification
        </label>

        <div className="relative">
          <select
            id="category"
            name="category"
            defaultValue={product.category._id}
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value={product.category._id}>
              {product.category.name}
            </option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Economics;