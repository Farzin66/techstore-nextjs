import { Clock } from "lucide-react";

const OverviewHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 mt-8 gap-6 md:gap-0">
      <div>
        <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
          Dashboard Overview
        </h2>
        <span className="text-gray-400 text-xs mt-1">Welcome back, </span>
        <span className="text-primary italic">User name !</span>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 text-gray-600 rounded-full text-[12px] font-black uppercase tracking-[0.2em] border border-gray-100 shadow-sm whitespace-nowrap">
        <Clock className="w-5 h-5"/>
        <span>Real-time sync active</span>
      </div>
    </div>
  );
};

export default OverviewHeader;
