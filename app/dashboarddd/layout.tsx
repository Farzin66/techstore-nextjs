import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-custom">
      <DashboardTopbar/>
      <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-8 md:gap-12 bg-gray-50">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
}
