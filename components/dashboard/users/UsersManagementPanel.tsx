import {
  Mail,
  MoreHorizontal,
  Search,
  Shield,
  Trash2,
} from "lucide-react";

const UsersManagementPanel = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:p-6">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search users..."
            className="w-full rounded-xl border border-transparent bg-gray-50 py-3 pl-10 pr-4 text-sm font-medium text-[#1E293B] outline-none transition-all placeholder:text-gray-400 focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/10"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center justify-end">
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
            Sort By: Recent
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                User Profile
              </th>

              <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Digital ID
              </th>

              <th className="px-5 py-4 text-right text-[10px] font-black uppercase tracking-[0.15em] text-gray-400 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-50">
            {/* User 1 */}
            <tr className="group transition-colors hover:bg-gray-50/50">
              {/* User Profile */}
              <td className="px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-black uppercase text-primary">
                    A

                    <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-black tracking-tight text-[#1E293B]">
                      alireza test
                    </p>

                    <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-purple-100 bg-purple-50 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-purple-600">
                      <Shield className="h-2.5 w-2.5" />
                      SUPER-ADMIN
                    </div>
                  </div>
                </div>
              </td>

              {/* Digital ID */}
              <td className="px-5 py-5 sm:px-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3 w-3 shrink-0 text-gray-400" />

                    <span className="max-w-[220px] truncate text-xs font-bold text-gray-600">
                      user@example.com
                    </span>
                  </div>

                  <p className="ml-4 text-[9px] font-medium text-gray-400">
                    Jun 13, 2026
                  </p>
                </div>
              </td>

              {/* Actions */}
              <td className="px-5 py-5 text-right sm:px-6">
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-gray-100 bg-white px-3 py-2 text-[10px] font-black uppercase tracking-wider text-gray-500 shadow-sm transition-all hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    SUPER-ADMIN
                  </button>

                  <button
                    type="button"
                    aria-label="More actions"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-600"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    aria-label="Delete user"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-400 transition-all hover:bg-red-50 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>

            {/* User 2 */}
            <tr className="group transition-colors hover:bg-gray-50/50">
              {/* User Profile */}
              <td className="px-5 py-5 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-black uppercase text-primary">
                    A

                    <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-black tracking-tight text-[#1E293B]">
                      alireza
                    </p>

                    <div className="mt-1 inline-flex items-center gap-1 rounded-md border border-purple-100 bg-purple-50 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-purple-600">
                      <Shield className="h-2.5 w-2.5" />
                      SUPER-ADMIN
                    </div>
                  </div>
                </div>
              </td>

              {/* Digital ID */}
              <td className="px-5 py-5 sm:px-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3 w-3 shrink-0 text-gray-400" />

                    <span className="max-w-[220px] truncate text-xs font-bold text-gray-600">
                      alireza@example.com
                    </span>
                  </div>

                  <p className="ml-4 text-[9px] font-medium text-gray-400">
                    Jun 13, 2026
                  </p>
                </div>
              </td>

              {/* Actions */}
              <td className="px-5 py-5 text-right sm:px-6">
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-gray-100 bg-white px-3 py-2 text-[10px] font-black uppercase tracking-wider text-gray-500 shadow-sm transition-all hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                  >
                    SUPER-ADMIN
                  </button>

                  <button
                    type="button"
                    aria-label="More actions"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-400 transition-all hover:bg-gray-50 hover:text-gray-600"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    aria-label="Delete user"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-100 text-gray-400 transition-all hover:bg-red-50 hover:text-red-500"
                  >
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

export default UsersManagementPanel;