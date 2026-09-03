// import { AlertTriangle, CheckCircle2 } from "lucide-react";
// import { Product } from "@/types/products/products";

// interface OverviewStockProtocolProps {
//   products: Product[];
// }

// const OverviewStockProtocol = ({
//   products,
// }: OverviewStockProtocolProps) => {
//   const lowStockProducts = [...products]
//     .sort((a, b) => a.stock - b.stock)
//     .slice(0, 2);

//   return (
//     <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
//       <div className="mb-6">
//         <h3 className="text-xl font-bold tracking-tight text-gray-900">
//           Stock Protocol
//         </h3>
//         <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
//           Inventory integrity
//         </p>
//       </div>

//       <div className="space-y-6">
//         {lowStockProducts.map((product) => {
//           const isLowStock = product.stock <= 5;

//           return (
//             <div key={product._id}>
//               <div className="mb-2 flex items-center justify-between">
//                 <div className="flex min-w-0 items-center gap-2">
//                   {isLowStock ? (
//                     <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
//                   ) : (
//                     <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
//                   )}

//                   <span className="truncate text-sm font-semibold text-gray-700">
//                     {product.name}
//                   </span>
//                 </div>

//                 <span
//                   className={`ml-2 shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold ${
//                     isLowStock
//                       ? "bg-rose-50 text-rose-500"
//                       : "bg-emerald-50 text-emerald-600"
//                   }`}
//                 >
//                   {product.stock} {product.stock === 1 ? "UNIT" : "UNITS"}
//                 </span>
//               </div>

//               <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
//                 <div
//                   className={`h-full rounded-full ${
//                     isLowStock ? "bg-rose-500" : "bg-emerald-500"
//                   }`}
//                   style={{
//                     width: `${Math.min(product.stock * 10, 100)}%`,
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <button className="mt-8 w-full rounded-xl border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-colors hover:bg-gray-50">
//         SYNC CATALOG INTEGRITY
//       </button>
//     </div>
//   );
// };

// export default OverviewStockProtocol;





















import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Product } from "@/types/products/products";

interface OverviewStockProtocolProps {
  products: Product[];
}

const OverviewStockProtocol = ({
  products,
}: OverviewStockProtocolProps) => {
  const productList = Array.isArray(products) ? products : [];

  const lowStockProducts = [...productList]
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 2);

  return (
    <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          Stock Protocol
        </h3>

        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Inventory integrity
        </p>
      </div>

      <div className="space-y-6">
        {lowStockProducts.map((product) => {
          const isLowStock = product.stock <= 5;

          return (
            <div key={product._id}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-2">
                  {isLowStock ? (
                    <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400" />
                  ) : (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  )}

                  <span className="truncate text-sm font-semibold text-gray-700">
                    {product.name}
                  </span>
                </div>

                <span
                  className={`ml-2 shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-bold ${
                    isLowStock
                      ? "bg-rose-50 text-rose-500"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {product.stock}{" "}
                  {product.stock === 1 ? "UNIT" : "UNITS"}
                </span>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${
                    isLowStock ? "bg-rose-500" : "bg-emerald-500"
                  }`}
                  style={{
                    width: `${Math.min(product.stock * 10, 100)}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-8 w-full rounded-xl border border-gray-100 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-colors hover:bg-gray-50">
        SYNC CATALOG INTEGRITY
      </button>
    </div>
  );
};

export default OverviewStockProtocol;