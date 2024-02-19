import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import prisma from "@/lib/prisma";
import { UserValues } from "@/types";
import toast from "react-hot-toast";

declare module "next-auth" {
  interface Session {
    user: UserValues;
  }
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const userPromise = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        const user = await userPromise;

        if (user && user.status === "blocked") {
          toast.error(`User is not allowed!`);
          return null;
        }

        if (user && user.status !== "blocked") {
          const isPasswordValid = await compare(
            credentials?.password ?? "",
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          await prisma.user.update({
            where: { email: user.email },
            data: { lastLogin: new Date() },
          });

          return {
            ...user,
            id: String(user.id),
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
