import { Zap } from "lucide-react"

const PaymentsAdvanceConfigBanner = () => {
  return (
    <div className="w-full items-center rounded-3xl flex justify-between gap-4 mt-6 mb-10 border border-gray-100 bg-gray-100 p-6 shadow-sm">
        <div className="flex h-14 w-14 mb-4 items-center justify-center rounded-[1.5rem] border border-blue-100 bg-white text-primary/60 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
            <Zap className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-black text-lg font-bold">
            Next-Gen Payment Smart Routing
          </h3>
          <p className="text-sm text-gray-400">Our platform automatically routes payments during peak traffic to ensure 99.9% uptime for your store.</p>
        </div>
        <button className="bg-white p-4 border rounded-xl hover:scale-110 transition-all text-primary">
          ADVANCED CONFIG
        </button>
    </div>
  )
}

export default PaymentsAdvanceConfigBanner