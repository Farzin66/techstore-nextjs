import { Search, Eye, Edit2, Trash2, Filter } from "lucide-react";

const ProductsManagementPanel = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm min-h-[500px]">
      {/* Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:p-6">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search catalog..."
            className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-500 transition-all hover:bg-gray-50">
            <Filter className="h-3.5 w-3.5" />
            FILTER
          </button>
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 ml-2">
            1 Items
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Product Info
              </th>
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Category
              </th>
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Value
              </th>
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Stock
              </th>
              <th className="px-5 py-4 text-right text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            <tr className="group transition-colors hover:bg-gray-50/50">
              {/* Product Info */}
              <td className="px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gray-100" />
                  <div>
                    <p className="text-sm font-black text-[#1E293B]">
                      Iphone 17 pro
                    </p>
                    <p className="text-[10px] font-medium text-gray-400">
                      SKU-7C66EA
                    </p>
                  </div>
                </div>
              </td>

              {/* Category */}
              <td className="px-5 py-5 sm:px-6">
                <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-bold text-green-600">
                  MOBILE-ELECTRONICS
                </span>
              </td>

              {/* Value */}
              <td className="px-5 py-5 sm:px-6 text-sm font-black text-gray-900">
                ৳ 1,000
              </td>

              {/* Stock */}
              <td className="px-5 py-5 sm:px-6">
                <div className="w-20">
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span className="text-gray-500">10</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-100">
                    <div className="h-1.5 w-[40%] rounded-full bg-orange-500" />
                  </div>
                </div>
              </td>

              {/* Actions */}
              <td className="px-5 py-5 text-right sm:px-6">
                <div className="flex items-center justify-end gap-3 text-gray-400">
                  <button className="hover:text-primary">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="hover:text-primary">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button className="hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsManagementPanel;
