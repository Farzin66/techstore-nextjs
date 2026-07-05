import Link from "next/link"
import { Store } from "lucide-react";

const Logo = () => {
  return (
      <Link href="/" className="text-xl sm:text-2xl font-black text-primary flex items-center gap-1.5 sm:gap-2 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-[14px] sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
            <Store className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
          </div>
          <span className="text-lg sm:text-2xl tracking-tighter">
            Tech
            <span className="text-foreground">Store</span>
          </span>
        </Link>
  )
}

export default Logo