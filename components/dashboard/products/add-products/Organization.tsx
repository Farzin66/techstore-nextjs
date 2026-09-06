"use client";

import React from "react";
import { Tag } from "lucide-react";
import { CategoryResponse } from "@/app/services/categoryService";

interface OrganizationProps {
  categories: CategoryResponse[];
  formData: {
    price: string;
    regularPrice: string;
    category: string;
  };
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

const Organization: React.FC<OrganizationProps> = ({
  categories,
  formData,
  onChange,
}) => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
        <Tag className="h-4 w-4 text-primary" />
        Organization
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="special-price"
            className="mb-2 block text-xs font-black uppercase text-gray-400"
          >
            SPECIAL PRICE
          </label>

          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              ৳
            </span>

            <input
              type="number"
              id="special-price"
              value={formData.price}
              onChange={(e) =>
                onChange((prev: any) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
              placeholder="0.0"
              className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="regular-price"
            className="mb-2 block text-xs font-black uppercase text-gray-400"
          >
            REGULAR PRICE
          </label>

          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
              ৳
            </span>

            <input
              type="number"
              id="regular-price"
              value={formData.regularPrice}
              onChange={(e) =>
                onChange((prev: any) => ({
                  ...prev,
                  regularPrice: e.target.value,
                }))
              }
              placeholder="0.0"
              className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <label
          htmlFor="category"
          className="mb-2 block text-xs font-black uppercase text-gray-400"
        >
          CATEGORY SELECTION
        </label>

        <div className="relative">
          <select
            id="category"
            value={formData.category}
            onChange={(e) =>
              onChange((prev: any) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="w-full appearance-none rounded-xl border border-transparent bg-gray-50 py-3 pl-4 pr-10 text-sm font-medium text-[#1E293B] outline-none transition-all focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
          >
            <option value="">Choose category</option>

            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;