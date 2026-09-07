"use client";

import { Camera, LayoutGrid, Pencil, Smartphone, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Category {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  parent: string | null;
  productCount: number;
}

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Smartphone,
  LayoutGrid,
};

const SystemCategoriesSection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Fetch categories error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/categories?id=${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete category");
      }

      setCategories((prev) =>
        prev.filter((category) => category._id !== id),
      );

      alert("Category deleted successfully!");
    } catch (error) {
      console.error("Delete category error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete category.",
      );
    }
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <div className="rounded-xl bg-primary/10 p-3">
          <LayoutGrid className="text-primary" size={20} />
        </div>

        <h2 className="text-xl font-bold text-gray-800">
          System Categories
        </h2>
      </div>

      <p className="mb-6 text-sm text-gray-400">
        {categories.length} TOTAL ENTRIES
      </p>

      {isLoading ? (
        <p className="py-6 text-center text-sm text-gray-400">
          Loading categories...
        </p>
      ) : categories.length === 0 ? (
        <p className="py-6 text-center text-sm text-gray-400">
          No categories found.
        </p>
      ) : (
        <div className="space-y-4">
          {categories.map((item) => {
            const Icon = iconMap[item.icon] || LayoutGrid;

            return (
              <div
                key={item._id}
                className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>

                  <div>
                    <p className="font-semibold capitalize text-gray-800">
                      {item.name}
                    </p>

                    <p className="text-xs font-medium text-primary">
                      {item.productCount} PRODUCTS
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed opacity-40"
                    aria-label="Edit category"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(item._id)}
                    className="transition-colors hover:text-red-500"
                    aria-label="Delete category"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SystemCategoriesSection;
