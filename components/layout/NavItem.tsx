import Link from "next/link";
import type { ReactNode } from "react";

// Props for a reusable navigation item
interface NavItemProps {
  href: string;
  title: string;
  icon: ReactNode;
}
// Nav link styles
const navLinkClass =
  "text-sm font-bold flex items-center gap-1.5 transition-all relative group py-2 text-gray-500 hover:text-primary";

const NavItem = ({ href, icon, title }: NavItemProps) => {
  return (
    <Link href={href} aria-label={title} className={navLinkClass}>
      <span className="flex items-center">{icon}</span>
      <span className="leading-none">{title}</span>
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full"
      ></span>
    </Link>
  );
};

export default NavItem;
