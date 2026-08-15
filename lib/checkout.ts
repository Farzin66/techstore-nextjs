import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().min(11, "Phone number is required"),
  city: z.string().min(2, "City is required"),
  area: z.string().min(2, "Area is required"),
  address: z.string().min(5, "Address is required"),
  landmark: z.string().optional(),
  addressType: z.enum(["Home", "Office"]),
  paymentMethod: z.literal("cash-on-delivery"),
});