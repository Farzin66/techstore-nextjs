import connectDB from "@/lib/db";
import User from "@/models/User";

export interface DashboardUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin" | "manager" | "super-admin";
  image?: string;
  isVerified: boolean;
  createdAt: string;
}

export async function getUsers(): Promise<DashboardUser[]> {
  await connectDB();

  const users = await User.find({})
    .select("-password -resetPasswordOTP -resetPasswordExpires")
    .sort({ createdAt: -1 })
    .lean();

  return users.map((user) => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    image: user.image,
    isVerified: user.isVerified,
    createdAt: user.createdAt
      ? new Date(user.createdAt).toISOString()
      : new Date(0).toISOString(),
  }));
}