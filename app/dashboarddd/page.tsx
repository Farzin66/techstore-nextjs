import DashboardCategories from "@/components/dashboard/categories/DashboardCategories";
import DashboardOrders from "@/components/dashboard/orders/DashboardOrders";
import DashboardOverview from "@/components/dashboard/overview/DashboardOverview";
import DashboardPayments from "@/components/dashboard/payments/DashboardPayments";
import DashboardSettings from "@/components/dashboard/settings/DashboardSettings";


export default function DashboardPage() {
  return (
    <div>
      {/* <DashboardOverview/> */}
      {/* <DashboardPayments/> */}
      {/* <DashboardOrders/> */}
      {/* <DashboardSettings/> */}
      <DashboardCategories/>
    </div>
  );
}