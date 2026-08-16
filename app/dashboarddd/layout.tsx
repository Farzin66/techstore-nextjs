import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-custom">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
