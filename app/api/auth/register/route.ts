import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    console.log({ name, email, password });
    const hashedPassword = await hash(password, 10);

    const res = await sql`
      INSERT INTO users (email, password, name)
      VALUES (${email}, ${hashedPassword}, ${name})
    `;
  } catch (error) {
    console.error(error);
  }
  return NextResponse.json({ message: "Sussed!" });
}
