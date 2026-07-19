"use client";

import { SlidersHorizontal, TrendingUp, Sparkles, Zap } from "lucide-react";
import { categories } from "@/data/categories";
import SearchBox from "../SearchBox";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";

const FilterSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const debouncedMinPrice = useDebounce(minPrice, 500);
  const debouncedMaxPrice = useDebounce(maxPrice, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    
    if (debouncedMinPrice.trim()) {
      params.set("minPrice", debouncedMinPrice);
    } else {
      params.delete("minPrice");
    }

    if (debouncedMaxPrice.trim()) {
      params.set("maxPrice", debouncedMaxPrice);
    } else {
      params.delete("maxPrice");
    }

    const query = params.toString();

    const newUrl = query ? `/products?${query}` : "/products";

    const currentUrl = window.location.pathname + window.location.search;

    if (currentUrl !== newUrl) {
      router.replace(newUrl);
    }
  }, [debouncedMinPrice, debouncedMaxPrice, router, searchParams]);

  function categoryClickHandler(slug: string) {
    const params = new URLSearchParams(searchParams);
    if (currentCategory === slug) {
    params.delete("category");
  } else {
    params.set("category", slug);
  }
    params.delete("page");
    router.replace(`/products?${params.toString()}`);
  }

  function resetPriceLimitHandler(){
    const params = new URLSearchParams(searchParams);
    setMinPrice("");
    setMaxPrice("");
    params.delete("minPrice");
    params.delete("maxPrice");
    const query = params.toString();
    router.replace(query ? `/products?${query}` : "/products");
    
  }

  return (
    <aside className="lg:col-span-1 space-y-8">
      <div className="bg-white rounded-[32px] border border-gray-100/50 shadow-sm p-8 space-y-10">
        <SearchBox />
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Shop by Category
          </h3>
          <div className="flex flex-col gap-1.5 relative">
            {categories.map(({ id, name, slug }) => {
              const isActive = currentCategory === slug;

              return (
                <div key={id} className="relative group/parent">
                  <button
                    onClick={() => categoryClickHandler(slug)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all group 
                      ${isActive ? "bg-primary/5 text-primary" : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all  group-hover:bg-gray-300
                         ${isActive ? "bg-primary scale-125" : "bg-transparent"}`}
                      ></div>
                      <span>{name}</span>
                    </div>
                    {isActive && (
                      <Zap className="w-3 h-3 fill-primary text-primary" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            Price Range
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                Min (৳)
              </label>
              <input
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="0"
                className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary transition-all text-sm font-bold outline-none"
                type="number"
              ></input>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">
                Max (৳)
              </label>
              <input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="50k+"
                className="w-full px-4 py-3 bg-gray-50/50 border border-transparent rounded-xl focus:bg-white focus:border-primary transition-all text-sm font-bold outline-none"
                type="number"
              ></input>
            </div>
          </div>
          {
            (minPrice || maxPrice) && (
              <button 
              onClick={resetPriceLimitHandler}
              className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">Reset Price</button>
            )
          }
        </div>
      </div>
      <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <Sparkles className="w-6 h-6 text-yellow-400 mb-4" />
        <h4 className="text-lg font-black tracking-tight mb-2 uppercase">
          Member Rewards
        </h4>
        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6">
          Join our loyalty program and save up to 15%.
        </p>
        <button className="w-full py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:bg-primary hover:text-white transition-all shadow-lg active:scale-95">
          Enroll Now
        </button>
      </div>
    </aside>
  );
};

export default FilterSidebar;
