"use client"
import { LayoutGrid, List } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";

const ProductsHero = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const view = searchParams.get("view");

  const gridButtonClass =
  view !== "list"
    ? "p-3 rounded-xl transition-all shadow-sm bg-primary text-white"
    : "p-3 rounded-xl transition-all shadow-sm bg-white text-gray-400 border border-gray-100 hover:bg-gray-50";

const listButtonClass =
  view === "list"
    ? "p-3 rounded-xl transition-all shadow-sm bg-primary text-white"
    : "p-3 rounded-xl transition-all shadow-sm bg-white text-gray-400 border border-gray-100 hover:bg-gray-50";

  function productsViewHandler(viewType: "grid" | "list"){
    const params = new URLSearchParams(searchParams);
    if (view === viewType) return;
    params.set("view", viewType);
    router.replace(`?${params.toString()}`);
  }


  return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
              Explore{" "}
              <span className="text-primary">Innovation</span>
            </h1>
            <p className="text-gray-500 mt-2 font-medium">
              Discover the most advanced technology for your daily lifestyle.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => productsViewHandler("grid")} 
              className={gridButtonClass}>
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => productsViewHandler("list")}
              className={listButtonClass}>
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
  );
};

export default ProductsHero;
