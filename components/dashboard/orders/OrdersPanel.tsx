import {
  Filter,
  Circle,
  Copy,
  Calendar,
  Eye,
  ChevronsDown,
  X,
} from 'lucide-react';

const OrderRow = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white px-6 py-3 shadow-sm hover:bg-gray-50">
      <div className="flex w-1/4 items-center gap-2">
        <Copy size={14} strokeWidth={1.5} className="text-gray-400" />
        <div>
          <div className="font-medium text-gray-700">#6F7C66E8</div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={12} strokeWidth={1.5} />
            Jun 15, 2026
          </div>
        </div>
      </div>

      <div className="w-1/4 text-sm font-medium flex gap-2 items-center text-gray-700">
        <div className="flex h-12 w-12 mb-2 items-center justify-center rounded-[1rem] border border-blue-100 bg-blue-100 text-blue-600 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
            <X/>
        </div>
        <p>X, X </p>
      </div>

      <div className="w-1/4">
        <div className="font-bold text-gray-800">₺1,010</div>
        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
          <Circle size={10} fill="currentColor" strokeWidth={0} />
          COD + PENDING
        </div>
      </div>

      <div className="flex w-1/4 items-center justify-end gap-3">
        <span className="inline-flex items-center gap-1 rounded-lg bg-danger/10 px-3 py-1 text-xs font-bold capitalize text-danger">
          <ChevronsDown size={12} strokeWidth={1.5} />
          AWATING REVIEW
        </span>
        <Eye size={16} strokeWidth={1.5} className="text-gray-400" />
      </div>
    </div>
  );
};

const OrderManagementSection = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Filter size={16} strokeWidth={1.5} className="text-gray-500" />
            All Statuses
            <ChevronsDown size={14} strokeWidth={1.5} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Active Filters:</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">Broad Search</span>
          </div>
        </div>

        <div className="text-sm font-medium text-gray-500">1 RESULTS FOUND</div>

        <div className="mt-4 space-y-2">
          <OrderRow />
        </div>
      </div>
    </div>
  );
};

export default OrderManagementSection;
