import UsersBanner from "./UsersBanner"
import UsersManagementPanel from "./UsersManagementPanel"

const DashboardUsers = () => {
  return (
    <div className="mb-10 space-y-6">
        <UsersBanner/>
        <UsersManagementPanel/>
    </div>
  )
}

export default DashboardUsers