import ProductsBanner from "@/components/dashboard/products/ProductsBanner";
import ProductsManagementPanel from "@/components/dashboard/products/ProductsManagementPanel";


const DashboardProductsPage = () => {
  return (
    <div className="mb-10 space-y-6">
      <ProductsBanner/>
      <ProductsManagementPanel/>
    </div>
  )
}

export default DashboardProductsPage;