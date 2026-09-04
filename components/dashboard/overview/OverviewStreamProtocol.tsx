import { ShoppingBag } from "lucide-react";
import { Order } from "@/app/services/orderService";
import { formatPrice } from "@/lib/formatPrice";

interface OverviewStreamProtocolProps {
  orders: Order[];
}

const OverviewStreamProtocol = ({
  orders,
}: OverviewStreamProtocolProps) => {
  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime(),
    )
    .slice(0, 2);

  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-black tracking-tight text-gray-900">
          Stream Protocol
        </h3>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-violet-600">
          Recent Orders
        </span>
      </div>

      <div className="space-y-6">
        {recentOrders.map((order) => (
          <div key={order._id} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
              <ShoppingBag className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-gray-900">
                Order #{order._id.slice(-8).toUpperCase()}
              </p>

              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {order.items.length}{" "}
                {order.items.length === 1 ? "PRODUCT" : "PRODUCTS"} ·{" "}
                {formatPrice(order.totalPrice)}
              </p>
            </div>
          </div>
        ))}

        {recentOrders.length === 0 && (
          <p className="py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-300">
            No orders found
          </p>
        )}
      </div>
    </div>
  );
};

export default OverviewStreamProtocol;