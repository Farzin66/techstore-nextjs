"use client";

import { Search, Eye, Edit2, Trash2 , ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "@/types/products/products";
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";

const ProductsManagementPanel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.set("search", search);
      }

      if (selectedCategory) {
        params.set("category", selectedCategory);
      }

      params.set("limit", "100");

      const response = await fetch(`/api/products?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts(data.products);
      setTotalProducts(data.totalProducts);
    };

    fetchProducts();
  }, [search, selectedCategory]);

  const categories = Array.from(
    new Map(
      products.map((product) => [product.category._id, product.category]),
    ).values(),
  );

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete product");
      }

      setProducts((prev) => prev.filter((product) => product._id !== id));
      setTotalProducts((prev) => prev - 1);
    } catch (error) {
      console.error("Delete product error:", error);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="min-h-[500px] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search catalog..."
            className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none rounded-xl border border-gray-100 bg-white py-2.5 pl-4 pr-10 text-[10px] font-black uppercase tracking-wider text-gray-500 outline-none transition-all hover:bg-gray-50 focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
            >
              <option value="">ALL CATEGORIES</option>

              {categories.map((category) => (
                <option key={category._id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          </div>

          <span className="ml-2 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
            {totalProducts} Items
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Product Info
              </th>

              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Category
              </th>

              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Value
              </th>

              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Stock
              </th>

              <th className="px-5 py-4 text-right text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {products.map((product) => {
              const stockPercentage = Math.min(product.stock * 10, 100);

              return (
                <tr
                  key={product._id}
                  className="group transition-colors hover:bg-gray-50/50"
                >
                  <td className="px-5 py-5 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-[#1E293B]">
                          {product.name}
                        </p>

                        <p className="text-[10px] font-medium text-gray-400">
                          {product.code}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 sm:px-6">
                    <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                      {product.category.name}
                    </span>
                  </td>

                  <td className="px-5 py-5 text-sm font-black text-gray-900 sm:px-6">
                    {formatPrice(product.price)}
                  </td>

                  <td className="px-5 py-5 sm:px-6">
                    <div className="w-20">
                      <div className="mb-1 flex justify-between text-[10px] font-bold">
                        <span className="text-gray-500">{product.stock}</span>
                      </div>

                      <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full bg-orange-500"
                          style={{
                            width: `${stockPercentage}%`,
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-5 text-right sm:px-6">
                    <div className="flex items-center justify-end gap-3 text-gray-400">

                      <button
                        onClick={() =>
                          router.push(`/dashboard/products/edit/${product._id}`)
                        }
                        className="hover:text-primary"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManagementPanel;
