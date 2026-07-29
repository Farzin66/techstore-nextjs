import { Product } from "@/types/products/products";
import Link from "next/link";

interface ProductKeyFeaturesProps{
    keyFeatures: Product["keyFeatures"];
}

const ProductKeyFeatures = ({keyFeatures}: ProductKeyFeaturesProps) => {
  return (
      <div className="pt-4">
        <h3 className="text-sm font-bold text-slate-800 mb-4 tracking-wide uppercase border-b-2 border-primary/20 inline-block pb-1">
          Key Features
        </h3>
        <ul className="space-y-3">
          {keyFeatures.map((feature) => (
            <li
              key={feature.title}
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
  )
}

export default ProductKeyFeatures