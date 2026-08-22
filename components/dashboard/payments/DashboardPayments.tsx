import { CreditCard, ShieldCheck, Truck } from "lucide-react"
import PaymentsHeader from "./PaymentsHeader"
import PaymentsAdvanceConfigBanner from "./PaymentsAdvanceConfigBanner"
import PaymentsCard from "./PaymentsCard"

const DashboardPayments = () => {
  return (
    <div className="mb-10">
        <PaymentsHeader/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <PaymentsCard
                icon= {Truck}
                title= "Cash on Delivery"
                description="Allow customers to pay upon receipt of goods."
                status= "CONNECTED"
            />
             <PaymentsCard
                icon= {CreditCard}
                title= "Stripe Checkout"
                description="Secure credit and debit card payments globally."
                status= "INACTIVE"
            />
             <PaymentsCard
                icon= {ShieldCheck}
                title= "SSLCommerz"
                description="Popular local payment gateway for Bangladesh."
                status= "INACTIVE"

            />
        </div>
        <PaymentsAdvanceConfigBanner/>
    </div>
  )
}

export default DashboardPayments