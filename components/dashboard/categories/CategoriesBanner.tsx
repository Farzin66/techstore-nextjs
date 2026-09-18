import { Package2, RefreshCw } from "lucide-react";

const CategoriesBanner = () => {
  return (
    <div className="relative mb-6 flex flex-col items-start justify-between gap-4 overflow-hidden px-6 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-10">
      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
          <Package2 className="h-3 w-3" />
          MANAGEMENT
        </div>

        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          Category Inventory
        </h1>

        <p className="mt-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          Organize your store structure and monitor product distribution.
        </p>
      </div>

      <button className="flex gap-3 rounded-2xl border border-primary/10 bg-primary/10 p-2 text-sm text-primary">
        <RefreshCw className="h-4 w-4" />
        SYNC LEGACY DATA
      </button>
    </div>
  );
};

export default CategoriesBanner;

