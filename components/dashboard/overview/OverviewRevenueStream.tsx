import { TrendingUp } from "lucide-react";

const OverviewRevenueStream = () => {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-foreground">
            Revenue Stream
          </h3>

          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Real-time acquisition
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-xl border border-gray-100 bg-gray-50 p-1">
            <button
              className="rounded-lg bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-foreground shadow-sm"
            >
              Daily
            </button>

            <button
              className="rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400 transition-colors hover:text-foreground"
            >
              Monthly
            </button>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
            <TrendingUp className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="mt-8 flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-100 bg-gray-50/40">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-300">
          Revenue chart
        </p>
      </div>
    </div>
  );
};

export default OverviewRevenueStream;