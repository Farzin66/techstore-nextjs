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
  LogOut,
} from "lucide-react";
import Logo from "./Logo";
import useWishlistStore from "@/app/stores/wishlist-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useCartStore from "@/app/stores/cart-store";
import { useSession, signOut } from "next-auth/react";

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

  const { data: session, status } = useSession();

  const cartCount = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),
  );

  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
  };

  const searchInputKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter" && searchTerm.trim()) {
      const trimmedSerchTerm = searchTerm.trim();
      const encodedSearchTerm = encodeURIComponent(trimmedSerchTerm);

      router.push(`/products?search=${encodedSearchTerm}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
      {/* Main container */}
      <div className="container-custom flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6">
        {/* Brand identity - Logo */}
        <Logo techColor="text-primary" storeColor="text-foreground" />

        {/* Primary navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
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

        {/* User actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-5">
          {/* Search */}
          <div className={searchContainerClass}>
            <Search className="h-4.5 w-4.5 cursor-pointer text-gray-400 transition-colors hover:text-primary" />

            <input
              aria-label="Search products"
              className="w-32 border-none bg-transparent text-sm font-medium placeholder:text-gray-400 focus:ring-0 xl:w-48"
              type="text"
              placeholder="Find anything..."
              value={searchTerm}
              onChange={searchInputChangeHandler}
              onKeyDown={searchInputKeyDownHandler}
            />
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className={`${actionButtonClass} hidden sm:block`}
            >
              <div className="relative">
                <Heart className="transition-all group-hover:scale-110 group-hover:text-red-500 sm:h-5.5 sm:w-5.5" />

                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className={actionButtonClass}
            >
              <div className="relative">
                <ShoppingCart className="transition-transform group-hover:scale-110 sm:h-5.5 sm:w-5.5" />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Authentication */}
            {status === "loading" ? (
              <div className={signInButtonClass}>
                <span className="text-xs sm:text-sm">Loading...</span>
              </div>
            ) : session ? (
              <div ref={userMenuRef} className="relative">
                {/* User Button */}
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  aria-label="Open user menu"
                  aria-expanded={isUserMenuOpen}
                  className="flex items-center gap-2 rounded-2xl p-1.5 transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>

                  <div className="hidden text-left sm:block">
                    <p className="text-xs font-bold leading-tight text-slate-900">
                      {session.user?.name}
                    </p>

                    <p className="text-[9px] font-bold uppercase tracking-widest text-primary">
                      User
                    </p>
                  </div>
                </button>

                {/* User Dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full z-50 mt-3 w-72 rounded-[28px] border border-gray-100 bg-white p-5 shadow-2xl shadow-slate-900/10">
                    {/* User Info */}
                    <div className="rounded-2xl bg-gray-50 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                          <User className="h-6 w-6" />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-black text-slate-900">
                            {session.user?.name}
                          </p>

                          <p className="truncate text-[10px] font-medium text-gray-400">
                            {session.user?.email}
                          </p>
                        </div>
                      </div>

                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        User
                      </span>
                    </div>

                    {/* Menu Items */}
                    <div className="mt-3 space-y-1">
                      {/* Dashboard */}
                      <Link
                        href="/dashboard"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-4 rounded-2xl px-3 py-3.5 text-sm font-bold text-slate-600 transition-colors hover:bg-gray-50 hover:text-primary"
                      >
                        <LayoutGrid className="h-5 w-5" />
                        <span>Dashboard</span>
                      </Link>

                      {/* Logout */}
                      <button
                        type="button"
                        onClick={() => signOut()}
                        className="flex w-full items-center gap-4 rounded-2xl px-3 py-3.5 text-sm font-bold text-red-400 transition-colors hover:bg-red-50 hover:text-red-500"
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Sign In */
              <Link href="/login" className={signInButtonClass}>
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 sm:h-8 sm:w-8 sm:rounded-xl">
                  <User className="sm:h-4.5 sm:w-4.5" />
                </div>

                <span className="hidden text-xs tracking-tight sm:block sm:text-sm">
                  Sign In
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;