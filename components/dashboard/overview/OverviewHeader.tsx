"use client";

import { Clock } from "lucide-react";
import { useSession } from "next-auth/react";

const OverviewHeader = () => {
  const { data: session } = useSession();

  const userName =
    session?.user?.name || session?.user?.email?.split("@")[0] || "User";

  return (
    <div className="mt-8 mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center md:gap-0">
      <div>
        <h2 className="text-2xl font-bold tracking-wide text-[#1E293B] uppercase">
          Dashboard Overview
        </h2>

        <div className="mt-1">
          <span className="text-xs text-gray-400">Welcome back, </span>
          <span className="text-primary italic">{userName}!</span>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 px-4 py-1.5 text-[12px] font-black tracking-[0.2em] whitespace-nowrap text-gray-600 shadow-sm uppercase">
        <Clock className="h-5 w-5" />
        <span>Real-time sync active</span>
      </div>
    </div>
  );
};

export default OverviewHeader;