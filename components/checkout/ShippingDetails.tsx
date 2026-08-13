import { CreditCard, Truck } from "lucide-react";

const ShippingDetails = () => {
  return (
    <div className="bg-white rounded-[28px] p-8">
      {/* Shipping Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
          <Truck className="w-5 h-5" />
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          Shipping Details
        </h3>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            FULL NAME
          </label>

          <input
            name="fullName"
            type="text"
            placeholder="e.g. Alexander Pierce"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            PHONE NUMBER
          </label>

          <input
            name="phone"
            type="text"
            placeholder="e.g. 01712345678"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            CITY / REGION
          </label>

          <input
            name="city"
            type="text"
            placeholder="e.g. Dhaka"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* Area */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            AREA / SUB-DISTRICT
          </label>

          <input
            name="area"
            type="text"
            placeholder="e.g. Dhanmondi"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2 space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            HOUSE / STREET / BUILDING
          </label>

          <input
            name="address"
            type="text"
            placeholder="e.g. House 12, Road 4, Sector 7"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* Landmark */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            LANDMARK
          </label>

          <input
            name="landmark"
            type="text"
            placeholder="e.g. Beside City Hospital"
            className="w-full h-11 px-4 bg-gray-50 rounded-2xl border border-transparent outline-none text-xs text-gray-700 placeholder:text-gray-300 focus:bg-white focus:border-primary/20 transition-all"
          />
        </div>

        {/* Address Type */}
        <div className="space-y-2">
          <label className="block text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
            ADDRESS TYPE
          </label>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="h-11 flex-1 rounded-2xl bg-primary text-white text-xs font-bold shadow-sm hover:bg-primary transition-colors"
            >
              Home
            </button>

            <button
              type="button"
              className="h-11 flex-1 rounded-2xl bg-gray-50 text-gray-600 text-xs font-bold hover:bg-gray-100 transition-colors"
            >
              Office
            </button>
          </div>
        </div>

        {/* Payment Method Header */}
        <div className="md:col-span-2 flex items-center gap-4 mt-6 mb-1">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>

          <h3 className="text-lg font-bold text-slate-900">
            Payment Method
          </h3>
        </div>

        {/* Cash on Delivery */}
        <div className="md:col-span-2">
          <label className="w-full max-w-[280px] flex items-center justify-between p-4 rounded-2xl border-2 border-primary/30 bg-white cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-900">
                  Cash on Delivery
                </span>

                <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-primary">
                  PAY UPON ARRIVAL
                </span>
              </div>
            </div>

            <input
              type="radio"
              name="paymentMethod"
              value="cash-on-delivery"
              defaultChecked
              className="w-4 h-4 accent-primary"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetails;