import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
        const user = res.rows[0];
        const isPasswordValid = await compare(
          credentials?.password || "",
          user.password
        );

        if (isPasswordValid) {
          // Update lastlogged_in timestamp
          await sql`
      UPDATE users
      SET lastlogged_in = CURRENT_TIMESTAMP
      WHERE id = ${user.id}`;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            status: user.status,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
