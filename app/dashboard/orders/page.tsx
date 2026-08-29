import OrderManagementSection from "@/components/dashboard/orders/OrderManagementSection";
import OrdersBanner from "@/components/dashboard/orders/OrdersBanner";




const DashboardOrdersPage = () => {
  return (
    <div className="mx-auto mb-10 w-full max-w-7xl space-y-6 px-6">
        <OrdersBanner/>
        <OrderManagementSection/>
    </div>
  )
}

export default DashboardOrdersPage;