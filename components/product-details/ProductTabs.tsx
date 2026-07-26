"use client";
import { FileText, ListTodo, MessageSquare } from "lucide-react";
import { useState } from "react";
import Review from "@/components/product-details/Review";
import Specification from "@/components/product-details/Specification";
import Description from "@/components/product-details/Description";
import { Product } from "@/types/products/products";

interface ProductTabProps {
  product: Product;
}

const ProductTabs = ({product}: ProductTabProps) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-12 overflow-hidden">
      <div className="flex justify-start md:justify-center border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar pt-4">
        <button
          onClick={() => setActiveTab("specification")}
          className="relative py-4 px-6 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 group text-white bg-[#ef4444] rounded-t-lg shadow-md"
        >
          <ListTodo className="w-[14px] h-[14px]" />
          Specification
        </button>
        <button
          onClick={() => setActiveTab("description")}
          className="relative py-4 px-6 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 group text-gray-500 hover:text-primary bg-gray-50/50 rounded-t-lg mx-0.5 border-t border-x border-transparent hover:border-gray-100"
        >
          <FileText className="w-[14px] h-[14px]" />
          Description
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className="relative py-4 px-6 text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 group text-gray-500 hover:text-primary bg-gray-50/50 rounded-t-lg mx-0.5 border-t border-x border-transparent hover:border-gray-100"
        >
          <MessageSquare className="w-[14px] h-[14px]" />
          Reviews
        </button>
      </div>
      {activeTab === "description" && <Description product={product}/>}
      {activeTab === "specification" && <Specification product={product}/>}
      {activeTab === "reviews" && <Review product={product}/>}
    </div>
  );
};

export default ProductTabs;
