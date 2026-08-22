import DashboardOrders from "@/components/dashboard/orders/DashboardOrders";
import DashboardOverview from "@/components/dashboard/overview/DashboardOverview";
import DashboardPayments from "@/components/dashboard/payments/DashboardPayments";

export default function DashboardPage() {
  return (
    <div>
      {/* <DashboardOverview/> */}
      {/* <DashboardPayments/> */}
      <DashboardOrders/>
    </div>
  );
}