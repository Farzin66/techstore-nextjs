import DashboardCategories from "@/components/dashboard/categories/DashboardCategories";
import DashboardOrders from "@/components/dashboard/orders/DashboardOrders";
import DashboardOverview from "@/components/dashboard/overview/DashboardOverview";
import DashboardPayments from "@/components/dashboard/payments/DashboardPayments";
import AddProduct from "@/components/dashboard/products/add-products/AddProduct";
import DashboardProducts from "@/components/dashboard/products/DashboardProducts";
import DashboardSettings from "@/components/dashboard/settings/DashboardSettings";
import DashboardUsers from "@/components/dashboard/users/DashboardUsers";


export default function DashboardPage() {
  return (
    <div>
      {/* <DashboardOverview/> */}
      {/* <DashboardPayments/> */}
      {/* <DashboardOrders/> */}
      {/* <DashboardSettings/> */}
      {/* <DashboardCategories/> */}
      {/* <DashboardUsers/> */}
      {/* <DashboardProducts/> */}
      <AddProduct/>
    </div>
  );
}