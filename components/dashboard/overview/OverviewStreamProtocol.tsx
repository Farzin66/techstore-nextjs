import { ShoppingBag } from "lucide-react";

const OverviewStreamProtocol = () => {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-black tracking-tight text-gray-900">Stream Protocol</h3>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-600">
          Live Feed
        </span>
      </div>

      <div className="space-y-6">
        {[
          { id: "513C4512", user: "ALIREZA TEST", amount: "610" },
          { id: "6F7C66EB", user: "ALIREZA", amount: "1,010" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Order #{item.id}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {item.user} · ₺{item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewStreamProtocol;
