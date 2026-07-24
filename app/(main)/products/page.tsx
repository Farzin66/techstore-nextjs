import { getProducts } from "@/app/services/productService"
import FilterSidebar from "@/components/products/FilterSidebar"
import ProductsGrid from "@/components/products/ProductsGrid"
import ProductsHero from "@/components/products/ProductsHero"


interface ProductsPageProps {
  searchParams: Promise<{
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    view?: "list" | "grid";
    sort?: "newest" | "price-asc" | "price-desc";
    page?: string;
  }>;
}

const page = async ({searchParams}: ProductsPageProps) => {
  const params = await searchParams;
  const search = params.search || "";
  const category = params.category || "";
  const minPrice = params.minPrice || "";
  const maxPrice = params.maxPrice || "";
  const view = params.view || "grid";
  const sort = params.sort || "newest";
  const page = Number(params.page || "1");

  console.log(params);
  console.log(page);
  const data = await getProducts(search, category, minPrice, maxPrice, sort, page);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-12 pb-24">
      <div className="container-custom">
        <ProductsHero/>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            <FilterSidebar/>
            <ProductsGrid products={data.products} view={view} currentPage={data.currentPage} totalPages={data.totalPages}/>
        </div>
      </div>
    </div>
  )
}

export default page