import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, password, position } = await request.json();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    // User already exists
    return null;
    // throw new Error("Email already registered. Please use a different email.");
  } else {
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        position: position,
      },
      select: {
        id: true,
        email: true,
        name: true,
        position: true,
      },
    });

    return NextResponse.json({
      message: "Sussed!",
      redirect: "/",
      user: { ...user },
    });
  }
}
