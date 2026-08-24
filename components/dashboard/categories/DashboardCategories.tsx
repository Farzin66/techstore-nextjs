import AddCategoryForm from "./AddCategoryForm"
import CategoriesBanner from "./CategoriesBanner"
import SystemCategoriesSection from "./SystemCategoriesSection"

const DashboardCategories = () => {
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

export default DashboardCategories