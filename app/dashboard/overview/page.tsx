import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { getOrders } from "@/app/services/orderService";
import { Order } from "@/types/order";
import { formatPrice } from "@/lib/formatPrice";
import OverviewHeader from "@/components/dashboard/overview/OverviewHeader";
import OverviewCard from "@/components/dashboard/overview/OverviewCard";
import OverviewRevenueStream from "@/components/dashboard/overview/OverviewRevenueStream";
import OverviewStockProtocol from "@/components/dashboard/overview/OverviewStockProtocol";
import OverviewStreamProtocol from "@/components/dashboard/overview/OverviewStreamProtocol";
import OverviewScalingProtocol from "@/components/dashboard/overview/OverviewScalingBanner";



const DashboardOverviewPage = async () => {
  const orders = await getOrders();
  const totalRevenue = orders.reduce(
   (total: number , order: Order) => total + order.totalPrice,
   0
  );
  return (
    <div className="mb-10">
      <OverviewHeader/>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <OverviewCard
          icon={Users}
          badgeValue="+12%"
          label="TOTAL USERS"
          value="0"
        />
        <OverviewCard
          icon={ShoppingBag}
          badgeValue="+3%"
          label="MARKET ORDERS"
          value={orders.length.toString()}
        />
        <OverviewCard
          icon={DollarSign}
          badgeValue="+18%"
          label="TOTAL REVENUE"
          value={formatPrice(totalRevenue)}
        />
        <OverviewCard
          icon={Package}
          badgeValue="OPTIMAL"
          label="ACTIVE NODES"
          value="0"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr] mt-8">
        <OverviewRevenueStream/>
        <OverviewStockProtocol/>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_2fr] mt-8">
        <OverviewStreamProtocol/>
        <OverviewScalingProtocol/>
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
