import { TrendingUp } from "lucide-react";
import { Order } from "@/app/services/orderService";
import { formatPrice } from "@/lib/formatPrice";

interface OverviewRevenueStreamProps {
  orders: Order[];
}

const OverviewRevenueStream = ({ orders }: OverviewRevenueStreamProps) => {
  const today = new Date();

  const dailyRevenue = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));

    const revenue = orders
      .filter((order) => {
        const orderDate = new Date(order.createdAt);

        return (
          orderDate.getFullYear() === date.getFullYear() &&
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getDate() === date.getDate()
        );
      })
      .reduce((total, order) => total + order.totalPrice, 0);

    return {
      date,
      revenue,
    };
  });

  const maxRevenue = Math.max(...dailyRevenue.map((item) => item.revenue), 1);

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-black tracking-tight text-foreground">
            Revenue Stream
          </h3>

          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Last 7 days
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary">
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-8 flex h-64 items-end gap-3">
        {dailyRevenue.map((item) => {
          const height =
            item.revenue === 0
              ? 4
              : Math.max((item.revenue / maxRevenue) * 100, 8);

          return (
            <div
              key={item.date.toISOString()}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div className="group relative flex h-full w-full items-end">
                <div
                  className="w-full rounded-t-xl bg-primary/70 transition-all duration-300 hover:bg-primary"
                  style={{ height: `${height}%` }}
                >
                  <span className="absolute -top-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 text-[9px] font-bold text-white group-hover:block">
                    {formatPrice(item.revenue)}
                  </span>
                </div>
              </div>

              <span className="text-[9px] font-bold uppercase text-gray-400">
                {item.date.toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewRevenueStream;
