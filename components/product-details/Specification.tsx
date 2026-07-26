import { Product } from "@/types/products/products";
import { ListTodo, Sparkles } from "lucide-react";

interface SpecificationProps {
  product: Product;
}

const Specification = ({ product }: SpecificationProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="space-y-10">
        <h2 className="text-xl font-bold text-slate-800">
          Technical <span className="text-primary italic">Specifications</span>
        </h2>
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
          <div className="w-full">
            <div className="bg-slate-50 border-b border-gray-100 px-5 sm:px-8 py-4">
              <h3 className="font-bold text-slate-700 uppercase tracking-wider italic text-xs sm:text-sm flex items-center gap-2">
                <Sparkles className="w-[14px] h-[14px] text-primary" /> Key
                Features
              </h3>
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              <div className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors">
                <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                  Performance
                </div>
                <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                  High-performance flagship experience
                </div>
              </div>
              <div className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors">
                <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                  Build
                </div>
                <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                  Professional build with durable materials
                </div>
              </div>
              <div className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors">
                <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                  Innovation
                </div>
                <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                  Advanced technology for daily lifestyle
                </div>
              </div>
              <div className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors">
                <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                  Authenticity
                </div>
                <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                  Authentic component verification
                </div>
              </div>
            </div>
            <div className="bg-[#f0fdf4] border-t border-b border-gray-100 px-5 sm:px-8 py-4 mt-6">
              <h3 className="font-bold text-primary uppercase tracking-wider italic text-xs sm:text-sm flex items-center gap-2">
                <ListTodo className="w-[14px] h-[14px] text-primary" />{" "}
                Technical Specifications
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {product.technicalSpecifications.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row hover:bg-gray-50 transition-colors"
                >
                  <div className="px-5 sm:px-8 py-3 sm:py-5 font-bold text-gray-500 text-[10px] sm:text-xs sm:w-1/3 bg-gray-50/40 uppercase tracking-tight sm:tracking-normal">
                    {item.title}
                  </div>
                  <div className="px-5 sm:px-8 py-3 sm:py-5 text-slate-800 font-bold sm:font-medium text-[11px] sm:text-xs border-t border-gray-50 sm:border-0">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specification;
