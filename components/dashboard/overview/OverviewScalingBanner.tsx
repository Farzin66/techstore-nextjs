import { ShoppingBag, TrendingUp } from "lucide-react";

interface OverviewScalingProtocolProps {
  totalProducts: number;
}

const OverviewScalingProtocol = ({
  totalProducts,
}: OverviewScalingProtocolProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-900 p-6 text-white shadow-sm sm:p-8">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 text-primary">
        <ShoppingBag className="h-6 w-6" />
      </div>

      <h3 className="mb-4 text-2xl font-black tracking-tight">
        Scaling to New Heights
      </h3>

      <p className="text-sm leading-relaxed text-gray-400">
        Your catalog currently features{" "}
        <span className="font-bold text-white">{totalProducts} products</span>.
        Your store is ready to scale with a growing product catalog.
      </p>

      <div className="absolute right-4 top-2 p-2 opacity-10">
        <TrendingUp width={180} height={180} strokeWidth={2} />
      </div>
    </div>
  );
};

export default OverviewScalingProtocol;
