import { LayoutGrid, List } from "lucide-react"

const ProductsHero = () => {
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
            <button className="p-3 rounded-xl transition-all shadow-sm bg-primary text-white">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-xl transition-all shadow-sm bg-white text-gray-400 border border-gray-100">
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
  );
};

export default ProductsHero;
