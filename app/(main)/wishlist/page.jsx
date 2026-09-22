"use client"

import Link from "next/link";
import { ArrowLeft, Trash2} from "lucide-react";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import WishlistItems from "@/components/wishlist/WishlistItems";
import useWishlistStore from "@/app/stores/wishlist-store";

const page = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const clearWishlist = useWishlistStore((state)=> state.clearWishlist);
  const isEmpty = wishlist.length === 0;

  return (
    <main className="bg-[#F8FAFC] min-h-screen py-16">
      <div className="container-custom">
        {/* Wishlist Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex items-center gap-4">
            <Link href="/products" className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all text-gray-500" >
              <ArrowLeft className="w-[20px] h-[20px]" />
            </Link>
            <div>
              <h1 className="text-4xl font-black text-foreground tracking-tight">
                Wishlist
              </h1>
              <p className="text-gray-500 mt-1 font-medium italic">
                Your personalized collection of tech marvels.
              </p>
            </div>
          </div>
          {
            !isEmpty && (
              <button 
                onClick={()=>{clearWishlist()}}
                type="button"
                className="flex justify-between gap-2 border p-3 bg-gray-100 border-danger text-danger rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <Trash2/>
                Clear Favorites
              </button>
            )
          }
        </div>
        {isEmpty ? <EmptyWishlist/> : <WishlistItems/>}
      </div>
    </main>
  );
};

export default page;
