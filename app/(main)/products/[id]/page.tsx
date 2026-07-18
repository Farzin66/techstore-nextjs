import { getProductById } from "@/app/services/productService";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

  interface ParamsID{
    params: Promise<{
      id: string;
    }>;
  }

const page = async ({params}:ParamsID) => {

  const {id} = await params;
  console.log("ID:", id);
  const goalProduct = await getProductById(id)

  return (
    <div className="bg-[#F2F4F8] min-h-screen pb-20">
      <div className="container-custom py-6">
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap py-3 no-scrollbar border-b border-gray-100 sm:border-0 px-2 sm:px-0">
          <Link href="/" className="hover:text-primary transition-colors flex-shrink-0">Home</Link>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <Link href="/" className="hover:text-primary transition-colors flex-shrink-0">Products</Link>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <span className="text-gray-400 flex-shrink-0">Audio</span>
          <ChevronRight className="w-[10px] h-[10px] flex-shrink-0"/>
          <span className="font-bold text-slate-800 truncate">Mac Studio M4 Max</span>
        </div>
      </div>
    </div>
  )
}

export default page