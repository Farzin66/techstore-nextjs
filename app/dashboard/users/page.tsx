import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { getUsers } from "@/app/services/userService";

import UsersBanner from "@/components/dashboard/users/UsersBanner";
import UsersManagementPanel from "@/components/dashboard/users/UsersManagementPanel";

const DashboardUsersPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "admin") {
    redirect("/dashboard");
  }

  const users = await getUsers();

  return (
    <div className="mb-10 space-y-6">
      <UsersBanner />
      <UsersManagementPanel users={users} />
    </div>
  );
};

export default DashboardUsersPage;