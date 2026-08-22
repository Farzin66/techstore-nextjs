import { LucideIcon } from "lucide-react";

interface PaymentsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: "CONNECTED" | "INACTIVE";
}

const PaymentsCard = ({
  icon,
  title,
  description,
  status,
}: PaymentsCardProps) => {
  const Icon = icon;
  const isConnected = status === "CONNECTED";

  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-14 w-14 mb-4 items-center justify-center rounded-[1.5rem] border  shadow-sm transition-transform duration-500 group-hover:rotate-[10deg]    
            ${
              isConnected
                ? "border-primary-100 bg-primary text-white"
                : "border-blue-100 bg-blue-50 text-blue-600"
            }`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-black text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-400 mb-8">{description}</p>

      <div className="flex justify-between mr-2 ml-2">
        <span className={`${isConnected ? "text-primary" : "text-gray-400"}`}>
          {status}
        </span>
       <label className="group inline-flex cursor-pointer items-center">
  <input
    type="checkbox"
    className="sr-only"
    checked={isConnected}
    readOnly
  />

  <div
    className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors ${
      isConnected ? "bg-primary" : "bg-gray-200"
    }`}
  >
    <div
      className={`h-4 w-4 rounded-full bg-white transition-transform ${
        isConnected ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </div>
</label>
      </div>
    </div>
  );
};

export default PaymentsCard;
