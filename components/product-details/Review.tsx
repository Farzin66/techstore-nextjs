import { Product } from "@/types/products/products";
import { MessageSquare, Star } from "lucide-react";
import Link from "next/link";

interface ReviewProps {
  product: Product;
}

const reviewArray = [5,4,3,2,1];
const stars = [1,2,3,4,5];

const Review = ({product}: ReviewProps) => {
  
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 space-y-10">
          <div className="bg-zinc-50/50 p-8 rounded-3xl border border-white shadow-xl shadow-gray-100/20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-5xl font-black text-foreground tracking-tighter mb-1">{product.avgRating.toFixed(1)}</h2>
                <p className="text-[9px] font-black uppercase tracking-widest text-gray-400">Global Rating</p>
              </div>
              <div className="text-right">
                <div className="flex mb-1 justify-end">
                  {
                    stars.map((star)=>(
                      <Star 
                        key={star}
                        className={star <= product.avgRating ? "w-[14px] h-[14px] fill-yellow-400 text-yellow-400" : "w-[14px] h-[14px] fill-none text-gray-400"}  />
                    ))
                  }
                </div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{product.avgRating > 0 ? 1 : 0} Verifications</p>
              </div>
            </div>
            <div className="space-y-3">
              {
                reviewArray.map((item)=>{
                  const isActive = product.avgRating === item;
                  return <div key={item} className="flex items-center gap-4 group">
                    <span className="text-[9px] font-black text-gray-400 w-3">{item}</span>
                    <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden border border-gray-100/50 relative">
                      <div className={`h-full bg-primary relative z-10 ${isActive ? "w-full" : "w-0"} `}></div>
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 w-6 group-hover:text-primary transition-colors">{isActive ? "100%" : "0%"}</span>
                  </div>
                })
              }
              <div className="relative p-8 bg-white rounded-3xl border border-zinc-100 shadow-2xl shadow-gray-100/40">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <MessageSquare className="w-[18px] h-[18px]"/>
                  </div>
                  <h3 className="text-lg font-black text-foreground tracking-tight">Post Analysis</h3>
                </div>
                <div className="py-8 text-center bg-zinc-50/50 rounded-2xl border border-dashed border-zinc-200">
                  <p className="text-[10px] text-gray-400 mb-6 font-bold uppercase tracking-tight">Identity Verification Required</p>
                  <Link 
                    href="/login"
                    className="inline-block px-8 py-3 bg-zinc-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95">Initiate Sign In</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="lg:col-span-7">
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100/60">
                  <h3 className="text-xl font-black text-foreground tracking-tight">Verified Transmissions</h3>
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">0 Entries</span>
                </div>
                <div className="py-32 text-center bg-zinc-50/50 rounded-3xl border-2 border-dashed border-white">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-zinc-50">
                    <MessageSquare className="w-6 h-6 text-gray-200"/>
                  </div>
                  <p className="text-gray-300 font-black uppercase tracking-widest text-[9px]">Be the first to synthesize feedback.</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Review