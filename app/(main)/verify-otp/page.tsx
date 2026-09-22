"use client";

import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const VerifyOtpPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Verification failed:", data.message);
        return;
      }

      console.log("Verification successful:", data);
      router.push("/login");
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Resend failed:", data.message);
        return;
      }

      console.log("Resend successful:", data.message);
    } catch (error) {
      console.error("Resend error:", error);
    }
  };

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center bg-[#fafafa] py-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-gray-200/60 p-10 sm:p-12 relative z-10 border border-white/50 text-center">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl mx-auto mb-8 flex items-center justify-center">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
          VERIFY EMAIL
        </h2>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">
          We've sent a 6-digit code to
          <br />
          <span className="text-slate-900 font-bold">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between gap-2 sm:gap-3">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter your 6-digit code"
              required
              maxLength={6}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              value={otp}
              className="w-[80%] max-w-md mx-auto h-14 sm:h-16 text-center text-2xl font-black bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all text-slate-900"
            />
          </div>
          <button
            className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-primary transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-3"
            type="submit"
          >
            Verify Account
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
        <div className="mt-10 pt-8 border-t border-slate-100 italic">
          <p className="text-sm text-slate-400 font-medium mb-4">
            Didn't receive the code?
          </p>
          <button
            type="button"
            onClick={handleResendOtp}
            className="flex items-center justify-center gap-2 mx-auto font-bold text-primary disabled:text-slate-300 transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Resend New Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
