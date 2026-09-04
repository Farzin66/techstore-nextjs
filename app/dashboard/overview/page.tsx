import { DollarSign, Package, ShoppingBag, Users } from "lucide-react";
import { getOrders } from "@/app/services/orderService";
import { formatPrice } from "@/lib/formatPrice";
import OverviewHeader from "@/components/dashboard/overview/OverviewHeader";
import OverviewCard from "@/components/dashboard/overview/OverviewCard";
import OverviewRevenueStream from "@/components/dashboard/overview/OverviewRevenueStream";
import OverviewStockProtocol from "@/components/dashboard/overview/OverviewStockProtocol";
import OverviewStreamProtocol from "@/components/dashboard/overview/OverviewStreamProtocol";
import OverviewScalingProtocol from "@/components/dashboard/overview/OverviewScalingBanner";
import { getUsers } from "@/app/services/userService";
import { getProducts } from "@/app/services/productService";

const DashboardOverviewPage = async () => {
  const orders = await getOrders();
  const users = await getUsers();
  const products = await getProducts(undefined, undefined, undefined, undefined, undefined, 1, 100);
  console.log("TOTAL:", products.totalProducts);
console.log("PRODUCTS:", products.products.length);
console.log(
  products.products.map((product) => ({
    name: product.name,
    stock: product.stock,
  }))
);
  const totalRevenue = orders.reduce(
    (total, order) => total + order.totalPrice,
    0,
  );
  return (
    <div className="mb-10">
      <OverviewHeader />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <OverviewCard
          icon={Users}
          badgeValue="+12%"
          label="TOTAL USERS"
          value={users.length.toString()}
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
          label="TOTAL PRODUCTS"
          value={products.totalProducts.toString()}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr] mt-8">
        <OverviewRevenueStream orders={orders} />
        <OverviewStockProtocol products={products.products} />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_2fr] mt-8">
        <OverviewStreamProtocol orders={orders} />
        <OverviewScalingProtocol totalProducts={products.totalProducts} />
      </div>
    </div>
  );
};

export default DashboardOverviewPage;
