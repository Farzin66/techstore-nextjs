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
    <aside className="w-64 boarder rounded-2xl bg-white border-gray-100 flex flex-col">
      {/* Brand */}
      <div className="h-20 px-6 flex items-center border-b border-gray-100">
        <Logo />
        <p className="text-xs text-gray-400 mt-2 ml-1">Dashboard</p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4">
        <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Menu
        </p>

        <div className="space-y-1">
          <Link
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors" 
            href="/dashboarddd">
            <LayoutDashboard size={18} />
            Overview
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors" 
            href="/dashboarddd/orders">
            <ShoppingBag size={18} />
            Orders
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors" 
            href="/dashboarddd/products">
            <Package size={18} />
            Products
          </Link>

          <Link
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors" 
            href="/dashboarddd/users">
            <Users size={18} />
            Users
          </Link>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-100 space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 font-medium text-sm transition-colors">
          <UserCircle size={18} />
          Profile
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 font-medium text-sm transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
