"use client";

import React from "react";
import { Sliders } from "lucide-react";

interface SpecificationsProps {
  code: string;
  keyFeatures: {
    title: string;
    value: string;
  }[];
  technicalSpecifications: {
    title: string;
    value: string;
  }[];
  onChange: React.Dispatch<
    React.SetStateAction<{
      name: string;
      brand: string;
      description: string;
      mainImage: string;
      images: string[];
      price: string;
      regularPrice: string;
      category: string;
      stock: string;
      code: string;
      keyFeatures: {
        title: string;
        value: string;
      }[];
      technicalSpecifications: {
        title: string;
        value: string;
      }[];
    }>
  >;
}

const Specifications: React.FC<SpecificationsProps> = ({
  code,
  keyFeatures,
  technicalSpecifications,
  onChange,
}) => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <h3 className="mb-8 flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-primary">
        <Sliders className="h-4 w-4" />
        Specifications
      </h3>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">
            MODEL REFERENCE
          </label>

          <input
            type="text"
            value={code}
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                code: e.target.value,
              }))
            }
            placeholder="e.g. MKGP3LL/A"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-black uppercase text-gray-400">
            WARRANTY
          </label>

          <input
            type="text"
            value={
              keyFeatures.find((feature) => feature.title === "Warranty")
                ?.value || ""
            }
            onChange={(e) =>
              onChange((prev) => ({
                ...prev,
                keyFeatures: [
                  {
                    title: "Warranty",
                    value: e.target.value,
                  },
                  ...prev.keyFeatures.filter(
                    (feature) => feature.title !== "Warranty",
                  ),
                ],
              }))
            }
            placeholder="e.g. 1-Year Limited"
            className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="mb-2 block text-xs font-black uppercase text-gray-400">
          TECHNICAL DETAILS
        </label>

        <textarea
          rows={3}
          value={
            technicalSpecifications.find(
              (feature) => feature.title === "Technical Details",
            )?.value || ""
          }
          onChange={(e) =>
            onChange((prev) => ({
              ...prev,
              technicalSpecifications: [
                {
                  title: "Technical Details",
                  value: e.target.value,
                },
                ...prev.technicalSpecifications.filter(
                  (feature) => feature.title !== "Technical Details",
                ),
              ],
            }))
          }
          placeholder="Key specs (CPU, RAM, Storage...)"
          className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
        />
      </div>
    </div>
  );
};

export default Specifications;

