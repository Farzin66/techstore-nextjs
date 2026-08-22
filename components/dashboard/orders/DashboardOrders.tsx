import OrdersBanner from "./OrdersBanner"
import OrdersPanel from "./OrdersPanel"



const DashboardOrders = () => {
  return (
    <div className="mb-10 w-full max-w-6xl mx-aut">
        <OrdersBanner/>
        <OrdersPanel/>
    </div>
  )
}

export default DashboardOrders