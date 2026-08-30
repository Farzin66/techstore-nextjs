"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  LogOut,
  CreditCard,
  Tags,
  Settings,
} from "lucide-react";
import Logo from "../layout/Logo";

const DashboardSidebar = () => {
  const { data: session } = useSession();

  const role = session?.user?.role;

  return (
    <aside className="w-72 rounded-2xl bg-white mb-10 border border-gray-100 flex flex-col">
      {/* Brand */}
      <div className="h-24 px-6 flex flex-col justify-center border-b border-gray-100">
        <Logo />
        <p className="text-xs text-gray-400 mt-2 ml-1">Dashboard</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-5">
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Menu
        </p>

        <div className="space-y-1">
          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
            href="/dashboard"
          >
            <LayoutDashboard size={20} />
            Overview
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
            href="/dashboard/orders"
          >
            <ShoppingBag size={20} />
            Orders
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
            href="/dashboard/payments"
          >
            <CreditCard size={20} />
            Payments
          </Link>

          {role === "admin" && (
            <>
              <Link
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
                href="/dashboard/products"
              >
                <Package size={20} />
                Products
              </Link>

              <Link
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
                href="/dashboard/categories"
              >
                <Tags size={20} />
                Categories
              </Link>

              <Link
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
                href="/dashboard/users"
              >
                <Users size={20} />
                Users
              </Link>
            </>
          )}

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors"
            href="/dashboard/settings"
          >
            <Settings size={20} />
            Settings
          </Link>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-5 border-t border-gray-100 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 font-medium text-base transition-colors">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;