import { CreditCard, CheckCircle2, X } from "lucide-react";

const SettingsPaymentGateways = () => {
  const gateways = [
    { name: "Cash on Delivery", active: true },
    { name: "bKash", active: false },
    { name: "Nagad", active: false },
    { name: "Rocket", active: false },
    { name: "SSLCommerz", active: false },
    { name: "Stripe", active: false },
  ];

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <CreditCard className="h-5 w-5" />
          <h2 className="font-extrabold">Payment Gateways</h2>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          SELECT ACTIVE METHODS
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gateways.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
              item.active
                ? "border-primary bg-primary/5 text-primary"
                : "border-gray-100 bg-gray-50 text-gray-400"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center border border-gray-100 font-bold text-xs">
                {item.name.charAt(0)}
              </div>
              <span className="text-sm font-bold">{item.name}</span>
            </div>
            {item.active ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5 opacity-50" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-400 uppercase">BKASH NUMBER</label>
          <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold placeholder-black" placeholder="017XXXXXXX" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-gray-400 uppercase">NAGAD NUMBER</label>
          <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold placeholder-black" placeholder="017XXXXXXX" />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label className="text-xs font-bold text-gray-400 uppercase">ROCKET NUMBER</label>
        <input className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold placeholder-black" placeholder="017XXXXXXX" />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label className="text-xs font-bold text-gray-400 uppercase">PAYMENT INSTRUCTIONS</label>
        <textarea
          rows={3}
          className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-6 py-4 text-sm font-bold placeholder-black"
          placeholder="Please make manual payment and provide transaction ID."
        />
      </div>
    </div>
  );
};

export default SettingsPaymentGateways;
