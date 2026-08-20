import { LucideIcon } from "lucide-react";

interface PaymentsCardProps{
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
}

const PaymentCard = ({icon, title, description, label}: PaymentsCardProps) => {
    const Icon = icon;

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-14 w-14 mb-4 items-center justify-center rounded-[1.5rem] border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]">
            <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-black text-lg font-bold">
            {title}
        </h3>
        <p className="text-sm text-gray-400 mb-8">{description}</p>
        
        <div className="flex justify-between mr-2 ml-2">
        <span>{label}</span>
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
        </div>
    </div>
  )
}

export default PaymentCard