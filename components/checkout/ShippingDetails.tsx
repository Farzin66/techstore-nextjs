"use client";

import { CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import { checkoutSchema } from "@/lib/checkout";
import useCartStore from "@/app/stores/cart-store";
import { useRouter } from "next/navigation";

const ShippingDetails = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    area: "",
    address: "",
    landmark: "",
    addressType: "Home",
    paymentMethod: "cash-on-delivery",
  });

  const cart = useCartStore((state) => state.cart);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleAddressTypeChange = (type: "Home" | "Office") => {
    setFormData((prev) => ({
      ...prev,
      addressType: type,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const result = checkoutSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];

        if (typeof field === "string") {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const items = cart.map((item) => ({
        product: item.product._id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      }));

      const totalPrice = cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );

      const orderData = {
        items,
        totalPrice,
        shippingInfo: {
          name: formData.fullName,
          phone: formData.phone,
          city: formData.city,
          area: formData.area,
          address: formData.address,
          landmark: formData.landmark,
          addressType: formData.addressType,
        },
        paymentMethod: "cod",
        paymentStatus: "Pending",
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create order");
      }

      router.push(`/checkout/success?orderId=${data._id}`);
    } catch (error) {
      console.error("Order creation failed:", error);

      setErrors({
        form: "Failed to place order. Please try again.",
      });

      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[28px] bg-white p-8">
      {/* Shipping Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Truck className="h-6 w-6" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Shipping Details
        </h3>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            FULL NAME
          </label>

          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Alexander Pierce"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />

          {errors.fullName && (
            <p className="text-xs font-medium text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            PHONE NUMBER
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="e.g. 01712345678"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />

          {errors.phone && (
            <p className="text-xs font-medium text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            CITY / REGION
          </label>

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Dhaka"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />

          {errors.city && (
            <p className="text-xs font-medium text-red-500">
              {errors.city}
            </p>
          )}
        </div>

        {/* Area */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            AREA / SUB-DISTRICT
          </label>

          <input
            name="area"
            value={formData.area}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Dhanmondi"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />

          {errors.area && (
            <p className="text-xs font-medium text-red-500">
              {errors.area}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            HOUSE / STREET / BUILDING
          </label>

          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            type="text"
            placeholder="e.g. House 12, Road 4, Sector 7"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />

          {errors.address && (
            <p className="text-xs font-medium text-red-500">
              {errors.address}
            </p>
          )}
        </div>

        {/* Landmark */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            LANDMARK
          </label>

          <input
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            type="text"
            placeholder="e.g. Beside City Hospital"
            className="h-12 w-full rounded-2xl border border-transparent bg-gray-50 px-5 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-300 focus:border-primary/20 focus:bg-white"
          />
        </div>

        {/* Address Type */}
        <div className="space-y-2">
          <label className="block text-[12px] font-bold uppercase tracking-[0.12em] text-gray-400">
            ADDRESS TYPE
          </label>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleAddressTypeChange("Home")}
              className={`h-12 flex-1 rounded-2xl text-sm font-bold transition-colors ${
                formData.addressType === "Home"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleAddressTypeChange("Office")}
              className={`h-12 flex-1 rounded-2xl text-sm font-bold transition-colors ${
                formData.addressType === "Office"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Office
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6 flex items-center justify-between md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <CreditCard className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Payment Method
            </h3>
          </div>

          <label className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-primary/30 bg-white px-5 py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-slate-900">
                Cash on Delivery
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                PAY UPON ARRIVAL
              </span>
            </div>

            <input
              type="radio"
              onChange={handleChange}
              name="paymentMethod"
              value="cash-on-delivery"
              checked={formData.paymentMethod === "cash-on-delivery"}
              className="h-4 w-4 accent-primary"
            />
          </label>
        </div>

        {/* Form Error */}
        {errors.form && (
          <p className="text-center text-sm font-medium text-red-500 md:col-span-2">
            {errors.form}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto mb-4 mt-4 w-full max-w-lg rounded-2xl bg-primary py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default ShippingDetails;

