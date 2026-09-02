"use client";

import { Order } from "@/app/services/orderService";
import {
  Filter,
  Circle,
  Copy,
  Calendar,
  Eye,
  ChevronsDown,
  Package,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";



interface OrderManagementSectionProps {
  orders: Order[];
}

const ORDER_STATUSES = [
  "All",
  "Pending",
  "Awaiting Payment",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
  "On Hold",
] as const;

const OrderRow = ({ order }: { order: Order }) => {
  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const itemCount = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const firstItem = order.items[0];

  return (
    <div className="group flex items-center justify-between rounded-lg bg-white px-6 py-3 shadow-sm transition-colors hover:bg-gray-50">
      {/* Order ID */}{" "}
      <div className="flex w-1/4 items-center gap-2">
        {" "}
        <Copy size={14} strokeWidth={1.5} className="text-gray-400" />
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
        <div className="mb-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-blue-100 bg-blue-100 text-blue-600 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
          <Package size={20} />
        </div>

        <div className="min-w-0">
          <p className="max-w-[150px] truncate">
            {firstItem?.name || "No items"}
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
          <Circle size={10} fill="currentColor" strokeWidth={0} />
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
                  : order.status === "Shipped"
                    ? "bg-purple-50 text-purple-600"
                    : order.status === "Awaiting Payment"
                      ? "bg-yellow-50 text-yellow-600"
                      : order.status === "On Hold"
                        ? "bg-gray-100 text-gray-600"
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

const OrderManagementSection = ({ orders }: OrderManagementSectionProps) => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredOrders = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return orders.filter((order) => {
      const matchesSearch =
        searchValue === "" ||
        order._id.toLowerCase().includes(searchValue) ||
        order.items.some((item) =>
          item.name.toLowerCase().includes(searchValue),
        );

      const matchesStatus =
        selectedStatus === "All" || order.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, selectedStatus]);

  return (
    <div className="w-full space-y-6 p-6">
      {" "}
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Toolbar */}{" "}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {" "}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}{" "}
            <div className="relative">
              {" "}
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search orders..."
                className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4 text-sm text-gray-600 outline-none transition-colors placeholder:text-gray-400 focus:border-primary sm:w-64"
              />
            </div>
            {/* Status Filter */}
            <div className="relative">
              <Filter
                size={16}
                strokeWidth={1.5}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
                className="appearance-none rounded-full border border-gray-200 bg-white py-2 pl-9 pr-10 text-sm font-medium text-gray-600 outline-none transition-colors focus:border-primary"
              >
                {ORDER_STATUSES.map((status) => (
                  <option key={status} value={status}>
                    {status === "All" ? "All Statuses" : status}
                  </option>
                ))}
              </select>

              <ChevronsDown
                size={14}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
          {/* Active Filters */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Active Filters:</span>

            {search || selectedStatus !== "All" ? (
              <div className="flex flex-wrap gap-2">
                {search && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                    Search: {search}
                  </span>
                )}

                {selectedStatus !== "All" && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                    {selectedStatus}
                  </span>
                )}
              </div>
            ) : (
              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-700">
                None
              </span>
            )}
          </div>
        </div>
        {/* Result Count */}
        <div className="text-sm font-medium text-gray-500">
          {filteredOrders.length}{" "}
          {filteredOrders.length === 1 ? "RESULT" : "RESULTS"} FOUND
        </div>
        {/* Orders */}
        <div className="mt-4 space-y-2">
          {filteredOrders.length === 0 ? (
            <div className="py-12 text-center text-sm font-medium text-gray-400">
              No orders found.
            </div>
          ) : (
            filteredOrders.map((order) => (
              <OrderRow key={order._id} order={order} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagementSection;
