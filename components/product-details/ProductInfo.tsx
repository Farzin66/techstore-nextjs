import { Product } from "@/types/products/products";
import ProductActions from "./ProductActions";
import { formatPrice } from "@/lib/formatPrice";
import ProductKeyFeatures from "./ProductKeyFeatures";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const productBadges = [
    {
      label: "Price:",
      value: `৳ ${formatPrice(product.price)}`,
    },
    {
      label: "Stock:",
      value: product.stock ? "In Stock" : "Out of Stock",
      valueClassName: product.stock ? "text-primary" : "text-danger",
    },
    {
      label: "Code:",
      value: product.code,
    },
    {
      label: "Brand:",
      value: product.brand,
    },
  ];

  return (
    <div className="lg:col-span-7 flex flex-col space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
        {product.name}
      </h1>

      {/* Badges */}

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {productBadges.map((badge) => (
          <div
            key={badge.label}
            className="bg-gray-100 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-gray-500"
          >
            {badge.label}{" "}
            <span className={badge.valueClassName ?? "text-slate-800"}>
              {badge.value}
            </span>
          </div>
        ))}
      </div>

      {/* Key Features */}

      <ProductKeyFeatures keyFeatures={product.keyFeatures}/>

      {/* Price - Buy Now - Add to Cart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
        <div className="bg-[#f0fdf4] p-5 rounded-lg border-2 border-primary/20 relative group hover:border-primary transition-all">
          <div className="absolute -top-3 right-4 bg-[#6e2594] text-white px-3 py-1 rounded-full text-[10px] font-bold">
            Save: ৳{formatPrice(product.regularPrice - product.price)}
          </div>
          <span className="text-2xl font-bold text-[#ef4444]">
            ৳ {formatPrice(product.price)}
          </span>
          <p className="text-[11px] text-gray-500 font-bold mt-1">
            Special Price
          </p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 opacity-80">
          <span className="text-2xl font-bold text-slate-800">
            ৳{formatPrice(product.regularPrice)}
          </span>
          <p className="text-[11px] text-gray-400 font-bold mt-1">
            Regular Price
          </p>
        </div>
      </div>

      <ProductActions product={product} />

    </div>
  );
};

export default ProductInfo;
