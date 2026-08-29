import DashboardTopbar from "@/components/dashboard/DashboardTopbar";
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-custom">
      <DashboardTopbar/>
      <div className="grid p-6 rounded-lg grid-cols-1 lg:grid-cols-[288px_1fr] gap-8 md:gap-12 bg-gray-50">
        <DashboardSidebar />
        <main className="mr-10">{children}</main>
      </div>
    </div>
  );
}
