"use client";
import Link from "next/link";
import NavItem from "./NavItem";
import {
  Home,
  LayoutGrid,
  Zap,
  LifeBuoy,
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import Logo from "./Logo";
import useWishlistStore from "@/app/stores/wishlist-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// Nav icon styles
const navIconClass =
  "w-4 h-4 text-gray-400 group-hover:text-primary transition-colors";
// Action button styles
const actionButtonClass =
  "p-2 sm:p-2.5 hover:bg-gray-50 rounded-2xl transition-colors relative text-gray-500 group";
// Search container styles
const searchContainerClass =
  "hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/10 transition-all";
// Sign in button styles
const signInButtonClass =
  "flex items-center gap-2 pl-2 pr-2 sm:pr-6 py-1.5 sm:py-2.5 bg-primary text-white rounded-[14px] sm:rounded-[18px] font-black hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 group shadow-lg shadow-primary/20";

const Navbar = () => {
  const wishlistCount = useWishlistStore((state) => state.wishlist.length);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");


  const searchInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>,) => {
    setSearchTerm(event.target.value);
  }

  const searchInputKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm.trim()){
      const trimmedSerchTerm = searchTerm.trim();
      const encodedSearchTerm = encodeURIComponent(trimmedSerchTerm);
      router.push(`/products?search=${encodedSearchTerm}`)
    }
  }
 
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      {/* Main container */}
      <div className="container-custom px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity - Logo */}
        <Logo techColor="text-primary" storeColor="text-foreground" />

        {/* Primary navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavItem
            href="/"
            title="Home"
            icon={<Home className={navIconClass} />}
          />
          <NavItem
            href="/products"
            title="Collection"
            icon={<LayoutGrid className={navIconClass} />}
          />
          <NavItem
            href="/products?sort=newest"
            title="New Arrivals"
            icon={<Zap className={navIconClass} />}
          />
          <NavItem
            href="/support"
            title="Support"
            icon={<LifeBuoy className={navIconClass} />}
          />
        </nav>

        {/* User actions: search, wishlist, cart, authentication */}
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
          <div className={searchContainerClass}>
            <Search className="w-4.5 h-4.5 text-gray-400 cursor-pointer hover:text-primary transition-colors" />
            <input
              aria-label="Search products"
              className="bg-transparent border-none focus:ring-0 text-sm font-medium w-32 xl:w-48 placeholder:text-gray-400"
              type="text"
              placeholder="Find anything..."
              value={searchTerm}
              onChange={searchInputChangeHandler}
              onKeyDown={searchInputKeyDownHandler}
            />
          </div>
      

          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className={`${actionButtonClass} hidden sm:block`}
            >
              <div className="relative">
                <Heart className="sm:w-5.5 sm:h-5.5 group-hover:scale-110 group-hover:text-red-500 transition-all" />

                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className={actionButtonClass}
            >
              <ShoppingCart className="sm:w-5.5 sm:h-5.5 group-hover:scale-110 transition-transform" />
            </Link>

            <Link href="/login" className={signInButtonClass}>
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                <User className="sm:w-4.5 sm:h-4.5" />
              </div>
              <span className="hidden sm:block text-xs sm:text-sm tracking-tight">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
