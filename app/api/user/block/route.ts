import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, res: Response) {
  const { selectedId } = await request.json();
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
    console.error("Error updating user statuses:", error);
    return NextResponse.json({
      success: false,
      message: "Error updating statuses",
    });
  }
}
