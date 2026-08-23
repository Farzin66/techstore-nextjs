import { Settings } from "lucide-react";

const SettingsBanner = () => {
  return (
    <div className="relative mb-6 flex items-center justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          System Configuration
        </div>

        <h1 className="text-2xl font-black tracking-tight text-[#1E293B] sm:text-3xl">
          Site Settings
        </h1>

        <p className="mt-2 max-w-xl text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
          Manage your website's core parameters, customize appearance, 
          and configure system-wide preferences.
        </p>
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-[-10deg] text-gray-100 sm:block">
        <Settings className="h-24 w-24" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default SettingsBanner;