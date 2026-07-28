import { Product } from "@/types/products/products";
import { Heart } from "lucide-react";
import Link from "next/link";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {

  return (
    <div className="lg:col-span-7 flex flex-col space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
        {product.name}
      </h1>

      {/* Badges */}

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="bg-gray-100 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-500">
          Price: <span className="text-slate-800">৳ {product.price}</span>
        </div>
        <div className="bg-gray-100 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-500">
          Stock:{" "}
          {product.stock ? (
            <span className="text-primary">In Stock</span>
          ) : (
            <span className="text-danger">Out of Stock</span>
          )}
        </div>
        <div className="bg-gray-100 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-500">
          Code: <span className="text-slate-800">{product.code}</span>
        </div>
        <div className="bg-gray-100 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-500">
          Brand: <span className="text-slate-800">{product.brand}</span>
        </div>
      </div>

      {/* Key Features */}

      <div className="pt-4">
        <h3 className="text-sm font-bold text-slate-800 mb-4 tracking-wide uppercase border-b-2 border-primary/20 inline-block pb-1">
          Key Features
        </h3>
        <ul className="space-y-3">
          {product.keyFeatures.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-xs text-gray-600 font-medium"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
              <span>
                <span className="font-bold text-slate-800 mr-1">
                  {feature.title}
                </span>
                {feature.value}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="#specs"
          className="text-[11px] font-bold text-[#ef4444] hover:underline mt-4 inline-block"
        >
          View More Info
        </Link>
      </div>

      {/* Price - Buy Now - Add to Cart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <div className="bg-[#f0fdf4] p-5 rounded-lg border-2 border-primary/20 relative group hover:border-primary transition-all">
          <div className="absolute -top-3 right-4 bg-[#6e2594] text-white px-3 py-1 rounded-full text-[10px] font-bold">
            Save: ৳{product.regularPrice - product.price}
          </div>
          <span className="text-2xl font-bold text-[#ef4444]">
            ৳ {product.price}
          </span>
          <p className="text-[11px] text-gray-500 font-bold mt-1">
            Special Price
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 opacity-80">
          <span className="text-2xl font-bold text-slate-800">
            ৳{product.regularPrice}
          </span>
          <p className="text-[11px] text-gray-400 font-bold mt-1">
            Regular Price
          </p>
        </div>
      </div>
      <div className="pt-4 sm:pt-8 flex flex-col xl:flex-row items-stretch xl:items-center gap-4 sm:gap-6">
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-12 sm:h-14 w-full xl:w-auto shadow-sm bg-white">
          <button className="w-12 sm:w-16 h-full hover:bg-gray-50 transition-colors text-lg sm:text-xl font-bold border-r border-gray-100 flex items-center justify-center">
            -
          </button>
          <span className="flex-1 xl:flex-none px-4 sm:px-10 font-bold text-slate-800 text-sm sm:text-lg min-w-[50px] sm:min-w-[80px] text-center flex items-center justify-center bg-white">
            1
          </span>
          <button className="w-12 sm:w-16 h-full hover:bg-gray-50 transition-colors text-lg sm:text-xl font-bold border-l border-gray-100 flex items-center justify-center">
            +
          </button>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full">
          <button className="flex-[3] h-12 sm:h-14 bg-primary text-white rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary-dark transition-all shadow-md active:scale-95 uppercase tracking-wider">
            Buy Now
          </button>
          <button className="flex-[3] h-12 sm:h-14 bg-white text-primary border-2 border-primary rounded-lg font-bold text-[11px] sm:text-sm hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 uppercase tracking-wider">
            Add to Cart
          </button>
          <button className="w-12 h-12 sm:w-14 sm:h-14 border-2 rounded-lg flex items-center justify-center transition-all flex-shrink-0 border-gray-200 text-gray-300 hover:text-red-500 hover:border-red-500">
            <Heart className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
