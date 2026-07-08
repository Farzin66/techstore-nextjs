import { CircleQuestionMark, MessageCircle } from "lucide-react";

const SupportHero = () => {
  return (
    <section className="bg-primary pt-24 pb-48 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="container-custom text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
          <MessageCircle className="w-[14px] h-[14px] text-primary-light" />
          <span>How can we help you today?</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
          Help <span className="text-primary-light">Center</span>
        </h1>
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-0 bg-white shadow-2xl rounded-3xl blur-xl opacity-0 group-focus-within:opacity-20 transition-opacity"></div>
          <CircleQuestionMark className="w-[22px] h-[22px] absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search help articles (shipping, returns, warranty...)"
            className="w-full pl-16 pr-6 py-5 rounded-3xl text-foreground bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium text-lg relative z-10"
            type="text"
          ></input>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
