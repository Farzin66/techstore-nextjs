import { Sparkles } from "lucide-react";
import React from "react";

const LiveChatCard = () => {
  return (
    <div className="relative overflow-hidden bg-primary p-10 rounded-[40px] text-white shadow-2xl shadow-primary/20 group">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
      <Sparkles className="text-yellow-400 mb-6 w-[32px] h-[32px]" />
      <h3 className="text-2xl font-black tracking-tight mb-4">
        Live Resolution
      </h3>
      <p className="text-white/70 text-sm font-medium leading-relaxed mb-8">
        Our expert engineers are online right now to solve your hardware
        queries.
      </p>
      <button 
        type="button"
        className="w-full py-4 bg-white text-primary rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:-translate-y-1 active:scale-95 transition-all">
        Start Live Chat
      </button>
    </div>
  );
};

export default LiveChatCard;
