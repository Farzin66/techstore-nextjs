"use client";

import { Tag } from "lucide-react";
import { Product } from "@/types/products/products";

interface CoreDetailsProps {
  product: Product;
}

const CoreDetails = ({ product }: CoreDetailsProps) => {
  const labelClass =
    "mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400";

  const inputClass =
    "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Tag size={11} />
        </span>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
          Core Details
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="product-name" className={labelClass}>
            Product Name
          </label>

          <input
            id="product-name"
            name="productName"
            defaultValue={product.name}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="brand" className={labelClass}>
            Brand / Manufacturer
          </label>

          <input
            id="brand"
            name="brand"
            defaultValue={product.brand}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Contextual Description
          </label>

          <textarea
            id="description"
            name="description"
            rows={5}
            defaultValue={product.description}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreDetails;