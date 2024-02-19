import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, res: Response) {
  const { selectedId } = await request.json();

  const result = await prisma.user.deleteMany({
    where: {
      id: {
        in: selectedId,
      },
    },
  });

  return NextResponse.json({
    message: "User deleted successfully!",
    result,
  });
}
