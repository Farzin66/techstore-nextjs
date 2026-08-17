import DashboardHeader from "./DashboardHeader"
import DashboardOverviewCard from "./DashboardOverviewCard"

const DashboardOverview = () => {
  return (
    <div className="">
        <DashboardHeader/>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <DashboardOverviewCard/>
        </div>
    </div>
  )
}

export default DashboardOverview