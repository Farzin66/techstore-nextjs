"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products/products";

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden group border border-gray-100 p-8">
        <div className="absolute inset-0 p-8">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 41.66vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        {product.images.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-16 h-16 rounded border transition-all flex-shrink-0 ${
              selectedImage === index
                ? "border-primary shadow-sm"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              sizes="64px"
              className="object-cover p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
