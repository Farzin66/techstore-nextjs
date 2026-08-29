import AddCategoryForm from "@/components/dashboard/categories/AddCategoryForm";
import CategoriesBanner from "@/components/dashboard/categories/CategoriesBanner";
import SystemCategoriesSection from "@/components/dashboard/categories/SystemCategoriesSection";


const DashboardCategoriesPage = () => {
  return (
    <div className="mb-10 space-y-6">
        <CategoriesBanner/>
        <div className="grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8">
            <AddCategoryForm/>
            <SystemCategoriesSection/>
        </div>
    </div>
  )
}

export default DashboardCategoriesPage;