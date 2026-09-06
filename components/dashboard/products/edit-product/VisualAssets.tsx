"use client";

import { ImagePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/products/products";

interface VisualAssetsProps {
  product: Product;
}

const VisualAssets = ({ product }: VisualAssetsProps) => {
  const images =
    product.images?.length > 0
      ? product.images
      : product.mainImage
        ? [product.mainImage]
        : [];

  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ImagePlus size={12} />
          </span>

          <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            Visual Assets
          </h2>
        </div>

        <span className="text-[10px] text-gray-400">
          {images.length}/3
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="group relative h-24 w-24 overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
          >
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-cover"
            />

            <button
              type="button"
              aria-label="Remove product image"
              className="absolute right-1.5 top-1.5 rounded-full bg-white/90 p-1 text-gray-500 opacity-0 shadow-sm transition group-hover:opacity-100 hover:text-red-500"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}

        <button
          type="button"
          className="flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-gray-200 bg-gray-50 text-gray-400 transition hover:border-primary hover:bg-primary/5 hover:text-primary"
        >
          <ImagePlus size={18} />
          <span className="text-[10px]">Add image</span>
        </button>
      </div>
    </section>
  );
};

export default VisualAssets;