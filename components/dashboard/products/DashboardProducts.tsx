import ProductsBanner from "./ProductsBanner"
import ProductsManagementPanel from "./ProductsManagementPanel"

const DashboardProducts = () => {
  return (
    <div className="mb-10 space-y-6">
      <ProductsBanner/>
      <ProductsManagementPanel/>
    </div>
  )
}

export default DashboardProducts