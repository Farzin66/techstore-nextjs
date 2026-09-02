export interface OrderItem {
product: string;
name: string;
quantity: number;
price: number;
}

export interface Order {
_id: string;
items: OrderItem[];
totalPrice: number;
paymentMethod: string;
paymentStatus: string;
status: string;
createdAt: string;
}

export async function getOrders(): Promise<Order[]> {
const response = await fetch("http://localhost:3000/api/orders", {
cache: "no-store",
});

if (!response.ok) {
throw new Error(
`Error fetching orders: ${response.status} ${response.statusText}`
);
}

return response.json();
}
