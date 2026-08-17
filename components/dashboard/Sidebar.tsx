"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  UserCircle,
  LogOut,
} from "lucide-react";
import Logo from "../layout/Logo";

const Sidebar = () => {
  return (
    <aside className="w-72 rounded-2xl bg-white border border-gray-100 flex flex-col">
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
            href="/dashboarddd">
            <LayoutDashboard size={20} />
            Overview
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors" 
            href="/dashboarddd/orders">
            <ShoppingBag size={20} />
            Orders
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors" 
            href="/dashboarddd/products">
            <Package size={20} />
            Products
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors" 
            href="/dashboarddd/users">
            <Users size={20} />
            Users
          </Link>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-5 border-t border-gray-100 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-base transition-colors">
          <UserCircle size={20} />
          Profile
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 font-medium text-base transition-colors">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
