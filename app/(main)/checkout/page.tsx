import OrderSummary from "@/components/checkout/OrderSummary";
import ShippingDetails from "@/components/checkout/ShippingDetails";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 sm:py-12">
      <div className="container-custom">

        {/* Checkout Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/cart"
            className="w-11 h-11 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-primary transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Checkout
            </h1>

            <p className="text-sm text-gray-400 font-medium mt-1">
              Complete your order details below.
            </p>
          </div>
        </div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Shipping Details */}
          <ShippingDetails />

          {/* Order Summary */}
          <OrderSummary/>
        </div>
      </div>
    </main>
  );
};

export default page;