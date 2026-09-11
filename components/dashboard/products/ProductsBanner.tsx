import Link from "next/link";

const ProductsBanner = () => {
  return (
    <div className="relative mb-6 flex items-center justify-between overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="relative z-10">
        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          Product Inventory
        </h1>

        <p className="mt-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          Manage your catalog, stock levels, and product visibility.
        </p>
      </div>

      <Link
        href="/dashboard/products/add"
        className="w-full rounded-2xl bg-primary px-8 py-4 text-center text-sm font-black text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-2xl active:translate-y-0 sm:w-auto"
      >
        + ADD NEW PRODUCT
      </Link>
    </div>
  );
};

export default ProductsBanner;