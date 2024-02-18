import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, res: Response) {
  const { selectedId } = await request.json();
  console.log("selected", selectedId);
  try {
    const updatedUsers = await prisma.user.updateMany({
      where: { id: { in: selectedId } },
      data: { status: "blocked" },
    });

    return NextResponse.json({
      message: "Statuses updated successfully!",
      updatedUsers,
    });
  } catch (error) {
    // Handle errors gracefully, log for debugging, and return informative error messages
    // without exposing sensitive information
    console.error("Error updating user statuses:", error);
    return { success: false, message: "Error updating statuses" };
  }
}
