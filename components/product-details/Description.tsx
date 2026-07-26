import { Product } from "@/types/products/products";
import { ShieldCheck, Truck } from "lucide-react";

interface DescriptionProps {
  product: Product;
}

const Description = ({product}: DescriptionProps) => {
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-8">
          Product{" "}
          <span className="text-primary italic">Description</span>
        </h2>
        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed font-medium">
          <p className="mb-6">{product.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-[#f0fdf4]/50 p-6 rounded-lg border border-primary/10">
            <div className="space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <ShieldCheck className="w-4 h-4"/>
                Key Advantages
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Next-generation architecture integration
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Optimized for extreme durability and power
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-primary flex items-center gap-2">
                <Truck className="w-4 h-4"/> 
                Global Reliability
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Tested against international standards
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Express global deployment channels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description