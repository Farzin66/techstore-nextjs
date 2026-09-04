"use client";

import AddProductBanner from "@/components/dashboard/products/add-products/AddProductBanner";
import MediaAssets from "@/components/dashboard/products/add-products/MediaAssets";
import Organization from "@/components/dashboard/products/add-products/Organization";
import Specifications from "@/components/dashboard/products/add-products/Specifications";
import Stock from "@/components/dashboard/products/add-products/Stock";
import ProductInfo from "@/components/dashboard/products/add-products/ProductInfo";
import { useState } from "react";

const AddProductPage = () => {
 const [formData, setFormData] = useState<{
  name: string;
  brand: string;
  description: string;
  mainImage: string;
  images: string[];
}>({
  name: "",
  brand: "",
  description: "",
  mainImage: "",
  images: [],
});

  return (
    <div className="mb-10 space-y-6">
      <AddProductBanner />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <ProductInfo
            name={formData.name}
            brand={formData.brand}
            description={formData.description}
            onChange={setFormData}
          />

      <MediaAssets
  images={formData.images}
  onChange={(images) =>
    setFormData((prev) => ({
      ...prev,
      images,
      mainImage: images[0] || "",
    }))
  }
/>
          <Specifications />
        </div>

        <div className="space-y-6 lg:col-span-1">
          <Organization />
          <Stock />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
