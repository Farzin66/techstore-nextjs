import { Product } from "@/types/products/products";

import Pagination from "./Pagination";
import SortSelect from "../ui/SortSelect";
import ProductCard from "../ui/ProductCard";

interface ProductsGridProps{
  products: Product[];
  view: "list" | "grid";
  currentPage: number;
  totalPages: number
}

const ProductsGrid = ({products, view, currentPage, totalPages}: ProductsGridProps) => {
  const productsGridClassName =
  view === "grid"
    ? "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"
    : "grid grid-cols-1 gap-8";


  return (
  <main className="lg:col-span-3">

    {/* Header */}

    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
      <p className="text-sm font-bold text-gray-500">
        Showing <span className="text-foreground">{products.length}</span> revolutionary devices
      </p>
      <SortSelect/>
    </div>

    {/* Products Grid */}

    <div className={productsGridClassName}>
      {
        products.map((item)=>(
          <ProductCard key={item._id} product={item} view={view}/>
        ))
      }
    </div>

    {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages}/>
  </main>
  );
};

export default ProductsGrid;
