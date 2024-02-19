import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.user.findMany();
  console.log("data", data);
  return NextResponse.json(data);
}
