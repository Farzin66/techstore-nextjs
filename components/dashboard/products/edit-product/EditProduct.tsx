import { ArrowLeft, Save, X } from "lucide-react";

import VisualAssets from "./VisualAssets";
import CoreDetails from "./CoreDetails";
import Economics from "./Economics";
import Link from "next/link";
import AdvancedSpecs from "./AdvancedSpecs";

const EditProduct = () => {
  return (
    <main className="min-h-screen bg-[#f7f9f8] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-around items-center">
          {/* Back link */}
          <Link
            href="/products"
            className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-gray-900"
          >
            <ArrowLeft size={14} />
            Back to Inventory
          </Link>
          <div className="inline-flex items-center gap-2 px-4 bg-primary/10 backdrop-blur-md rounded-full text-[10px] text-primary uppercase tracking-widest mb-6 border border-primary/20">
            PRODUCT ID: 1111
          </div>
        </div>

        {/* Main card */}
        <form className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_12px_40px_rgba(16,24,40,0.05)]">
          {/* Page heading */}
          <div className="border-b border-gray-100 px-6 py-7 sm:px-10 sm:py-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Edit Product
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Refine your product&apos;s presence and stock availability.
            </p>
          </div>

          <div className="grid gap-10 px-6 py-7 sm:px-10 sm:py-9 lg:grid-cols-2 lg:gap-x-12">
            {/* Left column */}
            <div className="space-y-9">
              {/* Core details */}
              <CoreDetails />
              {/* Visual assets */}
              <VisualAssets />
            </div>

            {/* Right column */}
            <div className="space-y-9">
              {/* Economics */}
              <Economics />

              {/* Advanced specs */}
              <AdvancedSpecs />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 px-6 py-6 sm:flex-row sm:items-center sm:px-10">
            <button
              type="submit"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <Save size={15} />
              Update Product
            </button>

            <button
              type="button"
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

export default EditProduct;
