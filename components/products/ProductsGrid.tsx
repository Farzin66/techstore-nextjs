import { Product } from "@/types/products/products";
import ProductCard from "../ProductCard";

interface ProductsGridProps{
  products: Product[];
}

const ProductsGrid = ({products}: ProductsGridProps) => {
  return (
  <main className="lg:col-span-3">

    {/* Header */}

    <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
      <p className="text-sm font-bold text-gray-500">
        Showing <span className="text-foreground">15</span> revolutionary devices
      </p>
      <select className="bg-transparent border-none focus:ring-0 text-sm font-black text-foreground cursor-pointer">
        <option value="newest">Newest Arrivals</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>

    {/* Products Grid */}

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
      {
        products.map((item)=>(
          <ProductCard key={item._id} product={item}/>
        ))
      }
    </div>

    {/* Pagination */}
    
    <div className="flex items-center justify-center gap-2 mt-16">
      <button className="px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-500 disabled:hover:border-gray-100 transition-all shadow-sm active:scale-95 cursor-pointer">Previous</button>
      <div className="flex items-center gap-1 mx-4">
        <button className="w-10 h-10 rounded-xl text-[10px] font-black transition-all cursor-pointer bg-primary text-white shadow-lg shadow-primary/20 scale-110">1</button>
        <button className="w-10 h-10 rounded-xl text-[10px] font-black transition-all cursor-pointer bg-white text-gray-400 border border-gray-100 hover:bg-gray-50">2</button>
      </div>
      <button className="px-6 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-primary hover:border-primary disabled:opacity-30 disabled:hover:text-gray-500 disabled:hover:border-gray-100 transition-all shadow-sm active:scale-95 cursor-pointer">Next</button>
    </div>
  </main>
  );
};

export default ProductsGrid;
