// import ShippingDetails from "@/components/checkout/ShippingDetails";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main className="bg-[#F8FAFC] min-h-screen py-16">
//           <div className="container-custom">
//             {/* Checkout Header */}
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
//               <div className="flex items-center gap-4">
//                 <Link href="/products" className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all text-gray-500" >
//                   <ArrowLeft className="w-[20px] h-[20px]" />
//                 </Link>
//                 <div>
//                   <h1 className="text-4xl font-black text-foreground tracking-tight">
//                     Checkout
//                   </h1>
//                   <p className="text-gray-500 mt-1 font-medium italic">
//                     Complete your order details below.
//                   </p>
//                 </div>
//               </div>
//               <ShippingDetails/>
//             </div>
//         </div>
//     </main>
//   )
// }

// export default page



// import ShippingDetails from "@/components/checkout/ShippingDetails";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";

// const page = () => {
//   return (
//     <main className="bg-[#F8FAFC] min-h-screen py-16">
//       <div className="container-custom">

//         {/* Checkout Header */}
//         <div className="flex items-center gap-4 mb-10">
//           <Link
//             href="/products"
//             className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all text-gray-500"
//           >
//             <ArrowLeft className="w-[20px] h-[20px]" />
//           </Link>

//           <div>
//             <h1 className="text-4xl font-black text-foreground tracking-tight">
//               Checkout
//             </h1>

//             <p className="text-gray-500 mt-1 font-medium italic">
//               Complete your order details below.
//             </p>
//           </div>
//         </div>

//         {/* Shipping Details */}
//         <ShippingDetails />

//       </div>
//     </main>
//   );
// };

// export default page;







import ShippingDetails from "@/components/checkout/ShippingDetails";
import { ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 sm:py-12">
      <div className="container-custom">

        {/* Checkout Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/cart"
            className="w-10 h-10 bg-white rounded-xl border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-primary transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Checkout
            </h1>

            <p className="text-[10px] text-gray-400 font-medium mt-1">
              Complete your order details below.
            </p>
          </div>
        </div>

        {/* Checkout Content */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 items-start">

          {/* Shipping Details */}
          <ShippingDetails />

          {/* Order Summary */}
          <aside className="bg-white rounded-[28px] border border-gray-100 p-7 sticky top-28">

            <h2 className="text-xl font-black text-slate-900 tracking-tight mb-7">
              Order Summary
            </h2>

            <div className="h-px bg-gray-100 mb-6" />

            {/* Product */}
            <div className="flex items-center justify-between gap-4 mb-6">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg" />
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate-900">
                    iPhone 17 pro
                  </h3>

                  <p className="text-[8px] text-gray-400 uppercase tracking-wider mt-1">
                    QUANTITY: 2
                  </p>
                </div>

              </div>

              <span className="text-xs font-bold text-slate-900">
                $0.00
              </span>

            </div>

            <div className="h-px bg-gray-100 mb-6" />

            {/* Price Details */}
            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Subtotal
                </span>

                <span className="text-xs font-bold text-slate-900">
                  $0.00
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Shipping
                </span>

                <span className="text-xs font-bold text-slate-900">
                  $10.00
                </span>
              </div>

            </div>

            <div className="h-px bg-gray-100 my-6" />

            {/* Total */}
            <div>
              <span className="block text-[8px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">
                TOTAL PAYABLE
              </span>

              <span className="text-2xl font-black text-primary">
                $10.00
              </span>
            </div>

            <div className="h-px bg-gray-100 my-6" />

            {/* Trust Information */}
            <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-wider text-gray-400">

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-primary" />
                <span>Encrypted</span>
              </div>

              <div className="flex items-center gap-1.5">
                <span>Reliable Delivery</span>
                <Truck className="w-3 h-3 text-primary" />
              </div>

            </div>

          </aside>
        </div>
      </div>
    </main>
  );
};

export default page;