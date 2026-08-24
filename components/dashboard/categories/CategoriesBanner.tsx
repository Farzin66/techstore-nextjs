import { Package2, RefreshCw } from "lucide-react";

const CategoriesBanner = () => {
  return (
    <div className="relative mb-6 flex items-center justify-between overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
          <Package2 className="w-3 h-3"/>
          MANAGEMENT
        </div>

        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          Category Inventory
        </h1>

        <p className="mt-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          Organize your store structure and monitor product distribution.
        </p> 
      </div>

      <button className="border flex p-2 gap-3 border-primary/10 bg-primary/10 text-primary text-sm rounded-2xl">
        <RefreshCw className="w-4 h-4"/>
        SYNC LEGACY DATA
      </button>
    </div>
  );
};

export default CategoriesBanner;