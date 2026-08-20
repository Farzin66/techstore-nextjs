import { CircleCheck } from "lucide-react"

const PaymentsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 mt-8 gap-6 md:gap-0">
      <div>
        <h2 className="text-2xl font-bold text-[#1E293B] uppercase tracking-wide">
          Payment Gateways
        </h2>
        <span className="text-gray-400 text-xs mt-1"> Toggle and configure secure payment options for your store.</span>
      </div>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 text-primary/60 bg-primary/10 rounded-full text-[12px] font-black uppercase tracking-[0.2em] border border-primary/10 shadow-sm whitespace-nowrap">
        <CircleCheck className="w-5 h-5"/>
        <span>SECURE 256-BIT SSL</span>
      </div>
    </div>
  )
}

export default PaymentsHeader