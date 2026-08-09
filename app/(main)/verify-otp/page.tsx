"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const VerifyOtpPage = () => {
  const searchParams = useSearchParams();
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
    } catch (error) {
      console.error("Verification error:", error);
    }
  };

  return (
    <main>
      <h1>Verify your email</h1>

      <p>Code sent to: {email}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your 6-digit code"
          maxLength={6}
          required
        />

        <button type="submit">
          Verify
        </button>
      </form>
    </main>
  );
};

export default VerifyOtpPage;