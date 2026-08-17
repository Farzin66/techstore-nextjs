import { Users } from "lucide-react";

const DashboardOverviewCard = () => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
          <Users className="h-6 w-6" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 text-[12px] font-black uppercase tracking-[0.2em] text-violet-600 shadow-sm">
          <span>+12%</span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-gray-400">
          Total Users
        </p>

        <p className="mt-1 text-3xl font-black tracking-tight text-[#1E293B]">
          2
        </p>
      </div>
    </div>
  );
};

export default DashboardOverviewCard;
