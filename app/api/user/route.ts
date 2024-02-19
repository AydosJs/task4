import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json({
      message: "Sussed!",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
      },
      {
        status: 500,
      }
    );
  }
}
