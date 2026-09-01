import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      );
    }

    await connectDB();

    const users = await User.find({})
      .select("-password -resetPasswordOTP -resetPasswordExpires")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(users);
  } catch (error) {
    console.error("GET /api/users error:", error);

    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}