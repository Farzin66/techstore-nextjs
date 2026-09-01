import {
  Filter,
  Circle,
  Copy,
  Calendar,
  Eye,
  ChevronsDown,
  Package,
} from "lucide-react";

interface OrderItem {
  product: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  items: OrderItem[];
  totalPrice: number;
  paymentMethod: string;
  paymentStatus: string;
  status: string;
  createdAt: string;
}

interface OrderManagementSectionProps {
  orders: Order[];
}

const OrderRow = ({ order }: { order: Order }) => {
  const formattedDate = new Date(order.createdAt).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  const itemCount = order.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="group flex items-center justify-between rounded-lg bg-white px-6 py-3 shadow-sm transition-colors hover:bg-gray-50">
      {/* Order ID */}
      <div className="flex w-1/4 items-center gap-2">
        <Copy
          size={14}
          strokeWidth={1.5}
          className="text-gray-400"
        />

        <div>
          <div className="font-medium text-gray-700">
            #{order._id.slice(-8).toUpperCase()}
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={12} strokeWidth={1.5} />
            {formattedDate}
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="flex w-1/4 items-center gap-2 text-sm font-medium text-gray-700">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-[1rem] border border-blue-100 bg-blue-100 text-blue-600 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
          <Package />
        </div>

        <div>
          <p className="max-w-[150px] truncate">
            {order.items[0]?.name || "No items"}
          </p>

          {order.items.length > 1 && (
            <p className="text-xs text-gray-400">
              +{order.items.length - 1} more
            </p>
          )}

          <p className="text-xs text-gray-400">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </div>
      </div>

      {/* Price & Payment */}
      <div className="w-1/4">
        <div className="font-bold text-gray-800">
          ₺{order.totalPrice.toLocaleString()}
        </div>

        <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
          <Circle
            size={10}
            fill="currentColor"
            strokeWidth={0}
          />

          {order.paymentMethod} + {order.paymentStatus}
        </div>
      </div>

      {/* Status */}
      <div className="flex w-1/4 items-center justify-end gap-3">
        <span
          className={`inline-flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-bold capitalize ${
            order.status === "Delivered"
              ? "bg-green-50 text-green-600"
              : order.status === "Cancelled"
                ? "bg-red-50 text-red-500"
                : order.status === "Processing"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-orange-50 text-orange-600"
          }`}
        >
          <ChevronsDown size={12} strokeWidth={1.5} />

          {order.status}
        </span>

        <button
          type="button"
          aria-label="View order"
          className="text-gray-400 transition-colors hover:text-primary"
        >
          <Eye size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
};

const OrderManagementSection = ({
  orders,
}: OrderManagementSectionProps) => {
  return (
    <div className="w-full space-y-6 p-6">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Toolbar */}
        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            <Filter
              size={16}
              strokeWidth={1.5}
              className="text-gray-500"
            />

            All Statuses

            <ChevronsDown
              size={14}
              strokeWidth={1.5}
              className="text-gray-400"
            />
          </button>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Active Filters:</span>

            <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
              Broad Search
            </span>
          </div>
        </div>

        {/* Result Count */}
        <div className="text-sm font-medium text-gray-500">
          {orders.length}{" "}
          {orders.length === 1 ? "RESULT" : "RESULTS"} FOUND
        </div>

        {/* Orders */}
        <div className="mt-4 space-y-2">
          {orders.length === 0 ? (
            <div className="py-12 text-center text-sm font-medium text-gray-400">
              No orders found.
            </div>
          ) : (
            orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagementSection;