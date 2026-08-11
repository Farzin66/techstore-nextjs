"use client"
import {
  ArrowRight,
  Eye,
  Lock,
  LogIn,
  Mail,
  Quote,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    try{
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error){
        setError(result.error)
        return;
      }

      router.push("/");
    }catch(error){
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }finally{
      setIsLoading(false);
    }
}
  return (
    <main className="min-h-[70vh]">
      <div className="min-h-[90vh] w-full flex items-center justify-center bg-[#fafafa] py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        <div className="w-full max-w-6xl bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 overflow-hidden flex flex-col lg:flex-row relative z-10 border border-white/50">
          <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-20 flex flex-col justify-center relative">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-8 flex items-center justify-center">
                <LogIn className="w-[28px] h-[28px]" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                Welcome{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 italic font-serif">
                  Back
                </span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Sign in to your account to track orders, save favorites, and
                discover the latest tech.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 block">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="w-[20px] h-[20px] absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300 placeholder:font-medium"
                    placeholder="you@example.com"
                    type="email"
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1 mb-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary-dark transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <Lock className="w-[20px] h-[20px] absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-14 pr-14 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                    placeholder="••••••••"
                    type="password"
                  ></input>
                  {error && (
                    <p className="text-sm text-red-500 font-bold">
                      {error}
                    </p>
                  )}
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
                disabled={isLoading}
                className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-primary transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-3 mt-4 cursor-pointer"
              >
                {isLoading ? "Signing In..." : "Sign In"}
                <ArrowRight className="w-[18px] h-[18px]" />
              </button>
            </form>
            <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
              <p className="text-sm text-slate-500 font-medium">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-bold text-primary hover:text-primary-dark transition-colors inline-block group border-b border-primary/30 pb-0.5"
                >
                  Create an account
                </Link>
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                <ShieldCheck className="w-[14px] h-[14px]" />
                <span>Secure</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative hidden lg:block bg-slate-950 p-3">
            <div className="relative w-full h-full rounded-[30px] overflow-hidden">
              <Image
                src="/login.webp"
                alt="Tech Store Premium Setup"
                fill
                sizes="50vw"
                priority
                className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl">
                  <Quote className="text-primary/60 mb-4" />
                  <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                    "The ecosystem provided by Tech Store completely transformed
                    how our studio approaches hardware deployment."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 relative overflow-hidden">
                      <Image
                        src="/login-quote.webp"
                        alt="Sarah J."
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-black">Albert Jenkins</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                        Lead Architect, Nexus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default page;
