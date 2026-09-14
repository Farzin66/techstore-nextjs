import { ArrowLeft, Store } from "lucide-react";
import Link from "next/link";

const DashboardTopbar = () => {
  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 mt-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-xs font-medium text-primary">
          Manage your store from one place.
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-gray-100 px-3 py-2">
        <Store className="h-5 w-5" />
        <Link className="flex items-center gap-2 text-sm text-primary" href="/products">
          <ArrowLeft />
          Back to Store
        </Link>
      </div>
    </div>
  );
};

export default DashboardTopbar;
