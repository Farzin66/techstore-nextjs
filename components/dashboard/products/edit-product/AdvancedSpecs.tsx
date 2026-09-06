"use client";

import { Tag } from "lucide-react";
import { Product } from "@/types/products/products";

interface AdvancedSpecsProps {
  product: Product;
}

const AdvancedSpecs = ({ product }: AdvancedSpecsProps) => {
  const inputClass =
    "w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

  const labelClass =
    "mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-gray-400";

  const warranty =
    product.keyFeatures?.find(
      (feature) => feature.title === "Warranty",
    )?.value || "";

  const technicalDetails =
    product.technicalSpecifications?.find(
      (feature) => feature.title === "Technical Details",
    )?.value || "";

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Tag size={11} />
        </span>

        <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
          Advanced Specs
        </h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="model" className={labelClass}>
            Model Name / Number
          </label>

          <input
            id="model"
            name="model"
            defaultValue={product.code}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="warranty" className={labelClass}>
            Warranty Period
          </label>

          <input
            id="warranty"
            name="warranty"
            defaultValue={warranty}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="technical-specs" className={labelClass}>
            Technical Specifications
          </label>

          <textarea
            id="technical-specs"
            name="technicalSpecs"
            rows={4}
            defaultValue={technicalDetails}
            placeholder="Key technical specs..."
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
    </section>
  );
};

export default AdvancedSpecs;