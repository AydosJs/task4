import prisma from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextApiResponse) {
  const data = await prisma.user.findMany();
  console.log("data", data);
  return NextResponse.json(data);
}
