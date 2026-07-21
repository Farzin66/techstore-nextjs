import { getProducts } from "@/app/services/productService"
import FilterSidebar from "@/components/products/FilterSidebar"
import ProductsGrid from "@/components/products/ProductsGrid"
import ProductsHero from "@/components/products/ProductsHero"


interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

const page = async ({searchParams}: ProductsPageProps) => {
  const params = await searchParams;
  const search = params.search || "";
  const data = await getProducts(search);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-12 pb-24">
      <div className="container-custom">
        <ProductsHero/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            <FilterSidebar/>
            <ProductsGrid products={data.products}/>
        </div>
      </div>
    </div>
  )
}

export default page