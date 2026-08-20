export interface Order {
  _id: string;
  totalPrice: number;
  status:
    | "Pending"
    | "Awaiting Payment"
    | "Processing"
    | "Shipped"
    | "Delivered"
    | "Cancelled"
    | "On Hold";
}