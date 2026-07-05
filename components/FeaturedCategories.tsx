import { categories } from "@/data/categories"

const FeaturedCategories = () => {
  return (
    <div className='mb-12'>
        <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-[#1E293B]">Featured Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {
                categories.map(({name, icon: Icon})=>{
                    return(   
                      <button key={name} className="group p-4 rounded-lg transition-all border flex flex-col items-center gap-3 bg-white text-gray-400 border-gray-100 hover:border-primary/50 hover:shadow-sm">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center transition-colors overflow-hidden bg-gray-50 text-gray-500 group-hover:text-primary">
                            <Icon className="w-6 h-6"/>
                        </div>
                        <span className="text-xs font-bold text-slate-700 text-center">{name}</span>
                      </button>)
               })
            }
        </div>
    </div>
  )
}

export default FeaturedCategories