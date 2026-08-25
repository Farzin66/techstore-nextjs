import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const AddProductBanner = () => {
  return (
    <div className="relative mb-6 flex items-center justify-between overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="relative z-10">
        <Link href="../dashboarddd/products" className="mt-2 flex items-center gap-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          <ArrowLeft className="h-3 w-4"/>
          BACK TO INVENTORY
        </Link>

        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          Add Product
        </h1>
      </div>

      <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0">
        + PUBLISH PRODUCT
      </button>
    </div>
  );
};

export default AddProductBanner;
