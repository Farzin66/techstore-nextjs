"use client";

import { useDebounce } from "@/app/hooks/useDebounce";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearch.trim()) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    const query = params.toString();

    const newUrl = query
      ? `/products?${query}`
      : "/products";

    const currentUrl =
      window.location.pathname + window.location.search;

    if (currentUrl !== newUrl) {
      router.replace(newUrl);
    }

  }, [debouncedSearch, searchParams, router]);


  function searchInputChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearch(event.target.value);
  }


  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[2px] text-slate-400 mb-6 flex items-center gap-2">
        <Search className="w-3.5 h-3.5" />
        Search
      </h3>

      <div className="relative group">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />

        <input
          type="text"
          value={search}
          onChange={searchInputChangeHandler}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-transparent rounded-2xl focus:bg-white focus:border-primary transition-all text-sm font-semibold outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBox;