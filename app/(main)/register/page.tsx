import { ArrowRight, Eye, Lock, Mail, User, UserPlus, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main className="min-h-[90vh] w-full flex items-center justify-center bg-[#fafafa] py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 overflow-hidden flex flex-col lg:flex-row-reverse relative z-10 border border-white/50">
        <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative">
          <div className="mb-10">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-8 flex items-center justify-center">
              <UserPlus className="w-[28px] h-[28px]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Create an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600 italic font-serif">
                Account
              </span>
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Join Tech Store today to start shopping for the best tech products
              and manage your orders.
            </p>
          </div>
          <form action="" className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 block">
                FULL NAME
              </label>
              <div className="relative group">
                <User className="w-[20px] h-[20px] absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  required
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 block">
                EMAIL ADDRESS
              </label>
              <div className="relative group">
                <Mail className="w-[20px] h-[20px] absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  required
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 block">
                PASSWORD
              </label>
              <div className="relative group">
                <Lock className="w-[20px] h-[20px] absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  required
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors cursor-pointer"
                >
                  <Eye className="w-[20px] h-[20px]" />
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-primary transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-3 mt-6 cursor-pointer"
            >
              Register Now
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
          </form>
          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500 font-medium">
              Already have an account ?{" "}
              <Link
                className="font-bold text-primary hover:text-primary-dark transition-colors inline-block group border-b border-primary/30 pb-0.5"
                href="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative hidden lg:block bg-slate-950 p-3">
          <div className="relative w-full h-full rounded-[30px] overflow-hidden">
            <Image
              alt="Join the Elite"
              src="/register.webp"
              fill
              sizes="50vw"
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay"></div>
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl">
                    <div className="w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center mb-6">
                        <Zap className="w-[24px] h-[24px] animate-pulse"/>
                    </div>
                    <h3 className="text-2xl text-white font-black tracking-tight mb-3">0 Setup. 100% Performance.</h3>
                    <p className="text-white/70 font-medium leading-relaxed">Join over 12,000 top-tier professionals who have upgraded their workflow through our curated hardware collection.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
