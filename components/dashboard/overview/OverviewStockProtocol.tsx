import { AlertTriangle, CheckCircle2 } from "lucide-react";

const OverviewStockProtocol = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 w-full max-w-sm">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          Stock Protocol
        </h3>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Inventory integrity
        </p>
      </div>

      {/* Product List */}
      <div className="space-y-6">
        {/* Item 1: Low Stock */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-rose-400" />
              <span className="text-sm font-semibold text-gray-700">Iphone 17 pro max</span>
            </div>
            <span className="rounded-lg bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-500">
              1 UNITS
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[10%] rounded-full bg-rose-500" />
          </div>
        </div>

        {/* Item 2: Optimal Stock */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-semibold text-gray-700">Iphone 17 pro</span>
            </div>
            <span className="rounded-lg bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
              10 UNITS
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[80%] rounded-full bg-emerald-500" />
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <button className="mt-8 w-full rounded-xl border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-colors">
        SYNC CATALOG INTEGRITY
      </button>
    </div>
  );
};

export default OverviewStockProtocol;
