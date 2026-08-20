import { ShoppingBag } from "lucide-react";

const OverviewScalingProtocol = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-gray-900 p-6 shadow-sm sm:p-8 text-white">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 text-primary">
        <ShoppingBag className="h-6 w-6" />
      </div>

      <h3 className="mb-4 text-2xl font-black tracking-tight">Scaling to New Heights</h3>
      
      <p className="text-sm leading-relaxed text-gray-400">
        Your catalog now features <span className="font-bold text-white">2 premium nodes</span>. 
        Digital transformation metrics indicate strong growth.
      </p>

      <div className="absolute -right-4 -top-4 opacity-10">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 6L13.5 15.5 8.5 10.5 1 18" />
          <path d="M17 6h6v6" />
        </svg>
      </div>
    </div>
  );
};

export default OverviewScalingProtocol;
