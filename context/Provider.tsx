"use client";
import { SessionProvider } from "next-auth/react";
type ProviderProps = {
  children: React.ReactNode; // Generic React.ReactNode for flexibility
  session?: any; // Optional session data, matching NextAuth's `Session`
};
export default function Provider({
  children,
  session,
}: Readonly<ProviderProps>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
