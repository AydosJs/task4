import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { UserValues } from "@/app/(auth)/signup/Form";
export async function POST(request: Request) {
  const { name, email, password, position } = await request.json();
  const hashedPassword = await hash(password, 10);
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
}
