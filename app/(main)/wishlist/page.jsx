import React from "react";
import Link from "next/link";
import { ArrowLeft} from "lucide-react";
import EmptyWishlist from "@/components/ui/EmptyWishlist";
import WishlistItems from "@/components/WishlistItems.tsx";

const page = () => {
    const isEmpty = true;
  return (
    <main className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="container-custom">
        {/* Wishlist Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all text-gray-500" >
              <ArrowLeft className="w-[20px] h-[20px]" />
            </Link>
            <div>
              <h1 className="text-4xl font-black text-foreground tracking-tight">
                My Wishlist
              </h1>
              <p className="text-gray-500 mt-1 font-medium italic">
                Your personalized collection of tech marvels.
              </p>
            </div>
          </div>
        </div>
        {isEmpty ? <EmptyWishlist/> : <WishlistItems/>}
      </div>
    </main>
  );
};

export default page;
