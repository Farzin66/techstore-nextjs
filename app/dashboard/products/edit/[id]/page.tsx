"use client";

import AdvancedSpecs from "@/components/dashboard/products/edit-product/AdvancedSpecs";
import CoreDetails from "@/components/dashboard/products/edit-product/CoreDetails";
import Economics from "@/components/dashboard/products/edit-product/Economics";
import VisualAssets from "@/components/dashboard/products/edit-product/VisualAssets";
import { ArrowLeft, Save, X } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/products/products";

const EditProductPage = () => {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fetch product error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!product) return;

    try {
      setIsSaving(true);

      const formData = new FormData(event.currentTarget);

      const updatedData = {
        name: formData.get("productName") as string,
        brand: formData.get("brand") as string,
        description: formData.get("description") as string,
        code: formData.get("model") as string,
        price: Number(formData.get("specialPrice")),
        regularPrice: Number(formData.get("regularPrice")),
        stock: Number(formData.get("stock")),
        category: formData.get("category") as string,
        keyFeatures: [
          {
            title: "Warranty",
            value: formData.get("warranty") as string,
          },
        ],
        technicalSpecifications: [
          {
            title: "Technical Details",
            value: formData.get("technicalSpecs") as string,
          },
        ],
      };

      const response = await fetch(`/api/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update product");
      }

      setProduct(data);

      router.push("/dashboard/products");
    } catch (error) {
      console.error("Update product error:", error);
      alert("Failed to update product.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
        <p className="text-sm text-gray-500">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9f8]">
        <div className="text-center">
          <p className="mb-4 text-sm text-gray-500">
            Product not found.
          </p>

          <Link
            href="/dashboard/products"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9f8] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard/products"
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            Back to Inventory
          </Link>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] uppercase tracking-widest text-primary">
            PRODUCT ID: {product._id}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.05)]"
        >
          <div className="border-b border-gray-100 px-6 py-7 sm:px-10 sm:py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Edit Product
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Refine your product&apos;s presence and stock availability.
            </p>
          </div>

          <div className="grid gap-10 px-6 py-7 sm:px-10 sm:py-9 lg:grid-cols-2 lg:gap-x-12">
            <div className="space-y-9">
              <CoreDetails product={product} />
              <VisualAssets product={product} />
            </div>

            <div className="space-y-9">
              <Economics product={product} />
              <AdvancedSpecs product={product} />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:px-10">
            <button
              type="submit"
              disabled={isSaving}
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={15} />
              {isSaving ? "Updating..." : "Update Product"}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gray-50 px-8 text-xs font-bold uppercase tracking-[0.12em] text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
              <X size={15} />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditProductPage;