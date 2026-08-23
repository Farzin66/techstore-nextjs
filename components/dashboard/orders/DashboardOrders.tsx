import OrdersBanner from "./OrdersBanner"
import OrdersPanel from "./OrdersPanel"



const DashboardOrders = () => {
  return (
    <div className="mx-auto mb-10 w-full max-w-7xl space-y-6 px-6">
        <OrdersBanner/>
        <OrdersPanel/>
    </div>
  )
}

export default DashboardOrders