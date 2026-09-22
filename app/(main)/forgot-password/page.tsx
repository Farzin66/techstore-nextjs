import { ArrowRight, ArrowLeft, CircleQuestionMark, Mail } from "lucide-react";
import Link from "next/link"

const page = () => {
  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center bg-[#fafafa] py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 p-10 sm:p-12 relative z-10 border border-white/50 text-center">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl mx-auto mb-8 flex items-center justify-center">
          <CircleQuestionMark className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
          Forgot Password ?
        </h2>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed italic">
          No worries. Enter your email and we'll send you a 6-digit code to
          reset your password.
        </p>
        <form className="space-y-6">
          <div className="space-y-2 text-left">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 block">
              Email Address
            </label>
            <div className="relative group">
                <Mail className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"/>
                <input required className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300 placeholder:font-medium" placeholder="you@example.com" type="email"></input>
            </div>
          </div>
          <button
            className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-primary transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-3"
            type="submit"
          >
            Send Reset Code
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
        <div className="mt-10 pt-8 border-t border-slate-100 italic">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 mx-auto font-bold text-slate-400 hover:text-primary transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                Back to Sign In
            </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
