"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SortSelect = () => {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "newest";
  const router = useRouter();

  function sortSelectChangeHandler(
    event: React.ChangeEvent<HTMLSelectElement>,
  ) {
    const sortValue = event.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("sort", sortValue);
    router.replace(`/products?${params.toString()}`);
  }

  return (
    <select
      onChange={sortSelectChangeHandler}
      value={sort}
      className="bg-transparent border-none focus:ring-0 text-sm font-black text-foreground cursor-pointer"
    >
      <option value="newest">Newest Arrivals</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  );
};

export default SortSelect;
