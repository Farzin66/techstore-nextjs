"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageButtonBaseClass =
    "w-10 h-10 rounded-xl text-[10px] font-black transition-all cursor-pointer";

  function changePage(page: number) {
    if (page === currentPage) return;
    const params = new URLSearchParams(searchParams);

    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    router.replace(`/products?${params.toString()}`);
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center gap-2 mt-16">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-500 disabled:hover:border-gray-100 transition-all shadow-sm active:scale-95 cursor-pointer"
      >
        Previous
      </button>

      <div className="flex items-center gap-1 mx-4">
        {pages.map((page) => {
          const pageButtonClass =
            page === currentPage
              ? `${pageButtonBaseClass} bg-primary text-white shadow-lg shadow-primary/20 scale-110`
              : `${pageButtonBaseClass} bg-white text-gray-400 border border-gray-100 hover:bg-gray-50`;

          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={pageButtonClass}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-500 disabled:hover:border-gray-100 transition-all shadow-sm active:scale-95 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;