import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { UserValues } from "@/app/(auth)/signup/Form";
import { signIn } from "next-auth/react";
export async function POST(request: Request) {
  const { name, email, password, position } = await request.json();
  const hashedPassword = await hash(password, 10);
  try {
    const res = await sql`
      INSERT INTO users (email, password, name, position)
      VALUES (${email}, ${hashedPassword}, ${name}, ${position})
      RETURNING *
    `;
    const user: Partial<UserValues> = res.rows[0];

    return NextResponse.json({
      message: "Sussed!",
      redirect: "/",
      user: { ...user },
    });
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ message: "Sussed!" });
}
