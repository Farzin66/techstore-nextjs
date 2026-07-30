import {PackageSearch, Sparkles } from "lucide-react";
import Link from "next/link";

const EmptyWishlist = () => {
  return (
    <div className='max-w-xl mx-auto py-32 text-center'>
        <div className='w-24 h-24 bg-gray-100 rounded-[30px] flex items-center justify-center text-gray-300 mx-auto mb-8 shadow-inner'>
            <PackageSearch className="w-[40px] h-[40px]"/>
        </div>
        <h2 className="text-3xl font-black mb-4 text-foreground tracking-tight">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-12 font-medium">Browse our collection and save the devices that inspire your future workflow.</p>
        <Link href="/" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-black text-xs uppercase tracking-[3px] rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
            <Sparkles className="w-[18px] h-[18px]"/>
            Explore Store
        </Link>
    </div>
  )
}

export default EmptyWishlist