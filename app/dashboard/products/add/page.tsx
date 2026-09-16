"use client";

import AddProductBanner from "@/components/dashboard/products/add-products/AddProductBanner";
import MediaAssets from "@/components/dashboard/products/add-products/MediaAssets";
import Organization from "@/components/dashboard/products/add-products/Organization";
import Specifications from "@/components/dashboard/products/add-products/Specifications";
import Stock from "@/components/dashboard/products/add-products/Stock";
import ProductInfo from "@/components/dashboard/products/add-products/ProductInfo";
import { getCategories, CategoryResponse } from "@/app/services/categoryService";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ProductFormData } from "@/types/dashboard/productForm";

const AddProductPage = () => {
  const router = useRouter();

  const [categories, setCategories] = useState<CategoryResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    brand: "",
    description: "",
    mainImage: "",
    images: [],
    price: "",
    regularPrice: "",
    category: "",
    stock: "",
    code: "",
    keyFeatures: [],
    technicalSpecifications: [],
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          regularPrice: Number(formData.regularPrice),
          stock: Number(formData.stock),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create product");
      }



      router.push("/dashboard/products");
    } catch (error) {
      console.error("Publish product error:", error);
      alert("Failed to publish product.");
    } finally {
      setIsLoading(false);
    }
  };

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

          <Specifications
            code={formData.code}
            keyFeatures={formData.keyFeatures}
            technicalSpecifications={formData.technicalSpecifications}
            onChange={setFormData}
          />
        </div>

        <div className="space-y-6 lg:col-span-1">
          <Organization
            categories={categories}
            formData={formData}
            onChange={setFormData}
          />

          <Stock
            stock={formData.stock}
            onChange={setFormData}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;