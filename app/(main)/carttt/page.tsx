import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import { Zap } from "lucide-react";

const page = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16">
      <div className="container-custom">
        <div className="flex flex-col gap-10">
          <div className="flex items-end justify-between mb-6">
             {/* Header */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                Your{" "} 
                <span className="text-primary">Cart</span>
              </h1>
              <span className="text-gray-400">Review your selected items and proceed to checkout.</span>
            </div>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-violet-100 shadow-sm">
                <Zap className="text-primary w-4 h-4"/>
                <span>Fast Checkout Available</span>
              </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">
            <div>
              <CartItemCard/>
            </div>
            {/* Cart Summary */}
            <aside>
              <CartSummary/>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
